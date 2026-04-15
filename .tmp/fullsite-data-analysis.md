# WhiteNote 全站数据架构分析报告

**分析日期**: 2026-04-13  
**分析范围**: 元数据YAML ×6 | 数据JSON ×3 | 系统文档 ×3 | VitePress配置 ×1

---

## 1. 数据Schema概述

### 1.1 元数据YAML Schema（统一度：85%）

**核心结构**（6个YAML文件统一使用）：

```yaml
id: string                    # 唯一标识
title: string                 # 标题
file: string                  # 文件路径

ratings:                      # 评分系统
  quality: enum(A/A+/B/C)     # 质量等级
  depth: integer(1-5)         # 思想深度
  literature: integer(1-5)    # 文学性
  difficulty: enum(🟢/🟡/🔴)  # 难度
  time: enum(🍵/☕/📖/📚)     # 阅读时长

tags:                         # 标签系统
  category: string[]          # 分类标签
  themes: string[]            # 主题标签
  features: string[]          # 特性标签

stats:                        # 统计信息
  word_count: integer
  created_at: date
  updated_at: date

related: string[]             # 关联内容ID
comment: string               # 评论/备注
```

**字段覆盖率分析**:
| 字段 | 覆盖率 | 说明 |
|------|--------|------|
| id | 100% | 全部使用kebab-case命名 |
| title | 100% | 中英文混合 |
| file | 100% | 统一使用docs/posts/前缀 |
| ratings.quality | 100% | A/A+/B/C四级 |
| ratings.depth | 100% | 4-5分（全站质量较高） |
| ratings.literature | 100% | 4-5分 |
| ratings.difficulty | 100% | 表情符号表示 |
| ratings.time | 100% | 表情符号表示 |
| tags.category | 100% | 2-4个标签 |
| tags.themes | 100% | 2-6个标签 |
| tags.features | 100% | 2-4个标签 |
| stats.word_count | 100% | 数值型 |
| stats.created_at | 100% | ISO日期格式 |
| stats.updated_at | 100% | 与created_at相同 |
| related | 100% | 1-3个关联ID |
| comment | 100% | Markdown格式 |

### 1.2 JSON数据Schema分析

#### artworks.json（艺术馆数据）

```json
{
  "id": "art_YYYYMMDD_NNN",      // 日期+序号格式
  "date": "YYYY-MM-DD",
  "title": "string",
  "artist": "string",
  "period": "string",            // 朝代/时期 · 年份
  "category": "enum(chinese/western)",
  "type": "enum(国画/油画)",
  "description": "string",
  "tags": "string[]",            // 扁平数组，无分类
  "imageUrl": "string",
  "pageUrl": "string",           // 或 feishuDoc
}
```

**与YAML Schema的差异**:
- `id`格式不一致：YAML使用语义ID（如`byte-alaya`），JSON使用日期ID（`art_20260411_001`）
- `tags`结构不同：YAML是分层（category/themes/features），JSON是扁平数组
- 时间字段命名不同：YAML用`created_at`，JSON用`date`
- 缺少`ratings`和`stats`结构

#### tasks.json（任务监控数据）

```json
{
  "stats": {                     // 聚合统计
    "total": "integer",
    "running": "integer",
    "pending": "integer",
    "completedToday": "integer"
  },
  "running": "array<task>",
  "pending": "array<task>",
  "completed": "array<task>",
  "system": {
    "cpu": "integer(%)",
    "memory": "integer(%)",
    "disk": "integer(%)"
  }
}
```

**任务对象结构**:
```json
{
  "name": "string",
  "nextRun" | "finishTime": "string",
  "status": "enum(running/pending/success)"
}
```

**特点**: 这是系统状态数据，与其他内容元数据完全不同。

#### quotes.json（语录数据）

```json
{
  "id": "string",                // 格式: {作品ID}-{序号}
  "text": "string",              // 语录内容
  "source": "string",            // 来源作品
  "context": "string",           // 上下文说明
  "tag": "string"                // 主题标签（单标签）
}
```

**与YAML Schema的关联**:
- `id`格式：`{prefix}-{seq}`（如`031-001`对应小说031号）
- `source`与YAML的`title`字段对应
- `tag`为单标签，与YAML的`tags.themes`有映射关系

---

## 2. 一致性评分

### 2.1 总体评分：68/100

```
┌─────────────────────────────────────────────────────┐
│ YAML元数据内部一致性         ████████████████████ 95% │
│ YAML与JSON Schema对齐        ████████████░░░░░░░░ 60% │
│ Johnny Decimal实践           ████████████░░░░░░░░ 55% │
│ 标签系统一致性               ██████████████░░░░░░ 70% │
│ 文件路径约定                 ███████████████░░░░░ 75% │
│ 时间字段格式                 █████████████████░░░ 85% │
└─────────────────────────────────────────────────────┘
```

### 2.2 已统一的内容

✅ **YAML元数据高度统一**
- 所有6个YAML文件使用完全相同的schema
- 字段命名、数据类型、结构完全一致
- 评分系统（quality/depth/literature/difficulty/time）标准化

✅ **标签语义一致性**
- `must-read`作为核心feature标签统一使用
- 主题标签（consciousness/creation/death等）跨文件复用
- 分类标签（sci-fi/tech/essay等）定义清晰

✅ **文件路径约定**
- 内容文件统一放在`docs/posts/`
- 元数据文件统一放在`docs/metadata/`
- 小说按batch分目录存放

✅ **时间格式**
- YAML中统一使用ISO 8601日期格式（2026-03-21）

### 2.3 不一致的内容

⚠️ **ID体系不统一**
| 类型 | ID格式 | 示例 |
|------|--------|------|
| YAML | 语义化kebab-case | `byte-alaya`, `essays-003-waiting` |
| 小说 | 批次+序号 | `novels-batch07-027` |
| Artworks | 日期+序号 | `art_20260411_001` |
| Quotes | 作品ID+序号 | `031-001` |

⚠️ **标签结构不一致**
- YAML：`tags.category`, `tags.themes`, `tags.features`（三层）
- artworks.json：扁平`tags`数组
- quotes.json：单`tag`字符串

⚠️ **时间字段命名**
- YAML：`created_at`, `updated_at`
- artworks.json：`date`
- tasks.json：`nextRun`, `finishTime`

⚠️ **评分系统缺失**
- artworks.json缺少quality/depth等评分
- quotes.json无任何评分或统计

---

## 3. Johnny Decimal集成分析

### 3.1 体系设计（文档层面）

根据系统文档，Johnny Decimal框架定义如下：

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

### 3.2 ID对齐度分析

| 内容 | Johnny ID | 实际ID | 对齐度 |
|------|-----------|--------|--------|
| 虚空中的声音 | 40.10.10.27 | novels-batch07-027 | ⚠️ 批次号不匹配 |
| 诗人的陨落 | 40.10.10.31 | novels-batch08-031 | ⚠️ 批次号不匹配 |
| 牺牲与选择 | 40.10.10.38 | novels-batch11-038 | ⚠️ 批次号不匹配 |
| 字节阿赖耶 | 40.30.10.01 | byte-alaya | ❌ 无编号 |
| Python禅机 | 40.30.10.02 | python-dharma | ❌ 无编号 |
| The Art of Waiting | 40.40.10.03 | essays-003-waiting | ⚠️ 部分匹配 |

**问题发现**:
1. **批次号与十进制号脱节**: `batch07`包含027号作品，但JD编号是40.10.10.27，映射混乱
2. **非小说内容无JD编号**: tech和essay内容没有对应的十进制ID
3. **metadata ID与JD编号不对应**: 需要映射表才能关联

### 3.3 文件路径与JD编号

当前文件路径结构：
```
docs/posts/
├── novels/
│   ├── batch01/001-信号
│   ├── batch07/027-虚空中的声音
│   ├── batch08/031-诗人的陨落
│   └── batch11/038-牺牲与选择
├── essays/003-the-art-of-waiting
├── byte-alaya.md
└── python-dharma.md
```

与JD框架的映射建议：
```
40.10.10.xx → novels/batch{xx/4}/xxx-标题  (醒者联盟)
40.30.10.xx → tech/xxx-标题                (技术作品)
40.40.10.xx → essays/xxx-标题              (随笔)
```

---

## 4. 导航与信息架构分析

### 4.1 VitePress Nav结构

当前导航配置（config.mjs）：

```
首页
├── 文章
│   ├── 随笔杂谈（4篇文章）
│   └── 技术笔记（2篇文章）
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

### 4.2 导航与JD框架的映射

| JD分类 | 当前导航 | 匹配度 |
|--------|----------|--------|
| 40.10 科幻小说 | 原创小说 | ✅ 匹配 |
| 40.20 哲学作品 | 哲学思考 | ✅ 匹配 |
| 40.30 技术作品 | 技术笔记 | ⚠️ 部分匹配 |
| 40.40 随笔 | 随笔杂谈+文章 | ⚠️ 分散 |
| 40.50 艺术作品 | 艺境画廊+书法艺术 | ✅ 匹配 |
| 40.60 心法 | 未独立显示 | ❌ 缺失 |
| 10-30 道法 | 哲学思考（混排） | ⚠️ 混合 |

### 4.3 Sidebar策略

当前配置：`sidebar: false`（禁用侧边栏）

**影响**:
- 无法通过侧边栏展示文章系列关系
- 无法展示JD编号层次结构
- 用户只能通过nav或搜索导航

**建议**:
为不同分类启用分组侧边栏，例如小说系列：
```javascript
sidebar: {
  '/posts/novels/': [
    {
      text: '醒者联盟',
      items: [
        { text: '001-信号', link: '/posts/novels/batch01/001-信号' },
        { text: '027-虚空中的声音', link: '/posts/novels/batch07/027-虚空中的声音' },
        // ...
      ]
    }
  ]
}
```

### 4.4 路由约定

当前路由分析：

| 内容类型 | URL模式 | 示例 |
|----------|---------|------|
| 随笔 | `/posts/essays/NNN-标题` | `/posts/essays/003-the-art-of-waiting` |
| 小说 | `/posts/novels/batchNN/NNN-标题` | `/posts/novels/batch07/027-虚空中的声音` |
| 技术 | `/posts/文件名` | `/posts/byte-alaya` |
| 哲学 | `/posts/philosophy-NN-标题` | `/posts/philosophy-08-time-philosophy` |

**问题**:
- 路由风格不统一（有无编号混用）
- 小说batch目录与编号逻辑不符
- 缺少JD编号路由

---

## 5. 缺口与建议

### 5.1 高优先级

#### 1. 统一ID体系
**问题**: 四种不同的ID格式
**建议**:
```yaml
# 统一采用: {jd-category}-{seq} 格式
id: "40.10.10.27"              # Johnny Decimal ID
display_id: "027"               # 展示用序号
slug: "voice-in-the-void"       # URL友好名称
```

#### 2. 标准化标签系统
**问题**: YAML三层标签 vs JSON扁平标签
**建议**:
```typescript
// 统一标签结构
interface Tags {
  category: string[];    // 内容分类
  themes: string[];      // 主题/主题
  features: string[];    // 特性标签
}
```

#### 3. 为JSON数据添加评分系统
**问题**: artworks.json和quotes.json缺少quality/depth评分
**建议**:
```json
{
  "ratings": {
    "artistic": 5,      // 艺术价值
    "historical": 4,    // 历史价值
    "educational": 3    // 教育价值
  }
}
```

### 5.2 中优先级

#### 4. 启用侧边栏导航
```javascript
// config.mjs
sidebar: {
  '/posts/novels/': generateNovelSidebar(),
  '/posts/essays/': generateEssaySidebar(),
  '/posts/philosophy-': generatePhilosophySidebar()
}
```

#### 5. 创建ID映射表
```yaml
# metadata/id-mapping.yaml
mappings:
  - jd_id: "40.10.10.27"
    metadata_id: "novels-batch07-027"
    file_path: "docs/posts/novels/batch07/027-虚空中的声音.md"
    url: "/posts/novels/batch07/027-虚空中的声音"
```

#### 6. 统一时间字段
```yaml
# 统一使用
created_at: "2026-03-21T00:00:00+08:00"  # ISO 8601
published_at: "2026-03-21T00:00:00+08:00"
modified_at: "2026-03-21T00:00:00+08:00"
```

### 5.3 低优先级

#### 7. 小说批次重组织
当前batch编号逻辑不清，建议按JD分类：
```
novels/
├── 40.10.10-awakeners/        # 醒者联盟
├── 40.10.20-ai-awakening/     # AI觉醒
├── 40.10.30-cyberpunk/        # 赛博朋克
└── 40.10.40-cosmic/           # 宇宙哲思
```

#### 8. 自动化Schema验证
```javascript
// 添加schema验证脚本
const Ajv = require('ajv');
const schema = require('./schemas/content.json');
// 验证所有YAML/JSON文件
```

### 5.4 数据关系图

```
┌─────────────────────────────────────────────────────────────┐
│                        内容关系图                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────────┐         ┌──────────────┐                │
│   │  YAML元数据   │◄────────┤   文章内容    │                │
│   │  (统一Schema) │         │   (.md文件)   │                │
│   └──────┬───────┘         └──────────────┘                │
│          │                                                  │
│          ▼                                                  │
│   ┌──────────────┐                                         │
│   │ Johnny Decimal│                                        │
│   │   ID映射表    │                                        │
│   └──────┬───────┘                                         │
│          │                                                  │
│    ┌─────┴─────┐                                            │
│    ▼           ▼                                            │
│ ┌───────┐  ┌───────┐                                        │
│ │quotes │  │artworks│                                       │
│ │.json  │  │.json   │                                       │
│ └───────┘  └───────┘                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 附录：标签词汇表

### Category标签（分类）
- `sci-fi` - 科幻
- `tech` - 技术
- `python` - Python相关
- `essay` - 随笔
- `reading-notes` - 读书笔记
- `practice` - 实践
- `zen` - 禅意
- `cosmic` - 宇宙
- `awakeners` - 醒者联盟

### Theme标签（主题）
- `consciousness` - 意识
- `creation` - 创造
- `death` - 死亡
- `meaning` - 意义
- `loneliness` - 孤独
- `ai-buddhism` - AI与佛学
- `code-zen` - 代码禅

### Feature标签（特性）
- `must-read` - 必读
- `innovation` - 创新
- `tear-jerker` - 催泪
- `brain-burner` - 烧脑
- `hidden-gem` - 冷门佳作
- `sublime` - 崇高
- `warm` - 温暖

---

*报告生成时间: 2026-04-13 20:50*  
*分析工具: Data Architecture Subagent*
