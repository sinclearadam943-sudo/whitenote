---
title: 画廊
---

# 艺境画廊

每日中外书画艺术赏析

## 最新作品

<div id="gallery-container">
  加载中...
</div>

<script setup>
import { onMounted } from 'vue'
import data from '../data/artworks.json'

onMounted(() => {
  const container = document.getElementById('gallery-container')
  if (!data || data.length === 0) {
    container.innerHTML = '<p>暂无作品</p>'
    return
  }
  
  const html = data.map(art => `
    <a href="${art.feishuDoc}" target="_blank" class="art-card">
      <div class="art-title">《${art.title}》</div>
      <div class="art-artist">${art.artist}</div>
      <div class="art-period">${art.period}</div>
      <div class="art-desc">${art.description}</div>
      <div class="art-tags">${art.tags.slice(0,4).map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </a>
  `).join('')
  
  container.innerHTML = `<div class="gallery-grid">${html}</div>`
})
</script>

<style>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.art-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.25rem;
  text-decoration: none;
  transition: all 0.3s;
  background: var(--vp-c-bg);
}

.art-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.art-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.art-artist {
  color: var(--vp-c-brand);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.art-period {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.75rem;
}

.art-desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.art-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  color: var(--vp-c-text-2);
}
</style>
