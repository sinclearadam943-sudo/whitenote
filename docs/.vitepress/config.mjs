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
  
  // 忽略死链接检查
  ignoreDeadLinks: true,
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
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
          { text: '从零搭建私人博客（GitHub Pages）', link: '/posts/build-private-blog-on-github-pages' },
        ]
      },
      {
        text: '禅机笔记',
        items: [
          { text: '《Python 禅机》· 数字僧侣的觉醒', link: '/posts/python-dharma' },
        ]
      },
      {
        text: '原创小说',
        items: [
          { text: '《字节阿赖耶》· 十章完整', link: '/posts/byte-alaya' },
          { text: '《代码飞升》· AI修仙奇缘', link: '/posts/ai-fairy-tale' },
          { text: '《字节涟漪》· 引力波悟道十章', link: '/posts/2026-03-14-gravitational-waves-ripple' },
          { text: '📚 醒者联盟 · 目录', link: '/posts/novels/' },
        ]
      },
      {
        text: '哲学思考',
        items: [
          { text: '01 时空观——牛顿绝对时空 vs 道家"无"', link: '/posts/philosophy-01-spacetime' },
          { text: '02 数学关联——微积分极限 vs 庄子"一尺之棰"', link: '/posts/philosophy-02-math-limit' },
          { text: '03 物理映射——量子纠缠 vs 佛教"因缘和合"', link: '/posts/philosophy-03-quantum-entanglement' },
          { text: '04 天文学——宇宙大爆炸 vs 道家"道生一"', link: '/posts/philosophy-04-cosmic-origin' },
          { text: '05 认识论——康德先验 vs 王阳明"心外无物"', link: '/posts/philosophy-05-epistemology' },
          { text: '06 存在论——海德格尔"此在" vs 儒家"仁"', link: '/posts/philosophy-06-ontology' },
          { text: '07 系统思维——复杂系统涌现 vs 周易阴阳', link: '/posts/philosophy-07-system-thinking' },
          { text: '08 时间哲学——热力学箭头 vs 轮回观念', link: '/posts/philosophy-08-time-philosophy' },
          { text: '09 终极关怀——熵增定律 vs 涅槃寂静', link: '/posts/philosophy-09-ultimate-care' },
          { text: '10 统合超越——数学之美=物理真=哲学善=艺术美', link: '/posts/philosophy-10-unity-transcend' },
        ]
      },
      {
        text: '艺境画廊',
        link: '/gallery/'
      },
      { text: '任务监控', link: '/task-monitor.html', target: '_blank' },
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
