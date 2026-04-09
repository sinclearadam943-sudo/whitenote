# 艺境画廊 - 每日更新 SOP

## 任务概览
**定时**: 每晚 20:00 自动执行  
**目标**: 每日生成一幅画作赏析，更新到 whitenote 仓库  
**输出**: Markdown 详情页 + 画廊首页更新

---

## 完整流程

### ⚠️ 重要前提（踩坑记录）

**必须使用正确的工作目录！**
```bash
# ✅ 正确：使用 workspace 中的仓库（已配置 HTTPS Token 认证）
cd /root/.openclaw/workspace/whitenote

# ❌ 错误：使用 /tmp 克隆的仓库（会导致 SSH 认证失败）
cd /tmp && git clone ...  # 不要这样做！
```

**认证方式检查**：
```bash
# 检查远程仓库地址是否包含 Token
git remote -v
# 应显示: https://TOKEN@github.com/sinclearadam943-sudo/whitenote.git

# 如果显示 SSH 地址，需切换回 HTTPS+Token
git remote set-url origin https://TOKEN@github.com/sinclearadam943-sudo/whitenote.git
```

### Step 1: 拉取最新代码
```bash
cd /root/.openclaw/workspace/whitenote
git pull
```

**踩坑记录**: 如果提示 merge conflict，先解决冲突或重置：
```bash
# 强制同步远程（会丢失本地未推送的修改）
git fetch origin
git reset --hard origin/main
```

### Step 2: 选择艺术家
- 从 30 位艺术家池中随机选择
- **排除已生成过的艺术家**（检查 artworks.json 中已存在的艺术家）
- 优先选择未生成过的艺术家

### Step 3: 搜索作品资料
搜索内容：
- 艺术家生平（Wikipedia、百度百科）
- 代表作品信息
- 作品高清图片（Wikimedia Commons、博物馆官网）
- 艺术赏析资料
- 历史背景资料

### Step 4: 生成画作详情页
创建文件：`docs/gallery/works/作品英文名.md`

**内容结构（6大章节）**：
```markdown
---
title: 作品名 - 艺术家
---

# 作品名

[作品图片/占位符]
[作品元信息：艺术家、年代、尺寸、现藏地、流派]

## 作品概览
简要介绍作品背景、创作时间、现藏地等基本信息。

## 艺术风格
分析作品所属流派、视觉元素、风格特征。

## 技法分析
笔墨/色彩运用、构图特点、独特技法详解。

## 历史背景
创作时代背景、艺术家生平相关、历史事件关联。

## 艺术价值
作品在艺术史中的地位、影响、意义。

## 延伸阅读
- 相关作品推荐
- 外网资源链接（Wikipedia、博物馆官网、Google Arts）

*生成日期：YYYY-MM-DD*
```

**必含元素**：
- [ ] 作品图片（如有公开版权）或占位符
- [ ] 作品元信息表格
- [ ] 6大章节完整内容
- [ ] 外网资源链接（至少2个）

### Step 5: 更新 artworks.json
编辑 `docs/data/artworks.json`，在数组开头添加新记录：

```json
{
  "id": "art_YYYYMMDD_001",
  "date": "2026-04-09",
  "title": "作品名",
  "artist": "艺术家",
  "period": "时期 · 年代",
  "category": "western|chinese|calligraphy",
  "type": "油画|国画|书法",
  "description": "作品简介（50字以内，用于画廊卡片）",
  "tags": ["标签1", "标签2", "标签3"],
  "imageUrl": "图片链接（可选）",
  "pageUrl": "/gallery/works/作品英文名"
}
```

### Step 6: 更新画廊首页（可选）
如需要，更新 `docs/gallery/index.md`：
- 在网格顶部添加新作品卡片
- 更新统计信息

### Step 7: 本地构建测试
```bash
pnpm install
pnpm run build
```
确保无错误。

### Step 8: 提交并推送

```bash
git add -A
git commit -m "🎨 新增画作赏析: 艺术家《作品名》

- 日期: $(date +%Y-%m-%d)
- 艺术家: XXX
- 作品: 《XXX》
- 详情页: /gallery/works/xxx.md
- 外网资源: Wikipedia, Museum"

git push
```

**推送失败的排查步骤**：

1. **检查当前目录**
   ```bash
   pwd
   # 必须是 /root/.openclaw/workspace/whitenote
   ```

2. **检查远程地址**
   ```bash
   git remote -v
   # 必须是 https://TOKEN@github.com/... 格式
   # 如果是 git@github.com 会失败（没有配置 SSH key）
   ```

3. **检查网络连接**
   ```bash
   curl -I https://github.com
   ```

4. **Token 失效处理**
   - 如果 Token 过期，需要重新配置远程地址
   - 联系管理员获取新的 GitHub Token

---

## 完成标准检查清单

| 检查项 | 状态 |
|--------|------|
| 艺术家从30位池中随机选择（未生成过） | ☐ |
| 搜索代表作品并生成专业赏析 | ☐ |
| Markdown 详情页创建成功 | ☐ |
| 6大章节完整 | ☐ |
| 外网资源链接≥2个 | ☐ |
| artworks.json 已更新 | ☐ |
| 本地构建成功 | ☐ |
| 推送到 GitHub | ☐ |

---

## 30位艺术家池

### 西方绘画（11位）
1. **文森特·梵高** - 后印象派
2. **克劳德·莫奈** - 印象派
3. **巴勃罗·毕加索** - 立体主义
4. **列奥纳多·达·芬奇** - 文艺复兴
5. **米开朗基罗** - 文艺复兴
6. **拉斐尔** - 文艺复兴
7. **伦勃朗** - 巴洛克
8. **保罗·塞尚** - 后印象派
9. **保罗·高更** - 后印象派
10. **亨利·马蒂斯** - 野兽派
11. **萨尔瓦多·达利** - 超现实主义

### 中国书画（11位）
12. **齐白石** - 近现代/大写意
13. **张大千** - 近现代/泼墨
14. **徐悲鸿** - 近现代/写实
15. **黄宾虹** - 近现代/山水
16. **吴昌硕** - 清末/金石
17. **李可染** - 近现代/积墨
18. **傅抱石** - 近现代/山水
19. **林风眠** - 近现代/中西融合
20. **潘天寿** - 近现代/指画
21. **范曾** - 当代/人物
22. **吴冠中** - 当代/油画国画

### 书法艺术（8位）
23. **王羲之** - 东晋/行书
24. **颜真卿** - 唐代/楷书
25. **柳公权** - 唐代/楷书
26. **欧阳询** - 唐代/楷书
27. **苏轼** - 宋代/行书
28. **黄庭坚** - 宋代/行书
29. **米芾** - 宋代/行书
30. **赵孟頫** - 元代/楷书

---

## 故障处理

### 构建失败

**错误 1: 找不到图片文件**
```
[vite]: Rollup failed to resolve import "/whitenote/images/xxx.jpg"
```
**解决**: 移除或修复图片引用，或使用文本占位符：
```markdown
# 不要这样
![图片](/whitenote/images/xxx.jpg)

# 这样即可
> 🎨 作品图片占位符
```

**错误 2: YAML frontmatter 格式错误**
```
[vitepress] 编译错误
```
**解决**: 检查 frontmatter 是否包含特殊字符，确保使用标准格式：
```yaml
---
title: 作品名 - 艺术家
---
```

**通用解决**: 删除缓存重新构建
```bash
rm -rf docs/.vitepress/.temp docs/.vitepress/cache
pnpm run build
```

### 推送失败

**错误 1: Permission denied (publickey)**
```
git@github.com: Permission denied (publickey)
```
**原因**: 使用了 SSH 地址但本地没有配置 SSH key 或 key 未添加到 GitHub  
**解决**: 切换回 HTTPS+Token 地址：
```bash
git remote set-url origin https://TOKEN@github.com/sinclearadam943-sudo/whitenote.git
```

**错误 2: could not read Username**
```
fatal: could not read Username for 'https://github.com': No such device or address
```
**原因**: 使用了不含 Token 的 HTTPS 地址  
**解决**: 确认远程地址包含 Token：
```bash
git remote set-url origin https://ghp_xxx@github.com/sinclearadam943-sudo/whitenote.git
```

**错误 3: 需要 pull 后再 push**
```
! [rejected]        main -> main (fetch first)
```
**解决**: 先 pull 再 push：
```bash
git pull --rebase
git push
```

### 脚本执行失败（针对 Python 脚本）

**错误: openclaw run-tool 命令不存在**
```
error: unknown command 'run-tool'
```
**原因**: art_gallery.py 脚本使用了错误的工具调用方式  
**解决**: 脚本已修复，改用环境检测模式。在子代理中直接调用 kimi_search 工具，不要通过 subprocess。

---

## 踩坑记录汇总

| 问题 | 原因 | 解决方案 |
|------|------|---------|
| SSH 认证失败 | 使用了 SSH 地址但无 key | 改用 HTTPS+Token 地址 |
| 工作目录错误 | 在 /tmp 克隆而非 workspace | 使用 `/root/.openclaw/workspace/whitenote` |
| 构建失败-图片 | 引用了不存在的图片 | 使用文本占位符 |
| 脚本工具调用失败 | openclaw run-tool 不存在 | 已修复脚本，直接调用 kimi_search |
| Token 失效 | GitHub Token 过期 | 需要管理员重新配置 |
| **画廊首页未更新** | 只更新了 artworks.json，忘记更新 index.md | **必须手动添加卡片到画廊首页** |
| **GitHub Actions 排队** | 多个提交同时推送 | 等待上一个部署完成后再检查 |

**关键原则**:  
1. **永远使用 workspace 中的仓库**（已配置好认证）  
2. **不要尝试 SSH 认证**（没有配置 key）  
3. **构建失败先检查图片引用**  
4. **推送前确认远程地址格式**
5. **画廊首页必须手动更新**（不是自动从 artworks.json 读取）
6. **部署有延迟**（GitHub Actions 需要 30-60 秒）

---

## 📋 今日完整发布流程实录（2026-04-09）

### 背景
今日任务：新增张大千《爱痕湖》画作赏析

### 完整 8 步流程

#### Step 1: 拉取最新代码
```bash
cd /root/.openclaw/workspace/whitenote
git pull
```
✅ 成功

#### Step 2: 选择艺术家
- 检查 artworks.json 已有：梵高、齐白石、毕加索
- 选择：**张大千**（未生成过）
- 作品：《爱痕湖》（泼墨泼彩山水画代表作）

#### Step 3: 搜索资料
使用 kimi_search 搜索：
```
张大千 代表作品 泼墨画 艺术风格 历史背景
```
获取内容：
- 艺术家生平（1899-1983，四川内江）
- 《爱痕湖》创作背景（1968年，奥地利亚琛湖灵感）
- 泼墨泼彩技法介绍
- 2010年亿元拍卖记录
- 外网资源链接

#### Step 4: 生成详情页
创建文件：`docs/gallery/works/aihenhu-zhangdaqian.md`

**内容结构**：
- 标题和元信息表格
- 6大章节完整内容
- 外网资源链接（Wikipedia、Google Arts）

**⚠️ 踩坑**：不要引用不存在的图片！
```markdown
# ❌ 错误
![爱痕湖](/whitenote/images/aihenhu.jpg)

# ✅ 正确
> 🎨 张大千泼墨泼彩山水代表作 | 1968年
```

#### Step 5: 更新 artworks.json
在数组开头添加新记录：
```json
{
  "id": "art_20260409_004",
  "date": "2026-04-09",
  "title": "爱痕湖",
  "artist": "张大千",
  "period": "近现代 · 1968年",
  "category": "chinese",
  "type": "国画",
  "description": "张大千泼墨泼彩山水画的巅峰代表作...",
  "tags": ["国画", "泼墨泼彩", "张大千", "山水画"],
  "imageUrl": "",
  "pageUrl": "/gallery/works/aihenhu-zhangdaqian"
}
```

#### Step 6: 本地构建
```bash
pnpm install
pnpm run build
```
✅ 构建成功

#### Step 7: 提交并推送
```bash
git add -A
git commit -m "🎨 新增画作赏析: 张大千《爱痕湖》"
git push
```
✅ 推送成功（提交：21aed72）

#### Step 8: 验证（⚠️ 关键步骤）

**8.1 检查 GitHub Actions 状态**
- 访问：https://github.com/sinclearadam943-sudo/whitenote/actions
- 确认 Run 状态为 "completed successfully"
- 部署完成需要 30-60 秒

**8.2 验证画廊首页**
- 访问：https://sinclearadam943-sudo.github.io/whitenote/gallery/
- **⚠️ 踩坑**：发现首页只有3个作品，没有显示新添加的《爱痕湖》！

**问题原因**：画廊首页的卡片是**硬编码**在 `index.md` 中的，不是自动从 `artworks.json` 读取的！

**修复**：手动添加卡片到 `docs/gallery/index.md`
```markdown
<a href="./works/aihenhu-zhangdaqian.html" class="art-card">
  <div class="card-image-placeholder">🎨</div>
  <div class="card-content">
    <div class="card-meta">
      <span class="category chinese">中国书画</span>
      <span class="date">1968年</span>
    </div>
    <h3>《爱痕湖》</h3>
    <p class="artist">张大千</p>
    <p class="desc">...</p>
    <div class="tags">
      <span class="tag">泼墨泼彩</span>
      ...
    </div>
  </div>
</a>
```

**重新推送**：
```bash
git add -A
git commit -m "🎨 画廊首页：新增张大千《爱痕湖》作品卡片"
git push
```
✅ 推送成功（提交：a3cab15）

**等待部署**：
- Run 90 排队中 → 部署中 → 完成
- 约 30-40 秒后页面更新

**8.3 最终验证**
- ✅ 画廊首页显示4个作品
- ✅ 《爱痕湖》卡片可点击
- ✅ 详情页内容完整
- ✅ 链接跳转正常

---

### 今日发布产出

| 项目 | 内容 |
|------|------|
| **作品** | 张大千《爱痕湖》 |
| **详情页** | `/gallery/works/aihenhu-zhangdaqian.html` |
| **数据更新** | `artworks.json` 新增记录 |
| **首页更新** | `gallery/index.md` 新增卡片 |
| **GitHub 提交** | `21aed72`, `a3cab15` |
| **SOP 更新** | 添加踩坑记录和完整流程 |

---

### 明日发布检查清单

在明天 20:00 定时任务执行前，确认以下事项：

- [ ] 工作目录是 `/root/.openclaw/workspace/whitenote`
- [ ] 远程地址是 `https://TOKEN@github.com/...`
- [ ] artworks.json 中没有明日要发布的艺术家
- [ ] 记得同时更新画廊首页 `index.md`
- [ ] 构建成功后推送
- [ ] 等待 GitHub Actions 部署完成（30-60秒）
- [ ] 验证画廊页面显示新作品

---

---

## 访问地址

- **主站**: https://sinclearadam943-sudo.github.io/whitenote/
- **画廊**: https://sinclearadam943-sudo.github.io/whitenote/gallery/
- **仓库**: https://github.com/sinclearadam943-sudo/whitenote

---

*SOP 版本: 2026-04-09 v3*  
*更新内容: 添加今日完整发布流程实录、明日检查清单、画廊首页更新提醒*
