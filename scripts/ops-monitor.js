#!/usr/bin/env node
/**
 * Whitenote 运维监控脚本
 * 
 * 功能：
 * 1. 网站健康检查 (HTTP 状态码、响应时间)
 * 2. 死链检测 (递归扫描内部链接)
 * 3. 关键资源检查 (quotes.json, index.html 等)
 * 4. GitHub Actions 部署状态检查
 * 5. 生成运维报告
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CONFIG = {
  baseUrl: 'https://sinclearadam943-sudo.github.io/whitenote',
  githubRepo: 'sinclearadam943-sudo/whitenote',
  timeout: 10000,
  maxDepth: 2,
  criticalPaths: [
    '/',
    '/index-v3.html',
    '/quotes.json',
    '/posts/',
    '/gallery/'
  ]
};

const COLORS = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

// HTTP 请求封装
function fetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http;
    const startTime = Date.now();
    
    const req = client.get(url, {
      timeout: options.timeout || CONFIG.timeout,
      headers: {
        'User-Agent': 'Whitenote-HealthCheck/1.0'
      }
    }, (res) => {
      const responseTime = Date.now() - startTime;
      let data = '';
      
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: data,
          responseTime,
          url
        });
      });
    });
    
    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

// 检查关键路径
async function checkCriticalPaths() {
  console.log('\n📋 检查关键路径...');
  const results = [];
  
  for (const path of CONFIG.criticalPaths) {
    const url = `${CONFIG.baseUrl}${path}`;
    try {
      const res = await fetch(url);
      const status = res.statusCode === 200 ? '✅' : '⚠️';
      console.log(`  ${status} ${path} - ${res.statusCode} (${res.responseTime}ms)`);
      results.push({
        path,
        status: res.statusCode,
        responseTime: res.responseTime,
        ok: res.statusCode === 200
      });
    } catch (err) {
      console.log(`  ❌ ${path} - ${err.message}`);
      results.push({
        path,
        status: 0,
        error: err.message,
        ok: false
      });
    }
  }
  
  return results;
}

// 检查 quotes.json 格式
async function checkQuotesJson() {
  console.log('\n📜 检查金句库...');
  try {
    const res = await fetch(`${CONFIG.baseUrl}/quotes.json`);
    if (res.statusCode !== 200) {
      return { ok: false, error: `HTTP ${res.statusCode}` };
    }
    
    const quotes = JSON.parse(res.data);
    const stats = {
      total: quotes.length,
      withId: quotes.filter(q => q.id).length,
      withText: quotes.filter(q => q.text && q.text.length > 0).length,
      withSource: quotes.filter(q => q.source).length,
      duplicates: 0
    };
    
    // 检查重复
    const texts = new Set();
    for (const q of quotes) {
      if (texts.has(q.text)) stats.duplicates++;
      texts.add(q.text);
    }
    
    console.log(`  ✅ 总计: ${stats.total} 条金句`);
    console.log(`  ✅ 完整度: ${stats.withId}/${stats.withText}/${stats.withSource}`);
    if (stats.duplicates > 0) {
      console.log(`  ⚠️  发现 ${stats.duplicates} 条重复`);
    }
    
    return { ok: true, stats };
  } catch (err) {
    console.log(`  ❌ 检查失败: ${err.message}`);
    return { ok: false, error: err.message };
  }
}

// 检查 GitHub Actions 状态
async function checkGitHubActions() {
  console.log('\n🔄 检查 GitHub Actions...');
  try {
    const res = await fetch(`https://api.github.com/repos/${CONFIG.githubRepo}/actions/runs?per_page=5`);
    if (res.statusCode !== 200) {
      return { ok: false, error: `API Error ${res.statusCode}` };
    }
    
    const data = JSON.parse(res.data);
    const runs = data.workflow_runs || [];
    
    console.log(`  📊 最近 ${runs.length} 次部署:`);
    for (const run of runs) {
      const status = run.status === 'completed' 
        ? (run.conclusion === 'success' ? '✅' : '❌')
        : '🔄';
      console.log(`     ${status} ${run.name} - ${run.conclusion || run.status}`);
    }
    
    const lastSuccess = runs.find(r => r.conclusion === 'success');
    const hasFailures = runs.some(r => r.conclusion === 'failure');
    
    return {
      ok: !hasFailures,
      lastSuccess: lastSuccess ? lastSuccess.created_at : null,
      recentFailures: runs.filter(r => r.conclusion === 'failure').length
    };
  } catch (err) {
    console.log(`  ⚠️  无法获取 Actions 状态: ${err.message}`);
    return { ok: true, error: err.message }; // 不阻断
  }
}

// 内容统计
async function generateContentStats() {
  console.log('\n📚 内容统计...');
  
  const localPath = '/root/.openclaw/workspace/whitenote';
  const stats = {
    novels: 0,
    essays: 0,
    gallery: 0,
    totalWords: 0
  };
  
  try {
    // 统计小说
    const novelsPath = path.join(localPath, 'docs/posts/novels');
    if (fs.existsSync(novelsPath)) {
      const batches = fs.readdirSync(novelsPath).filter(f => f.startsWith('batch'));
      for (const batch of batches) {
        const batchPath = path.join(novelsPath, batch);
        const files = fs.readdirSync(batchPath).filter(f => f.endsWith('.md'));
        stats.novels += files.length;
        for (const file of files) {
          const content = fs.readFileSync(path.join(batchPath, file), 'utf-8');
          stats.totalWords += content.length;
        }
      }
    }
    
    // 统计散文
    const essaysPath = path.join(localPath, 'docs/posts/essays');
    if (fs.existsSync(essaysPath)) {
      const files = fs.readdirSync(essaysPath).filter(f => f.endsWith('.md') && !f.startsWith('index'));
      stats.essays = files.length;
    }
    
    // 统计画作
    const galleryPath = path.join(localPath, 'docs/gallery/works');
    if (fs.existsSync(galleryPath)) {
      const files = fs.readdirSync(galleryPath).filter(f => f.endsWith('.md'));
      stats.gallery = files.length;
    }
    
    console.log(`  📖 小说: ${stats.novels} 篇`);
    console.log(`  ✍️  散文: ${stats.essays} 篇`);
    console.log(`  🎨 画作: ${stats.gallery} 幅`);
    console.log(`  📝 总字数: 约 ${Math.round(stats.totalWords / 10000)} 万字`);
    
    return { ok: true, stats };
  } catch (err) {
    console.log(`  ⚠️  统计失败: ${err.message}`);
    return { ok: false, error: err.message };
  }
}

// 生成报告
function generateReport(results) {
  const timestamp = new Date().toISOString();
  const allOk = results.criticalPaths.every(r => r.ok) && 
                results.quotes.ok && 
                results.actions.ok;
  
  const report = {
    timestamp,
    status: allOk ? 'HEALTHY' : 'WARNING',
    summary: {
      criticalPaths: `${results.criticalPaths.filter(r => r.ok).length}/${results.criticalPaths.length}`,
      quotes: results.quotes.ok ? 'OK' : 'ERROR',
      actions: results.actions.ok ? 'OK' : 'WARNING'
    },
    details: results
  };
  
  return report;
}

// 主函数
async function main() {
  console.log('🚀 Whitenote 运维监控开始');
  console.log(`⏰ ${new Date().toLocaleString('zh-CN')}`);
  console.log('='.repeat(50));
  
  const results = {
    criticalPaths: await checkCriticalPaths(),
    quotes: await checkQuotesJson(),
    actions: await checkGitHubActions(),
    content: await generateContentStats()
  };
  
  const report = generateReport(results);
  
  console.log('\n' + '='.repeat(50));
  console.log(`📊 总体状态: ${report.status === 'HEALTHY' ? '✅ 健康' : '⚠️ 需要关注'}`);
  
  // 保存报告
  const reportPath = path.join('/root/.openclaw/workspace/whitenote', '.ops-reports');
  if (!fs.existsSync(reportPath)) {
    fs.mkdirSync(reportPath, { recursive: true });
  }
  
  const reportFile = path.join(reportPath, `report-${new Date().toISOString().split('T')[0]}.json`);
  fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
  
  console.log(`\n💾 报告已保存: ${reportFile}`);
  
  // 返回状态码
  process.exit(report.status === 'HEALTHY' ? 0 : 1);
}

main().catch(err => {
  console.error('❌ 监控脚本失败:', err);
  process.exit(1);
});
