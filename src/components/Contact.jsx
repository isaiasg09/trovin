import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Instagram,
  Facebook,
  Globe,
  Linkedin,
  Youtube,
  Music2,
  Music,
  ExternalLink,
  MessageCircle,
} from 'lucide-react'
import {
  BRAND_NAME,
  ADDRESS,
  PHONE,
  PHONE_HREF,
  WHATSAPP_URL,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
  SOCIAL_LINKS,
  LOCATION,
} from '../data.js'
import { HOURS, getSaoPauloNow, isOpenNow } from '../lib/hours.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

// Mapeamento dinâmico de ícones sociais conforme regra 7.7
const SOCIAL_ICONS = {
  instagram: Instagram,
  facebook: Facebook,
  site_oficial: Globe,
  linkedin: Linkedin,
  youtube: Youtube,
  tiktok: Music2,
  spotify: Music,
}

const SOCIAL_LABELS = {
  instagram: 'Instagram Oficial',
  facebook: 'Página no Facebook',
  site_oficial: 'Linktree / Site Oficial',
  linkedin: 'Perfil no LinkedIn',
  youtube: 'Canal no YouTube',
  tiktok: 'Perfil no TikTok',
  spotify: 'Playlist no Spotify',
}

export function Contact() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true })
  const nowSP = getSaoPauloNow()
  const openStatus = isOpenNow(HOURS, nowSP)

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="section bg-surface grain overflow-hidden border-b border-primary-950"
      aria-labelledby="contato-title"
    >
      <div className="container-page relative z-10">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <span className="eyebrow text-accent-400 mb-4">Localização &bull; Horários &bull; Contato</span>
          <h2
            id="contato-title"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-secondary-50 font-semibold tracking-tight leading-tight"
          >
            Venha Nos <span className="italic font-display font-light text-accent-300">Visitar</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-cream-muted font-body leading-relaxed max-w-2xl">
            Estamos no {LOCATION.label}, esperando você para uma taça especial, uma boa conversa e a melhor seleção de vinhos da região.
          </p>
          <div className="mt-6 ornament opacity-70">
            <span />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Coluna Esquerda: Endereço, Telefone, Como Chegar e Redes Sociais */}
          <div
            className={`lg:col-span-5 flex flex-col gap-6 transition-all duration-700 ease-decant ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Card de Endereço e Como Chegar */}
            <div className="bg-surface-raised rounded-sm p-6 sm:p-7 border border-primary-900/60 shadow-wine-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-sm bg-primary-950 border border-primary-900 flex items-center justify-center shrink-0 text-accent-400">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-secondary-100 mb-1">
                    Nosso Endereço
                  </h3>
                  <p className="text-sm text-cream-muted leading-relaxed font-body">
                    {ADDRESS.full}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-primary-900/50 flex flex-wrap gap-3">
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-xs py-3 px-4 border-accent-400/50 text-accent-300 hover:border-accent-400 inline-flex items-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Como Chegar (Google Maps)</span>
                </a>
              </div>
            </div>

            {/* Card de Telefone & WhatsApp */}
            <div className="bg-surface-raised rounded-sm p-6 sm:p-7 border border-primary-900/60 shadow-wine-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-sm bg-primary-950 border border-primary-900 flex items-center justify-center shrink-0 text-accent-400">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-secondary-100 mb-1">
                    Atendimento Direto
                  </h3>
                  <p className="text-xs text-cream-muted mb-2 font-body">
                    Tire dúvidas sobre rótulos, safras, reservas ou eventos pelo telefone ou WhatsApp:
                  </p>
                  {PHONE && (
                    <a
                      href={PHONE_HREF}
                      className="text-base sm:text-lg font-display font-medium text-accent-300 hover:text-accent-200 transition-colors inline-block"
                    >
                      {PHONE}
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-primary-900/50">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-xs py-3.5 flex items-center justify-center gap-2"
                  id="contact-cta-whatsapp"
                >
                  <MessageCircle className="w-4 h-4 text-surface shrink-0" aria-hidden="true" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Redes Sociais Inteligentes (Somente chaves com valor válido) */}
            {SOCIAL_LINKS.length > 0 && (
              <div className="bg-surface-raised rounded-sm p-6 border border-primary-900/60 shadow-wine-sm">
                <h3 className="font-display text-sm font-bold uppercase tracking-label text-secondary-200 mb-4">
                  Acompanhe a {BRAND_NAME}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {SOCIAL_LINKS.map(({ key, url }) => {
                    const IconComponent = SOCIAL_ICONS[key] || ExternalLink
                    const label = SOCIAL_LABELS[key] || `Acessar ${key}`
                    return (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="group inline-flex items-center gap-2 px-3.5 py-2.5 rounded-sm bg-surface-deep border border-primary-900 text-cream-muted hover:text-accent-300 hover:border-accent-500/60 hover:bg-primary-950 transition-all duration-300 text-xs font-medium"
                      >
                        <IconComponent className="w-4 h-4 text-accent-400 group-hover:scale-110 transition-transform" aria-hidden="true" />
                        <span className="capitalize">{key === 'site_oficial' ? 'Linktree' : key}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Coluna Direita: Tabela Limpa de Horários + Mapa Embed */}
          <div
            className={`lg:col-span-7 flex flex-col gap-6 transition-all duration-700 ease-decant ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Tabela de Horários com Destaque do Dia Atual */}
            <div className="bg-surface-raised rounded-sm p-6 sm:p-7 border border-primary-900/60 shadow-wine-sm">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-primary-900/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-primary-950 border border-primary-900 flex items-center justify-center text-accent-400">
                    <Clock className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-secondary-100">
                      Horário de Funcionamento
                    </h3>
                    <p className="text-xs text-cream-muted">Horário oficial de Brasília</p>
                  </div>
                </div>

                {/* Indicador Aberto Agora / Fechado Agora no Fuso America/Sao_Paulo */}
                {openStatus !== null && (
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
                      openStatus
                        ? 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300'
                        : 'bg-primary-950/80 border-primary-800 text-cream-muted/80'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        openStatus ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400/70'
                      }`}
                    />
                    <span>{openStatus ? 'Aberto Agora' : 'Fechado Agora'}</span>
                  </div>
                )}
              </div>

              {/* Lista dos Dias */}
              <div className="divide-y divide-primary-950/60">
                {HOURS.map((h) => {
                  const isToday = h.dayIndex === nowSP.dayIndex
                  return (
                    <div
                      key={h.day}
                      className={`py-3 px-3.5 rounded-sm flex items-center justify-between transition-colors ${
                        isToday
                          ? 'bg-primary-950/90 border border-accent-500/40 text-secondary-100 shadow-sm'
                          : 'text-cream-muted hover:bg-surface-deep/40'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`font-body text-sm ${
                            isToday ? 'font-bold text-accent-300' : 'font-medium'
                          }`}
                        >
                          {h.label}
                        </span>
                        {isToday && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-accent-500/20 text-accent-300 border border-accent-500/30">
                            Hoje
                          </span>
                        )}
                      </div>

                      <div
                        className={`text-sm font-body ${
                          h.closed
                            ? 'text-cream-muted/50 italic'
                            : isToday
                            ? 'text-secondary-100 font-semibold'
                            : 'text-secondary-200'
                        }`}
                      >
                        {h.value}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mapa Incorporado com Google Maps */}
            {MAPS_EMBED_URL && (
              <div className="bg-surface-raised rounded-sm overflow-hidden border border-primary-900/60 shadow-wine-sm">
                <div className="relative w-full h-[260px] sm:h-[300px]">
                  <iframe
                    title={`Localização da ${BRAND_NAME} no Google Maps`}
                    src={MAPS_EMBED_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'contrast(1.05) brightness(0.95)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
