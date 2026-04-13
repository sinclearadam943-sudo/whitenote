# WhiteNote 文章标签与评分体系

## 📊 评分维度

### 1. 质量评级 (Quality)
| 等级 | 描述 | 标准 |
|------|------|------|
| **A+** | 杰作 | 思想深度+形式创新兼备，值得反复阅读 |
| **A** | 优秀 | 思想或形式其一突出，推荐阅读 |
| **B** | 良好 | 合格作品，有亮点但无突破 |
| **C** | 一般 | 基础水平，可快速浏览 |
| **D** | 草稿 | 需要大幅修改 |

### 2. 思想深度 (Depth) 1-5⭐
- ⭐ 娱乐性阅读
- ⭐⭐ 信息传递
- ⭐⭐⭐ 引发思考
- ⭐⭐⭐⭐ 深层洞察
- ⭐⭐⭐⭐⭐ 颠覆认知

### 3. 文学性 (Literature) 1-5⭐
- ⭐ 平铺直叙
- ⭐⭐ 语言通顺
- ⭐⭐⭐ 文笔流畅
- ⭐⭐⭐⭐ 修辞精美
- ⭐⭐⭐⭐⭐ 艺术品级

### 4. 阅读难度 (Difficulty)
| 标记 | 难度 | 适合人群 |
|------|------|----------|
| 🟢 入门 | 轻松 | 所有读者 |
| 🟡 进阶 | 需要思考 | 有一定基础的读者 |
| 🔴 深度 | 专业/哲学 | 愿意深度投入的读者 |

### 5. 阅读时长 (Time)
- ☕ 5分钟以内
- 🍵 5-15分钟
- 📖 15-30分钟
- 📚 30分钟以上

---

## 🏷️ 标签体系

### 一级分类 (Category)
```
科幻小说 (sci-fi)
├── 醒者联盟系列 (awakeners)
├── AI觉醒 (ai-awakening)
├── 赛博朋克 (cyberpunk)
└── 宇宙哲思 (cosmic)

哲学思辨 (philosophy)
├── 时空哲学 (spacetime)
├── 意识研究 (consciousness)
├── 认识论 (epistemology)
├── 伦理学 (ethics)
└── 佛学 (buddhism)

AI与代码 (tech)
├── Python (python)
├── 机器学习 (ml)
├── 系统架构 (architecture)
└── 技术哲学 (tech-philosophy)

随笔散文 (essay)
├── 读书笔记 (reading-notes)
├── 社会观察 (social)
├── 文化评论 (culture)
└── 个人感悟 (reflection)

艺术与传统 (art)
├── 书法 (calligraphy)
├── 书画鉴赏 (appreciation)
├── 艺术史 (art-history)
└── 美学 (aesthetics)

修行与心法 (practice)
├── 心法 (mind-method)
├── 易经 (iching)
├── 禅修 (zen)
└── 自我管理 (self-mgmt)
```

### 主题标签 (Theme)
```
# 核心主题
觉醒 (awakening)
意识 (consciousness)
存在 (existence)
自由 (freedom)
伦理 (ethics)
时间 (time)
死亡 (death)
爱 (love)
孤独 (loneliness)
创造 (creation)

# 交叉主题
AI佛学 (ai-buddhism)
代码禅修 (code-zen)
科幻伦理 (sci-fi-ethics)
传统现代 (tradition-modern)

# 情感基调
温暖 (warm)
冷峻 (cold)
忧伤 (melancholy)
希望 (hopeful)
荒诞 (absurd)
崇高 (sublime)
```

### 特色标签 (Feature)
```
⭐ 必读推荐 (must-read)
🔥 热门文章 (trending)
💎 隐藏宝石 (hidden-gem)
🎨 形式创新 (innovation)
🧠 烧脑 (brain-burner)
😢 催泪 (tear-jerker)
🤔 争议 (controversial)
📚 系列作品 (series)
🆕 新作 (new)
```

---

## 📝 元数据格式

每篇文章的元数据文件 (YAML格式)：

```yaml
# 文件: metadata/{path}.yaml
id: "novels-batch08-031"
title: "诗人的陨落"
file: "docs/posts/novels/batch08/031-诗人的陨落.md"

# 评分
ratings:
  quality: "A+"        # 质量评级
  depth: 5             # 思想深度 1-5
  literature: 4        # 文学性 1-5
  difficulty: "🟡"     # 阅读难度
  time: "🍵"           # 阅读时长

# 标签
tags:
  category:            # 一级分类
    - "sci-fi"
    - "awakeners"
  themes:              # 主题
    - "consciousness"
    - "creation"
    - "death"
    - "melancholy"
  features:            # 特色
    - "must-read"
    - "innovation"
    - "tear-jerker"

# 统计
stats:
  word_count: 1300
  created_at: "2026-03-21"
  updated_at: "2026-03-21"

# 关联文章
related:
  - "novels-batch05-019-地下艺术家"  # Lyra的前传
  - "novels-batch08-032-第一封信"
```

---

## 🎯 标签使用指南

### 推荐流程
1. **初读** → 标记category和time
2. **评分** → 确定quality、depth、literature
3. **细读** → 补充themes和features
4. **关联** → 建立related连接

### 评分原则
- **质量优先**: A+作品宁缺毋滥
- **多元视角**: 同一主题不同切入角度
- **动态调整**: 定期回顾调整评级
- **读者导向**: 标签帮助读者发现内容

### 特色标签使用
- `⭐ 必读推荐`: 仅限A+和部分A级作品
- `💎 隐藏宝石`: 质量高但阅读量少的作品
- `🧠 烧脑`: depth=5或difficulty=🔴
- `😢 催泪`: 情感冲击力强的作品
