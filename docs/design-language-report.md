# WhiteNote 设计语言报告

> 基于对 20 个页面文件的深度分析 synthesized from three analytical passes across core pages, topic pages, and content pages.

---

## 1. 提示词语言 (Prompt Language)

WhiteNote 的设计语言可以被描述为**「现代中文博雅长文」**——一种将中国传统出版美学（宣纸底色、朱砂点缀、烫金勾边、钤印收尾）与现代网页交互（粘性导航、渐变头图、卡片布局、微动效）相融合的编辑式设计系统。

### 整体氛围 (Mood)

想象一间数字书房：窗外是星夜或园林，案上是展开的卷轴。整体氛围偏向**沉静、克制、有仪式感**。阅读被框定为一种需要慢下来的行为，而非信息扫描。页面入场常常带有仪式 gate（如 landing-v2 的语录遮罩），仿佛在提醒读者："你即将进入一个被精心打理的精神空间。"

### 色彩哲学 (Color Philosophy)

WhiteNote 拒绝冷白极简，拥抱**暖调纸感**。画布不是 #ffffff，而是米白、 cream、 parchment 或 rice paper。深色区域不用纯黑，而用深林墨绿 (#0d1f1c) 或深空蓝黑 (#0a0a0f)。点睛色遵循"自然矿物"逻辑：赭石铜橙 (#e07b39)、朱砂 (#B85450)、古金 (#C9A961)、青玉 (#5C8D7D)、鼠尾草 (#6b9080)。这些颜色像从古籍或园林石头里提取出来的，而不是数字霓虹。

### 字体选择 (Typography)

中文标题与长文正文几乎统一使用 **Noto Serif SC**（或 Source Han Serif SC / SimSun / STSong 作为后备），营造典籍般的庄重感。英文展示字根据主题在 **Playfair Display**（经典杂志权威感）、**Crimson Text**（文学气质）、**Cormorant Garamond**（优雅复古）之间切换。UI 与辅助文字使用系统无衬线（-apple-system, Segoe UI, Roboto）。代码或科技主题页面会引入 **Space Grotesk**、**Sora** 或 **Fira Code** 增加未来感。

### 布局原则 (Layout Principles)

- **窄栏居中长文**：内容容器宽度集中在 800px–900px，拒绝满屏拉伸，模拟纸质书的阅读体验。
- **慷慨的呼吸感**：章节垂直间距 80px–120px，行高 1.8–2.0，宁可少放内容也要让页面能"呼吸"。
- **侧边栏或粘性导航**：固定 280px 侧边栏（landing-v2, olympiad-math-philosophy）或粘性顶部导航（大多数内容页）是标准模式。
- **章节化结构**：所有长文都被明确切分为 chapter/section，带有大号章节编号或装饰性分隔线。
- **卡片式内容分组**：即使在长文中，子主题也常以卡片、引用块或信息框呈现，而非连续文字流。

### 组件行为 (Component Behaviors)

- **悬浮动效克制优雅**：卡片 hover 时通常只上浮 4px–8px，配合柔和的弥散阴影（rgba(0,0,0,0.04)–0.1）。没有弹跳的动画，过渡时长 0.3s–0.5s，缓动函数多为 ease 或 cubic-bezier(0.16, 1, 0.3, 1)。
- **边框作为装饰语言**：左侧 3px–5px 的彩色边框是标注重点内容、引用块、TOC 的惯用手法。
- **印章/徽章收尾**：多个页面在页脚使用圆形"印章"（80px–100px 的朱砂色圆章，内嵌白色文字或符号），强烈呼应传统出版物的落款钤印。
- **渐变勾边与下划线**：金色或铜橙色的水平渐变条常被用作标题下划线、卡片顶边、章节分隔。

### 用于 AI 生成的完整提示词

> 生成一个 WhiteNote 风格的页面：使用暖调纸感背景（#F9F6F0 或 #faf8f3），中文标题和正文使用 Noto Serif SC，英文展示字使用 Playfair Display 或 Cormorant Garamond。内容区窄栏居中（max-width: 900px），章节之间有 80px–100px 的垂直呼吸空间。配色以深林墨绿 (#0d1f1c)、奶油色 (#f5f0e8)、古金 (#C9A961)、朱砂 (#B85450) 和铜橙 (#e07b39) 为主。组件使用左侧 4px 彩色边框的引用块、带柔和阴影的圆角卡片（8px–12px）、悬浮时上浮 4px–6px 的微动效。页脚可放置一个 80px 的朱砂色圆形印章。整体氛围沉静、博雅、有仪式感，像一本可以翻阅的数字文集。

---

## 2. 工程化语言 (Engineering Language)

### 2.1 核心 CSS 变量命名与色值

WhiteNote 目前存在多套变量命名体系，尚未统一。以下是出现频率最高、覆盖文件最广的色值汇总：

```css
/* === 浅色纸面系统（最常用，覆盖 15+ 文件）=== */
--bg-primary: #FAFBFC;           /* landing-v2 */
--bg-secondary: #F0F4F8;         /* landing-v2 */
--bg-paper: #F9F6F0;             /* 书法史、书画鉴赏 */
--paper-cream: #faf8f3;          /* 宇宙哲学思辨录 */
--cream: #FDF5E6;                /* 婆媳关系分析 */
--paper: #FAFAF8;                /* Python 指南 */
--parchment: #faf7f2;            /* index-v3 */

/* === 深色系统（头图/封面/宇宙主题页）=== */
--bg-ink: #0d1f1c;               /* magazine, landing-v2 overlay, index-v3 */
--color-ink: #0d1f1c;            /* index-v3 */
--color-forest: #1a3d36;         /* index-v3 */
--deep-black: #0a0a0a;           /* cosmos-science */
--color-cosmos: #0a0a0f;         /* cosmos-science-v2 */
--color-void: #050508;           /* cosmos-science-v2 */
--color-nebula: #1a1a2e;         /* cosmos-science-v2 */

/* === 点睛色系统 === */
--accent-copper: #e07b39;        /* magazine, index-v3（也叫 --color-orange） */
--accent-gold: #c9a227;          /* magazine, index-v3 */
--gold-warm: #c9a961;            /* 宇宙哲学、书法史、书画鉴赏 */
--gold: #C9A961;                 /* 书法史、 dangerous-album */
--accent-sage: #68A096;          /* landing-v2 */
--accent-teal: #2D6A4F;          /* landing-v2 */
--cinnabar: #b85450;             /* 宇宙哲学、书法史（也叫 --accent-red） */
--accent-red: #B85450;           /* 书法史、书画鉴赏 */
--accent-red-dark: #8B3A36;      /* 书法史、书画鉴赏 */
--brown: #8B4513;                /* 魏碑手册、书画鉴赏、 dangerous-album */
--primary-sage: #6b9080;         /* login, task-monitor */
--jade: #5C8D7D;                 /* 书画鉴赏 */
--python-blue: #306998;          /* Python 指南 */
--python-yellow: #FFD43B;        /* Python 指南 */

/* === 文字色 === */
--text-primary: #1A202C;         /* landing-v2 */
--text-secondary: #4A5568;       /* landing-v2 */
--text-muted: #718096;           /* landing-v2 */
--text-cream: #f5f0e8;           /* magazine, index-v3 */
--text-ink: #2C2C2C;             /* 书法史、书画鉴赏 */
--text-dark: #2c3e50;            /* login, task-monitor */
```

### 2.2 字体栈 (Font Stacks)

```css
/* 中文主字体 — 出现频率最高 */
--font-serif: 'Noto Serif SC', 'Source Han Serif SC', 'SimSun', 'STSong', 'Songti SC', serif;

/* 英文展示字体 — 按主题选用 */
--font-display: 'Playfair Display', 'Crimson Text', serif;       /* 杂志、专辑分析 */
--font-display-alt: 'Cormorant Garamond', serif;                 /* 宇宙哲学、等待艺术 */
--font-tech: 'Sora', sans-serif;                                 /* 宇宙科学 */
--font-mono-tech: 'Space Grotesk', monospace;                    /* 宇宙科学 v2 */
--font-code: 'Fira Code', 'Consolas', monospace;                 /* Python 指南 */

/* 中文无衬线 — UI 用 */
--font-sans: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* 纯系统无衬线 — 功能页 */
--font-system: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;

/* 书法特化 */
--font-calligraphy: 'Ma Shan Zheng', cursive;                    /* 魏碑手册 */
```

### 2.3 字号与排版尺度

```css
/* Hero 标题 */
--text-hero: clamp(2.5rem, 6vw, 4.5rem);     /* 最常见 */
--text-hero-lg: clamp(3.5rem, 10vw, 7rem);   /* landing-v2 */

/* 章节标题 */
--text-section: clamp(1.75rem, 4vw, 2.5rem);

/* 正文 */
--text-body: 1rem;        /* 16px */
--text-body-lg: 1.125rem; /* 18px — 常用于宇宙主题 */
--text-body-xl: 1.25rem;  /* 20px */

/* 标签/眉题 */
--text-label: 0.75rem;    /* 12px */
--text-caption: 0.875rem; /* 14px */

/* 行高 */
--leading-body: 1.7;      /* landing-v2 */
--leading-editorial: 1.9; /* 书法史、书画鉴赏 */
--leading-loose: 2.0;     /* magazine issue */

/* 字间距 */
--tracking-label: 0.15em;  /* landing-v2 nav */
--tracking-label-wide: 0.2em;  /* index-v3 section labels */
--tracking-hero: 0.08em;   /* 宇宙哲学 */
```

### 2.4 间距系统

```css
/* 容器 */
--container-narrow: 800px;   /* 叙事/散文页 */
--container-standard: 900px; /* 参考/指南页 */
--container-wide: 1200px;    /* magazine, dangerous-album */
--container-dashboard: 1600px; /* task-monitor */

/* 章节垂直间距 */
--section-padding-y: 5rem;        /* 80px — 最常见 */
--section-padding-y-lg: 6rem;     /* 96px — cosmos-science (Tailwind py-24) */
--section-padding-y-xl: 8rem;     /* 128px — cosmos-science-v2 */
--section-padding-y-2xl: 12rem;   /* 192px — cosmos-science-v2 超大呼吸 */

/* 水平内边距 */
--section-padding-x: 1.5rem;      /* 24px — mobile */
--section-padding-x-md: 2rem;     /* 32px — tablet */
--section-padding-x-lg: 3rem;     /* 48px — desktop */

/* 卡片内边距 */
--card-padding: 1.5rem;           /* 24px */
--card-padding-lg: 2rem;          /* 32px */
--card-padding-xl: 2.5rem;        /* 40px — the-art-of-waiting */

/* 网格间隙 */
--grid-gap-sm: 1rem;              /* 16px */
--grid-gap: 1.5rem;               /* 24px */
--grid-gap-lg: 2rem;              /* 32px */
--grid-gap-xl: 3rem;              /* 48px — magazine */
```

### 2.5 圆角规则

WhiteNote 的圆角哲学呈现明显分化：

| 页面类型 | 圆角值 | 说明 |
|---------|--------|------|
| 杂志/文学页 | 0px–4px | 按钮常为矩形（read-btn），卡片 8px |
| 内容长文页 | 8px–12px | 卡片、引用块、代码块统一 8px |
| 心理学/友好主题 | 12px–16px | poxi-analysis 的章节卡片达 16px |
| 功能页 (login) | 16px | 登录卡片为友好现代感 |
| 宇宙科学 | 16px | cosmos-science 的卡片 border-radius: 1rem |

**建议统一规则**：
- 按钮/标签：`4px`（矩形感，编辑权威）
- 卡片/输入框：`8px`（柔和但不过度亲切）
- 大容器/模态框：`12px`（现代但不破坏书卷气）
- 头像/印章：`50%`（圆形）

### 2.6 阴影值

```css
/* 卡片默认 */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

/* 卡片悬浮 */
box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);

/* 特色卡片 */
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.04);   /* landing-v2 featured-card */

/* 登录卡片（带主题色） */
box-shadow: 0 4px 16px rgba(107, 144, 128, 0.12);  /* login */

/* 宇宙主题（带发光） */
box-shadow: 0 0 30px rgba(255, 107, 74, 0.3), 0 10px 40px rgba(0, 0, 0, 0.5); /* cosmos-science card hover */
```

### 2.7 动画时长与缓动

```css
/* 悬浮过渡 */
transition: all 0.3s ease;
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);  /* cosmos-science-v2 优雅 reveal */

/* 滚动显示 */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 字母逐个滑入 */
@keyframes slideIn {
  to { opacity: 1; transform: translateY(0); }
}
/* 单个字母 duration: 0.6s ease forwards */

/* 光晕呼吸 */
@keyframes glow {
  0% { opacity: 0.3; transform: scale(1); }
  100% { opacity: 0.6; transform: scale(1.15); }
}
```

### 2.8 组件规则库

#### 主按钮 (Primary Button)
```css
.btn-primary {
  background: var(--text-primary);   /* #1A202C */
  color: var(--bg-primary);           /* #FAFBFC */
  padding: 0.875rem 2rem;
  border-radius: 4px;                 /* 或 0px 杂志风 */
  font-weight: 500;
  transition: all 0.3s ease;
}
```

#### 次按钮 (Secondary Button)
```css
.btn-secondary {
  background: transparent;
  border: 1px solid var(--border-light);
  color: var(--text-primary);
  padding: 0.875rem 2rem;
  border-radius: 4px;
}
```

#### 杂志 read-btn
```css
.read-btn {
  background: var(--bg-ink);          /* #0d1f1c */
  color: var(--text-cream);
  padding: 0.75rem 1.5rem;
  border-radius: 0;                   /* 纯矩形 */
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
}
```

#### 引用块 (Blockquote)
```css
blockquote {
  background: var(--bg-secondary);    /* 或 paper-dark */
  border-left: 4px solid var(--accent-color);
  padding: 1.5rem 2rem;
  font-style: italic;
  line-height: 1.9;
}
```

#### 内容卡片 (Content Card)
```css
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
```

#### 导航栏
```css
/* 粘性导航标准模式 */
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-light);
}

/* 固定侧边栏模式 */
aside {
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background: #fff;
  border-right: 1px solid var(--border-light);
  padding: 2.5rem 1.875rem;
  overflow-y: auto;
  z-index: 100;
}
```

#### 印章 footer seal
```css
.footer-seal {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--accent-red);      /* #B85450 */
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 10px 40px rgba(184, 84, 80, 0.3);
}
```

---

## 3. 统一性分析 (Consistency Analysis)

### 3.1 已统一的元素 (Unified)

以下设计元素在整个站点的 20 个页面中表现出高度一致性，已形成事实上的设计公约：

1. **暖调纸感背景 (Warm Paper Backgrounds)**
   - 证据：landing-v2 (#FAFBFC), magazine-index (#F0F4F8), 书法史 (#F9F6F0), 宇宙哲学 (#faf8f3), 婆媳关系 (#FDF5E6), Python 指南 (#FAFAF8), dangerous-album (#faf6ed), the-art-of-waiting (#FFFBEB), yehuimei-album (#F5E6D3)。
   - 一致性：没有一个页面使用冷白 #ffffff 或高对比度的纯白黑模式，全部落在米白-cream-parchment 色温区间。

2. **Noto Serif SC 的中文排版霸权**
   - 证据：landing-v2, index-v3, magazine 全系列, 宇宙哲学思辨录, 中国书法艺术史, 书画鉴赏, Python 指南, dangerous-album, the-art-of-waiting, olympiad-math-philosophy。
   - 一致性：20 个文件中 17 个使用 Noto Serif SC（或其变体 Songti / SimSun）作为中文主字体，仅 login, task-monitor, wei-bei-guide（使用 Ma Shan Zheng + 系统字体）例外。

3. **铜橙/金色作为跨文件主强调色**
   - 证据：landing-v2 的 `--accent-bronze`（实际表现为 #e07b39）、index-v3 的 `--color-orange` (#e07b39)、magazine 的 `--accent-copper` (#e07b39)、dangerous-album 的金棕系统 (#c9a227)、书法史/宇宙哲学的 `#C9A961`。
   - 一致性：无论页面主题是文学、书法、哲学还是音乐，金-铜-橙色系都是首要 hover 色、标签色和装饰色。

4. **深林墨绿作为深色模式基准**
   - 证据：landing-v2 overlay (#1a3d36 → #0d1f1c), index-v3 hero (#0d1f1c), magazine cover (#0d1f1c), cosmos-science-v2 (#0a0a0f)。
   - 一致性：没有任何页面在需要深色背景时使用纯黑 #000000 或冷灰，统一的色值落在 #0a0a0a 到 #0d1f1c 的墨绿-深蓝黑区间。

5. **hover 上浮动效**
   - 证据：landing-v2 featured-card (`translateY(-4px)`), magazine-issue (`translateY(-6px)`), the-art-of-waiting (`translateY(-8px)`), cosmos-science (`translateY(-10px)`), 魏碑手册 (`translateY(-5px)`)。
   - 一致性：20 个文件中 18 个在卡片 hover 时使用 `translateY` 负方向位移，配合阴影加深。仅 login 和 task-monitor 因功能属性未采用此模式。

6. **左侧边框强调块**
   - 证据：magazine 的 featured highlight (3px copper), 书法史的 blockquote (4px red), 婆媳关系的章节卡片 (5px gradient left), Python 指南的 blockquote (left blue border), index-v3 的 story cards (3px jade)。
   - 一致性：几乎所有页面都使用 `border-left: 3px–5px solid [accent]` 作为引用、重点内容或卡片的视觉锚点。

7. **章节化长文结构**
   - 证据：宇宙哲学思辨录（7 章）、Python 全栈开发（9 章）、婆媳关系演变（6 章）、书法史（8 章）、书画鉴赏（多章节）、olympiad-math-philosophy（多章节）。
   - 一致性：所有长内容页都被明确切分为 chapter，带有大号标题和装饰性分隔，几乎没有连续无章节的长文流。

8. **粘性/固定导航**
   - 证据：landing-v2 (280px fixed sidebar), index-v3 (sticky nav), 宇宙哲学 (fixed nav with blur), 书法史 (sidebar), Python 指南 (fixed nav), quality-sources (sticky nav)。
   - 一致性：20 个文件中 18 个采用某种形式的固定或粘性导航，确保长文阅读时的位置感。

---

### 3.2 不统一的元素 (Inconsistent)

以下设计元素在不同页面或页面集群之间存在显著差异，尚未收敛为统一标准：

1. **CSS 变量命名体系的分裂**
   - 证据：landing-v2 使用 `--bg-primary` / `--text-primary` 前缀体系；index-v3 使用 `--color-ink` / `--color-cream` 前缀体系；书法史/书画鉴赏/宇宙哲学使用 `--accent-red` / `--gold-warm` 描述性命名；cosmos-science-v2 使用 `--color-cosmos` / `--color-starlight` 主题命名；task-monitor 使用 `--primary` / `--bg-page` 功能命名。
   - 结果：同一色值（如 #0d1f1c）在不同文件中有 4–5 种不同的变量名。

2. **圆角尺度不统一**
   - 证据：magazine 的 read-btn 为 `0px`（纯矩形），内容页卡片多为 `8px`，poxi-analysis 的章节卡片为 `16px`，login 的登录卡片为 `16px`，cosmos-science 的卡片为 `16px` (1rem)，quality-sources 为 `12px` (rounded-xl)。
   - 结果：用户在跨页浏览时会感受到从"严肃编辑"到"友好现代"再到"科技未来"的圆角跳跃。

3. **按钮样式的主题碎片化**
   - 证据：
     - magazine / landing-v2：深色背景 + 奶油色文字（无圆角或 4px）
     - index-v3：铜橙色实心（`#e07b39`）
     - cosmos-science：珊瑚渐变（`#ff6b4a → #ff8f70`）+ 全圆角（9999px）
     - cosmos-science-v2：金色描边 + 透明背景 + 大写字母间距
     - login：鼠尾草绿（`#6b9080`）+ 8px 圆角
   - 结果：同一功能的"主按钮"在 5 个集群中有 5 种截然不同的视觉处理。

4. **字体的英文展示字不统一**
   - 证据：magazine 使用 Playfair Display；宇宙哲学和 the-art-of-waiting 使用 Cormorant Garamond；cosmos-science 使用 Sora；quality-sources 使用 Inter；yehuimei-album 未使用专用英文展示字。
   - 结果：英文标题的气质在"经典权威"、"优雅复古"、"科技未来"、"现代简洁"之间摇摆。

5. **布局容器宽度标准不一**
   - 证据：叙事/散文页使用 800px（宇宙哲学、yehuimei-album）；参考/指南页使用 900px（书法史、书画鉴赏、Python、婆媳关系）；dashboard 使用 1600px（task-monitor）；landing 使用 1200px（magazine、cosmos-science）。
   - 结果：长文阅读体验在 800px 和 900px 之间微妙切换，虽不明显但缺乏工程规范。

6. **阴影值的不一致**
   - 证据：landing-v2 使用极柔和的 `rgba(0,0,0,0.04)`；magazine 使用 `rgba(0,0,0,0.1)`；cosmos-science 使用硬黑 + 发光混合阴影；婆媳关系使用 `rgba(230, 126, 34, 0.15)`（带主题色）；魏碑手册使用 `rgba(139, 69, 19, 0.3)`（带主题色）。
   - 结果：阴影不仅是深度提示，还承担了"主题染色"功能，导致无法提取统一的 `--shadow-*` 变量。

7. **段落首行缩进 (text-indent: 2em) 的取舍不一致**
   - 证据：书法史、书画鉴赏、宇宙哲学、yehuimei-album、olympiad-math-philosophy 明确使用 `text-indent: 2em`；wei-bei-guide（Tailwind 默认）、Python 指南（部分弱化）、task-monitor / quality-sources / login 完全不使用。
   - 结果：文学页有传统中文排版缩进，工具页没有，跨页阅读时版式感受断裂。

8. **动画/交互密度差异巨大**
   - 证据：cosmos-science 有 letter-slide-in 动画和 glow pulse；宇宙哲学有 starfield canvas 动画；landing-v2 有 quote gate fade-in；而 login、task-monitor、quality-sources 几乎没有任何动画。
   - 结果：从宇宙科学页跳到 task-monitor，页面仿佛从"电影"切换到了"Excel"。

9. **Tailwind 与手写 CSS 的框架分裂**
   - 证据：cosmos-science、quality-sources、wei-bei-guide 使用 Tailwind CSS CDN；其余 17 个文件使用手写 `<style>` 块或内联 CSS。
   - 结果：HTML 结构、类名命名、间距系统完全无法互通，维护成本极高。

10. **功能性页面的美学孤立**
    - 证据：login.html 使用完全不同的配色（`#6b9080` 主色，无铜橙/金色，无衬线字体，无深色区域）；task-monitor.html 采用 dashboard 美学（sage green 数据面板，紧凑布局，无文学装饰元素）。
    - 结果：这两个页面与站点的"数字书房"整体氛围完全脱节，像是被嵌入的第三方应用。

---

### 3.3 原因分析

这些不一致性的根源可以从以下几个维度解释：

**A. 自动生成 vs. 手工精修 (Generation Method)**
- 大量内容页（书法史、书画鉴赏、宇宙哲学、Python 指南、婆媳关系、魏碑手册）很可能是由 AI 根据各自主题一次性生成的。AI 在生成时会忠实于"主题适配"（Python 用蓝黄、心理学用暖橙、书法用朱砂），但缺乏跨文件的系统级约束，导致每个主题都自带一套完整的 CSS 变量和组件变体。
- 手工页面（landing-v2、index-v3、magazine 系列、login、task-monitor）则体现了不同创作阶段或不同负责人的设计决策，没有共享统一的 design tokens。

**B. 不同创作阶段与设计目标的差异**
- `landing-v2` 和 `index-v3` 代表了两个不同阶段的 homepage 探索：v2 是"编辑花园"（侧边栏、冷静），v3 是"电影章节"（垂直滚动、强色块）。两者并存说明站点仍在 homepage 方案上摇摆。
- magazine 系列（index + issue-01 + issue-02）是一个相对自成一体的子系统，有共享的 `:root` 变量，但仅限 magazine 文件内部共享，未向其他页面辐射。
- cosmos-science 和 cosmos-science-v2 是同一主题的两版迭代，各自形成完整的 dark-sci-fi 系统，但与其他页面没有任何变量共享。

**C. 主题驱动的合法性偏差**
- 某些不一致是有意为之且主题合理的：Python 指南使用 Python 品牌色、issue-02 使用紫色封面以配合"存在之重"的主题、宇宙哲学使用星空 canvas 以呼应内容。这些偏差如果能在统一的 token 框架内表达（如"主题覆盖层"），就不是问题；但目前它们是**硬编码的孤立 CSS**，导致维护困难。

**D. 功能页与品牌页的脱节**
- login 和 task-monitor 的设计目标是"完成登录"和"监控系统"，其设计出发点纯粹是功能可用性，没有接受站点的品牌设计语言输入。这在小型项目中常见：功能页由后端或工具链模板直接生成，前端品牌规范未覆盖。

**E. CSS 技术栈的分裂**
- Tailwind CDN 的引入（cosmos-science, quality-sources, wei-bei-guide）加速了页面产出，但也彻底打破了手写 CSS 页面的变量共享机制。Tailwind 的 utility-first 哲学与 BEM/自定义属性体系天然难以共存。

---

## 4. 整改建议 (Recommendations)

### Must Do（必须做 — 影响品牌一致性和维护成本）

1. **建立统一的 CSS Design Tokens 文件**
   - 创建一个所有页面共享的 `design-tokens.css`（或内联到模板中），强制统一颜色、字体、间距、阴影、圆角的变量命名。推荐采用 `wn-*` 前缀（如 `--wn-color-ink`、`--wn-font-serif`）以避免与第三方库冲突。

2. **修复 landing-v2 中未定义的 `--accent-bronze` 变量**
   - 该变量在 `.nav-link::before`、`.hero-eyebrow`、`.card-category`、`.footer-link:hover`、`::selection` 中被引用，但 `:root` 中从未定义，是一个潜伏的 CSS bug。应立即将其加入 `:root` 并赋值为 `#e07b39`。

3. **统一核心按钮样式库**
   - 定义三种全局按钮：`wn-btn-primary`（深色底，奶油字）、`wn-btn-accent`（铜橙/金色底，深色字）、`wn-btn-secondary`（透明底，细边框）。禁止每个页面自行发明按钮样式。

4. **为 login 和 task-monitor 注入品牌色**
   - login 的主色应从 `#6b9080` 改为站点主 accent 色（铜橙/金色体系），并引入 Noto Serif SC 作为标题字体。
   - task-monitor 应至少将面板 header、关键状态色、页脚 seal 调整为与站点一致的设计语言，而非纯 dashboard 风格。

5. **收敛圆角标准到 3 个值**
   - 规定：`0px` 仅用于 magazine read-btn 等极端编辑组件；`4px` 用于按钮、标签、输入框；`8px` 或 `12px` 用于卡片和容器。全面排查并替换页面中的 `16px` 和 `1rem` 圆角异常值（除非有特殊 UX 理由）。

### Should Do（应该做 — 显著提升用户体验和系统感）

6. **统一长文容器宽度**
   - 所有长文阅读页面（content pages）统一使用 `max-width: 880px`（取 800px 与 900px 的中间值）。landing/magazine/dashboard 可保持各自的更宽布局，但应在文档中明确三种容器角色：Reading (880px)、Editorial (1200px)、Dashboard (1600px)。

7. **统一段落首行缩进规则**
   - 文学/文化类内容页强制使用 `text-indent: 2em`；工具/技术/功能页不使用。在 design tokens 中定义 `.wn-prose-literary` 工具类来承载这一规则，避免每个页面手写。

8. **提取统一的卡片组件类**
   - 创建 `.wn-card`、`.wn-card-hover`、`.wn-card-elevated` 三个标准类，统一封装 padding、border-radius、shadow、hover transform。逐步替换各页面中五花八门的 card 样式。

9. **统一阴影系统**
   - 定义三级阴影：`--wn-shadow-sm: 0 2px 8px rgba(0,0,0,0.06)`、`--wn-shadow: 0 4px 16px rgba(0,0,0,0.08)`、`--wn-shadow-lg: 0 12px 40px rgba(0,0,0,0.1)`。禁止在 shadow 中硬编码主题色（如 `rgba(230,126,34,0.15)`），如需主题色 hover 效果，应通过 border-color 或 background 实现。

10. **统一导航组件**
    - 将 sticky nav 和 fixed sidebar 分别封装为 `.wn-nav-sticky` 和 `.wn-nav-sidebar`（宽度固定 280px），统一 backdrop-blur、border-bottom/border-right、z-index 行为。

### Could Do（可以做 — 锦上添花，优先级较低）

11. **建立主题覆盖层机制**
    - 允许特定页面（如 Python 指南、宇宙哲学、issue-02）在统一 token 基础上加载一个轻量的 `theme-override.css`，用数据属性（如 `data-theme="python"`、`data-theme="cosmos"`）切换 accent 色。这样既能保留主题个性，又不破坏系统一致性。

12. **统一动画时长和缓动函数**
    - 定义 `--wn-transition-fast: 0.2s ease`、`--wn-transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1)`、`--wn-transition-reveal: 0.8s cubic-bezier(0.16, 1, 0.3, 1)`。为滚动 reveal 动画提供统一的 JS/CSS 工具类（如 `.wn-reveal`）。

13. **统一页脚印章/徽章组件**
    - 将页脚圆形 seal 封装为 `.wn-seal` 组件，支持不同尺寸（80px / 100px）和主题色覆盖。鼓励更多页面使用这一极具品牌识别度的元素。

14. **收敛英文展示字体**
    - 建议将 Playfair Display 作为默认英文展示字体（经典权威感最强），Cormorant Garamond 作为文学/诗意页面的备选，Space Grotesk / Sora 仅限科技/宇宙主题。在 design tokens 中定义 `--wn-font-display` 和 `--wn-font-display-alt`。

15. **评估 Tailwind 的存留**
    - 如果团队希望长期维护一致性，建议要么全站迁移到 Tailwind（需要大量重构），要么统一退回到手写 CSS + 共享组件库模式。目前的"双轨制"是最大一致性的障碍。

---

## 5. 执行计划 (Implementation Plan)

### Phase 1: 基础 Token 与 Bug 修复（2–3 小时）

- [ ] 创建 `whitenote/docs/public/css/design-tokens.css`，包含统一的颜色、字体、间距、阴影、圆角、过渡变量（`--wn-*` 前缀）。
- [ ] 修复 `landing-v2.html` 中未定义的 `--accent-bronze` 变量。
- [ ] 将 `design-tokens.css` 链接到所有 20 个 HTML 文件（可先以 `<link>` 形式引入，不立即替换旧变量）。

### Phase 2: 核心页面变量替换（4–6 小时）

- [ ] 替换 magazine 系列（magazine-index, issue-01, issue-02）和 landing-v2 的旧变量为 `--wn-*` 新变量。这 4 个文件已有共享 `:root`，替换阻力最小。
- [ ] 替换 index-v3 的 `--color-*` 变量体系，对齐新 token。
- [ ] 统一这 5 个核心页面的按钮、卡片、导航组件类名（引入 `.wn-btn-*`、`.wn-card`、`.wn-nav-*`）。

### Phase 3: 内容页标准化（6–8 小时）

- [ ] 统一 7 个中文内容页（书法史、书画鉴赏、宇宙哲学、Python、婆媳关系、魏碑手册、叶惠美）的容器宽度为 880px。
- [ ] 为这些页面引入 `.wn-card`、`.wn-blockquote`、`.wn-seal` 组件，替换各自手写样式。
- [ ] 统一文学页的 `text-indent: 2em` 规则（通过 `.wn-prose-literary` 类）。
- [ ] 将 Python 指南和宇宙哲学的主题色偏差封装为 `data-theme` 覆盖层。

### Phase 4: Topic 页整合（4–5 小时）

- [ ] 统一 dangerous-album、the-art-of-waiting、olympiad-math-philosophy 的字体和间距到 `--wn-*` 体系。
- [ ] 评估 cosmos-science 和 cosmos-science-v2 是否与主站合并为同一 dark-mode 体系，或保留为独立子品牌。若保留，需建立 `design-tokens-dark.css`。
- [ ] 替换 quality-sources 的 Tailwind 阴影/圆角/按钮样式为 `.wn-*` 组件（或决定其彻底独立为工具页）。

### Phase 5: 功能页品牌注入（2–3 小时）

- [ ] 重新设计 `login.html`：引入 Noto Serif SC 标题、铜橙/金色 accent、统一圆角和阴影。
- [ ] 重新设计 `task-monitor.html`：将 sage green 面板 header 改为墨绿/金色体系，添加 `.wn-seal` 页脚，统一卡片组件。

### Phase 6: 文档化与验收（2 小时）

- [ ] 编写 `DESIGN_SYSTEM.md`，记录所有 `.wn-*` 组件的使用方法、三种容器宽度规则、主题覆盖机制。
- [ ] 进行跨页浏览走查，确保从 landing → magazine → content → login 的视觉过渡无明显断裂。
- [ ] 将 `design-language-report.md` 归档到 `whitenote/docs/design-language-report.md`。

---

**预估总工时：20–27 小时**

- 若由一人集中执行，可分 3–4 天完成。
- 若采用"核心 Token + 页面逐步迁移"策略，也可以每阶段独立交付，降低一次性改动风险。

---

*报告生成时间：2026-04-13*
*分析范围：/root/.openclaw/workspace/whitenote/docs/public/ 下的 20 个 HTML 文件*
