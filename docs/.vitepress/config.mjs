import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "WhiteNote",
  description: "干净柔和的笔记与文章分享站",
  lang: 'zh-CN',
  base: '/whitenote/',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '小说连载', link: '/posts/byte-alaya' },
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
        text: '原创连载',
        items: [
          { text: '《字节阿赖耶》· 十章完整', link: '/posts/byte-alaya' },
        ],
      },
    ],
    search: {
      provider: 'local',
    },
  },

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
