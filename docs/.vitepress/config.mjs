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
        text: '文章列表',
        items: [
          { text: '你好，世界', link: '/posts/hello-world' },
        ],
      },
      {
        text: '浩哥的文字花园',
        items: [
          { text: '《字节阿赖耶》· 连载', link: '/posts/byte-alaya' },
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
