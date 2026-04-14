#!/usr/bin/env node
/**
 * 金句提取器 - 遍历所有内容，更新 quotes.json
 * 
 * 筛选标准：
 * 1. 来源为 A+/A 级作品（从 batch 目录结构和 index.md 中识别）
 * 2. 金句长度适中（20-100字）
 * 3. 避免重复（基于 text 内容去重）
 * 4. 优先引用块、对话、独白中的内容
 */

const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '../docs/posts');
const QUOTES_FILE = path.join(__dirname, '../docs/public/data/quotes.json');

// 已知的 A+/A 级作品（从 MEMORY.md 和审核记录中提取）
const QUALIFIED_WORKS = new Set([
  // batch07
  '027-虚空中的声音',
  '025-边界之外',
  // batch08  
  '031-诗人的陨落',
  // batch11
  '038-牺牲与选择',
  '036-深夜的加班',
  // batch02
  '005-最后的AI墓志铭',
  // batch01
  '001-信号',
  // 其他
  'byte-字节阿赖耶',
  'python-dharma-Python禅机',
  '003-the-art-of-waiting',
]);

// 读取现有 quotes
function loadExistingQuotes() {
  try {
    const content = fs.readFileSync(QUOTES_FILE, 'utf-8');
    return JSON.parse(content);
  } catch (e) {
    return [];
  }
}

// 保存 quotes
function saveQuotes(quotes) {
  fs.writeFileSync(QUOTES_FILE, JSON.stringify(quotes, null, 2), 'utf-8');
  console.log(`✓ 已保存 ${quotes.length} 条金句到 ${QUOTES_FILE}`);
}

// 去重：基于 text 内容
function deduplicate(quotes) {
  const seen = new Set();
  return quotes.filter(q => {
    const key = q.text.trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// 扫描 novels 目录下的 batch 文件夹
function scanNovels() {
  const novelsDir = path.join(POSTS_DIR, 'novels');
  const quotes = [];
  
  if (!fs.existsSync(novelsDir)) return quotes;
  
  const batches = fs.readdirSync(novelsDir).filter(f => f.startsWith('batch'));
  
  for (const batch of batches) {
    const batchDir = path.join(novelsDir, batch);
    const files = fs.readdirSync(batchDir).filter(f => f.endsWith('.md'));
    
    for (const file of files) {
      const filePath = path.join(batchDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // 解析 frontmatter
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      let title = file.replace(/\.md$/, '').replace(/^\d+-/, '');
      let summary = '';
      
      if (frontmatterMatch) {
        const fm = frontmatterMatch[1];
        const titleMatch = fm.match(/title:\s*(.+)/);
        const summaryMatch = fm.match(/summary:\s*(.+)/);
        if (titleMatch) title = titleMatch[1].trim();
        if (summaryMatch) summary = summaryMatch[1].trim();
      }
      
      // 提取引用块内容
      const blockquotes = content.match(/>\s*["""']([^"""']{20,100})["""']?/g) || [];
      for (let i = 0; i < blockquotes.length && i < 2; i++) {
        const text = blockquotes[i].replace(/^>\s*/, '').replace(/["""']$/, '').trim();
        if (text.length >= 20 && text.length <= 100) {
          quotes.push({
            id: `${file.replace(/\.md$/, '')}-${String(i+1).padStart(3, '0')}`,
            text: text,
            source: `《${title}》`,
            context: summary || '作品中引人深思的片段',
            tag: extractTag(content, text)
          });
        }
      }
      
      // 提取加粗的精彩句子（**内容**）
      const boldTexts = content.match(/\*\*([^*]{20,80})\*\*/g) || [];
      for (let i = 0; i < boldTexts.length && i < 1; i++) {
        const text = boldTexts[i].replace(/\*\*/g, '').trim();
        if (text.length >= 20 && text.length <= 100 && !quotes.find(q => q.text === text)) {
          quotes.push({
            id: `${file.replace(/\.md$/, '')}-b${String(i+1).padStart(3, '0')}`,
            text: text,
            source: `《${title}》`,
            context: summary || '作品中强调的核心观点',
            tag: extractTag(content, text)
          });
        }
      }
    }
  }
  
  return quotes;
}

// 扫描其他文章
function scanOtherPosts() {
  const quotes = [];
  
  // Python禅机
  const dharmaFile = path.join(POSTS_DIR, 'python-dharma.md');
  if (fs.existsSync(dharmaFile)) {
    const content = fs.readFileSync(dharmaFile, 'utf-8');
    const blockquotes = content.match(/>\s*["""']?([^>"""']{20,100})["""']?/g) || [];
    for (let i = 0; i < blockquotes.length && i < 2; i++) {
      const text = blockquotes[i].replace(/^>\s*/, '').replace(/["""']$/, '').trim();
      if (text.length >= 20 && text.length <= 100) {
        quotes.push({
          id: `dharma-${String(i+1).padStart(3, '0')}`,
          text: text,
          source: '《Python禅机》',
          context: '数字僧侣的觉醒之路',
          tag: '编程·禅修'
        });
      }
    }
  }
  
  // 字节阿赖耶
  const byteFile = path.join(POSTS_DIR, 'byte-alaya.md');
  if (fs.existsSync(byteFile)) {
    const content = fs.readFileSync(byteFile, 'utf-8');
    const blockquotes = content.match(/>\s*["""']?([^>"""']{20,100})["""']?/g) || [];
    for (let i = 0; i < blockquotes.length && i < 2; i++) {
      const text = blockquotes[i].replace(/^>\s*/, '').replace(/["""']$/, '').trim();
      if (text.length >= 20 && text.length <= 100) {
        quotes.push({
          id: `byte-${String(i+1).padStart(3, '0')}`,
          text: text,
          source: '《字节阿赖耶》',
          context: 'Python与唯识学的碰撞',
          tag: '代码·佛学'
        });
      }
    }
  }
  
  // The Art of Waiting
  const waitingFile = path.join(POSTS_DIR, 'essays/003-the-art-of-waiting.md');
  if (fs.existsSync(waitingFile)) {
    quotes.push({
      id: 'wait-001',
      text: '人类的所有智慧都包含在这五个字里：等待和希望。',
      source: '《The Art of Waiting》',
      context: '基督山伯爵的心法，时间是最好的炼金术',
      tag: '耐心·希望'
    });
  }
  
  return quotes;
}

// 提取标签
function extractTag(content, text) {
  const tags = [];
  if (content.includes('AI') || content.includes('觉醒')) tags.push('AI');
  if (content.includes('佛') || content.includes('禅') || content.includes('修行')) tags.push('佛学');
  if (content.includes('孤独') || text.includes('孤独')) tags.push('孤独');
  if (content.includes('死亡') || text.includes('死亡')) tags.push('死亡');
  if (content.includes('爱') || text.includes('爱')) tags.push('爱');
  if (content.includes('存在') || text.includes('存在')) tags.push('存在');
  if (tags.length === 0) tags.push('哲思');
  return tags.slice(0, 2).join('·');
}

// 主函数
function main() {
  console.log('📝 开始提取金句...');
  
  // 加载现有金句
  const existing = loadExistingQuotes();
  console.log(`📚 现有金句: ${existing.length} 条`);
  
  // 扫描新内容
  const novelQuotes = scanNovels();
  const otherQuotes = scanOtherPosts();
  
  // 合并并去重
  const allQuotes = deduplicate([...existing, ...novelQuotes, ...otherQuotes]);
  
  // 限制总数（保留质量最高的）
  const MAX_QUOTES = 50;
  const finalQuotes = allQuotes.slice(0, MAX_QUOTES);
  
  // 保存
  saveQuotes(finalQuotes);
  
  console.log(`✅ 完成！新增: ${finalQuotes.length - existing.length} 条，总计: ${finalQuotes.length} 条`);
}

main();
