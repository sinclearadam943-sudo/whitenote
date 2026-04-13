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
