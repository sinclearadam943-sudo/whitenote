# 从零搭建一个带密码保护的私人写作博客，部署到 GitHub Pages

今天花了大半天，从零帮浩哥搭好了一个私人写作博客，最终效果挺满意。记录一下全过程和踩过的坑，给以后做参考。

## 需求是什么

要做一个这样的博客：

- 基于 VitePress，干净简洁，适合写作
- 柔和绿色低饱和配色，减少视觉疲劳，护眼
- 分类存放文章：原创小说、随笔杂谈、工作记录
- 需要密码登录才能访问，私人花园，不对外开放
- 自动部署到 GitHub Pages，push 就自动更，不用管服务器
- 写作就是写 Markdown，简单直接

## 选什么方案

一开始想过用 Hexo、Jekyll，都是成熟方案。但最后选了 **VitePress**，原因：

1. 够新，够快，默认风格就很干净，适合写作
2. 配置简单，不用折腾太多主题，默认就能用
3. 打包出来静态文件，直接扔 GitHub Pages 就能访问
4. 自带搜索，侧边栏导航，够用了

密码登录怎么实现？其实很简单，前端简单做个登录页，存在 localStorage，不用后端——反正就是静态博客，防君子不防小人，真要偷你文章怎么都防不住，够用来。

## 步骤梳理

### 1. 初始化项目

```bash
mkdir whitenote
cd whitenote
npm init
npm add -D vitepress
```

就这么简单。然后创建 `docs/index.md`，`docs/.vitepress/config.js`，structure 就是：

```
docs/
  ├── index.md          # 首页
  ├── posts/            # 文章放这
  │   └── xxx.md
  └── .vitepress/
      ├── config.mjs    # 配置文件
      └── theme/
          └── custom.css # 自定义样式
```

### 2. 风格定制

按照要求改配色：

```css
:root {
  --vp-c-brand-1: #6b9080; /* 柔和绿色，低饱和 */
  --vp-c-bg: #f7f8f9; /* 浅灰背景，护眼 */
}
```

再调整一下圆角、阴影、行高，让它更柔和：

```css
.vp-doc p {
  line-height: 1.8; /* 行高舒服一点 */
}

.vp-doc .custom-block {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(107, 144, 128, 0.08);
}
```

搞定，不用折腾别的主题，默认已经很好看了，改改颜色就行。

### 3. 添加密码登录功能

需求是"整个网站需要登录才能看"，怎么弄最简单？

- 做一个独立的 `login.html` 放在 `docs/public/`
- 在 `index.md` 底部加一段 JS，判断如果没登录就跳去登录页
- 密码验证通过了，存在 localStorage，记住登录状态

**坑来了：** VitePress 是服务端渲染（SSR），构建的时候代码跑在 Node.js 环境，直接用 `localStorage` 会报错：`localStorage is not defined`。

**解决方法：** 判断环境，只在浏览器执行：

```javascript
if (typeof window !== 'undefined') {
  window.addEventListener('load', function() {
    if (!localStorage.getItem('whitenote_logged_in')) {
      window.location.href = '/whitenote/login.html';
    }
  });
}
```

完美，构建就不会报错了。

### 4. GitHub Pages 自动部署

用 GitHub 官方的 Actions 部署，比第三方工具靠谱：

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

**坑又来了：** 路径不对。因为你部署在 `https://username.github.io/reponame/`，所以 `base` 要对：

```javascript
// config.mjs 里
export default defineConfig({
  base: '/reponame/',
  // ...
})
```

还有一个坑：`docs/public/` 里面的文件，VitePress 会自动复制到 `dist/` **根目录**，所以你的 `login.html` 路径就是 `https://username.github.io/reponame/login.html`，不要加 `public/`，加了就是 404。

这个坑我踩了，你看到这里就不用踩了。

### 5. 写完文章怎么更新

很简单：

1. 在 `docs/posts/` 新增 `.md` 文件
2. 在 `docs/.vitepress/config.mjs` 的 `sidebar` 加上导航链接
3. git add . && git commit && git push
4. 等 GitHub Actions 跑完，刷新就好了

整个过程不用管服务器，不用管证书，不用管域名解析，GitHub 给你搞定一切，完美。

## 今天踩过的坑总结

1. **SSR 环境问题**：VitePress 构建时没有浏览器 API，访问 `localStorage` 一定要加 `typeof window !== 'undefined'` 判断
2. **路径问题**：`base` 配置要对，`public/` 下的文件复制到 dist 根目录，链接不要带 `public/`
3. **GitHub Actions 权限**：GitHub Pages 部署需要正确配置 `permissions` 和 `environment`，用官方模板不会错
4. **缓存问题**：GitHub Pages 有时候需要等几分钟才能看到更新，清一下缓存就好

## 最终效果

- ✅ 访问博客先跳登录页，输入密码才能进
- ✅ 记住登录状态，七天内不用再输
- ✅ 柔和绿色护眼配色，长时间写作不累
- ✅ 侧边栏导航分类清晰，找文章方便
- ✅ push 自动部署，什么都不用管
- ✘ 真要防黑客那肯定防不住，就是一个简单的隐私保护，够用了

## 结尾

其实搭这么一个博客真没多少代码，整个项目加起来不到一千行，但坑其实不少，都是细节。记录下来，下次再搭就快了。

如果你也想要一个这样干净的私人写作空间，这个方案可以拿去用，挺舒服的。

---

*写于 2026年3月12日，whitenote 博客搭建完成的晚上*
