---
title: 艺境画廊
head:
  - - meta
    - name: referrer
      content: no-referrer
---

# 艺境画廊

每日中外书画艺术赏析

---

## 最新作品

<GalleryGrid />

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
}
</style>
