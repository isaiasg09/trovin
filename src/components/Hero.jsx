import { MessageCircle, ChevronDown, Sparkles } from 'lucide-react'
import {
  BRAND_NAME,
  NICHE,
  LOCATION,
  PHOTOS,
  WHATSAPP_URL,
} from '../data.js'
import { openDaysPhrase, HOURS } from '../lib/hours.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export function Hero() {
  const [heroRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true })
  const heroImage = PHOTOS[0]
  const daysPhrase = openDaysPhrase(HOURS)

  // Resumo de horário para microcopy
  const openHoursSummary = HOURS.filter((h) => !h.closed)
  const hoursRangeText = openHoursSummary.length
    ? `${daysPhrase} • a partir das 11h30/13h30`
    : 'Consulte dias e horários'

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden grain"
      aria-label="Apresentação Trovato Vino"
    >
      {/* Imagem de Fundo com Overlay em Degradê Bordô/Preto-Vinho */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {heroImage ? (
          <img
            src={heroImage}
            alt={`Ambiente acolhedor da ${BRAND_NAME}, ${NICHE.toLowerCase()} no ${LOCATION.label}`}
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center animate-ken-burns scale-105 filter brightness-75 contrast-110"
          />
        ) : (
          <div className="w-full h-full bg-surface-deep" />
        )}
        {/* Overlay dramático e sofisticado em tons de Barolo profundo */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-primary-950/80 to-surface-deep/90" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-primary-900/40 to-surface-deep/80" />
      </div>

      <div className="container-page relative z-10 py-16 sm:py-24 md:py-32 flex flex-col items-center text-center">
        {/* Eyebrow de Marca & Localização */}
        <div
          className={`transition-all duration-700 ease-decant ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="eyebrow text-accent-400 mb-6 bg-surface-raised/80 backdrop-blur-sm border border-accent-500/30 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-accent-400" aria-hidden="true" />
            <span>
              {BRAND_NAME} &bull; {LOCATION.label}
            </span>
          </div>
        </div>

        {/* H1 Principal: Palavra-chave do nicho + Localização oficial (Parque Continental, SP) */}
        <h1
          className={`font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-secondary-50 font-medium tracking-tight leading-[1.08] sm:leading-[1.04] max-w-4xl text-balance transition-all duration-800 ease-decant ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '250ms' }}
        >
          A Sua Loja de <span className="italic font-display font-light text-accent-300">Vinhos Raros</span> &amp; Bistrô Italiano no{' '}
          <span className="text-secondary-100 font-semibold">{LOCATION.short}</span>
        </h1>

        {/* Subtítulo persuasivo, sustentado rigorosamente pelos dados reais */}
        <p
          className={`mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-cream-muted max-w-2xl font-body font-light leading-relaxed text-pretty transition-all duration-800 ease-decant ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          Rótulos exclusivos selecionados por quem realmente entende do assunto, paninis artesanais
          feitos na casa e uma atmosfera acolhedora onde você entra e se sente em família.
        </p>

        {/* CTA Gigante e Pulsante com Efeito Glow */}
        <div
          className={`mt-10 sm:mt-12 flex flex-col items-center gap-4 transition-all duration-900 ease-decant ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '550ms' }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary animate-pulse-glow text-base sm:text-lg md:text-xl px-8 sm:px-10 py-4 sm:py-5 font-bold tracking-wide shadow-copper flex items-center gap-3.5 rounded-sm"
            id="hero-cta-whatsapp"
          >
            <MessageCircle className="w-6 h-6 text-surface shrink-0" aria-hidden="true" />
            <span>Falar com o Sommelier no WhatsApp</span>
          </a>

          {/* Microcopy verídica baseada no campo horarios */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-cream-muted/90 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Atendimento acolhedor {hoursRangeText}</span>
          </div>
        </div>

        {/* Ornamento sutil de divisor */}
        <div
          className={`mt-14 sm:mt-16 ornament opacity-70 transition-all duration-700 ease-decant ${
            isVisible ? 'opacity-70 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <span />
        </div>
      </div>

      {/* Indicador de rolagem ChevronDown suave */}
      <a
        href="#pilares"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 p-2 text-accent-400/80 hover:text-accent-300 transition-colors animate-drift-down"
        aria-label="Rolar para a seção Por Que Nos Escolher"
      >
        <ChevronDown className="w-6 h-6" aria-hidden="true" />
      </a>
    </section>
  )
}

export default Hero
