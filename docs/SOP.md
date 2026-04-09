# 艺境 ArtistWiki - 标准操作流程 (SOP)

## 项目概述
每日自动搜索中外画家/书法家及其名作，生成专业赏析内容，同步发布到飞书文档和 GitHub Pages。

**主仓库**: https://github.com/sinclearadam943-sudo/whitenote.git

---

## 一、每日画作赏析生成（核心任务）

### SOP

**定时**: 每晚 20:00 自动执行（cron job: `daily-art-gallery`）

**完整流程**:
```bash
# 1. 拉取最新代码
 cd /tmp && rm -rf whitenote
 git clone https://TOKEN@github.com/sinclearadam943-sudo/whitenote.git
 cd whitenote

# 2. 执行画作生成（自动生成以下步骤）
#    - 从30位艺术家池中随机选择
#    - 搜索艺术家及代表作品
#    - 生成赏析内容（6大章节）
#    - 创建飞书文档
#    - 更新 artworks.json

# 3. 提交并推送
git add -A
git commit -m "🎨 新增画作赏析: 艺术家《作品名》"
git push
```

### 完成标准（6项）
- [x] 艺术家从30位艺术家池中随机选择（排除已生成）
- [x] 搜索代表作品并生成专业赏析
- [x] **飞书文档**创建成功（含6大章节）
- [x] **本地数据**更新（`docs/data/artworks.json`）
- [x] **whitenote** 仓库推送成功
- [x] **统计数据**正确（作品数/艺术家数/今日新增）

### 文档质量检查
- [x] 标题格式：`【画作赏析】YYYY-MM-DD - 艺术家《作品名》`
- [x] 必含6章节：概览、风格、技法、历史、价值、延伸阅读
- [x] 排版：callout信息块、表格、链接

---

## 二、飞书渠道维护

### SOP
1. 检查飞书渠道状态：`openclaw status`
2. 如显示 `Feishu | OFF`，启用插件：`openclaw config set plugins.entries.feishu.enabled true`
3. 重启 Gateway：`openclaw gateway restart`

### 完成标准
- [ ] `openclaw status` 显示 `Feishu | ON | OK`
- [ ] 77个权限已授权

---

## 三、飞书文档创建

### SOP
1. 搜索画作相关资料（kimi_search）
2. 生成赏析内容（Markdown格式）
3. 调用 `feishu_create_doc` 创建文档
4. 保存文档URL到本地数据

### 完成标准
- [ ] 文档标题格式正确
- [ ] 包含 callout 信息块（艺术家、作品、时期）
- [ ] 包含6个二级标题章节
- [ ] 包含艺术家简介和延伸阅读
- [ ] 文档可正常访问

---

## 四、whitenote 仓库更新

### SOP（每日执行）

```bash
# 1. 进入工作目录
cd /tmp

# 2. 拉取最新代码（清理旧目录）
rm -rf whitenote
git clone https://TOKEN@github.com/sinclearadam943-sudo/whitenote.git
cd whitenote

# 3. 配置 Git
git config user.email "artistwiki@example.com"
git config user.name "ArtistWiki Bot"

# 4. 更新数据文件（追加新画作到 docs/data/artworks.json）
#    新记录 unshift 到数组开头

# 5. 提交并推送
git add -A
git commit -m "🎨 新增画作赏析: 艺术家《作品名》

- 日期: YYYY-MM-DD
- 艺术家: XXX
- 作品: 《XXX》
- 飞书文档: https://..."
git push

# 6. 清理敏感信息
git remote set-url origin https://github.com/sinclearadam943-sudo/whitenote.git
```

### 完成标准
- [ ] 成功拉取最新 `whitenote` 仓库
- [ ] `docs/data/artworks.json` 已更新（新记录在前）
- [ ] 提交信息规范（含日期、艺术家、作品、飞书链接）
- [ ] 成功推送到 GitHub main 分支
- [ ] 远程 URL 已清理（移除 Token）

---

## 五、数据文件格式

### artworks.json 结构
```json
{
  "id": "art_20260409_001",
  "date": "2026-04-09",
  "title": "作品名",
  "artist": "艺术家",
  "period": "时期 · 年代",
  "category": "western|chinese|calligraphy",
  "type": "油画|国画|书法",
  "description": "作品简介...",
  "tags": ["标签1", "标签2"],
  "imageUrl": "图片链接",
  "feishuDoc": "https://www.feishu.cn/docx/..."
}
```

---

## 六、画廊页面组件

| 组件 | 完成标准 |
|------|----------|
| **画廊页面** | 卡片式布局，图片+标题+描述，支持筛选 |
| **筛选功能** | 4个分类按钮：全部/中国书画/西方绘画/书法艺术 |
| **统计面板** | 显示作品数/艺术家数/当前筛选标签 |
| **艺术家页面** | 按艺术家聚合作品，显示分类标签 |
| **数据加载** | 使用 `artworks.data.js` 动态加载 |

---

## 七、定时任务管理

### 查看任务
```bash
openclaw cron list
```

### 手动运行
```bash
openclaw cron run daily-art-gallery
```

### 修改时间
```bash
# 改为每天21:00
openclaw cron update daily-art-gallery --schedule="0 21 * * *"
```

---

## 八、故障排查

### 飞书文档创建失败
- 检查授权：`feishu_oauth_batch_auth`
- 检查文档大小：单文档不超过100MB

### GitHub推送失败
- 检查 Token 是否有效
- 检查远程仓库地址：`git remote -v`
- 检查分支名称：`git branch`

### 定时任务未触发
- 检查 Gateway 状态：`openclaw status`
- 检查任务状态：`openclaw cron list`
- 手动触发测试

---

## 九、艺术家池（30位）

### 中国书画
齐白石、张大千、徐悲鸿、黄宾虹、吴昌硕、李可染、傅抱石、林风眠、潘天寿、范曾、吴冠中

### 书法艺术
王羲之、颜真卿、柳公权、欧阳询、苏轼、黄庭坚、米芾、赵孟頫、董其昌、王铎、郑板桥

### 西方绘画
梵高、莫奈、毕加索、达芬奇、米开朗基罗、拉斐尔、伦勃朗、塞尚、高更、马蒂斯、达利

---

## 十、访问地址

- **主站**: https://sinclearadam943-sudo.github.io/whitenote/
- **画廊**: https://sinclearadam943-sudo.github.io/whitenote/gallery/
- **艺术家**: https://sinclearadam943-sudo.github.io/whitenote/artists/
- **仓库**: https://github.com/sinclearadam943-sudo/whitenote

---

*更新日期: 2026-04-09*
