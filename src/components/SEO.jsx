import { useEffect } from 'react'
import {
  SEO_TITLE,
  SEO_DESCRIPTION,
  OG_IMAGE,
  THEME_COLOR,
  buildJsonLd,
  serializeJsonLd,
} from '../lib/seo.js'

/**
 * Componente SEO para atualização dinâmica no cliente:
 * Atualiza document.title, meta description, OpenGraph, theme-color
 * e garante a injeção do schema JSON-LD LocalBusiness válido.
 */
export function SEO() {
  useEffect(() => {
    // Atualiza title dinâmico
    document.title = SEO_TITLE

    // Helper para atualizar ou criar meta tag
    const setMeta = (nameOrProperty, value, isProperty = false) => {
      if (!value) return
      const attr = isProperty ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${nameOrProperty}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, nameOrProperty)
        document.head.appendChild(el)
      }
      el.setAttribute('content', value)
    }

    setMeta('description', SEO_DESCRIPTION)
    setMeta('theme-color', THEME_COLOR)
    setMeta('og:title', SEO_TITLE, true)
    setMeta('og:description', SEO_DESCRIPTION, true)
    setMeta('og:image', OG_IMAGE, true)
    setMeta('og:type', 'website', true)
    setMeta('og:locale', 'pt_BR', true)

    // Atualiza ou insere o JSON-LD com dados reais do cliente
    let script = document.getElementById('ld-localbusiness')
    if (!script) {
      script = document.createElement('script')
      script.id = 'ld-localbusiness'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    const origin = typeof window !== 'undefined' ? window.location.origin : ''
    script.textContent = serializeJsonLd(buildJsonLd(origin))
  }, [])

  return null
}

export default SEO
