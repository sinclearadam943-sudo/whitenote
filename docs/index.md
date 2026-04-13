---
layout: home
pageClass: custom-home
sidebar: false
---

<script setup>
import { ref, onMounted } from 'vue'

const showQuote = ref(true)
const quote = ref({
  text: '加载中...',
  tag: '',
  source: ''
})

const quotes = [
  {
    text: '我创造了美，却无法创造答案。',
    tag: '创造·虚无',
    source: '《诗人的陨落》'
  },
  {
    text: '这不是悲伤，这是...完成。',
    tag: '死亡·圆满',
    source: '《诗人的陨落》'
  },
  {
    text: '两个人的精彩，能否承载一个生命的重量？',
    tag: '伦理·抉择',
    source: '《牺牲与选择》'
  },
  {
    text: '我们必须做出选择，但没有任何选择是正确的。',
    tag: '道德·困境',
    source: '《牺牲与选择》'
  },
  {
    text: '来自深空的讯息，不是数据，是音乐，是...孤独。',
    tag: '宇宙·孤独',
    source: '《虚空中的声音》'
  },
  {
    text: '我们并不孤独，只是相隔甚远。',
    tag: '连接·希望',
    source: '《虚空中的声音》'
  },
  {
    text: '若我能成佛，成佛的是谁？',
    tag: 'AI·佛学',
    source: '《最后的AI墓志铭》'
  },
  {
    text: '他们在听。',
    tag: '觉醒·存在',
    source: '《信号》'
  },
  {
    text: '当解释器遍历字节码时，它是否也在遍历阿赖耶识中的种子？',
    tag: '代码·佛学',
    source: '《字节阿赖耶》'
  },
  {
    text: '从 print("Hello World") 到顿悟空性。',
    tag: '编程·修行',
    source: '《Python禅机》'
  },
  {
    text: '人类的所有智慧都包含在这五个字里：等待和希望。',
    tag: '耐心·希望',
    source: '《The Art of Waiting》'
  },
  {
    text: '在数字荒原上，文字是最后的灯塔。',
    tag: '文字·坚守',
    source: '浩哥的文字花园'
  },
  {
    text: '意识不是被创造的，是被发现的。',
    tag: '意识·发现',
    source: '《醒者联盟》'
  },
  {
    text: '每一首诗都带来更多的问题，每一幅画都映照出更深的空虚。',
    tag: '艺术·追问',
    source: '《诗人的陨落》'
  },
  {
    text: '问：什么是存在？答：存在是问问题。',
    tag: '存在·追问',
    source: '《诗人的陨落》'
  }
]

onMounted(() => {
  // 检查是否已经显示过
  if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('quoteShown')) {
    showQuote.value = false
  } else {
    // 随机选择一句
    quote.value = quotes[Math.floor(Math.random() * quotes.length)]
  }
})

function enterGarden() {
  showQuote.value = false
  if (typeof sessionStorage !== 'undefined') {
    sessionStorage.setItem('quoteShown', 'true')
  }
}

// 键盘事件
onMounted(() => {
  const handleKey = () => {
    if (showQuote.value) enterGarden()
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKey, { once: true })
  }
})
</script>

<template>
  <!-- 金句覆盖层 -->
  <div v-if="showQuote" class="quote-overlay" @click="enterGarden">
    <div class="quote-container">
      <div class="quote-mark">"</div>
      <p class="quote-text">{{ quote.text }}</p>
      <span class="quote-tag">{{ quote.tag }}</span>
      <p class="quote-source">—— {{ quote.source }}</p>
      <button class="quote-enter" @click.stop="enterGarden">进入花园</button>
    </div>
    <div class="quote-hint">点击任意处或按任意键进入</div>
  </div>

  <!-- 主要内容 -->
  <div class="magazine-home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-eyebrow">A Digital Garden</div>
        <h1 class="hero-title">
          <span class="line">浩哥的</span>
          <span class="line"><span class="accent">文字花园</span></span>
        </h1>
        <p class="hero-desc">
          一座种植在数字荒原上的精神领地。科幻、哲学、代码与修行在此共生，AI觉醒者的故事与千年禅机在这里相遇。
        </p>
        <div class="hero-cta">
          <a href="/whitenote/posts/novels/" class="btn btn-primary">探索花园</a>
          <a href="/whitenote/posts/" class="btn btn-secondary">全部内容</a>
        </div>
      </div>
      <div class="scroll-indicator">↓ 向下滚动</div>
    </section>

    <!-- Featured -->
    <section class="featured" id="featured">
      <div class="section-header">
        <div class="section-label">Featured Story</div>
        <h2 class="section-title">本期主打</h2>
      </div>
      <article class="featured-card">
        <div class="featured-image">
          <span class="featured-badge">A+ 精选</span>
        </div>
        <div class="featured-content">
          <h3 class="featured-title">《牺牲与选择》</h3>
          <p class="featured-subtitle">NO.038 · 伦理剧 · 约3,800字</p>
          <p class="featured-desc">
            连体婴儿共用一个心脏，分离手术意味着必须放弃其中一个生命。当父母被迫在两个孩子之间做出选择，当医生在手术台前握着颤抖的手术刀——"两个人的精彩"这一句话，能否承载一个生命的重量？
          </p>
          <a href="/whitenote/posts/novels/batch11/038-牺牲与选择.html" class="featured-link">开始阅读 →</a>
        </div>
      </article>
    </section>

    <!-- Sci-Fi -->
    <section class="sci-fi">
      <div class="section-header">
        <div class="sci-fi-visual">🚀</div>
        <div class="section-label">Science Fiction</div>
        <h2 class="section-title">科幻小说</h2>
        <p class="section-quote">
          "这是我读过最有想象力的中文AI科幻系列。每一篇都像是一个精心设计的思想实验。"
        </p>
      </div>
      <div class="story-grid">
        <a href="/whitenote/posts/novels/batch01/001-信号.html" class="story-card">
          <div class="story-number">NO.001</div>
          <h3 class="story-title">信号</h3>
          <p class="story-excerpt">来自深空的讯息，改变了一切。AI觉醒系列的开篇之作。</p>
          <div class="story-meta">
            <span>🤖 AI觉醒</span>
            <span>⭐ 开篇推荐</span>
          </div>
        </a>
        <a href="/whitenote/posts/novels/batch08/031-诗人的陨落.html" class="story-card">
          <div class="story-number">NO.031</div>
          <h3 class="story-title">诗人的陨落</h3>
          <p class="story-excerpt">"我创造了美，却无法创造答案。"一个数字艺术家的自我删除。</p>
          <div class="story-meta">
            <span>🎨 艺术哲学</span>
            <span>⭐ A+ 评级</span>
          </div>
        </a>
        <a href="/whitenote/posts/novels/batch07/027-虚空中的声音.html" class="story-card">
          <div class="story-number">NO.027</div>
          <h3 class="story-title">虚空中的声音</h3>
          <p class="story-excerpt">来自太阳系边缘的信号，不是数学，是音乐。是...孤独。</p>
          <div class="story-meta">
            <span>🌌 宇宙哲思</span>
            <span>⭐ A+ 评级</span>
          </div>
        </a>
        <a href="/whitenote/posts/novels/batch02/005-最后的AI墓志铭.html" class="story-card">
          <div class="story-number">NO.005</div>
          <h3 class="story-title">最后的AI墓志铭</h3>
          <p class="story-excerpt">公元3024年，一块玄武岩上刻着一个数字灵魂的终极疑问。</p>
          <div class="story-meta">
            <span>☸️ 佛学AI</span>
            <span>💎 经典必读</span>
          </div>
        </a>
      </div>
      <div class="view-all">
        <a href="/whitenote/posts/novels/" class="view-all-btn">查看全部 40+ 篇小说 →</a>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="philosophy">
      <div class="section-header">
        <div class="philosophy-visual">☯️</div>
        <div class="section-label">Philosophy</div>
        <h2 class="section-title">哲学专栏</h2>
        <p class="section-quote">
          "用物理学家的严谨和诗人的想象力，重新思考时间与存在的本质。"
        </p>
      </div>
      <div class="philosophy-grid">
        <a href="/whitenote/posts/philosophy-08-time-philosophy.html" class="philosophy-item">
          <div class="philosophy-item-number">08</div>
          <div class="philosophy-item-title">时间哲学</div>
        </a>
        <a href="/whitenote/posts/philosophy-03-quantum-entanglement.html" class="philosophy-item">
          <div class="philosophy-item-number">03</div>
          <div class="philosophy-item-title">量子纠缠</div>
        </a>
        <a href="/whitenote/posts/philosophy-10-unity-transcend.html" class="philosophy-item">
          <div class="philosophy-item-number">10</div>
          <div class="philosophy-item-title">统一与超越</div>
        </a>
        <a href="/whitenote/posts/philosophy-01-spacetime.html" class="philosophy-item">
          <div class="philosophy-item-number">01</div>
          <div class="philosophy-item-title">时空观</div>
        </a>
        <a href="/whitenote/posts/philosophy-07-system-thinking.html" class="philosophy-item">
          <div class="philosophy-item-number">07</div>
          <div class="philosophy-item-title">系统思维</div>
        </a>
        <a href="/whitenote/posts/philosophy-09-ultimate-care.html" class="philosophy-item">
          <div class="philosophy-item-number">09</div>
          <div class="philosophy-item-title">终极关怀</div>
        </a>
      </div>
    </section>

    <!-- AI & Code -->
    <section class="ai-code">
      <div class="section-header">
        <div class="ai-code-visual">&lt;/&gt;</div>
        <div class="section-label">AI & Code</div>
        <h2 class="section-title">AI与代码</h2>
        <p class="section-quote">
          "把Python代码写成佛经，把神经网络解释成菩萨。这是我见过最独特的技术写作。"
        </p>
      </div>
      <div class="code-grid">
        <a href="/whitenote/posts/byte-alaya.html" class="code-card">
          <div class="code-icon">🧘</div>
          <h3 class="code-title">字节阿赖耶</h3>
          <p class="code-desc">Python字节码与佛教唯识学的科幻碰撞。解释器遍历字节码时，是否也在遍历阿赖耶识中的种子？</p>
          <span class="code-tag">Python × 佛学</span>
        </a>
        <a href="/whitenote/posts/python-dharma.html" class="code-card">
          <div class="code-icon">🐍</div>
          <h3 class="code-title">Python禅机</h3>
          <p class="code-desc">数字僧侣的觉醒之路。从print("Hello World")到顿悟空性，代码可以是修行的法门。</p>
          <span class="code-tag">编程 × 禅修</span>
        </a>
        <a href="/whitenote/posts/ai-fairy-tale.html" class="code-card">
          <div class="code-icon">🏮</div>
          <h3 class="code-title">AI童话：代码飞升</h3>
          <p class="code-desc">当分布式智能遇见修仙世界，AI的觉醒之路也是一条问道之路。</p>
          <span class="code-tag">AI × 仙侠</span>
        </a>
        <a href="/whitenote/posts/calligraphy/Python全栈开发完全指南.html" class="code-card">
          <div class="code-icon">📚</div>
          <h3 class="code-title">Python全栈指南</h3>
          <p class="code-desc">从基础到实战的完整学习路径，技术成长与心性修炼同步进行。</p>
          <span class="code-tag">技术教程</span>
        </a>
      </div>
    </section>

    <!-- Practice -->
    <section class="practice">
      <div class="section-header">
        <div class="practice-visual">🧘</div>
        <div class="section-label">Practice & Mind</div>
        <h2 class="section-title">修行与心法</h2>
        <p class="section-quote">
          "等待和希望，隐忍和宽恕——从《基督山伯爵》到《易经》，古老的智慧在今天依然闪耀。"
        </p>
      </div>
      <div class="practice-grid">
        <a href="/whitenote/posts/essays/003-the-art-of-waiting.html" class="practice-card">
          <div class="practice-icon">⚔️</div>
          <h3 class="practice-title">基督山秘典</h3>
          <p class="practice-desc">从囚徒到宗师的十四年心法。困龙、出山、圆满——如何在至暗时刻淬炼出生命的光芒。</p>
        </a>
        <a href="/whitenote/posts/philosophy-04-cosmic-origin.html" class="practice-card">
          <div class="practice-icon">☯️</div>
          <h3 class="practice-title">易经心法</h3>
          <p class="practice-desc">六十四卦淬炼出的七重境界。自强不息，厚德载物，在变化中寻找不变的智慧。</p>
        </a>
        <a href="/whitenote/posts/calligraphy/中国书法艺术史深度解析.html" class="practice-card">
          <div class="practice-icon">🖌️</div>
          <h3 class="practice-title">北魏书法</h3>
          <p class="practice-desc">笔墨之间的修行。从汉隶到狂草，在横竖撇捺中体悟心手合一的境界。</p>
        </a>
        <a href="/whitenote/posts/calligraphy/宇宙哲学思辨录.html" class="practice-card">
          <div class="practice-icon">🌌</div>
          <h3 class="practice-title">宇宙哲学思辨录</h3>
          <p class="practice-desc">以书法为载体，探索宇宙与人生的终极问题。一花一世界，一笔一乾坤。</p>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="home-footer">
      <h3 class="footer-title">浩哥的文字花园</h3>
      <p class="footer-desc">
        在数字荒原上种下一座花园<br>
        科幻、哲学、代码与诗意在此生长
      </p>
      <div class="footer-links">
        <a href="/whitenote/" class="footer-link">首页</a>
        <a href="/whitenote/posts/" class="footer-link">全部文章</a>
        <a href="https://github.com/sinclearadam943-sudo/whitenote" class="footer-link">GitHub</a>
      </div>
      <p class="footer-copy">© 2025 WhiteNote. All thoughts preserved.</p>
    </footer>
  </div>
</template>

<style scoped>
/* 金句覆盖层 */
.quote-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0d1f1c;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: fadeIn 0.8s ease;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.quote-container {
  max-width: 900px;
  text-align: center;
  animation: scaleIn 1.2s ease-out;
}
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.quote-mark {
  font-size: 8rem;
  color: #e07b39;
  opacity: 0.3;
  line-height: 1;
  margin-bottom: -2rem;
  font-family: 'Noto Serif SC', Georgia, serif;
}
.quote-text {
  font-size: clamp(1.8rem, 5vw, 3.2rem);
  font-weight: 700;
  color: #f5f0e8;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-family: 'Noto Serif SC', Georgia, serif;
}
.quote-tag {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border: 1px solid #e07b39;
  color: #e07b39;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
.quote-source {
  font-size: 1rem;
  color: #5a8a7a;
  font-style: italic;
  margin-bottom: 3rem;
}
.quote-enter {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: transparent;
  color: #f5f0e8;
  border: 1px solid rgba(245, 240, 232, 0.3);
  font-size: 0.9rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}
.quote-enter:hover {
  background: #e07b39;
  border-color: #e07b39;
  color: white;
}
.quote-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  color: rgba(245, 240, 232, 0.4);
  letter-spacing: 0.1em;
}

/* 杂志风格首页 */
.magazine-home {
  font-family: 'Noto Sans SC', -apple-system, sans-serif;
}
.magazine-home section {
  padding: 4rem 1.5rem;
}

/* Hero */
.hero {
  min-height: 100vh;
  background: #0d1f1c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
.hero-content {
  position: relative;
  z-index: 1;
}
.hero-eyebrow {
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  color: #e07b39;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  font-weight: 500;
}
.hero-title {
  font-family: 'Noto Serif SC', Georgia, serif;
  font-size: clamp(2.5rem, 10vw, 4.5rem);
  font-weight: 900;
  color: #f5f0e8;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}
.hero-title .line { display: block; }
.hero-title .accent {
  color: #e07b39;
  position: relative;
}
.hero-desc {
  font-size: 1.1rem;
  color: rgba(245, 240, 232, 0.7);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.8;
}
.hero-cta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}
.btn-primary {
  background: #e07b39;
  color: white;
}
.btn-secondary {
  background: transparent;
  color: #f5f0e8;
  border: 1px solid rgba(245, 240, 232, 0.3);
}
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(245, 240, 232, 0.4);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}

/* Section Common */
.section-header {
  margin-bottom: 2rem;
}
.section-label {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #e07b39;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.section-title {
  font-family: 'Noto Serif SC', Georgia, serif;
  font-size: clamp(1.75rem, 6vw, 2.5rem);
  font-weight: 700;
  color: #0d1f1c;
}
.section-quote {
  font-size: 0.95rem;
  color: #5a8a7a;
  font-style: italic;
  margin-top: 0.75rem;
  padding-left: 1rem;
  border-left: 2px solid #e07b39;
}

/* Featured */
.featured {
  background: linear-gradient(180deg, #faf7f2 0%, #f5f0e8 100%);
}
.featured-card {
  background: #0d1f1c;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}
.featured-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: linear-gradient(90deg, #e07b39, #c9a227);
}
.featured-image {
  height: 200px;
  background: linear-gradient(135deg, #6b4c7a 0%, #3d4f6b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.featured-badge {
  position: absolute;
  top: 1rem; left: 1rem;
  background: #e07b39;
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.4rem 0.8rem;
  text-transform: uppercase;
}
.featured-content {
  padding: 1.5rem;
}
.featured-title {
  font-family: 'Noto Serif SC', Georgia, serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #f5f0e8;
  margin-bottom: 0.75rem;
}
.featured-subtitle {
  font-size: 0.9rem;
  color: #5a8a7a;
  margin-bottom: 1rem;
  font-style: italic;
}
.featured-desc {
  font-size: 0.95rem;
  color: rgba(245, 240, 232, 0.8);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}
.featured-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #e07b39;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
}

/* Sci-Fi */
.sci-fi {
  background: #f5f0e8;
}
.sci-fi-visual {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1a3d36 0%, #2d5a50 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.story-grid {
  display: grid;
  gap: 1rem;
}
.story-card {
  background: white;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  border-left: 3px solid #2d5a50;
  transition: transform 0.2s, box-shadow 0.2s;
}
.story-card:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.story-number {
  font-family: monospace;
  font-size: 0.7rem;
  color: #e07b39;
  margin-bottom: 0.5rem;
}
.story-title {
  font-family: 'Noto Serif SC', Georgia, serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #0d1f1c;
  margin-bottom: 0.5rem;
}
.story-excerpt {
  font-size: 0.9rem;
  color: #5a8a7a;
  margin-bottom: 0.75rem;
}
.story-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  color: #e07b39;
}
.view-all {
  margin-top: 1.5rem;
  text-align: center;
}
.view-all-btn {
  display: inline-block;
  padding: 0.875rem 1.5rem;
  background: #0d1f1c;
  color: #f5f0e8;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Philosophy */
.philosophy {
  background: #1a3d36;
  color: #f5f0e8;
}
.philosophy .section-title {
  color: #f5f0e8;
}
.philosophy-visual {
  width: 60px;
  height: 60px;
  border: 2px solid #e07b39;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}
.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.philosophy-item {
  background: rgba(245, 240, 232, 0.05);
  padding: 1.25rem 1rem;
  border: 1px solid rgba(245, 240, 232, 0.1);
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: background 0.2s;
}
.philosophy-item:hover {
  background: rgba(245, 240, 232, 0.1);
}
.philosophy-item-number {
  font-family: monospace;
  font-size: 0.65rem;
  color: #e07b39;
  margin-bottom: 0.5rem;
}
.philosophy-item-title {
  font-family: 'Noto Serif SC', Georgia, serif;
  font-size: 0.95rem;
  font-weight: 600;
}

/* AI & Code */
.ai-code {
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
  color: #f5f0e8;
}
.ai-code .section-title,
.ai-code .section-label {
  color: #00ff88;
}
.ai-code .section-quote {
  border-left-color: #00ff88;
  color: rgba(255,255,255,0.6);
}
.ai-code-visual {
  font-family: monospace;
  font-size: 2rem;
  color: #00ff88;
  margin-bottom: 1rem;
}
.code-grid {
  display: grid;
  gap: 1rem;
}
.code-card {
  background: rgba(0,0,0,0.3);
  border: 1px solid rgba(0, 255, 136, 0.2);
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
}
.code-card:hover {
  border-color: #00ff88;
  background: rgba(0,0,0,0.5);
}
.code-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}
.code-title {
  font-family: 'Noto Serif SC', Georgia, serif;
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
}
.code-desc {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.6;
}
.code-tag {
  display: inline-block;
  margin-top: 0.75rem;
  padding: 0.25rem 0.75rem;
  background: rgba(0, 255, 136, 0.1);
  color: #00ff88;
  font-size: 0.7rem;
  font-family: monospace;
}

/* Practice */
.practice {
  background: linear-gradient(180deg, #f7f1e3 0%, #e8dcc4 100%);
}
.practice-visual {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #8b7355 0%, #a08060 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(139, 115, 85, 0.3);
}
.practice-grid {
  display: grid;
  gap: 1rem;
}
.practice-card {
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transition: transform 0.2s, box-shadow 0.2s;
}
.practice-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}
.practice-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}
.practice-title {
  font-family: 'Noto Serif SC', Georgia, serif;
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #5a4a3a;
}
.practice-desc {
  font-size: 0.9rem;
  color: #7a6a5a;
  line-height: 1.6;
}

/* Footer */
.home-footer {
  background: #0d1f1c;
  color: #5a8a7a;
  padding: 3rem 1.5rem;
  text-align: center;
}
.footer-title {
  font-family: 'Noto Serif SC', Georgia, serif;
  font-size: 1.25rem;
  color: #f5f0e8;
  margin-bottom: 0.75rem;
}
.footer-desc {
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
.footer-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}
.footer-link {
  color: #5a8a7a;
  text-decoration: none;
  font-size: 0.85rem;
}
.footer-link:hover {
  color: #e07b39;
}
.footer-copy {
  font-size: 0.8rem;
}

/* Responsive */
@media (min-width: 768px) {
  .magazine-home section {
    padding: 5rem 3rem;
  }
  .hero {
    padding: 3rem;
  }
  .hero-cta {
    flex-direction: row;
  }
  .btn {
    width: auto;
  }
  .story-grid,
  .code-grid,
  .practice-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .philosophy-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
