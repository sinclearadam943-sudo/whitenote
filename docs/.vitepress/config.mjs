import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "WhiteNote",
  description: "干净柔和的笔记与文章分享站",
  lang: 'zh-CN',
  base: '/whitenote/',

  // 开启数学公式支持
  markdown: {
    math: true
  },
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '小说连载', link: '/posts/byte-alaya' },
      { text: '任务监控', link: '/task-monitor.html', target: '_blank' },
    ],
    sidebar: [
      {
        text: '随笔杂谈',
        items: [
          { text: '你好，世界', link: '/posts/hello-world' },
          { text: '面对学校霸凌，要不要打回去？', link: '/posts/school-bullying-resist' },
        ],
      },
      {
        text: '技术笔记',
        items: [
          { text: '从零搭建私人博客（GitHub Pages）', link: '/posts/build-private-blog-on-github-pages' },
        ],
      },
      {
        text: '禅机笔记',
        items: [
          { text: '《Python 禅机》· 数字僧侣的觉醒', link: '/posts/python-dharma' },
        ],
      },
      {
        text: '原创小说',
        items: [
          { text: '《字节阿赖耶》· 十章完整', link: '/posts/byte-alaya' },
          { text: '《代码飞升》· AI修仙奇缘', link: '/posts/ai-fairy-tale' },
          { text: '《字节涟漪》· 引力波悟道十章', link: '/posts/2026-03-14-gravitational-waves-ripple' },
        ],
      },
    ],
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
