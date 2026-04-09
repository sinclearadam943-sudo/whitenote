---
title: 艺境画廊
---

# 艺境画廊

每日中外书画艺术赏析

---

## 最新作品

<div class="gallery-grid">
  <a href="/gallery/works/starry-night.html" class="art-card">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/400px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" alt="星月夜" class="card-image" />
    <div class="card-content">
      <div class="card-meta">
        <span class="category western">西方绘画</span>
        <span class="date">1889年</span>
      </div>
      <h3>《星月夜》</h3>
      <p class="artist">文森特·梵高</p>
      <p class="desc">梵高最著名的风景油画，创作于法国圣雷米精神病院期间。画中漩涡状的天空笔触营造出强烈的运动感。</p>
      <div class="tags">
        <span class="tag">后印象派</span>
        <span class="tag">油画</span>
        <span class="tag">MoMA</span>
      </div>
    </div>
  </a>

  <a href="/gallery/works/shrimp-qi-baishi" class="art-card">
    <div class="card-image-placeholder">🦐</div>
    <div class="card-content">
      <div class="card-meta">
        <span class="category chinese">中国书画</span>
        <span class="date">20世纪40-50年代</span>
      </div>
      <h3>《墨虾图》</h3>
      <p class="artist">齐白石</p>
      <p class="desc">齐白石画虾已入化境，被誉为中国画虾第一人。运用侧锋、破墨之法，墨色浓淡相宜。</p>
      <div class="tags">
        <span class="tag">大写意</span>
        <span class="tag">水墨</span>
        <span class="tag">花鸟画</span>
      </div>
    </div>
  </a>

  <a href="/gallery/works/guernica.html" class="art-card">
    <div class="card-image-placeholder guernica">🏛️</div>
    <div class="card-content">
      <div class="card-meta">
        <span class="category western">西方绘画</span>
        <span class="date">1937年</span>
      </div>
      <h3>《格尔尼卡》</h3>
      <p class="artist">巴勃罗·毕加索</p>
      <p class="desc">毕加索最著名的巨幅油画，创作于西班牙内战期间，描绘了格尔尼卡轰炸的惨状。</p>
      <div class="tags">
        <span class="tag">立体主义</span>
        <span class="tag">反战艺术</span>
        <span class="tag">超现实</span>
      </div>
    </div>
  </a>
</div>

---

## 关于艺境

**艺境 (ArtistWiki)** 是一个每日更新的书画艺术赏析百科，涵盖中外著名画家、书法家的代表作品。

### 涵盖领域
- **西方绘画**：印象派、后印象派、立体主义、超现实主义
- **中国书画**：大写意、工笔、山水、花鸟、人物
- **书法艺术**：行书、楷书、草书、隶书、篆书

### 更新计划
每日更新一幅作品赏析，包含：
- 作品概览与背景
- 艺术风格分析
- 技法详解
- 历史价值解读
- 延伸阅读与外网资源

---

## 艺术家

### 西方绘画
梵高、毕加索、莫奈、达芬奇、米开朗基罗、拉斐尔、伦勃朗、塞尚、高更、马蒂斯、达利

### 中国书画  
齐白石、张大千、徐悲鸿、黄宾虹、吴昌硕、李可染、傅抱石、林风眠、潘天寿、吴冠中

### 书法艺术
王羲之、颜真卿、柳公权、欧阳询、苏轼、黄庭坚、米芾、赵孟頫、董其昌

---

<style>
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

.card-image-placeholder.guernica {
  background: #333;
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

/* 画作详情页样式 */
.artwork-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
}

.artwork-image {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.artwork-placeholder {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  background: var(--vp-c-bg);
  border-radius: 8px;
}

.artwork-placeholder.guernica {
  background: #333;
  color: #fff;
}

.artwork-meta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.meta-label {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.meta-value {
  font-size: 1rem;
  color: var(--vp-c-text-1);
  font-weight: 500;
}

@media (max-width: 768px) {
  .artwork-header {
    grid-template-columns: 1fr;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
