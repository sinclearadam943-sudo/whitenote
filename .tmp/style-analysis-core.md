# WhiteNote Design System Analysis

## Individual File Analyses

### 1. landing-v2.html
**Role:** Editorial literary homepage with fixed sidebar navigation and quote overlay gate.

#### Color Palette
- **Backgrounds:** `--bg-primary: #FAFBFC` (cool off-white), `--bg-secondary: #F0F4F8` (blue-gray tint)
- **Text:** `--text-primary: #1A202C` (near-black slate), `--text-secondary: #4A5568`, `--text-muted: #718096`
- **Accents:** `--accent-sage: #68A096`, `--accent-teal: #2D6A4F`
- **Borders:** `--border-light: #E2E8F0`, `--border-medium: #CBD5E0`
- **Overlay (gate screen):** `linear-gradient(135deg, #1a3d36 0%, #0d1f1c 100%)` with cream text `#f5f0e8` and burnt orange `#e07b39`
- **Selection:** `background: var(--accent-bronze)` (referenced but not defined in `:root` — see deviation note)

#### Typography
- **Serif:** `'Noto Serif SC', 'Source Han Serif SC', 'STSong', serif`
- **Display:** `'Crimson Text', 'Noto Serif SC', serif`
- **Body:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Scale:** Fluid `clamp()` system from `--text-xs: clamp(0.75rem, 0.8vw, 0.875rem)` up to `--text-6xl: clamp(3.5rem, 10vw, 7rem)`
- **Headings:** `font-weight: 600`, `line-height: 1.3`; hero title uses `font-weight: 700`, `letter-spacing: -0.02em`
- **Eyebrow/Labels:** `font-size: var(--text-xs)`, `letter-spacing: 0.15em`–`0.2em`, uppercase

#### Layout Structure
- **Fixed sidebar:** `280px` width, `position: fixed`, full viewport height, flex column
- **Main content offset:** `margin-left: 280px`
- **Hero:** `min-height: 100vh`, flex column centered, `max-width: 900px` content
- **Section padding:** `--space-3xl` vertical, `--space-2xl` horizontal (fluid clamp values)
- **Featured grid:** `grid-template-columns: 1.2fr 1fr`
- **Content list:** `grid-template-columns: repeat(3, 1fr)`
- **Category grid:** `grid-template-columns: repeat(4, 1fr)` with `1px` gap creating faux borders

#### Components
- **Buttons:** `.btn-primary` — solid dark bg (`var(--text-primary)`) with light text; `.btn-secondary` — transparent with border
- **Cards:** `.featured-card` — `var(--bg-secondary)` background, `padding: var(--space-xl)`, hover lift with subtle shadow `0 12px 40px rgba(0,0,0,0.04)`
- **Nav link:** left padding shift on hover (`0` → `0.5rem`) with 3px vertical accent bar
- **Quote overlay:** Fullscreen z-index `99999`, fade-in gate with random literary quotes

#### Mood
Scholarly, restrained, garden-like serenity. Cool-toned editorial aesthetic that avoids beige fatigue. The quote gate adds theatrical ceremony before entry.

---

### 2. index-v3.html
**Role:** Mobile-first marketing landing page (vertical scroll, section-based).

#### Color Palette
- **Dark hero:** `--color-ink: #0d1f1c`, `--color-forest: #1a3d36`, `--color-jade: #2d5a50`, `--color-sage: #5a8a7a`
- **Light surfaces:** `--color-cream: #f5f0e8`, `--color-parchment: #faf7f2`
- **Warm accent:** `--color-orange: #e07b39`, `--color-rust: #b85c2e`, `--color-gold: #c9a227`
- **Philosophy section:** `--color-forest` background with cream text
- **AI/Code section:** Deep navy `#1a1a2e` → `#16213e` with neon green `#00ff88`
- **Practice section:** Warm beige gradient `#f7f1e3` → `#e8dcc4`
- **Art section:** Dark red gradient `#8b0000` → `#4a0404`

#### Typography
- **Serif:** `'Noto Serif SC', Georgia, serif` (weights 400/600/700/900)
- **Sans:** `'Noto Sans SC', -apple-system, sans-serif` (weights 300/400/500/700)
- **Hero title:** `clamp(2.5rem, 10vw, 4.5rem)`, `font-weight: 900`, `line-height: 1.1`
- **Accent underline:** Orange underline with `opacity: 0.3` beneath hero accent word
- **Section labels:** `0.7rem`, `letter-spacing: 0.2em`, uppercase, orange
- **Monospace accents:** Story numbers and code tags use `font-family: monospace`

#### Layout Structure
- **Single-column mobile-first** with progressive enhancement:
  - `< 768px`: stacked flex columns
  - `≥ 768px`: 2-column grids for story/code/practice cards
  - `≥ 1024px`: 3-column philosophy grid
- **Section padding:** `2rem 1.5rem` mobile → `6rem 4rem` desktop
- **Hero:** `min-height: 100vh`, dark background with radial gradient overlays

#### Components
- **Buttons:** `.btn-primary` — `#e07b39` solid; `.btn-secondary` — transparent with `rgba(245, 240, 232, 0.3)` border
- **Story cards:** White bg, left border `3px solid var(--color-jade)`, hover `translateX(4px)`
- **Code cards:** Translucent dark bg `rgba(0,0,0,0.3)`, border `rgba(0, 255, 136, 0.2)`, neon glow hover
- **Practice cards:** White bg, `border-radius: 4px`, `box-shadow: 0 2px 8px rgba(0,0,0,0.06)`, hover lift `-4px`
- **Featured card:** `--color-ink` bg with top gradient bar `linear-gradient(90deg, var(--color-orange), var(--color-gold))`
- **Archive tags:** Inline pill buttons with border, hover invert to dark bg + cream text

#### Mood
Dramatic, literary, almost cinematic. Strong section theming with bold color blocking. More emotional and contrasting than landing-v2.

---

### 3. login.html
**Role:** Simple authentication gate — functional, minimal.

#### Color Palette
- **Page background:** `#f7f8f9` (neutral cool gray)
- **Card:** `#fff` (pure white)
- **Primary brand:** `#6b9080` (muted sage green)
- **Text:** `#2c3e50` (slate blue), `#555`, `#888`, `#666`
- **Error:** `#e74c3c`
- **Focus ring:** `rgba(107, 144, 128, 0.1)`
- **Card shadow:** `0 4px 16px rgba(107, 144, 128, 0.12)`
- **Top border accent:** `4px solid #6b9080`

#### Typography
- **Font stack:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`
- **Heading:** `1.8rem`, centered, sage color
- **Body:** `0.9rem`–`1.1rem`, utilitarian scale

#### Layout Structure
- **Centered card:** `max-width: 400px`, `padding: 40px`, `border-radius: 16px`
- **Form groups:** `margin-bottom: 24px`
- **Mobile:** `margin: 20px` with reduced padding `30px 24px`

#### Components
- **Password input:** `border-radius: 8px`, focus state with sage border and soft shadow
- **Button:** Full width, `border-radius: 8px`, active `transform: scale(0.98)`
- **Checkbox row:** Flex align-center gap

#### Mood
Clean, trustworthy, minimal. The only file without serif fonts or literary flourishes. Purely functional.

---

### 4. magazine-index.html
**Role:** Magazine archive/landing page.

#### Color Palette
- Uses the same `:root` variables as landing-v2 with additions:
  - `--bg-ink: #0d1f1c`
  - `--text-cream: #f5f0e8`
  - `--accent-copper: #e07b39`
  - `--accent-gold: #c9a227`
- **Header:** `linear-gradient(135deg, var(--bg-ink) 0%, #1a3d36 100%)`
- **Issue 01 cover:** `linear-gradient(135deg, #0d1f1c 0%, #1a3d36 50%, #0f2e28 100%)`
- **Issue 02 cover:** `linear-gradient(135deg, #2d1f3d 0%, #3d2f4d 50%, #1f1a2e 100%)`

#### Typography
- **Display:** `'Playfair Display', 'Crimson Text', serif` (added vs landing-v2)
- **Serif:** `'Noto Serif SC', 'Source Han Serif SC', serif`
- **Body:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Magazine title:** `clamp(2.5rem, 6vw, 4rem)`, Playfair Display
- **Issue number watermark:** `font-size: 5rem`, `color: rgba(255,255,255,0.15)`
- **Stat numbers:** Playfair Display, `1.5rem`, teal color

#### Layout Structure
- **Header:** Centered text, `padding: 4rem 2rem`, with oversized radial gradient decoration
- **Nav bar:** Centered flex, `gap: 2rem`, sticky on issue pages but static here
- **Issues grid:** `grid-template-columns: repeat(auto-fit, minmax(400px, 1fr))`, `gap: 3rem`
- **Issue card:** White bg, `border-radius: 8px`, vertical flex structure
- **About section:** `--bg-secondary`, centered text container `max-width: 700px`

#### Components
- **Issue card:** Full hover lift `translateY(-6px)` with enhanced shadow `0 12px 40px rgba(0,0,0,0.1)`
- **Buttons:** `.btn-primary` — ink bg, cream text; `.btn-secondary` — bordered ghost
- **Stats row:** Three centered stat blocks with border-bottom separator
- **Featured highlight:** Left copper border `3px solid var(--accent-copper)` with padding offset

#### Mood
Prestigious, curated, publication-quality. The Playfair Display adds classic magazine authority. Card shadows and hover lifts feel premium.

---

### 5. magazine-issue-01.html
**Role:** Individual magazine issue page (Code & Consciousness theme).

#### Color Palette
Identical to `magazine-index.html` `:root` variables.
- **Cover:** `linear-gradient(135deg, #0d1f1c 0%, #1a3d36 50%, #0f2e28 100%)`
- **Excerpt borders:** `3px solid var(--accent-sage)`
- **TOC category headers:** Underline `border-bottom: 2px solid var(--accent-copper)`

#### Typography
Same font stack as magazine-index. Notable patterns:
- **Cover number:** `font-size: 8rem`, `color: rgba(255,255,255,0.08)`
- **Cover title:** `clamp(2.5rem, 6vw, 4.5rem)`
- **Editor's note body:** `font-family: var(--font-serif)`, `font-size: 1.1rem`, `line-height: 2`
- **Excerpts:** Serif italic, `1.15rem`, with decorative `"` quote mark in Playfair Display

#### Layout Structure
- **Cover:** `min-height: 70vh`, centered flex, dark gradient
- **Sticky nav:** `position: sticky`, `top: 0`, z-index `100`
- **Editor's note:** `max-width: 700px`, centered, generous `padding: 5rem 2rem`
- **Featured section:** `--bg-secondary`, asymmetric grid `1fr 1.5fr`
- **TOC grid:** `repeat(auto-fit, minmax(300px, 1fr))`, white category cards with subtle shadow
- **Excerpts:** `max-width: 800px`, left sage border

#### Components
- **Read button:** `.read-btn` — solid ink bg, no border-radius (rectangular), uppercase tracking `0.1em`
- **TOC item:** Bottom border separator, copper number prefix, hover copper text
- **Featured visual:** Square aspect ratio, dark gradient, large `{ }` glyph watermark

#### Mood
Immersive, academic-journal-meets-literary-magazine. Long line heights and serif body text encourage slow reading.

---

### 6. magazine-issue-02.html
**Role:** Individual magazine issue page (The Weight of Being theme).

#### Color Palette
- **Cover gradient:** `linear-gradient(135deg, #2d1f3d 0%, #3d2f4d 50%, #1f1a2e 100%)` — the only purple/mauve dominant page
- **Read button:** `#2d1f3d` bg (matches cover) instead of `--bg-ink`
- Otherwise identical `:root` to issue-01 and magazine-index

#### Typography
Identical to issue-01. Added component:
- **A+ badge:** `background: var(--accent-copper)`, `color: white`, `font-size: 0.65rem`, `border-radius: 3px`

#### Layout Structure
Identical structural patterns to issue-01:
- Same cover proportions (`70vh`)
- Same editor's note width (`700px`)
- Same featured grid (`1fr 1.5fr`)
- Same TOC grid (`minmax(300px, 1fr)`)
- Same excerpt styling with left sage border

#### Components
- **Featured visual:** `?` glyph at `6rem` instead of `{ }`
- **A+ badge:** Inline pill next to featured TOC items
- **Read button bg:** Uses cover-matched purple `#2d1f3d` rather than ink `#0d1f1c`

#### Mood
Slightly more mysterious and introspective than issue-01 due to the purple cover. Thematically aligned with "existential weight."

---

## Cross-File Design System Synthesis

### Prompt Language (Natural-Language Description)

WhiteNote employs a **literary-editorial design language** that balances Eastern scholarly restraint with Western magazine prestige. The aesthetic is best described as a "digital garden monastery" — clean, contemplative, and intentionally slow. Key qualities:

- **Cool-meets-warm palette:** Off-whites and slate grays form the canvas, while sage greens and burnt copper/orange provide organic accents. Dark sections use deep forest ink (`#0d1f1c`) rather than pure black, creating depth without harshness.
- **Typography as voice:** Chinese content is set in `Noto Serif SC` for headings and long-form text, giving it a classical book-like gravitas. English display text uses `Playfair Display` or `Crimson Text` for editorial authority. Body UI text is set in clean system sans-serifs.
- **Generous whitespace:** Sections breathe with ample padding (4–6rem vertical on desktop). Line heights are tall (1.7–2.0), prioritizing readability over information density.
- **Sectional color blocking:** The mobile landing page (`index-v3.html`) uses dramatic background shifts per section — dark ink, cream, forest green, deep navy, warm beige — like chapters in a book.
- **Subtle motion:** Hover effects are gentle — cards lift `4px`–`6px`, borders change color, text shifts padding. No abrupt animations. Shadows are soft and diffused (`rgba(0,0,0,0.04)` to `0.1`).
- **Ceremonial entry:** The quote overlay on `landing-v2.html` establishes a ritualistic tone — reading here is framed as entering a sacred space.

### Engineering Language (Specific CSS Values)

#### Core Color Variables (Most Consistent)
```css
/* Light surfaces */
--bg-primary: #FAFBFC;
--bg-secondary: #F0F4F8;
--text-primary: #1A202C;
--text-secondary: #4A5568;
--text-muted: #718096;
--border-light: #E2E8F0;

/* Dark surfaces */
--bg-ink: #0d1f1c;
--text-cream: #f5f0e8;

/* Accents */
--accent-sage: #68A096;
--accent-teal: #2D6A4F;
--accent-copper: #e07b39;   /* also called --color-orange, --accent-bronze */
--accent-gold: #c9a227;
```

#### Typography Stacks
```css
--font-serif: 'Noto Serif SC', 'Source Han Serif SC', 'STSong', serif;
--font-display: 'Playfair Display', 'Crimson Text', serif;
--font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

#### Spacing Patterns
- **Section padding (desktop):** `4rem 2rem` to `6rem 4rem`
- **Section padding (mobile):** `2rem 1.5rem` to `3rem 1.5rem`
- **Card padding:** `1.5rem` to `2rem`
- **Grid gaps:** `1rem` (tight) to `3rem` (loose magazine grids)

#### Typography Scale
- **Hero display:** `clamp(2.5rem, 6vw, 4.5rem)` to `clamp(3.5rem, 10vw, 7rem)`
- **Section titles:** `clamp(1.75rem, 6vw, 2.5rem)` to `2rem`
- **Body:** `0.95rem`–`1.1rem`, `line-height: 1.7`–`2.0`
- **Labels/eyebrows:** `0.7rem`–`0.75rem`, `letter-spacing: 0.2em`–`0.4em`, `text-transform: uppercase`

#### Component Primitives
- **Primary button:** Solid dark/brand bg, cream/white text, `padding: 0.875rem 2rem`, no border-radius or `4px` max
- **Secondary button:** Transparent, `1px solid` border, hover darkens or shifts to copper
- **Card shadows:** `0 4px 20px rgba(0,0,0,0.06)` (rest) → `0 12px 40px rgba(0,0,0,0.1)` (hover)
- **Hover transforms:** `translateY(-4px)` to `translateY(-6px)`
- **Accent borders:** `2px` or `3px` solid copper or sage for editorial highlights

#### Border Radius Philosophy
- **Magazine cards:** `8px`
- **Buttons:** mostly `0` (rectangular) or `4px`
- **Inputs:** `8px`
- **Login card:** `16px` (outlier)

### Consistency Notes

#### What is Strongly Consistent
1. **Copper/Orange Accent (#e07b39):** Appears as the primary call-to-action color across all files except `login.html`. Used for hover states, labels, badges, and underline accents.
2. **Dark Ink Hero Sections (#0d1f1c):** Every major landing/cover uses this deep forest ink as the dark mode base, paired with cream text.
3. **Noto Serif SC for Headings:** Every file except `login.html` uses `Noto Serif SC` (or Georgia fallback) for titles and editorial text.
4. **Uppercase Label Pattern:** `font-size: ~0.75rem`, `letter-spacing: 0.2em`–`0.4em`, `text-transform: uppercase`, copper color — repeated in heroes, sections, and magazine badges.
5. **Generous Line Height:** Body text consistently sits at `1.6`–`1.8`; editorial serif text pushes to `1.9`–`2.0`.
6. **Soft Shadows:** No hard drop shadows. All shadows use low opacity (`0.04`–`0.12`) and large blur radii.
7. **Mobile-first Responsive Strategy:** `index-v3.html` is explicitly mobile-first; magazine pages stack to single column below `768px`.

#### Notable Deviations
1. **login.html is an outlier:** It uses a completely different color system (sage green `#6b9080` as primary, no copper, no serif fonts, no dark sections). It is purely functional and does not share the literary visual language.
2. ** landing-v2.html quote overlay colors** are hardcoded (`#1a3d36`, `#0d1f1c`, `#f5f0e8`, `#e07b39`) and do not consume the file's own `:root` variables.
3. **`--accent-bronze` in landing-v2:** Referenced in `.nav-link::before`, `.hero-eyebrow`, `.card-category`, `.footer-link:hover`, and `::selection`, but **never defined in `:root`**. It is implied to be `#e07b39` based on usage but creates a latent CSS bug.
4. **index-v3.html uses a different variable naming convention:** `--color-ink`, `--color-cream`, etc. rather than `--bg-primary`, `--text-primary`. The values overlap but the engineering vocabulary differs.
5. **index-v3.html introduces neon green (`#00ff88`)** in the AI & Code section — a stark departure from the earthy palette, justified by thematic "hacker" coding aesthetic.
6. **Border radius inconsistency:** `login.html` uses `16px` for the card (friendly/modern), while magazine cards use `8px` and editorial buttons often use `0px`.
7. **index-v3.html practice section** uses warm beige (`#f7f1e3` → `#e8dcc4`) and brown text (`#5a4a3a`) that do not appear in the shared `:root` variables of other files.
8. **Issue 02 cover** shifts to purple (`#2d1f3d`) while Issue 01 uses green ink — a deliberate thematic deviation, but the read button bg hardcodes to purple instead of using the shared `--bg-ink` variable.

---

*Report compiled from analysis of 6 HTML files in `/root/.openclaw/workspace/whitenote/docs/public/`*
