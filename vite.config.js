import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { SEO_TITLE, SEO_DESCRIPTION, OG_IMAGE, THEME_COLOR, buildJsonLd, serializeJsonLd } from './src/lib/seo.js'

const escapeAttr = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

/**
 * Injeta title, meta, OG e JSON-LD no index.html a partir de src/data.js,
 * para que crawlers sem JS recebam o SEO completo. O componente <SEO />
 * sincroniza os mesmos valores em runtime.
 */
function seoFromData() {
  return {
    name: 'seo-from-data',
    transformIndexHtml(html) {
      return html
        .replace(/__SEO_TITLE__/g, escapeAttr(SEO_TITLE))
        .replace(/__SEO_DESCRIPTION__/g, escapeAttr(SEO_DESCRIPTION))
        .replace(/__OG_IMAGE__/g, escapeAttr(OG_IMAGE))
        .replace(/__THEME_COLOR__/g, escapeAttr(THEME_COLOR))
        .replace('__JSON_LD__', serializeJsonLd(buildJsonLd()))
    },
  }
}

export default defineConfig({
  plugins: [react(), seoFromData()],
})
