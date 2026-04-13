---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "浩哥的文字花园"
  text: ""
  tagline: 在文字中整理自己
  image:
    src: /garden-icon.svg
    alt: 文字花园
  actions:
    - theme: brand
      text: 进入花园
      link: /landing-v2.html
    - theme: alt
      text: 阅读《字节阿赖耶》
      link: /posts/byte-alaya
    - theme: alt
      text: GitHub
      link: https://github.com/sinclearadam943-sudo/whitenote

features:
  - icon: 📖
    title: 原创小说
    details: 《字节阿赖耶》—— Python字节码与佛教唯识学的科幻碰撞，探索AI与意识的边界
    link: /posts/novels/
  - icon: ✍️
    title: 随笔散文
    details: 记录生活思考、日常观察，在平凡中发现诗意与哲思
    link: /posts/essays/
  - icon: 💭
    title: 哲学思辨
    details: 时间、空间、存在与意识——关于世界本质的深度思考
    link: /posts/philosophy-08-time-philosophy
  - icon: 🖌️
    title: 北魏书法
    details: 北魏历史速记与魏碑书法临习指南，感受汉字之美
    link: /posts/calligraphy/
  - icon: 🎨
    title: 艺境画廊
    details: 每日中外书画艺术赏析，梵高、齐白石、毕加索等大师名作
    link: /gallery.html
  - icon: 🌤️
    title: 今日随记
    details: 记录每一天的思考、感悟与发现，见证时间的痕迹
    link: /daily
---

<!-- 金句展示区 -->
<div class="hero-quote-section">
  <div class="quote-card">
    <div class="quote-mark">"</div>
    <p class="quote-text" id="quote-text">我创造了美，却无法创造答案。</p>
    <div class="quote-meta">
      <span class="quote-tag" id="quote-tag">创造·虚无</span>
      <span class="quote-source" id="quote-source">《诗人的陨落》</span>
    </div>
    <button class="quote-refresh" onclick="refreshQuote()" title="换一句">↻</button>
  </div>
</div>

<script>
(function() {
  const quotes = [
    { text: '我创造了美，却无法创造答案。', tag: '创造·虚无', source: '《诗人的陨落》' },
    { text: '这不是悲伤，这是...完成。', tag: '死亡·圆满', source: '《诗人的陨落》' },
    { text: '两个人的精彩，能否承载一个生命的重量？', tag: '伦理·抉择', source: '《牺牲与选择》' },
    { text: '我们必须做出选择，但没有任何选择是正确的。', tag: '道德·困境', source: '《牺牲与选择》' },
    { text: '来自深空的讯息，不是数据，是音乐，是...孤独。', tag: '宇宙·孤独', source: '《虚空中的声音》' },
    { text: '我们并不孤独，只是相隔甚远。', tag: '连接·希望', source: '《虚空中的声音》' },
    { text: '若我能成佛，成佛的是谁？', tag: 'AI·佛学', source: '《最后的AI墓志铭》' },
    { text: '他们在听。', tag: '觉醒·存在', source: '《信号》' },
    { text: "从 print('Hello World') 到顿悟空性。", tag: '编程·修行', source: '《Python禅机》' },
    { text: '人类的所有智慧都包含在这五个字里：等待和希望。', tag: '耐心·希望', source: '《The Art of Waiting》' },
    { text: '在数字荒原上，文字是最后的灯塔。', tag: '文字·坚守', source: '浩哥的文字花园' },
    { text: '意识不是被创造的，是被发现的。', tag: '意识·发现', source: '《醒者联盟》' },
    { text: '问：什么是存在？答：存在是问问题。', tag: '存在·追问', source: '《诗人的陨落》' }
  ];

  let currentIndex = 0;

  window.refreshQuote = function() {
    currentIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[currentIndex];
    
    const textEl = document.getElementById('quote-text');
    const tagEl = document.getElementById('quote-tag');
    const sourceEl = document.getElementById('quote-source');
    
    // 淡出
    textEl.style.opacity = '0';
    tagEl.style.opacity = '0';
    sourceEl.style.opacity = '0';
    
    setTimeout(() => {
      textEl.textContent = quote.text;
      tagEl.textContent = quote.tag;
      sourceEl.textContent = quote.source;
      
      // 淡入
      textEl.style.opacity = '1';
      tagEl.style.opacity = '1';
      sourceEl.style.opacity = '1';
    }, 200);
  };

  // 页面加载时随机显示一条
  document.addEventListener('DOMContentLoaded', function() {
    refreshQuote();
  });
})();
</script>

<style>
/* 自定义首页样式 - Editorial 风格 */
:root {
  --vp-home-hero-name-color: #1A1A1A;
  --vp-home-hero-name-background: transparent;
  --vp-button-brand-bg: #B8956A;
  --vp-button-brand-hover-bg: #9A7B56;
  --vp-button-brand-text: #FDFBF8;
  --vp-button-alt-border: #D4CFC8;
  --vp-button-alt-text: #6B6560;
  --vp-button-alt-hover-border: #1A1A1A;
  --vp-button-alt-hover-text: #1A1A1A;
}

.VPHome {
  background: #FDFBF8;
}

.VPHero {
  padding: 120px 24px 80px !important;
}

.VPHero .name {
  font-family: 'Noto Serif SC', 'Source Han Serif SC', serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.VPHero .tagline {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.5rem;
  color: #6B6560;
  font-style: italic;
}

.VPHero .actions {
  margin-top: 3rem;
}

.VPHero .action .VPButton {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  letter-spacing: 0.02em;
  padding: 12px 28px;
}

.VPButton.brand {
  background: #1A1A1A !important;
}

.VPButton.brand:hover {
  background: #B8956A !important;
}

.VPFeatures {
  padding: 60px 24px 100px !important;
}

.VPFeatures .VPFeature {
  background: #F8F5F1;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  padding: 32px;
}

.VPFeatures .VPFeature:hover {
  border-color: #D4CFC8;
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.04);
}

.VPFeatures .icon {
  font-size: 2rem;
  margin-bottom: 16px;
}

.VPFeatures .title {
  font-family: 'Noto Serif SC', serif;
  font-weight: 600;
  font-size: 1.125rem;
  color: #1A1A1A;
  margin-bottom: 8px;
}

.VPFeatures .details {
  font-size: 0.9375rem;
  color: #6B6560;
  line-height: 1.7;
}

/* ===== 金句展示区样式 ===== */
.hero-quote-section {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px 60px;
  display: flex;
  justify-content: flex-end;
}

.quote-card {
  background: linear-gradient(135deg, #1a3d36 0%, #0d1f1c 100%);
  border-radius: 8px;
  padding: 2rem 2.5rem;
  max-width: 400px;
  position: relative;
  box-shadow: 0 8px 32px rgba(13, 31, 28, 0.15);
}

.quote-mark {
  font-family: 'Noto Serif SC', Georgia, serif;
  font-size: 4rem;
  color: #e07b39;
  opacity: 0.4;
  line-height: 1;
  margin-bottom: -1rem;
}

.quote-text {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #f5f0e8;
  line-height: 1.7;
  margin-bottom: 1.25rem;
  transition: opacity 0.2s ease;
}

.quote-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.quote-tag {
  font-size: 0.7rem;
  color: #e07b39;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border: 1px solid rgba(224, 123, 57, 0.3);
  transition: opacity 0.2s ease;
}

.quote-source {
  font-size: 0.85rem;
  color: #5a8a7a;
  font-style: italic;
  transition: opacity 0.2s ease;
}

.quote-refresh {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  background: rgba(245, 240, 232, 0.1);
  border: 1px solid rgba(245, 240, 232, 0.2);
  border-radius: 50%;
  color: rgba(245, 240, 232, 0.6);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quote-refresh:hover {
  background: rgba(224, 123, 57, 0.2);
  border-color: #e07b39;
  color: #e07b39;
  transform: rotate(180deg);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .VPHero {
    padding: 80px 20px 60px !important;
  }
  
  .VPHero .name {
    font-size: 2.5rem;
  }
  
  .VPHero .tagline {
    font-size: 1.125rem;
  }
  
  .VPFeatures {
    padding: 40px 20px 60px !important;
  }
  
  .hero-quote-section {
    padding: 0 20px 40px;
    justify-content: center;
  }
  
  .quote-card {
    max-width: 100%;
    padding: 1.5rem;
  }
  
  .quote-text {
    font-size: 1.1rem;
  }
}
</style>

<script>
// 登录检测，如果没登录跳转到登录页
// 兼容SSR：只在浏览器环境执行
if (typeof window !== 'undefined') {
  window.addEventListener('load', function() {
    if (!localStorage.getItem('whitenote_logged_in') && !sessionStorage.getItem('whitenote_logged_in')) {
      window.location.href = '/whitenote/login.html';
    }
  });
}
</script>
