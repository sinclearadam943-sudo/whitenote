import DefaultTheme from 'vitepress/theme'
import './custom.css'
import type { Theme } from 'vitepress'
import GalleryGrid from './components/GalleryGrid.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('GalleryGrid', GalleryGrid)
  }
} satisfies Theme
