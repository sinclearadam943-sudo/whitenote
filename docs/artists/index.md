---
# 艺术家

<script setup>
import { computed } from 'vue'
import { data } from '../data/artworks.data.js'

const artists = computed(() => {
  const map = new Map()
  data.forEach(art => {
    if (!map.has(art.artist)) {
      map.set(art.artist, {
        name: art.artist,
        works: [],
        categories: new Set()
      })
    }
    const artist = map.get(art.artist)
    artist.works.push(art)
    artist.categories.add(art.category)
  })
  return Array.from(map.values()).map(a => ({
    ...a,
    categories: Array.from(a.categories)
  }))
})

const categoryLabels = {
  chinese: '中国书画',
  western: '西方绘画',
  calligraphy: '书法艺术'
}
</script>

<div class="artist-grid">
  <div v-for="artist in artists" :key="artist.name" class="artist-card">
    <div class="artist-header">
      <h3>{{ artist.name }}</h3>
      <div class="categories">
        <span 
          v-for="cat in artist.categories" 
          :key="cat"
          class="category-badge"
        >
          {{ categoryLabels[cat] || cat }}
        </span>
      </div>
    </div>
    
    <div class="works-list">
      <a 
        v-for="work in artist.works" 
        :key="work.id"
        :href="work.feishuDoc"
        target="_blank"
        class="work-item"
      >
        <span class="work-title">《{{ work.title }}》</span>
        <span class="work-period">{{ work.period }}</span>
      </a>
    </div>
  </div>
</div>

<style scoped>
.artist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
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