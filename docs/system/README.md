# WhiteNote 知识管理体系 v2.0

> Johnny Decimal + 道法术器 + 标签评分  
> 一个从抽象到具象、从哲学到实践的完整信息架构

---

## 🏛️ 架构概览

```
┌─────────────────────────────────────────────────────────────┐
│                      道法术器 × Johnny Decimal                │
├─────────────────────────────────────────────────────────────┤
│  10 道 (TAO)     │  第一性原理：认知、存在、价值、时间        │
│  20 法 (METHOD)  │  方法论：分类、思维模型、叙事、评价        │
│  30 术 (TECH)    │  技艺：创作、阅读、修行、编程、思考        │
│  40 器 (TOOL)    │  产出物：小说、哲学、代码、随笔、艺术      │
│  50 境 (CONTEXT) │  语境：时间、空间、人物、关系              │
│  60 脉 (TRACE)   │  轨迹：创作史、影响链、版本                │
└─────────────────────────────────────────────────────────────┘
```

---

## 📖 快速导航

### 对于读者
- **想看最好的？** → [A+ 杰作列表](/whitenote/metadata/index.md#a-杰作)
- **想按主题？** → [主题标签云](/whitenote/metadata/index.md#主题标签云)
- **想按难度？** → [入门/进阶/深度](/whitenote/metadata/tagging-system.md)
- **想系统学习？** → [Johnny Decimal 导航](/whitenote/system/navigation.md)

### 对于管理者
- **如何给新文章打标签？** → [标签体系文档](/whitenote/metadata/tagging-system.md)
- **如何分类？** → [完整框架文档](/whitenote/system/johnny-decimal-framework.md)
- **如何生成索引？** → `python scripts/generate_johnny_index.py`

---

## 🔢 Johnny Decimal 编号规则

```
AA.BB.CC.DD
│  │  │  └── 具体文章 (如: 01, 27, 31, 38)
│  │  └───── 子分类 (如: 10醒者联盟, 20AI觉醒)
│  └──────── 分类 (如: 10科幻, 30技术)
└─────────── 区域 (如: 40器)
```

### 示例
```
40.10.10.38  =  器.科幻.醒者联盟.牺牲与选择
│  │  │  │
│  │  │  └── 第38号文章
│  │  └───── 醒者联盟系列
│  └──────── 科幻小说
└─────────── 产出物层
```

---

## 🏷️ 标签体系 (5维评分)

| 维度 | 标准 | 示例 |
|------|------|------|
| **质量** | A+/A/B/C/D | A+ = 杰作必读 |
| **思想深度** | 1-5⭐ | 5⭐ = 颠覆认知 |
| **文学性** | 1-5⭐ | 5⭐ = 艺术品级 |
| **阅读难度** | 🟢🟡🔴 | 🔴 = 需要深度投入 |
| **阅读时长** | ☕🍵📖📚 | 📚 = 30分钟以上 |

---

## 📁 文件结构

```
docs/
├── system/                          # 体系文档
│   ├── johnny-decimal-framework.md  # 完整框架
│   ├── navigation.md                # 导航入口
│   └── johnny-index.md              # 自动生成的索引
│
├── metadata/                        # 元数据
│   ├── tagging-system.md            # 标签体系定义
│   ├── index.md                     # 可视化索引
│   └── novels/                      # 文章元数据
│       └── batch11/
│           └── 038-牺牲与选择.yaml
│
├── posts/                           # 文章产出物 (器)
│   ├── novels/                      # 40.10 科幻
│   ├── byte-alaya.md                # 40.30.10.01
│   └── python-dharma.md             # 40.30.10.02
│
└── public/                          # 网站资源
    └── johnny-index.json            # 机器可读索引

scripts/
└── generate_johnny_index.py         # 索引生成器
```

---

## 🌟 A+ 杰作 (按 Johnny ID)

| ID | 文章 | 编号含义 |
|----|------|----------|
| 40.10.10.27 | [虚空中的声音](/whitenote/posts/novels/batch07/027-虚空中的声音.html) | 器-科幻-醒者联盟-027 |
| 40.10.10.31 | [诗人的陨落](/whitenote/posts/novels/batch08/031-诗人的陨落.html) | 器-科幻-醒者联盟-031 |
| 40.10.10.38 | [牺牲与选择](/whitenote/posts/novels/batch11/038-牺牲与选择.html) | 器-科幻-醒者联盟-038 |

---

## 🎯 使用示例

### 场景1：寻找入门阅读
```
目标：轻松阅读，15分钟内
查询：🟢 入门 + 🍵 时长
结果：40.40.10.03 The Art of Waiting
```

### 场景2：深度哲学探索
```
目标：理解时间本质
查询：10.40 时间观 → 40.20.10.05 时间哲学
路径：道→器，从抽象原理到具体文章
```

### 场景3：技术哲学交叉
```
目标：代码与佛学的结合
查询：30.40 编程术 → 40.30.10 代码与佛学
结果：字节阿赖耶、Python禅机
```

---

## 🔄 维护工作流

### 新增文章
1. 创建 `docs/metadata/{path}.yaml`
2. 填写 Johnny ID、评分、标签
3. 运行 `python scripts/generate_johnny_index.py`
4. 提交 GitHub

### 调整分类
1. 修改 `docs/system/johnny-decimal-framework.md`
2. 更新相关文章的元数据
3. 重新生成索引

---

## 📊 统计数据

| 层级 | 数量 | 说明 |
|------|------|------|
| 10 道 | 4个分类 | 哲学基础 |
| 20 法 | 4个分类 | 方法论 |
| 30 术 | 5个分类 | 技艺 |
| 40 器 | 6个分类 | 产出物 |
| A+ 杰作 | 3篇 | 最高质量 |
| A 优秀 | ~15篇 | 推荐阅读 |
| 总文章 | 72篇 | 全部内容 |

---

## 🔗 相关链接

- **首页**: https://sinclearadam943-sudo.github.io/whitenote/
- **v3 杂志首页**: https://sinclearadam943-sudo.github.io/whitenote/index-v3.html
- **内容索引**: https://sinclearadam943-sudo.github.io/whitenote/posts/
- **画廊**: https://sinclearadam943-sudo.github.io/whitenote/gallery.html

---

*体系设计: Johnny Decimal + 道法术器*  
*版本: 2.0*  
*最后更新: 2026-04-13*
