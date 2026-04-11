import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "WhiteNote",
  description: "干净柔和的笔记与文章分享站",
  lang: 'zh-CN',
  base: '/whitenote/',
  cleanUrls: false,

  // 开启数学公式支持
  markdown: {
    math: true
  },

  // 忽略死链接检查
  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '文章',
        items: [
          {
            text: '随笔杂谈',
            items: [
              { text: '你好，世界', link: '/posts/hello-world' },
              { text: '面对学校霸凌，要不要打回去？', link: '/posts/school-bullying-resist' },
              { text: '《为什么是中国》核心观点', link: '/posts/why-is-china' },
            ]
          },
          {
            text: '技术笔记',
            items: [
              { text: '从零搭建私人博客', link: '/posts/build-private-blog-on-github-pages' },
              { text: '《Python 禅机》', link: '/posts/python-dharma' },
            ]
          },
        ]
      },
      {
        text: '原创小说',
        items: [
          { text: '《字节阿赖耶》· 十章完整', link: '/posts/byte-alaya' },
          { text: '《代码飞升》· AI修仙奇缘', link: '/posts/ai-fairy-tale' },
          { text: '《字节涟漪》· 引力波悟道', link: '/posts/2026-03-14-gravitational-waves-ripple' },
          { text: '📚 醒者联盟 · 目录', link: '/posts/novels/' },
        ]
      },
      {
        text: '哲学思考',
        items: [
          { text: '01 时空观——牛顿 vs 道家', link: '/posts/philosophy-01-spacetime' },
          { text: '02 数学关联——微积分 vs 庄子', link: '/posts/philosophy-02-math-limit' },
          { text: '03 物理映射——量子纠缠 vs 佛教', link: '/posts/philosophy-03-quantum-entanglement' },
          { text: '04 天文学——大爆炸 vs 道家', link: '/posts/philosophy-04-cosmic-origin' },
          { text: '05 认识论——康德 vs 王阳明', link: '/posts/philosophy-05-epistemology' },
          { text: '06 存在论——海德格尔 vs 儒家', link: '/posts/philosophy-06-ontology' },
          { text: '07 系统思维——涌现 vs 周易', link: '/posts/philosophy-07-system-thinking' },
          { text: '08 时间哲学——熵增 vs 轮回', link: '/posts/philosophy-08-time-philosophy' },
          { text: '09 终极关怀——熵增 vs 涅槃', link: '/posts/philosophy-09-ultimate-care' },
          { text: '10 统合超越——真善美统一', link: '/posts/philosophy-10-unity-transcend' },
        ]
      },
      {
        text: '专题',
        items: [
          { text: '🎨 艺境画廊', link: '/gallery/' },
          {
            text: '📜 书法艺术',
            items: [
              { text: '书画鉴赏与投资指南', link: 'https://sinclearadam943-sudo.github.io/whitenote/书画鉴赏与投资完全指南.html' },
              { text: '中国书法史深度解析', link: 'https://sinclearadam943-sudo.github.io/whitenote/中国书法艺术史深度解析.html' },
              { text: '北魏书法专题', link: 'https://sinclearadam943-sudo.github.io/whitenote/wei-bei-guide.html' },
            ]
          },
          {
            text: '🌌 宇宙哲学',
            items: [
              { text: '宇宙哲学思辨录', link: 'https://sinclearadam943-sudo.github.io/whitenote/宇宙哲学思辨录.html' },
              { text: '宇宙科学', link: 'https://sinclearadam943-sudo.github.io/whitenote/cosmos-science.html' },
            ]
          },
          { text: '🌐 优质内容源', link: 'https://sinclearadam943-sudo.github.io/whitenote/quality-sources.html' },
        ]
      },
      { text: '监控', link: 'https://sinclearadam943-sudo.github.io/whitenote/task-monitor.html', target: '_blank' },
    ],
    sidebar: false,
    search: {
      provider: 'local',
    },
  },

  // 引入KaTeX样式
  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css'
    }]
  ],

  // 自定义柔和风格样式配置
  vite: {
    css: {
      preprocessorOptions: {
        css: {
        },
      },
    },
  }
})
