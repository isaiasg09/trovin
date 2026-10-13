import { Wine, Compass, UtensilsCrossed, Heart, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL, LOCATION } from '../data.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const PILLARS = [
  {
    num: 'I',
    icon: Wine,
    title: 'Curadoria de Rótulos Exclusivos',
    text: 'Garrafas raras e selecionadas a dedo que fogem das prateleiras comuns do mercado, trazendo histórias únicas e safras especiais para a sua taça.',
  },
  {
    icon: Compass,
    num: 'II',
    title: 'Atendimento Especializado Sem Pressa',
    text: 'Aqui você recebe orientação atenciosa de quem realmente compreende o universo dos vinhos, auxiliando na escolha do rótulo ideal com leveza.',
  },
  {
    num: 'III',
    icon: UtensilsCrossed,
    title: 'Gastronomia & Paninis Artesanais',
    text: 'Entradas saborosas, ciabattas, bruschettas crocantes e paninis feitos na casa com capricho artesanal para uma harmonização perfeita.',
  },
  {
    num: 'IV',
    icon: Heart,
    title: 'Ambiente Familiar & Aconchegante',
    text: `Um verdadeiro refúgio acolhedor no ${LOCATION.short}: atmosfera intimista e alegre, perfeita para relaxar, conversar e se sentir em casa.`,
  },
]

export function Benefits() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15, once: true })

  return (
    <section
      id="pilares"
      ref={sectionRef}
      className="section paper overflow-hidden border-y border-secondary-300/40"
      aria-labelledby="pilares-title"
    >
      <div className="container-page relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="eyebrow text-accent-700 mb-4">Experiência &bull; Tradição &bull; Alma</span>
          <h2
            id="pilares-title"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-ink font-semibold tracking-tight leading-tight"
          >
            Por Que Escolher a Nossa <span className="italic font-display font-normal text-primary-700">Enoteca &amp; Bistrô</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-muted font-body leading-relaxed max-w-2xl">
            Mais do que comprar um vinho: oferecemos um encontro entre rótulos memoráveis, hospitalidade genuína e a autêntica gastronomia artesanal.
          </p>
          <div className="mt-6 ornament opacity-80">
            <span />
          </div>
        </div>

        {/* Grid de 4 Pilares: 1 col mobile -> 2 cols tablet -> 4 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className={`group relative bg-secondary-50/90 rounded-sm p-7 sm:p-8 border border-secondary-300/60 shadow-sm transition-all duration-400 ease-decant hover:-translate-y-2 hover:shadow-wine-sm hover:border-accent-500/50 flex flex-col justify-between ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${idx * 130 + 150}ms`,
                }}
              >
                {/* Indicador Numérico Romano no topo */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-sm bg-primary-900/5 border border-primary-900/10 flex items-center justify-center transition-all duration-300 group-hover:bg-accent-500 group-hover:border-accent-500 group-hover:rotate-6">
                    <Icon className="w-6 h-6 text-primary-800 transition-colors duration-300 group-hover:text-surface" aria-hidden="true" />
                  </div>
                  <span className="font-display text-xs font-bold text-accent-700/60 tracking-widest uppercase">
                    {pillar.num}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-ink leading-snug mb-3 group-hover:text-primary-800 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed font-body">
                    {pillar.text}
                  </p>
                </div>

                {/* Linha decorativa no rodapé do card */}
                <div className="mt-6 pt-4 border-t border-secondary-200/70 flex items-center justify-between text-xs text-accent-700 font-medium">
                  <span className="tracking-label uppercase text-[10px]">Pilar Oficial</span>
                  <span className="text-accent-500 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA ao final da seção de benefícios */}
        <div
          className={`mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center transition-all duration-700 ease-decant ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-4 px-8"
            id="benefits-cta-whatsapp"
          >
            <MessageCircle className="w-4 h-4 text-surface shrink-0" aria-hidden="true" />
            <span>Consultar Recomendações no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Benefits
