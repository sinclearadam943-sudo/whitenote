import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "WhiteNote",
  description: "干净柔和的笔记与文章分享站",
  lang: 'zh-CN',
  base: '/whitenote/',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/hello-world' },
    ],
    sidebar: [],
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
