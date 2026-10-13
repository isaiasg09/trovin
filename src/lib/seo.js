/**
 * Builders de SEO puros (sem acesso ao DOM no topo do módulo), usados
 * tanto no build (vite.config.js → index.html estático) quanto em runtime (<SEO />).
 */
import {
  data,
  BRAND_NAME,
  OFFICIAL_NAME,
  NICHE,
  LOCATION,
  ADDRESS,
  PHOTOS,
  REVIEWS,
  RATING,
  PHONE,
  SOCIAL_LINKS,
} from '../data.js'
import { HOURS, SCHEMA_DAYS } from './hours.js'

/** Espelha --color-primary-900 (src/index.css). */
export const THEME_COLOR = '#2E0911'

const ratingBR = RATING != null ? RATING.toLocaleString('pt-BR', { minimumFractionDigits: 1 }) : ''

export const SEO_TITLE = `${NICHE} em ${LOCATION.label || LOCATION.short} | ${BRAND_NAME}`

export const SEO_DESCRIPTION = [
  `${NICHE} em ${LOCATION.label}: rótulos raros, paninis artesanais`,
  ratingBR ? ` e atendimento nota ${ratingBR} no Google.` : ' e atendimento sem pressa.',
  ' Chame no WhatsApp!',
].join('')

export const OG_IMAGE = PHOTOS[0] || ''

export function buildJsonLd(origin) {
  const site = typeof data.redes_sociais?.site_oficial === 'string' && data.redes_sociais.site_oficial.trim()
  const url = site || origin || undefined

  const openingHoursSpecification = HOURS.filter((h) => !h.closed && h.dayIndex >= 0).flatMap((h) =>
    h.ranges.map((r) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: SCHEMA_DAYS[h.dayIndex],
      opens: r.opens,
      closes: r.closes,
    })),
  )

  const ld = {
    '@context': 'https://schema.org',
    '@type': ['LiquorStore', 'Restaurant'],
    name: OFFICIAL_NAME,
    alternateName: BRAND_NAME !== OFFICIAL_NAME ? BRAND_NAME : undefined,
    image: PHOTOS[0] || undefined,
    telephone: PHONE || undefined,
    url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street || undefined,
      addressLocality: ADDRESS.city || undefined,
      addressRegion: ADDRESS.region || undefined,
      postalCode: ADDRESS.postalCode || undefined,
      addressCountry: 'BR',
    },
    aggregateRating:
      RATING != null && REVIEWS.length
        ? {
            '@type': 'AggregateRating',
            ratingValue: RATING,
            bestRating: 5,
            reviewCount: REVIEWS.length,
          }
        : undefined,
    openingHoursSpecification: openingHoursSpecification.length ? openingHoursSpecification : undefined,
    sameAs: SOCIAL_LINKS.length ? SOCIAL_LINKS.map((s) => s.url) : undefined,
  }

  // JSON.stringify remove as chaves undefined → JSON sempre válido.
  return JSON.parse(JSON.stringify(ld))
}

/** Serializa com segurança para dentro de <script>. */
export const serializeJsonLd = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c')
