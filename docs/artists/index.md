---
title: 艺术家
---

# 艺术家

<div id="artists-container">
  加载中...
</div>

<script setup>
import { onMounted } from 'vue'
import data from '../data/artworks.json'

const categoryLabels = {
  chinese: '中国书画',
  western: '西方绘画',
  calligraphy: '书法艺术',
  oil: '油画',
  ink: '水墨画'
}

onMounted(() => {
  const container = document.getElementById('artists-container')
  if (!data || data.length === 0) {
    container.innerHTML = '<p>暂无艺术家</p>'
    return
  }
  
  // 按艺术家分组
  const artistMap = {}
  data.forEach(art => {
    if (!artistMap[art.artist]) {
      artistMap[art.artist] = {
        name: art.artist,
        works: [],
        categories: new Set()
      }
    }
    artistMap[art.artist].works.push(art)
    artistMap[art.artist].categories.add(art.category)
  })
  
  const html = Object.values(artistMap).map(artist => `
    <div class="artist-card">
      <div class="artist-header">
        <h3>${artist.name}</h3>
        <div class="categories">
          ${Array.from(artist.categories).map(cat => 
            `<span class="category-badge">${categoryLabels[cat] || cat}</span>`
          ).join('')}
        </div>
      </div>
      <div class="works-list">
        ${artist.works.map(work => `
          <a href="${work.feishuDoc}" target="_blank" class="work-item">
            <span class="work-title">《${work.title}》</span>
            <span class="work-period">${work.period}</span>
          </a>
        `).join('')}
      </div>
    </div>
  `).join('')
  
  container.innerHTML = `<div class="artists-grid">${html}</div>`
})
</script>

<style>
.artists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.artist-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.25rem;
  background: var(--vp-c-bg);
}

.artist-header {
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.artist-header h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
}

.categories {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.category-badge {
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  border-radius: 10px;
}

.works-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.work-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.2s;
}

.work-item:hover {
  background: var(--vp-c-bg-soft);
}

.work-title {
  color: var(--vp-c-brand);
  font-weight: 500;
}

.work-period {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
</style>
