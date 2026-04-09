---
# 画廊

<script setup>
import { ref, computed } from 'vue'
import { data } from '../data/artworks.data.js'

const filter = ref('all')
const artworks = computed(() => {
  if (filter.value === 'all') return data
  return data.filter(a => a.category === filter.value || a.tags.includes(filter.value))
})

const categories = [
  { key: 'all', label: '全部' },
  { key: 'chinese', label: '中国书画' },
  { key: 'western', label: '西方绘画' },
  { key: 'calligraphy', label: '书法艺术' }
]
</script>

<div class="filter-bar">
  <button 
    v-for="cat in categories" 
    :key="cat.key"
    :class="['filter-btn', { active: filter === cat.key }]"
    @click="filter = cat.key"
  >
    {{ cat.label }}
  </button>
</div>

<div class="stats">
  <span>共 {{ artworks.length }} 幅作品</span>
  <span v-if="filter !== 'all'" class="filter-tag">{{ categories.find(c => c.key === filter)?.label }}</span>
</div>

<div class="gallery-grid">
  <a 
    v-for="art in artworks" 
    :key="art.id" 
    :href="art.feishuDoc" 
    target="_blank"
    class="artwork-card"
  >
    <div class="card-image">
      <img v-if="art.imageUrl" :src="art.imageUrl" :alt="art.title" loading="lazy" />
      <div v-else class="placeholder">🎨</div>
    </div>
    
    <div class="card-content">
      <div class="meta">
        <span class="date">{{ art.date }}</span>
        <span class="type">{{ art.type }}</span>
      </div>
      
      <h3>{{ art.title }}</h3>
      <p class="artist">{{ art.artist }}</p>
      <p class="period">{{ art.period }}</p>
      
      <p class="desc">{{ art.description }}</p>
      
      <div class="tags">
        <span v-for="tag in art.tags.slice(0, 4)" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </a>
</div>

<style scoped>
.filter-bar {
  display: flex;
  gap: 0.75rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.filter-btn:hover, .filter-btn.active {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}

.stats {
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.filter-tag {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.artwork-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s;
  background: var(--vp-c-bg);
}

.artwork-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.card-image {
  height: 200px;
  background: var(--vp-c-bg-soft);
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.artwork-card:hover .card-image img {
  transform: scale(1.05);
}

.placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

.card-content {
  padding: 1.25rem;
}

.meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 0.8rem;
}

.meta .date {
  color: var(--vp-c-text-2);
}

.meta .type {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  padding: 0.15rem 0.5rem;
  border-radius: 10px;
}

.card-content h3 {
  margin: 0 0 0.5rem;
  font-size: 1.15rem;
  color: var(--vp-c-text-1);
}

.artist {
  margin: 0 0 0.25rem;
  color: var(--vp-c-brand);
  font-weight: 500;
}

.period {
  margin: 0 0 0.75rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.desc {
  margin: 0 0 1rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tags {
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