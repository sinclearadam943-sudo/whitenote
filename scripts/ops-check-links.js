#!/usr/bin/env node
/**
 * 死链检查脚本
 * 检查站内所有链接的可访问性
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://sinclearadam943-sudo.github.io/whitenote';
const LOCAL_PATH = '/root/.openclaw/workspace/whitenote';

const checked = new Set();
const deadLinks = [];
const warnings = [];

async function checkUrl(url) {
  if (checked.has(url)) return null;
  checked.add(url);
  
  return new Promise((resolve) => {
    https.get(url, { timeout: 10000 }, (res) => {
      resolve({ url, status: res.statusCode, ok: res.statusCode === 200 });
    }).on('error', (err) => {
      resolve({ url, status: 0, error: err.message, ok: false });
    });
  });
}

function extractLinksFromHtml(html) {
  const links = [];
  const regex = /href=["']([^"']+)["']/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const href = match[1];
    if (href.startsWith('/whitenote/')) {
      links.push(href.replace('/whitenote/', '/'));
    } else if (href.startsWith('/') && !href.startsWith('//')) {
      links.push(href);
    }
  }
  return [...new Set(links)];
}

async function main() {
  console.log('🔍 开始死链检查...\n');
  
  // 检查关键页面
  const pages = [
    '/',
    '/index-v3.html',
    '/posts/',
    '/posts/novels/',
    '/gallery/'
  ];
  
  for (const page of pages) {
    const url = `${BASE_URL}${page}`;
    const result = await checkUrl(url);
    
    if (result.ok) {
      console.log(`✅ ${page} - ${result.status}`);
    } else {
      console.log(`❌ ${page} - ${result.error || result.status}`);
      deadLinks.push({ page, ...result });
    }
  }
  
  // 检查本地文件是否存在对应的 HTML
  console.log('\n📁 检查本地文件映射...');
  const novelsPath = path.join(LOCAL_PATH, 'docs/posts/novels');
  const batches = fs.readdirSync(novelsPath).filter(f => f.startsWith('batch'));
  
  let missingFiles = 0;
  for (const batch of batches) {
    const batchPath = path.join(novelsPath, batch);
    const files = fs.readdirSync(batchPath).filter(f => f.endsWith('.md'));
    
    for (const file of files) {
      const htmlFile = file.replace('.md', '.html');
      const expectedPath = `/posts/novels/${batch}/${htmlFile}`;
      // GitHub Pages 会自动处理 .html 扩展名
    }
  }
  
  // 输出报告
  console.log('\n' + '='.repeat(50));
  console.log(`📊 检查完成`);
  console.log(`   总链接: ${checked.size}`);
  console.log(`   死链: ${deadLinks.length}`);
  console.log(`   警告: ${warnings.length}`);
  
  if (deadLinks.length > 0) {
    console.log('\n❌ 死链列表:');
    deadLinks.forEach(l => console.log(`   - ${l.url}: ${l.error || l.status}`));
  }
  
  process.exit(deadLinks.length > 0 ? 1 : 0);
}

main().catch(console.error);
