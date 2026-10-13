import { useState } from 'react'
import { Star, Quote, MessageCircle, CheckCircle2 } from 'lucide-react'
import { REVIEWS, RATING, WHATSAPP_URL } from '../data.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export function Reviews() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true })
  const [expandedMap, setExpandedMap] = useState({})

  const toggleExpand = (index) => {
    setExpandedMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className="section paper border-b border-secondary-300/50 overflow-hidden"
      aria-labelledby="depoimentos-title"
    >
      <div className="container-page relative z-10">
        {/* Cabeçalho com a Nota Geral do Google em Destaque Exclusivo */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <span className="eyebrow text-accent-700 mb-4">Depoimentos Reais</span>
          <h2
            id="depoimentos-title"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-ink font-semibold tracking-tight leading-tight"
          >
            A Experiência Contada por <span className="italic font-display font-normal text-primary-700">Quem Viveu</span>
          </h2>

          {/* Destaque da Nota Geral do Google (Único local da página onde ela aparece) */}
          {RATING !== null && (
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 bg-secondary-50/90 border border-secondary-300/80 px-7 py-4 rounded-sm shadow-sm">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl sm:text-5xl font-bold text-primary-800">
                  {RATING.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}
                </span>
                <span className="text-sm font-semibold text-ink-muted">/ 5.0</span>
              </div>

              <div className="h-8 w-px bg-secondary-300 hidden sm:block" />

              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-500 text-amber-500"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-ink-muted">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary-700" />
                  <span>Avaliações no Google</span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 ornament opacity-80">
            <span />
          </div>
        </div>

        {/* Grid de Depoimentos (Todas as avaliações do JSON, sem omitir nenhuma) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-start">
          {REVIEWS.map((review, idx) => {
            const isExpanded = !!expandedMap[idx]
            const isLong = review.texto.length > 220 || review.texto.includes('\n')
            const paragraphs = review.texto.split('\n').filter(Boolean)
            const initialChar = review.autor ? review.autor.charAt(0).toUpperCase() : 'C'

            return (
              <article
                key={idx}
                className={`group relative bg-secondary-50/95 rounded-sm p-6 sm:p-7 border border-secondary-300/70 shadow-sm transition-all duration-400 ease-decant hover:-translate-y-2 hover:shadow-wine-sm hover:border-accent-500/50 flex flex-col justify-between ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${idx === 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{
                  transitionDelay: `${idx * 110 + 120}ms`,
                }}
              >
                {/* Aspas decorativas grandes no canto */}
                <Quote
                  className="absolute top-4 right-4 w-12 h-12 text-primary-900/10 transition-transform duration-300 group-hover:scale-110 pointer-events-none"
                  aria-hidden="true"
                />

                <div>
                  {/* Cabeçalho do Card: Avatar com Inicial + Autor + Estrelas individuais */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-11 h-11 rounded-full bg-primary-800 text-secondary-50 font-display font-semibold text-lg flex items-center justify-center shadow-inner shrink-0">
                      {initialChar}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-ink leading-snug">
                        {review.autor}
                      </h3>
                      {/* Estrelas individuais cheias/vazias */}
                      <div className="flex items-center gap-0.5 text-amber-500 mt-0.5">
                        {[...Array(5)].map((_, starIdx) => {
                          const isFilled = starIdx < (review.nota || 5)
                          return (
                            <Star
                              key={starIdx}
                              className={`w-3.5 h-3.5 ${
                                isFilled
                                  ? 'fill-amber-500 text-amber-500'
                                  : 'text-secondary-300'
                              }`}
                              aria-hidden="true"
                            />
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Texto Íntegro da Avaliação com suporte a parágrafos (\n) */}
                  <div className="text-sm text-ink-muted leading-relaxed font-body">
                    {isLong && !isExpanded ? (
                      <p className="line-clamp-4">
                        {paragraphs[0]}
                      </p>
                    ) : (
                      <div className="space-y-2.5">
                        {paragraphs.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Botão Ler Mais / Ler Menos funcional */}
                {isLong && (
                  <button
                    type="button"
                    onClick={() => toggleExpand(idx)}
                    className="mt-4 self-start text-xs font-semibold text-accent-700 hover:text-accent-800 uppercase tracking-label transition-colors inline-flex items-center gap-1 focus-visible:outline-accent-500"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Ler menos' : 'Ler relato completo'}</span>
                    <span>{isExpanded ? '↑' : '↓'}</span>
                  </button>
                )}

                {/* Rodapé do card: selo discreto de avaliação verificada */}
                <div className="mt-5 pt-3.5 border-t border-secondary-200/80 flex items-center justify-between text-[11px] text-ink-muted/80">
                  <span className="font-medium text-accent-700">Avaliação do Google</span>
                  <span>5 de 5 estrelas</span>
                </div>
              </article>
            )
          })}
        </div>

        {/* CTA ao final dos Depoimentos */}
        <div
          className={`mt-14 sm:mt-16 flex flex-col items-center justify-center text-center transition-all duration-700 ease-decant ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-4 px-8"
            id="reviews-cta-whatsapp"
          >
            <MessageCircle className="w-4 h-4 text-surface shrink-0" aria-hidden="true" />
            <span>Viver Essa Experiência: Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Reviews
