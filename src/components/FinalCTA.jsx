import { MessageCircle, Sparkles } from 'lucide-react'
import { WHATSAPP_URL, BRAND_NAME, LOCATION } from '../data.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export function FinalCTA() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.2, once: true })

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-28 overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-surface-deep text-secondary-50 grain border-y border-primary-800/40"
      aria-label="Chamada para ação final"
    >
      {/* Elementos visuais de fundo em degradê de luz e vinho */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[350px] bg-accent-500/10 rounded-full blur-[100px] -translate-y-10" />
      </div>

      <div className="container-page relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div
          className={`eyebrow text-accent-300 mb-6 transition-all duration-700 ease-decant ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-accent-400" />
          <span>{BRAND_NAME} &bull; {LOCATION.label}</span>
        </div>

        {/* Headline de Fechamento */}
        <h2
          className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-secondary-50 max-w-3xl text-balance transition-all duration-800 ease-decant ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          Desacelere o Ritmo. <span className="italic font-display font-light text-accent-300">Brinde à Vida</span> com Rótulos Raros e Sabores Tradicionais.
        </h2>

        {/* Subtítulo ancorado em fatos */}
        <p
          className={`mt-6 text-base sm:text-lg md:text-xl text-cream-muted max-w-2xl font-body font-light leading-relaxed transition-all duration-800 ease-decant ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          Seja para escolher uma garrafa especial com a orientação atenciosa da nossa equipe ou para saborear um panino artesanal em nosso bistrô, nossa porta está aberta para você.
        </p>

        {/* Botão de Fechamento com Pulso */}
        <div
          className={`mt-10 sm:mt-12 transition-all duration-900 ease-decant ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '450ms' }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary animate-pulse-glow text-base sm:text-lg md:text-xl px-9 py-5 font-bold tracking-wide shadow-copper inline-flex items-center gap-3.5"
            id="final-cta-whatsapp"
          >
            <MessageCircle className="w-6 h-6 text-surface shrink-0" aria-hidden="true" />
            <span>Falar no WhatsApp &amp; Planejar Sua Visita</span>
          </a>
        </div>

        {/* Ornamento de fechamento */}
        <div
          className={`mt-14 ornament opacity-60 transition-all duration-700 ease-decant ${
            isVisible ? 'opacity-60 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <span />
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
