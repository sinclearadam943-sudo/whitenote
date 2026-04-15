# WhiteNote Site Markdown Analysis Report

## Executive Summary

This report analyzes 12 sample Markdown files from the WhiteNote documentation site to identify content patterns, structural conventions, and design implications for the VitePress-based publishing system.

---

## 1. Content Type Taxonomy

### 1.1 Technical/Essay Posts (带Frontmatter)
**Examples:** `philosophy-01-spacetime.md`, `003-the-art-of-waiting.md`

**Structure:**
- YAML frontmatter with title, date, tags, description/author/summary
- Standard Markdown hierarchy (H1 → H2 → H3)
- Conventional blockquote formatting
- Horizontal rules as section dividers
- Footer metadata (word count, completion date)

**Key Characteristics:**
- Academic/formal tone
- Footnote-style navigation links (`[← 上一篇] | [下一篇 →]`)
- Structured argument progression
- External reference links

---

### 1.2 Creative Fiction (小说/故事)
**Examples:** `ai-fairy-tale.md`, `python-dharma.md`, `001-信号.md`, `031-诗人的陨落.md`

**Structure Patterns:**

**Variant A - Styled HTML Header:**
- Inline `<style>` block for custom article header
- Article number badge, title, metadata grid
- Decorative footer with back link
- No YAML frontmatter

**Variant B - Simple Markdown:**
- Subtitle em-dash format (`—— 副标题 ——`)
- Chapter markers (`## 第一章：...`)
- Dialogue-heavy with bold speaker names
- Scene breaks via `---` horizontal rules

**Variant C - Frontmatter Lite:**
- Minimal frontmatter: `outline: deep`
- Metadata inline (批次/编号/字数)
- Document-style formatting

**Key Characteristics:**
- Narrative arc structure
- Character dialogue formatting (**Name:** dialogue)
- Dramatic scene transitions
- Epilogue/postscript conventions

---

### 1.3 Gallery/Visual Content
**Examples:** `gallery/index.md`, `gallery/works/guernica.md`

**Structure:**
- Heavily HTML/CSS-dependent
- Card-based layouts with `<div class="gallery-grid">`
- Image placeholders (external URLs or emoji fallbacks)
- Metadata tables using definition lists

**Key Characteristics:**
- CSS Grid/Flexbox for layout
- Category badges (colored spans)
- Tag clusters
- Responsive design considerations
- External Wikimedia image references

---

### 1.4 Academic/Long-form Educational
**Examples:** `中国书法艺术史深度解析.md`

**Structure:**
- Contract-style header (文档概述, Global Conventions table)
- Chapter dependency tables
- Multi-level heading hierarchy (### 1.1, ### 1.2)
- Internal cross-references to subsequent sections
- Summary tables for concept comparison

**Key Characteristics:**
- Table-heavy (Markdown tables for data)
- Definition/convention documentation
- Sequential chapter structure with dependencies
- Citation format: 人名《作品》

---

### 1.5 System/Navigation Documentation
**Examples:** `navigation.md`, `tagging-system.md`

**Structure:**
- ASCII art diagrams
- Code block examples
- Hierarchical tree lists
- Reference tables
- YAML format examples

**Key Characteristics:**
- Johnny Decimal numbering system
- Emoji-based visual indicators
- Link-heavy with paths
- Version metadata

---

## 2. Frontmatter Standardization

### 2.1 Consistent Keys (When Present)

| Key | Usage Frequency | Data Type | Example Values |
|-----|-----------------|-----------|----------------|
| `title` | 100% | String | "时空观——牛顿绝对时空 vs 道家'无'" |
| `date` | ~60% | ISO Date | 2026-03-22, 2026-04-13 |
| `tags` | ~50% | Array | [物理学, 中国哲学, 时空观] |
| `description` / `summary` | ~40% | String | Article abstract |
| `author` | ~20% | String | "AI" |
| `categories` | ~20% | Array | [essays] |
| `outline` | ~10% | String | "deep" |

### 2.2 Frontmatter Variations

**Complete Frontmatter (Standard):**
```yaml
---
title: "The Art of Waiting"
date: 2026-04-13
author: AI
summary: A five-chapter deep analysis...
categories:
  - essays
tags:
  - philosophy
  - resilience
---
```

**Minimal Frontmatter:**
```yaml
---
outline: deep
---
```

**No Frontmatter:**
- 50% of sampled files omit frontmatter entirely
- Rely on H1 or HTML-styled headers

### 2.3 Standardization Issues

1. **Inconsistent Date Formats:**
   - `2026-03-22` (ISO)
   - `2026-04-13` (ISO)
   - Inline: `2027-03-19`

2. **Mixed Languages:**
   - Keys sometimes English, content Chinese
   - Some files entirely Chinese keys/values
   - Others entirely English

3. **Tags Format:**
   - Some: `tags: [物理学, 中国哲学]` (inline array)
   - Others: `tags:` followed by `- item` (block array)

---

## 3. Markdown Patterns

### 3.1 Typography Conventions

**Emphasis Hierarchy:**
- `**粗体**` - Key terms, names, emphasis
- `*斜体*` - Rarely used (foreign terms, titles)
- `***粗斜体***` - Not observed
- `` `代码` `` - Technical terms, file names, inline code

**Blockquote Usage:**
- `>` - Direct quotations
- `> >` - Nested quotes (observed in dialogue)
- `> **Bold**` - Quote attribution

**Horizontal Rules:**
- `---` - Section breaks (most common)
- `***` - Not observed
- `___` - Not observed

### 3.2 Heading Patterns

**Standard Hierarchy:**
```markdown
# H1 - Title (usually single per file)
## H2 - Major sections/chapters
### H3 - Subsections
#### H4 - Detailed points (rare)
```

**Chinese Title Conventions:**
- Main title: `《书名》` or 文章标题
- Chapter format: `第X章：章节名`
- Section format: `X.Y 节名` or `### X.Y 节名`

### 3.3 List Patterns

**Unordered Lists:**
- `-` exclusively used (no `*` or `+`)
- Nested with 2-space indentation
- Often contain bold labels: `- **Label**: value`

**Ordered Lists:**
- `1. 2. 3.` for sequential steps
- Used in "how to" sections

**Definition-style Lists:**
```markdown
**术语**: 定义内容
**Key**: Value
```

### 3.4 Link Patterns

**Internal Links:**
| Pattern | Usage | Example |
|---------|-------|---------|
| Root-relative | Most common | `/posts/hello-world` |
| Relative | Same directory | `./works/guernica.html` |
| With .html | Gallery/specific | `/whitenote/posts/novels/batch01/001-信号.html` |
| Without extension | Default | `/posts/philosophy-02-math-limit` |

**External Links:**
- Full HTTPS URLs
- Wikimedia Commons for images
- Museum/official sites for artwork references

### 3.5 Image Syntax

**Markdown Standard:**
```markdown
![Alt text](URL)
```

**HTML Fallback (Most Common in Gallery):**
```html
<img src="URL" alt="描述" class="card-image" />
<div class="card-image-placeholder">🎨</div>
```

**Image Classes Observed:**
- `.card-image` - Gallery thumbnails
- `.artwork-image` - Full artwork display
- `.article-header` - Styled headers

### 3.6 Code Blocks

**Language Tags:**
- `python` - Python code examples
- `yaml` / `yml` - Configuration/metadata
- `markdown` - Documentation examples
- No language tag - Console output, plain text

**Inline Code Usage:**
- File names: `` `filename.md` ``
- Technical terms: `` `decorator` ``
- System paths: `` `docs/posts/` ``
- Function names: `` `if __name__ == "__main__":` ``

---

## 4. Inconsistencies

### 4.1 Structural Deviations

| Issue | Examples | Impact |
|-------|----------|--------|
| Frontmatter presence | 50% have it, 50% don't | Inconsistent metadata extraction |
| Title placement | H1, HTML div, frontmatter | Parser must check multiple locations |
| Navigation format | `.html` vs no extension | Link resolution complexity |
| Language mixing | EN keys/CN values vs all CN | Template standardization challenge |
| Date location | Frontmatter vs inline | Chronological sorting inconsistency |

### 4.2 Content Organization Variance

**Article Headers:**
- `philosophy-01-spacetime.md`: No custom header, uses standard H1
- `001-信号.md`: Complex HTML `<style>` + `<div>` header with metadata grid
- `031-诗人的陨落.md`: Inline centered div with metadata
- `guernica.md`: Custom `.artwork-header` with grid layout

**Section Dividers:**
- Some use `---` consistently between chapters
- Others rely on heading hierarchy alone
- Gallery uses visual card separation

**Metadata Display:**
- Footer: `philosophy-01-spacetime.md` (字数 | 完成时间)
- Header: Novels (批次 | 编号 | 字数)
- Frontmatter only: `003-the-art-of-waiting.md`
- Not displayed: `hello-world.md`

### 4.3 HTML Usage Variance

| File Type | HTML Usage | CSS Custom Properties |
|-----------|------------|---------------------|
| Novels | Heavy - custom headers/footers | `--vp-c-*` variables |
| Gallery | Very heavy - grid layouts | Extensive custom CSS |
| Essays | Minimal - standard Markdown | None |
| System docs | Moderate - tables, ASCII | None |

### 4.4 Tag/Category Inconsistency

- `tags:` vs `categories:` - Used interchangeably
- Chinese tags: `[物理学, 中国哲学]`
- English tags: `[philosophy, resilience]`
- Mixed: `[philosophy, 中国哲学]`

---

## 5. Design Implications

### 5.1 HTML Presentation Layer Mapping

**VitePress Theme Variables Used:**
```css
var(--vp-c-bg-soft)       /* Card backgrounds */
var(--vp-c-bg-mute)       /* Gradient endpoints */
var(--vp-c-divider)       /* Borders */
var(--vp-c-brand)         /* Accent colors (badges) */
var(--vp-c-text-1)        /* Primary text */
var(--vp-c-text-2)        /* Secondary text */
```

**Implication:** The site uses VitePress default theme with custom CSS overrides. The Markdown content expects these CSS variables to be available.

### 5.2 Component Requirements

Based on patterns observed, the presentation layer needs:

**1. Article Header Component**
```
[Number Badge] [Title]
[Metadata Grid: 批次 | 编号 | 字数]
```
Variants needed: styled (novels), minimal (essays), artwork (gallery)

**2. Gallery Card Component**
```
[Image/Placeholder]
[Category Badge] [Date]
[Title]
[Artist]
[Description - 2 line clamp]
[Tags]
```

**3. Navigation Footer**
```
[← Previous Article] | [Next Article →]
[Back to Index]
```

**4. Metadata Table**
For artwork/gallery pages with key-value pairs

### 5.3 CSS Framework Requirements

**Must Support:**
- CSS Grid (`gallery-grid`, `artwork-header`)
- Flexbox (metadata rows, card content)
- CSS custom properties (VitePress theme variables)
- Line clamping (`.desc` with `-webkit-line-clamp: 2`)
- Responsive breakpoints (`@media (max-width: 768px)`)

### 5.4 Parser/Transformer Requirements

**Frontmatter Extraction:**
- Must handle missing frontmatter gracefully
- Support both inline (`[a,b,c]`) and block (`- item`) arrays
- Normalize date formats

**Content Detection:**
- Detect H1 when frontmatter title missing
- Extract inline metadata (novel number, batch info)
- Parse custom HTML headers as fallbacks

**Link Processing:**
- Normalize `.html` extensions for VitePress routing
- Handle both relative and absolute paths
- External link detection (for security/target attributes)

### 5.5 Typography Scale

**Observed Patterns:**
- Novels: `32px` article titles
- Gallery cards: `1.2rem` titles, `0.9rem` descriptions
- Body text: Default VitePress sizing
- Badges: `0.75rem` with `padding: 0.2rem 0.6rem`

**Recommendation:** Use VitePress defaults with CSS custom property overrides for:
- Article-specific headers
- Gallery card typography
- Badge/pill components

---

## 6. Recommendations

### 6.1 Standardization Opportunities

1. **Frontmatter:** Require minimal frontmatter on all posts
   ```yaml
   ---
   title: "文章标题"
   date: YYYY-MM-DD
   ---
   ```

2. **Language:** Standardize on Chinese keys with flexible values
   ```yaml
   tags:
     - 物理学
     - philosophy  # allowed for cross-language
   ```

3. **Navigation:** Consistent path format (recommend no `.html`)

4. **Metadata:** Standardize on frontmatter + optional display override

### 6.2 Component Design Priorities

1. **High:** Article header with metadata grid
2. **High:** Gallery card with image placeholder fallback
3. **Medium:** Navigation footer with prev/next
4. **Medium:** Tag/badge cluster
5. **Low:** Custom table styles

### 6.3 Edge Cases to Handle

- Files with no frontmatter (default to filename as title)
- Files with `<style>` blocks (preserve or extract)
- Mixed language content (UTF-8 encoding critical)
- Emoji placeholders (render as-is or replace)
- External images (hotlink handling, fallbacks)

---

## Appendix: File-by-File Summary

| File | Type | Frontmatter | HTML/CSS | Key Features |
|------|------|-------------|----------|--------------|
| hello-world.md | Welcome | No | No | Simple H1, feature list |
| philosophy-01-spacetime.md | Essay | Yes | No | Full frontmatter, nav footer |
| ai-fairy-tale.md | Fiction | No | No | Subtitle, chapter structure |
| python-dharma.md | Fiction | No | No | Code blocks, dialogue format |
| 003-the-art-of-waiting.md | Essay | Yes | No | Table, ASCII diagram |
| 001-信号.md | Fiction | No | Heavy | Styled header, footer nav |
| 031-诗人的陨落.md | Fiction | Minimal | Moderate | Outline frontmatter, centered meta |
| 中国书法艺术史深度解析.md | Academic | No | No | Tables, chapter deps |
| gallery/index.md | Gallery | Minimal | Heavy | Grid, cards, external images |
| gallery/works/guernica.md | Gallery | Minimal | Heavy | Artwork layout, metadata grid |
| navigation.md | System | No | No | ASCII art, tables |
| tagging-system.md | System | No | No | YAML examples, tables |

---

*Report generated: 2026-04-13*  
*Analyzed files: 12*  
*Site framework: VitePress*
