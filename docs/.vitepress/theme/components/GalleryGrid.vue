<template>
  <div class="gallery-grid">
    <a 
      v-for="artwork in sortedArtworks" 
      :key="artwork.id"
      :href="`./works/${artwork.id}.html`" 
      class="art-card"
    >
      <img 
        v-if="artwork.image" 
        :src="artwork.image" 
        :alt="artwork.title" 
        class="card-image" 
      />
      <div v-else class="card-image-placeholder">
        {{ getEmoji(artwork.title) }}
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span :class="['category', artwork.category]">{{ artwork.categoryLabel }}</span>
          <span class="date">{{ artwork.year }}</span>
        </div>
        <h3>《{{ artwork.title }}》</h3>
        <p class="artist">{{ artwork.artist }}</p>
        <p class="desc">{{ artwork.desc }}</p>
        <div class="tags">
          <span v-for="tag in artwork.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import artworksData from '../../../public/data/artworks.json'

const sortedArtworks = computed(() => {
  // 按数组顺序显示（最新添加的在最前面）
  return artworksData.artworks
})

function getEmoji(title) {
  const emojiMap = {
    '鹰': '🦅',
    '虾': '🦐',
    '马': '🐴',
    '湖': '🏞️',
    '格尔尼卡': '🏛️',
    '默认': '🎨'
  }
  for (const key in emojiMap) {
    if (title.includes(key)) return emojiMap[key]
  }
  return emojiMap['默认']
}
</script>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.art-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s;
  background: var(--vp-c-bg);
  display: block;
}

.art-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.card-image-placeholder {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  background: var(--vp-c-bg-soft);
}

.card-content {
  padding: 1.25rem;
}

.card-meta {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  align-items: center;
}

.category {
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 10px;
  font-weight: 500;
}

.category.western {
  background: #e3f2fd;
  color: #1976d2;
}

.category.chinese {
  background: #f3e5f5;
  color: #7b1fa2;
}

.date {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

.art-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
}

.artist {
  margin: 0 0 0.75rem;
  color: var(--vp-c-brand);
  font-weight: 500;
}

.desc {
  margin: 0 0 1rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
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

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
