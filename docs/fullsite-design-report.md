# WhiteNote 全站设计与内容架构综合报告

> 基于 21 个 HTML 页面、12 个 Markdown 内容文件、6 个 YAML 元数据、3 个 JSON 数据源及 VitePress 配置的跨层综合分析。

---

## 1. 执行摘要 (Executive Summary)

WhiteNote 是一个气质鲜明但工程规范尚未收敛的站点。它拥有强烈的"数字书房"美学基因——暖调纸感背景、Noto Serif SC 中文衬线、深林墨绿与古金铜橙的配色体系、左侧边框强调与页脚印章——但在视觉 token、内容 frontmatter、数据 schema 和导航架构四个层面均存在显著分裂。

**整体一致性评分：62/100**

评分构成如下：
- **视觉识别（Visual Identity）**: 70/100。核心美学元素（暖纸、衬线、金铜点缀、hover 上浮、左侧边框强调）在 21 个页面中的 16 个以上得到贯彻。但 CSS 变量命名体系分裂为至少 5 种方言，Tailwind 与手写 CSS 双轨并行，功能性页面（login / task-monitor / landing）与主站风格严重脱节，圆角、按钮、阴影缺乏工程标准。
- **内容规范（Content Standard）**: 55/100。Markdown 文件仅有约 50% 包含 frontmatter；其余依赖 H1 或内联 HTML 头。标题位置、导航链接格式（`.html` vs 无扩展名）、日期格式、语言混用（中英键混排）均未统一。小说文件大量使用自定义 `<style>` 头，画廊页重度依赖 HTML/CSS，与 VitePress 的 Markdown 优先哲学存在张力。
- **数据架构（Data Architecture）**: 68/100。YAML 元数据内部一致性高达 95%，评分系统（quality/depth/literature/difficulty/time）和标签体系已形成标准。但 YAML 与 JSON 的 schema 对齐度仅 60%： artworks.json 使用扁平标签和日期型 ID，quotes.json 使用单标签字符串，时间字段命名（`created_at` vs `date` vs `nextRun`）不统一，评分系统未覆盖 JSON 数据。
- **信息架构（Information Architecture）**: 55/100。Johnny Decimal（JD）框架在文档层面设计完整（10-99 分类），但实际落地率仅 55%：小说批次号与 JD 编号映射混乱，非小说内容（tech/essay）大多缺失 JD 编号。VitePress 导航结构基本可用，但 `sidebar: false` 导致系列关系和长文章节无法通过侧边栏呈现，URL 路由风格混用（`/posts/essays/NNN-标题`、`/posts/novels/batchNN/NNN-标题`、`/posts/文件名` 无编号），破坏了可预测性。

**核心诊断**：WhiteNote 不是"没有设计系统"，而是有**多个互不兼容的设计系统**在同时运行——magazine 子系统、cosmos-science 子系统、功能页孤岛、Tailwind 实验页、AI 生成的一次性主题页。站点已从"风格探索期"进入"需要收敛期"，当前最紧迫的任务是建立一层跨页面的统一协议（design tokens + frontmatter schema + JD 路由），否则每次新增内容都会放大技术债务。

---

## 2. 视觉设计语言 (Visual Design Language)

### 2.1 提示词语言 (Prompt Language)

WhiteNote 的设计语言可被描述为**「现代中文博雅长文」**——一种将中国传统出版美学（宣纸底色、朱砂点缀、烫金勾边、钤印收尾）与现代网页交互（粘性导航、渐变头图、卡片布局、微动效）相融合的编辑式设计系统。

**整体氛围**：一间数字书房。窗外是星夜或园林，案上是展开的卷轴。氛围沉静、克制、有仪式感。阅读被框定为一种需要慢下来的行为。

**色彩哲学**：拒绝冷白极简，拥抱暖调纸感。画布不是 `#ffffff`，而是米白 `#F9F6F0`、cream `#faf8f3` 或 parchment `#faf7f2`。深色区域不用纯黑，而用深林墨绿 `#0d1f1c` 或深空蓝黑 `#0a0a0f`。点睛色遵循"自然矿物"逻辑：赭石铜橙 `#e07b39`、朱砂 `#B85450`、古金 `#C9A961`、青玉 `#5C8D7D`、鼠尾草 `#6b9080`。

**字体选择**：中文标题与长文正文统一使用 **Noto Serif SC**（或 Source Han Serif SC / SimSun / STSong 作为后备），营造典籍般的庄重感。英文展示字根据主题在 **Playfair Display**（经典杂志权威感）、**Cormorant Garamond**（优雅复古）之间切换。UI 与辅助文字使用系统无衬线（`-apple-system, Segoe UI, Roboto`）。科技主题页面可引入 **Space Grotesk**、**Sora** 增加未来感。

**布局原则**：
- 窄栏居中长文：内容容器宽度集中在 `800px–900px`，拒绝满屏拉伸。
- 慷慨的呼吸感：章节垂直间距 `80px–120px`，行高 `1.8–2.0`。
- 粘性/固定导航：固定 `280px` 侧边栏或粘性顶部导航是标准模式。
- 章节化结构：所有长文被明确切分为 chapter/section，带有大号章节编号或装饰性分隔线。
- 卡片式内容分组：子主题常以卡片、引用块或信息框呈现。

**组件行为**：
- 悬浮动效克制优雅：卡片 hover 上浮 `4px–8px`，过渡时长 `0.3s–0.5s`，缓动多为 `ease` 或 `cubic-bezier(0.16, 1, 0.3, 1)`。
- 边框作为装饰语言：左侧 `3px–5px` 彩色边框是标注重点、引用块、TOC 的惯用手法。
- 印章/徽章收尾：页脚常见 `80px–100px` 的朱砂色圆章，呼应传统出版物的落款钤印。
- 渐变勾边与下划线：金色或铜橙色的水平渐变条常被用作标题下划线、卡片顶边、章节分隔。

### 2.2 工程化语言 (Engineering Language)

**核心 CSS 变量色值**（高频但尚未统一命名）：

```css
/* 浅色纸面系统 */
--bg-paper: #F9F6F0;          /* 书法史、书画鉴赏 */
--paper-cream: #faf8f3;       /* 宇宙哲学 */
--cream: #FDF5E6;             /* 婆媳关系 */
--paper: #FAFAF8;             /* Python 指南 */
--parchment: #faf7f2;         /* index-v3 */

/* 深色系统 */
--bg-ink: #0d1f1c;            /* magazine, landing-v2 overlay */
--color-cosmos: #0a0a0f;      /* cosmos-science-v2 */

/* 点睛色 */
--accent-copper: #e07b39;     /* magazine, index-v3 */
--gold-warm: #c9a961;         /* 宇宙哲学、书法史 */
--cinnabar: #b85450;          /* 书法史、宇宙哲学 */
--primary-sage: #6b9080;      /* login, task-monitor, landing */
--python-blue: #306998;

/* 文字色 */
--text-primary: #1A202C;      /* landing-v2 */
--text-secondary: #4A5568;
--text-muted: #718096;
--text-cream: #f5f0e8;        /* magazine */
--text-ink: #2C2C2C;          /* 书法史 */
```

**字体栈**：

```css
--font-serif: 'Noto Serif SC', 'Source Han Serif SC', 'SimSun', 'STSong', serif;
--font-display: 'Playfair Display', 'Crimson Text', serif;
--font-display-alt: 'Cormorant Garamond', serif;
--font-tech: 'Sora', sans-serif;
--font-mono-tech: 'Space Grotesk', monospace;
--font-code: 'Fira Code', 'Consolas', monospace;
--font-sans: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

**字号与排版尺度**：

```css
--text-hero: clamp(2.5rem, 6vw, 4.5rem);
--text-hero-lg: clamp(3.5rem, 10vw, 7rem);
--text-section: clamp(1.75rem, 4vw, 2.5rem);
--text-body: 1rem;            /* 16px */
--text-body-lg: 1.125rem;     /* 18px */
--text-label: 0.75rem;        /* 12px */
--leading-body: 1.7;
--leading-editorial: 1.9;
--leading-loose: 2.0;
--tracking-label: 0.15em;
--tracking-hero: 0.08em;
```

**间距系统**：

```css
--container-narrow: 800px;    /* 叙事/散文页 */
--container-standard: 900px;  /* 参考/指南页 */
--container-wide: 1200px;     /* magazine */
--container-dashboard: 1600px;/* task-monitor */
--section-padding-y: 5rem;    /* 80px */
--section-padding-y-lg: 6rem; /* 96px */
--section-padding-y-xl: 8rem; /* 128px */
--card-padding: 1.5rem;       /* 24px */
--grid-gap: 1.5rem;           /* 24px */
--grid-gap-lg: 2rem;          /* 32px */
--grid-gap-xl: 3rem;          /* 48px */
```

**圆角规则**（当前分化，建议收敛）：

| 页面类型 | 当前圆角值 | 建议标准 |
|---------|-----------|---------|
| 杂志/文学页 | `0px–4px` | `4px` 按钮/标签 |
| 内容长文页 | `8px–12px` | `8px` 卡片/引用块 |
| 心理学/友好主题 | `12px–16px` | `12px` 大容器 |
| 功能页 | `16px` | `12px` 大容器 |
| 宇宙科学 | `16px` (1rem) | `12px` 卡片 |
| landing 按钮 | `30px` (pill) | `4px` 或 `8px` |

**阴影值**：

```css
/* 卡片默认 */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

/* 卡片悬浮 */
box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);

/* 特色卡片 */
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.04);

/* 登录卡片（带主题色） */
box-shadow: 0 4px 16px rgba(107, 144, 128, 0.12);
```

**动画时长与缓动**：

```css
transition: all 0.3s ease;
transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);

/* 滚动显示 */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
```

**组件规则库**：

```css
/* 主按钮 */
.btn-primary {
  background: #1A202C;
  color: #FAFBFC;
  padding: 0.875rem 2rem;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
}

/* 杂志 read-btn */
.read-btn {
  background: #0d1f1c;
  color: #f5f0e8;
  padding: 0.75rem 1.5rem;
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
}

/* 引用块 */
blockquote {
  background: var(--bg-secondary);
  border-left: 4px solid var(--accent-color);
  padding: 1.5rem 2rem;
  font-style: italic;
  line-height: 1.9;
}

/* 内容卡片 */
.content-card {
  background: var(--bg-paper);
  border-radius: 8px;
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.content-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

/* 粘性导航 */
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-light);
}

/* 页脚印章 */
.footer-seal {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #B85450;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 10px 40px rgba(184, 84, 80, 0.3);
}
```

### 2.3 统一性矩阵 (Consistency Matrix)

| Element | Status (统一/不统一) | Evidence | Severity |
|---------|---------------------|----------|----------|
| 暖调纸感背景 | 统一 | 21 个页面全部使用米白/cream/parchment 区间，无冷白 #ffffff | 低 |
| Noto Serif SC 中文主字体 | 统一 | 17/21 文件使用，仅 login/task-monitor/wei-bei-guide/landing 例外 | 中 |
| 铜橙/金色主强调色 | 统一 | magazine/index-v3/书法史/宇宙哲学共享金-铜-橙色系 | 低 |
| 深林墨绿深色基准 | 统一 | 需要深色时统一使用 #0a0a0a–#0d1f1c 区间，无纯黑 | 低 |
| hover 上浮动效 | 统一 | 19/21 文件使用 `translateY(-4px ~ -10px)` + 阴影加深 | 低 |
| 左侧边框强调块 | 统一 | 几乎所有页面使用 `border-left: 3px–5px solid [accent]` | 低 |
| 章节化长文结构 | 统一 | 所有长内容页明确切分为 chapter，带大号标题和分隔 | 低 |
| 粘性/固定导航 | 统一 | 18/21 文件采用某种形式的固定或粘性导航 | 低 |
| CSS 变量命名体系 | 不统一 | landing-v2 用 `--bg-primary`，index-v3 用 `--color-ink`，书法史用 `--accent-red`，cosmos 用 `--color-cosmos`，landing 完全无变量 | **高** |
| 圆角尺度 | 不统一 | magazine 按钮 `0px`，内容页 `8px`，poxi/login/cosmos `16px`，landing 按钮 `30px` pill | **高** |
| 按钮样式 | 不统一 | 5 个页面集群有 6 种截然不同的按钮处理 | **高** |
| 英文展示字体 | 不统一 | magazine 用 Playfair Display，宇宙哲学用 Cormorant Garamond，cosmos 用 Sora，quality-sources 用 Inter | 中 |
| 布局容器宽度 | 不统一 | 叙事页 800px，指南页 900px，dashboard 1600px，magazine 1200px | 中 |
| 阴影值 | 不统一 | 阴影不仅深度不同，还承担"主题染色"功能（绿/橙/棕各有染色阴影） | 中 |
| 段落首行缩进 | 不统一 | 文学页用 `text-indent: 2em`，工具页/功能页不用 | 中 |
| 动画/交互密度 | 不统一 | cosmos 有 letter-slide-in 和 glow，login/task-monitor/landing 几乎无动画 | 中 |
| Tailwind vs 手写 CSS | 不统一 | cosmos/quality-sources/wei-bei-guide 使用 Tailwind CDN，其余 18 个手写 `<style>` | **高** |
| 功能页品牌一致性 | 不统一 | login/task-monitor/landing 使用 #6b9080 鼠尾草绿，无衬线字体，无金铜/墨绿体系，与主站完全脱节 | **高** |

---

## 3. 内容体系架构 (Content Architecture)

### 3.1 内容类型图谱

基于对 12 个 Markdown 样本和元数据的分析，WhiteNote 当前存在以下 5 大内容类型：

| 内容类型 | 代表文件 | 结构特征 | 视觉依赖 |
|---------|---------|---------|---------|
| **学术随笔 (Essay)** | `philosophy-01-spacetime.md`, `003-the-art-of-waiting.md` | YAML frontmatter + H1→H2→H3 层级 + 引用块 + 脚注式导航链接 + 尾部元数据（字数/完成时间） | 低，纯 Markdown |
| **创意小说 (Fiction)** | `001-信号.md`, `031-诗人的陨落.md`, `ai-fairy-tale.md`, `python-dharma.md` | 3 种变体：A) 复杂 HTML `<style>` 头 + 编号徽章 + 元数据网格；B) 简单 Markdown + 副标题 em-dash + 章节标记；C) 最小 frontmatter (`outline: deep`) + 内联元数据 | **高**，小说页大量使用自定义 CSS 头 |
| **画廊/视觉内容 (Gallery)** | `gallery/index.md`, `gallery/works/guernica.md` | 重度 HTML/CSS 依赖，CSS Grid 卡片布局，图片占位符/emoji fallback，定义列表式元数据表 | **极高**，几乎为 HTML 页面 |
| **学术长文/教育 (Academic)** | `中国书法艺术史深度解析.md` | 契约式头部概述 + 章节依赖表 + 多级标题 (`### 1.1`) + 大量 Markdown 表格 + 引用格式：`人名《作品》` | 中，Markdown 表格密集 |
| **系统/导航文档 (System)** | `navigation.md`, `tagging-system.md` | ASCII 艺术图 + 代码块 + 层级树列表 + YAML 示例 + 参考表格 | 低，信息密度高 |

**关键发现**：站点的内容生产呈现"Markdown 与 HTML 混用"状态。小说和画廊为了表达品牌化的文章头、卡片网格、视觉布局，被迫在 Markdown 中写入大量内联 CSS 和 HTML。这意味着当前的内容架构已经触及 VitePress 默认主题的表达上限，急需组件化封装（如自定义文章头组件、画廊卡片组件）。

### 3.2 Frontmatter 与元数据规范

**当前统一使用的键**（在有 frontmatter 的文件中）：

| Key | 出现频率 | 数据类型 | 示例值 |
|-----|---------|---------|--------|
| `title` | 100% | String | "时空观——牛顿绝对时空 vs 道家'无'" |
| `date` | ~60% | ISO Date | 2026-03-22 |
| `tags` | ~50% | Array | [物理学, 中国哲学, 时空观] |
| `description` / `summary` | ~40% | String | 文章摘要 |
| `author` | ~20% | String | "AI" |
| `categories` | ~20% | Array | [essays] |
| `outline` | ~10% | String | "deep" |

**严重问题**：
1. **Frontmatter 覆盖率仅 50%**：一半的文件完全缺失 frontmatter，依赖 H1 或 HTML 头提取标题，导致任何基于 frontmatter 的自动化（目录生成、RSS、搜索索引、标签云）都会失效。
2. **语言混用**：键名有时是英文（`title`, `date`, `tags`），内容有时全中文、有时全英文、有时中英混杂。画廊页和系统文档中甚至出现中文键/值。
3. **日期格式不一致**：虽然多为 ISO 格式，但部分文件将日期写在内联 HTML 中而非 frontmatter。
4. **Tags 格式分裂**：有的是内联数组 `tags: [a,b,c]`，有的是块数组 `tags:\n  - a\n  - b`。
5. **导航链接格式分裂**：有的用 `.html` 后缀（如 `/whitenote/posts/novels/batch01/001-信号.html`），有的无扩展名（如 `/posts/hello-world`）。

**YAML 元数据 Schema（`docs/metadata/*.yaml`）的高一致性**：

6 个 YAML 文件使用完全统一的 schema，包含：`id`, `title`, `file`, `ratings`（quality/depth/literature/difficulty/time）, `tags`（category/themes/features）, `stats`（word_count/created_at/updated_at）, `related`, `comment`。

**关键断裂**：YAML 元数据与 Markdown 文件内的 frontmatter 是两套并行的元数据系统。YAML 用于机器索引，frontmatter 用于 VitePress 渲染，但两者并未打通。同一篇文章的标题、日期、标签可能在 YAML、frontmatter、H1、内联 HTML 中出现 4 个不同版本。

### 3.3 Johnny Decimal 集成现状

**文档层面的 JD 框架**：

```
10-19  道 (TAO)      - 第一性原理
20-29  法 (METHOD)   - 方法论
30-39  术 (TECH)     - 具体技艺
40-49  器 (TOOL)     - 产出物 ⭐ 公开内容
50-59  境 (CONTEXT)  - 语境
60-69  脉 (TRACE)    - 轨迹
70-79  生 (LIFE)     - 个人生活（私人）
80-89  传 (LEGACY)   - 传承（私人）
90-99  系 (SYSTEM)   - 系统工具
```

**实际落地情况**：

| 内容 | JD 编号 | 实际 ID / 文件路径 | 对齐状态 |
|-----|---------|-------------------|---------|
| 虚空中的声音 | 40.10.10.27 | `novels-batch07-027` | ❌ 批次号与 JD 脱节（batch07 但 JD 是 .27） |
| 诗人的陨落 | 40.10.10.31 | `novels-batch08-031` | ❌ 批次号与 JD 脱节 |
| 牺牲与选择 | 40.10.10.38 | `novels-batch11-038` | ❌ 批次号与 JD 脱节 |
| 字节阿赖耶 | 40.30.10.01 | `byte-alaya` | ❌ 无 JD 编号 |
| Python 禅机 | 40.30.10.02 | `python-dharma` | ❌ 无 JD 编号 |
| The Art of Waiting | 40.40.10.03 | `essays-003-waiting` | ⚠️ 部分匹配（003 与 40.40.10.03 无直接映射） |

**核心问题**：
1. **批次号 ≠ JD 编号**：`batch07` 里放了 027 号作品，但 JD 期望 `40.10.10.27` 应该指向一个独立的分类层级，而非 batch 文件夹。
2. **非小说内容缺失 JD 编号**：tech 和 essay 内容几乎没有对应的十进制 ID 在文件名或路径中体现。
3. **metadata ID 与 JD 不对应**：`byte-alaya`、`python-dharma` 等语义 ID 无法直接推导 JD 分类，需要额外的映射表。
4. **文件路径未体现 JD**：当前路径 `docs/posts/novels/batch07/027-虚空中的声音.md` 与 `40.10.10.27` 之间没有可计算的映射规则。

### 3.4 信息架构与导航

**VitePress Nav 当前结构**：

```
首页
├── 文章
│   ├── 随笔杂谈（4篇）
│   └── 技术笔记（2篇）
├── 原创小说
│   ├── 单篇小说（3篇）
│   └── 醒者联盟目录
├── 哲学思考（10篇系列）
├── 专题
│   ├── Magazine
│   ├── 艺境画廊
│   ├── 书法艺术（3篇外链）
│   ├── 宇宙哲学（2篇外链）
│   ├── Python（1篇外链）
│   └── 优质内容源
└── 监控（外链）
```

**导航与 JD 框架的映射评估**：

| JD 分类 | 当前导航 | 匹配度 |
|--------|---------|--------|
| 40.10 科幻小说 | 原创小说 | ✅ 匹配 |
| 40.20 哲学作品 | 哲学思考 | ✅ 匹配 |
| 40.30 技术作品 | 技术笔记 | ⚠️ 部分匹配（混入"文章"中） |
| 40.40 随笔 | 随笔杂谈 + 文章 | ⚠️ 分散在多个入口 |
| 40.50 艺术作品 | 艺境画廊 + 书法艺术 | ✅ 匹配 |
| 40.60 心法 | 未独立显示 | ❌ 缺失 |
| 10-30 道法 | 哲学思考（混排） | ⚠️ 混合 |

**Sidebar 策略**：当前配置为 `sidebar: false`（全局禁用）。

这带来的问题：
1. 无法展示 10 篇哲学思考系列的文章层级和阅读顺序。
2. 无法展示"醒者联盟"小说的编号序列（001→027→031→038）。
3. 无法展示 JD 编号层次结构，用户无法通过导航理解内容分类学。
4. 长文章（如《中国书法艺术史深度解析》）的章节无法快速跳转。

**URL 路由约定**：

| 内容类型 | URL 模式 | 示例 |
|---------|---------|------|
| 随笔 | `/posts/essays/NNN-标题` | `/posts/essays/003-the-art-of-waiting` |
| 小说 | `/posts/novels/batchNN/NNN-标题` | `/posts/novels/batch07/027-虚空中的声音` |
| 技术 | `/posts/文件名` | `/posts/byte-alaya` |
| 哲学 | `/posts/philosophy-NN-标题` | `/posts/philosophy-08-time-philosophy` |

**路由问题**：
- 风格不统一：有的带编号（essays, novels, philosophy），有的无编号（tech）。
- 小说 batch 目录与编号逻辑混乱。
- 缺少基于 JD 编号的路由（如 `/posts/40.10.10.27-虚空中的声音`）。
- 画廊页使用 `.html` 后缀，与其他页面不一致。

---

## 4. 跨层映射分析 (Cross-Layer Mapping)

WhiteNote 的站点由三个相互依赖的层次构成：**视觉呈现层**（HTML/CSS）、**内容结构层**（Markdown + frontmatter）、**数据系统层**（YAML/JSON + VitePress 配置）。本章节分析它们之间的连接点与断裂缝。

### 4.1 三层映射概览

```
┌─────────────────────────────────────────────────────────────────────┐
│                        视觉呈现层 (Visual Layer)                      │
│  21 个 HTML 文件 │ CSS 变量 │ Tailwind/手写混合 │ 组件样式              │
└───────────────────────────┬─────────────────────────────────────────┘
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
┌─────────────────┐ ┌───────────────┐ ┌─────────────────┐
│ 连接点 1        │ │ 连接点 2      │ │ 连接点 3        │
│ 内容类型决定    │ │ frontmatter   │ │ VitePress nav   │
│ 页面模板选择    │ │ 决定渲染组件  │ │ 决定页面入口    │
│ (essay→窄栏    │ │ (gallery需要  │ │ 和面包屑        │
│  fiction→小说头│ │  特殊card组件)│ │                 │
└─────────────────┘ └───────────────┘ └─────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        内容结构层 (Content Layer)                     │
│  Markdown 文件 │ Frontmatter │ HTML 内联样式 │ 章节结构              │
└───────────────────────────┬─────────────────────────────────────────┘
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
┌─────────────────┐ ┌───────────────┐ ┌─────────────────┐
│ 断裂缝 1        │ │ 断裂缝 2      │ │ 断裂缝 3        │
│ 50% 文件无      │ │ 小说自定义    │ │ Markdown 内     │
│ frontmatter     │ │ HTML 头与     │ │ 的 `.html` 链接 │
│ 导致 VitePress  │ │ VitePress     │ │ 与 VitePress    │
│ 无法自动提取    │ │ 主题变量不    │ │ 路由策略冲突    │
│ 标题/日期/标签  │ │ 兼容          │ │                 │
└─────────────────┘ └───────────────┘ └─────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        数据系统层 (Data Layer)                        │
│  YAML 元数据 │ JSON 数据源 │ VitePress config.mjs │ JD 框架文档       │
└─────────────────────────────────────────────────────────────────────┘
```

### 4.2 主要断裂缝 (Major Seams)

#### 断裂缝 A：YAML 元数据 ↔ Markdown 文件 ↔ 视觉层（"三张皮"问题）

**表现**：
- YAML 文件（`docs/metadata/`）有完美的 `id`、`title`、`file`、`ratings`、`tags`、`stats`。
- Markdown 文件有一半没有 frontmatter，有 frontmatter 的也使用不同的键名和格式。
- 视觉层（HTML 页面）又是另一套完全独立的系统，通过硬编码 CSS 呈现，不读取 YAML 也不读取 Markdown frontmatter。

**影响**：
- 新增一篇内容，需要同时维护：1) Markdown 正文；2) YAML 元数据；3) 如果是专题页可能还要维护 HTML。三个源之间没有自动同步机制，极易出现元数据不一致。
- 搜索、RSS、标签云、推荐系统如果基于 YAML 构建，会遗漏那些没有 YAML 对应的 HTML 专题页（如 magazine、cosmos-science）。

**整改方向**：建立"单一事实源"（Single Source of Truth）。建议以 YAML 为权威元数据源，通过构建脚本自动生成 frontmatter 注入到 Markdown，或通过 VitePress 插件在构建时读取 YAML 注入页面数据。HTML 专题页应逐步迁移到基于统一模板生成，或至少在 YAML 中注册其元数据。

#### 断裂缝 B：Johnny Decimal 文档 ↔ 实际文件路径 ↔ URL 路由

**表现**：
- JD 分类文档 beautifully designed：10-19 道、20-29 法、30-39 术、40-49 器……
- 实际文件路径：`docs/posts/novels/batch07/027-虚空中的声音.md`
- URL：`/posts/novels/batch07/027-虚空中的声音`
- 没有任何一层直接暴露 `40.10.10.27` 这个编号。

**影响**：
- JD 框架沦为文档层面的"象牙塔"，无法被用户感知，也无法被机器利用。
- 批次号 `batch07` 与作品序号 `027` 的逻辑关系不明，新作者难以判断应该把文件放到哪个 batch。
- 无法通过 URL 预测内容分类（看到 `/posts/byte-alaya` 无法知道它是 40.30 技术类）。

**整改方向**：
1. 重构文件路径，使其与 JD 编号对齐：如 `docs/posts/40/40.30/40.30.10.02-python-dharma.md`。
2. 或建立 `metadata/id-mapping.yaml` 映射表，并通过构建脚本将 JD 编号注入 URL（如 `/posts/40.30.10.02-python-dharma`）。
3. 启用 VitePress sidebar，按 JD 分类层级组织导航。

#### 断裂缝 C：Tailwind 实验页 ↔ 手写 CSS 页面 ↔ 共享组件库

**表现**：
- `cosmos-science`、`quality-sources`、`wei-bei-guide` 使用 Tailwind CSS CDN。
- 其余 18 个文件使用手写 `<style>` 块或内联 CSS。
- 同一组件（如"内容卡片"）在 Tailwind 页中使用 `rounded-xl shadow-lg p-6`，在手写页中使用 `.content-card { border-radius: 8px; ... }`。

**影响**：
- 无法提取可复用的共享组件。任何全局样式调整（如统一卡片圆角从 8px 改到 12px）需要在两套系统中分别修改。
- Tailwind 页的 HTML 结构（大量 utility classes）与手写页的 BEM-like 结构完全不同，导致内容迁移成本极高。
- 这是整个站点最大的技术债务来源之一。

**整改方向**：
- 决策 1（推荐）：全站退回到"手写 CSS + 共享 design tokens 文件"模式。创建 `design-tokens.css` 和 `.wn-*` 组件类，逐步替换 Tailwind utility classes。
- 决策 2：全站迁移到 Tailwind + 自定义配置（`tailwind.config.js` 中定义 WhiteNote 的 colors/fonts/spacing），并建立组件封装层（如 Vue/React 组件或 @apply 指令）。
- 无论选哪条路，必须结束"双轨制"。

#### 断裂缝 D：内容类型图谱 ↔ VitePress 主题能力

**表现**：
- 小说需要"编号徽章 + 元数据网格 + 装饰性页脚"，画廊需要"网格卡片 + 图片占位符 + 标签簇"。
- VitePress 默认主题是面向技术文档的，对这些富媒体内容类型支持有限。
- 因此内容创作者被迫在 Markdown 中写 HTML/CSS，污染了内容层。

**影响**：
- 内容创作门槛提高：要求作者会写 HTML/CSS。
- 内容文件变得臃肿，视觉样式与内容语义耦合。
- 更换主题或重构样式时，必须逐篇修改 Markdown 文件。

**整改方向**：
- 为 VitePress 开发（或引入）3 个自定义组件：`<ArticleHeader>`（小说/随笔头）、`<GalleryCard>`（画廊卡片）、`<NavFooter>`（上一篇/下一篇）。
- 通过 frontmatter 中的 `layout` 或 `type` 字段自动匹配组件，让 Markdown 回归纯文本。

#### 断裂缝 E：功能页孤岛（login / task-monitor / landing）↔ 品牌设计语言

**表现**：
- 三个功能页使用完全独立的配色体系（`#6b9080` 鼠尾草绿）、字体（系统 sans-serif）、圆角（`16px` 卡片、`30px` pill 按钮）。
- 它们与站点的"暖纸+衬线+金铜+墨绿"品牌语言没有任何共享变量。

**影响**：
- 用户从首页（landing）进入内容页时，会经历明显的视觉跳跃，仿佛从"一个 SaaS 产品"跳到了"一个数字文集"。
- 作为站点入口的 `landing.html` 反而最不体现站点品牌，这是品牌传达上的严重失败。

**整改方向**：
- 将功能页的主色从 `#6b9080` 调整为铜橙/金色体系（`#e07b39` / `#C9A961`）。
- 引入 Noto Serif SC 作为标题字体。
- 统一按钮圆角（`4px` 或 `8px`）、卡片圆角（`8px` 或 `12px`）。
- 在页脚添加 `.wn-seal` 印章组件。

---

## 5. 问题清单与优先级 (Issue Registry)

| ID | Category | Description | Impact | Priority |
|----|----------|-------------|--------|----------|
| V-01 | Visual | CSS 变量命名体系分裂为至少 5 种方言（`--bg-primary`、`--color-ink`、`--accent-red`、`--color-cosmos`、无变量），无共享 design tokens | 任何全局样式调整需改 21 个文件，维护成本极高 | **P0** |
| V-02 | Visual | landing-v2 中引用了未定义的 `--accent-bronze` 变量（用于 `.nav-link::before`、`.hero-eyebrow`、`.card-category`、`.footer-link:hover`、`::selection`），存在 CSS 渲染 bug | 部分强调色在某些浏览器中会回退为透明或继承色，视觉表现不可预测 | **P0** |
| V-03 | Visual | 按钮样式碎片化：magazine（无圆角深色底）、index-v3（铜橙实心）、cosmos-science（珊瑚渐变 pill）、login/landing（鼠尾草绿 30px pill）等 5 个集群 6 种处理 | 用户跨页浏览时无法建立"这就是主按钮"的肌肉记忆 | **P0** |
| V-04 | Visual | 功能页孤岛（login / task-monitor / landing）与主站品牌语言完全脱节：鼠尾草绿 #6b9080、系统 sans-serif、无金铜/墨绿、无印章 | landing 作为站点入口却最不体现品牌，品牌传达失败 | **P0** |
| V-05 | Visual | Tailwind 与手写 CSS 双轨并行（cosmos-science / quality-sources / wei-bei-guide 用 Tailwind，其余 18 个手写） | 组件无法共享，HTML 结构完全不同，重构成本翻倍 | **P0** |
| C-01 | Content | Markdown 文件 frontmatter 覆盖率仅 50%，一半文件完全缺失 frontmatter | VitePress 无法自动提取标题/日期/标签，搜索、RSS、目录生成失效 | **P0** |
| C-02 | Content | 小说文件大量使用自定义 HTML `<style>` 头（如 `001-信号.md`、`031-诗人的陨落.md`），画廊页重度依赖 HTML/CSS 网格 | 内容创作门槛高，视觉与内容耦合，换主题需逐篇改 Markdown | **P0** |
| C-03 | Content | 导航链接格式分裂：有的用 `.html` 后缀（画廊/小说），有的无扩展名（随笔/哲学） | VitePress 路由解析可能出错，内部链接维护困难 | **P1** |
| C-04 | Content | Tags 格式不一致：内联数组 `[a,b,c]` vs 块数组 `- a\n- b`；语言混用：英文键中文值 vs 全中文 | 解析器需要处理多种格式，标签聚合和去重困难 | **P1** |
| D-01 | Data | ID 体系四分五裂：YAML 用语义 kebab-case（`byte-alaya`），小说用批次+序号（`novels-batch07-027`），artworks 用日期+序号（`art_20260411_001`），quotes 用作品ID+序号（`031-001`） | 无法建立全局唯一标识，跨数据源关联困难 | **P0** |
| D-02 | Data | YAML 与 JSON schema 不对齐：YAML 用分层 `tags.category/themes/features`，JSON artworks 用扁平 `tags`，quotes 用单字符串 `tag` | 标签聚合、搜索过滤、推荐系统的逻辑需要写三套 | **P0** |
| D-03 | Data | 时间字段命名不统一：YAML 用 `created_at`，JSON artworks 用 `date`，tasks.json 用 `nextRun`/`finishTime` | 任何按时间排序或筛选的功能都需要特殊 case 处理 | **P1** |
| D-04 | Data | artworks.json 和 quotes.json 缺少 quality/depth/literature 评分系统 | 无法基于统一评分做内容推荐或精选展示 | **P1** |
| IA-01 | IA | Johnny Decimal 框架落地率仅 55%：小说批次号与 JD 编号映射混乱（batch07 对应 40.10.10.27），非小说内容大多缺失 JD 编号 | JD 沦为文档层面的"象牙塔"，用户和机器都无法感知 | **P0** |
| IA-02 | IA | VitePress `sidebar: false` 全局禁用，无法展示系列关系（如哲学 10 篇、醒者联盟编号序列）和长文章章节 TOC | 长文阅读和系列内容的导航体验极差 | **P0** |
| IA-03 | IA | URL 路由风格混用：`/posts/essays/NNN-标题`、`/posts/novels/batchNN/NNN-标题`、`/posts/文件名`（无编号）、画廊用 `.html` | 用户无法通过 URL 预测内容分类和层级，SEO 和可维护性差 | **P1** |
| IA-04 | IA | JD 分类 40.60 心法未在导航中独立显示；10-30 道法与 40.20 哲学作品在"哲学思考"中混排 | 信息架构层级模糊，分类学价值未被释放 | **P1** |
| V-06 | Visual | 圆角尺度不统一：magazine `0px`、内容页 `8px`、login/cosmos `16px`、landing 按钮 `30px` | 跨页浏览时产生"严肃编辑→友好现代→科技未来"的跳跃感 | **P1** |
| V-07 | Visual | 阴影值不仅深度不同，还承担"主题染色"功能（婆媳关系用橙 rgba、魏碑用棕 rgba、landing 用绿 rgba） | 无法提取统一的 `--shadow-*` 变量，阴影系统不可维护 | **P1** |
| V-08 | Visual | 段落首行缩进 `text-indent: 2em` 的取舍不一致：文学页强制使用，工具页/功能页完全不使用 | 跨页阅读时版式感受断裂 | **P2** |
| V-09 | Visual | 动画/交互密度差异巨大：cosmos 有 letter-slide-in 和 glow pulse，login/task-monitor/landing 几乎无动画 | 从"电影"切换到"Excel"的体感落差 | **P2** |
| V-10 | Visual | 英文展示字体在"经典权威"（Playfair Display）、"优雅复古"（Cormorant Garamond）、"科技未来"（Sora）之间摇摆 | 英文标题气质不统一 | **P2** |
| C-05 | Content | 日期格式虽多为 ISO，但部分文件将日期写在内联 HTML 或 footer 中，而非 frontmatter | 按日期排序和归档功能不可靠 | **P2** |
| D-05 | Data | YAML 元数据 `stats.updated_at` 与 `created_at` 在所有样本中完全相同，未体现真实更新历史 | 更新字段失去意义 | **P2** |

---

## 6. 整改路线图 (Remediation Roadmap)

### Phase 1: 基础协议与 Bug 修复（2–3 小时）

**目标**：止血，建立最小可行统一层。

**交付物**：
1. 创建 `docs/public/css/design-tokens.css`，包含统一变量（`--wn-*` 前缀）：颜色、字体、间距、阴影、圆角、过渡。
2. 修复 `landing-v2.html` 中未定义的 `--accent-bronze` 变量，赋值为 `#e07b39`。
3. 建立 `metadata/id-mapping.yaml`，为所有已有内容建立 `jd_id` ↔ `metadata_id` ↔ `file_path` ↔ `url` 的映射。
4. 编写 `DESIGN_SYSTEM.md` 初稿，记录 3 种容器宽度规则（Reading 880px / Editorial 1200px / Dashboard 1600px）和基础组件命名。

### Phase 2: 核心页面变量替换与组件封装（4–6 小时）

**目标**：让高频页面共享同一套视觉语言。

**交付物**：
1. 替换 magazine 系列（3 个文件）和 landing-v2 的旧变量为 `--wn-*` 新变量。
2. 替换 index-v3 的 `--color-*` 变量体系。
3. 统一这 5 个核心页面的按钮、卡片、导航类名（引入 `.wn-btn-*`、`.wn-card`、`.wn-nav-*`、`.wn-seal`）。
4. 为 VitePress 开发/引入 3 个 Markdown 组件：`<ArticleHeader>`、`<GalleryCard>`、`<NavFooter>`。

### Phase 3: 内容层标准化（6–8 小时）

**目标**：解决 frontmatter 缺失和内容与样式耦合问题。

**交付物**：
1. 为全部 50% 缺失 frontmatter 的 Markdown 文件补全最小 frontmatter（`title`、`date`、`tags`）。
2. 统一 tags 格式为块数组 `- item`，统一键名为中文键（`标题`、`日期`、`标签`）或英文键全站一致（推荐英文键以兼容 VitePress）。
3. 统一导航链接格式为无 `.html` 扩展名。
4. 将小说文件中的自定义 HTML `<style>` 头迁移到 `<ArticleHeader>` 组件调用。
5. 将画廊页的内联 CSS Grid 迁移到 `<GalleryCard>` 组件调用。
6. 统一长文阅读页的容器宽度为 `880px`。
7. 为文学类内容定义 `.wn-prose-literary` 类，统一承载 `text-indent: 2em`。

### Phase 4: 数据层对齐与评分扩展（4–5 小时）

**目标**：让 YAML、JSON、frontmatter 说同一种语言。

**交付物**：
1. 统一所有数据源的 ID 格式为 `{jd-category}-{seq}` 或 `jd-{编号}`（如 `40.10.10.27`、`40.30.10.02`）。
2. 统一 tags 结构：所有 JSON 文件改为与 YAML 一致的分层结构（`category`/`themes`/`features`）。
3. 统一时间字段名为 `created_at`、`published_at`、`modified_at`（ISO 8601）。
4. 为 `artworks.json` 和 `quotes.json` 添加与 YAML 兼容的 `ratings` 结构（至少 `quality` 和 `artistic`/`historical` 维度）。
5. 编写 Node.js/Python 脚本自动验证所有 YAML/JSON 的 schema 一致性。

### Phase 5: 导航与信息架构重构（4–5 小时）

**目标**：让用户能通过导航和 URL 理解站点的知识结构。

**交付物**：
1. 启用 VitePress sidebar，为 `/posts/novels/`、`/posts/essays/`、`/posts/philosophy-` 配置分组侧边栏。
2. 重构小说文件路径，使 batch 编号与 JD 编号对齐，或建立清晰的映射规则。
3. 在导航中独立显示"心法"（40.60）分类，拆分"哲学思考"中混排的道法类（10-30）与哲学作品类（40.20）。
4. 统一 URL 路由风格：所有内容页采用 `/posts/{jd-id}-{slug}` 或 `/posts/{category}/{seq}-{slug}`。
5. 修复画廊页 `.html` 后缀，统一为 clean URL。

### Phase 6: 功能页品牌注入与全站验收（3–4 小时）

**目标**：消除功能页孤岛，完成品牌一致性闭环。

**交付物**：
1. 重新设计 `landing.html`：背景改为 `#F9F6F0`，标题改用 Noto Serif SC，主色从 `#6b9080` 改为铜橙/金色体系，按钮圆角收敛为 `4px` 或 `8px`，添加 `.wn-seal` 页脚。
2. 重新设计 `login.html`：引入 Noto Serif SC 标题、铜橙 accent、统一圆角和阴影。
3. 重新设计 `task-monitor.html`：面板 header 改为墨绿/金色体系，添加 `.wn-seal` 页脚，统一卡片组件。
4. 全站走查：从 landing → magazine → essay → novel → login 的完整路径无视觉断裂。
5. 更新 `DESIGN_SYSTEM.md` 为最终版，归档本报告。

**预估总工时：23–31 小时**

若由一人集中执行，建议分 4–5 天完成。若采用"基础协议先行 + 页面逐步迁移"策略，可在每阶段结束后独立验收，降低风险。

---

## 7. 附录：可直接复用的生成提示词 (Appendix: Reusable Prompts)

### Prompt A：生成新的 WhiteNote HTML Landing/Magazine 页面

```
生成一个 WhiteNote 风格的 HTML 落地页/杂志页。

视觉规范：
- 背景使用暖调纸感色（#F9F6F0 或 #faf8f3），避免纯白。
- 中文标题和正文使用 Noto Serif SC（后备 Source Han Serif SC / SimSun）。
- 英文展示字使用 Playfair Display（经典权威）或 Cormorant Garamond（优雅复古）。
- 如需深色区域，使用深林墨绿 #0d1f1c 或深空蓝黑 #0a0a0f，禁止纯黑 #000000。
- 强调色使用铜橙 #e07b39 或古金 #C9A961；点缀色可用朱砂 #B85450 或青玉 #5C8D7D。
- 内容区窄栏居中（max-width: 900px–1200px），章节垂直间距 80px–120px，行高 1.8–2.0。
- 卡片使用 8px–12px 圆角、柔和阴影（0 4px 12px rgba(0,0,0,0.06)），hover 时上浮 4px–8px。
- 按钮使用 4px 圆角（矩形编辑感）或 8px（柔和现代感），禁止 pill 形状。
- 引用块使用左侧 4px 彩色边框（accent color）。
- 页脚添加一个 80px 的朱砂色圆形印章（.wn-seal），内嵌白色文字或符号。
- 导航采用粘性顶部栏（sticky nav，backdrop-blur）或固定 280px 侧边栏。
- 动画过渡时长 0.3s–0.5s，缓动使用 cubic-bezier(0.16, 1, 0.3, 1) 或 ease。
- CSS 变量必须使用 --wn-* 前缀（如 --wn-color-ink、--wn-font-serif、--wn-shadow）。

页面主题：[在此填入主题]
目标结构：[在此填入期望的区块结构，如 Hero + 3 篇Featured + Newsletter订阅 + Footer]
```

### Prompt B：生成新的 WhiteNote Markdown 文章

```
生成一篇 WhiteNote 风格的 Markdown 文章。

内容规范：
- 文章顶部必须包含 YAML frontmatter，至少包含：
  ---
  title: "文章标题"
  date: YYYY-MM-DD
  tags:
    - 标签一
    - 标签二
  ---
- 标题使用单层 H1（# 文章标题），避免与 frontmatter title 重复时造成双标题。
- 章节使用 H2（## 第一章/第一节/一、标题），子节使用 H3（### 1.1 小节名）。
- 文学类/文化类内容请在段落首行使用 `text-indent: 2em`（通过 .wn-prose-literary 类或手动 style）。
- 关键术语、人名、书名使用 **粗体**；外文术语可用 *斜体*。
- 引用块（>）用于直接引语，嵌套引用使用 > >，引用出处可用 > **——作者** 格式。
- 章节之间使用 `---` 水平规则作为视觉分隔。
- 底部添加导航脚注：`[← 上一篇](链接) | [下一篇 →](链接)`。
- 如果需要自定义文章头（如小说编号徽章、元数据网格），请使用 `<ArticleHeader>` 组件调用，禁止在 Markdown 中直接写内联 `<style>` 块。
- 图片使用标准 Markdown 语法 `![alt](url)`，画廊类布局请使用 `<GalleryCard>` 组件。
- 链接统一不使用 `.html` 扩展名，使用根相对路径（如 `/posts/essays/003-waiting`）。

文章主题：[在此填入主题]
目标字数：[在此填入字数]
风格倾向：[学术随笔 / 创意小说 / 技术笔记 / 艺术评论]
```

### Prompt C：生成新内容的元数据 YAML

```
为 WhiteNote 的新内容生成标准化 YAML 元数据。

请严格使用以下 schema：

id: "{jd-category}-{seq}"       # 例如：40.40.10.03（随笔）或 40.10.10.42（小说）
title: "内容标题"
file: "docs/posts/{category}/{seq}-{slug}.md"

ratings:
  quality: A+                     # A+, A, B, C
  depth: 4                        # 1-5 整数
  literature: 5                   # 1-5 整数
  difficulty: "🟢"                # 🟢 / 🟡 / 🔴
  time: "☕"                      # 🍵 / ☕ / 📖 / 📚

tags:
  category:
    - essay                        # sci-fi, tech, python, essay, reading-notes, practice, zen, cosmic, awakeners
  themes:
    - consciousness                # consciousness, creation, death, meaning, loneliness, ai-buddhism, code-zen
  features:
    - must-read                    # must-read, innovation, tear-jerker, brain-burner, hidden-gem, sublime, warm

stats:
  word_count: 3200
  created_at: "2026-04-13"
  updated_at: "2026-04-13"

related:
  - "40.40.10.02"                 # 1-3 个关联内容 ID

comment: ""

要求：
- id 必须使用 Johnny Decimal 编号格式（如 40.10.10.xx 表示科幻小说，40.30.10.xx 表示技术作品，40.40.10.xx 表示随笔）。
- tags 中的 category、themes、features 必须从现有词汇表中选择，保持标签可聚合性。
- file 路径必须与 id 和 URL 路由策略一致。
- related 字段填写与本文主题最相关的 1-3 个已有内容 ID。

内容信息：
- JD 分类编号：[在此填入，如 40.30.10.05]
- 标题：[在此填入]
- 字数估算：[在此填入]
- 主要标签：[在此填入 category/themes/features]
```

---

*报告生成时间：2026-04-13*  
*分析范围：21 HTML + 12 Markdown + 6 YAML + 3 JSON + VitePress 配置*  
*综合评分：62/100 — 有强烈美学基因，但亟需跨层统一协议。*
