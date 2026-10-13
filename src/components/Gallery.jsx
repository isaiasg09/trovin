import { useState, useEffect, useCallback } from 'react'
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MessageCircle,
  Wine,
} from 'lucide-react'
import {
  BRAND_NAME,
  NICHE,
  LOCATION,
  PHOTOS,
  CLIENT_ASSETS,
  WHATSAPP_URL,
} from '../data.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

// Prepara a lista de imagens combinando a foto de rótulos enviada pelo cliente e as fotos do Maps
const INITIAL_IMAGES = [
  // Foto oficial da curadoria de garrafas enviada pelo cliente
  ...(CLIENT_ASSETS?.curadoria
    ? [
        {
          id: 'curadoria-cliente',
          url: CLIENT_ASSETS.curadoria,
          alt: `Curadoria exclusiva de garrafas selecionadas e rótulos premiados na ${BRAND_NAME}`,
          caption: 'Curadoria Exclusiva: Rótulos Premiados e Safras Raras',
          isHeroic: true,
        },
      ]
    : []),
  // Fotos do Google Maps a partir do índice 1 (índice 0 está no Hero)
  ...PHOTOS.slice(1).map((url, i) => ({
    id: `maps-photo-${i + 1}`,
    url,
    alt: `Ambiente, taças e gastronomia da ${BRAND_NAME}, ${NICHE.toLowerCase()} no ${LOCATION.label} - Foto ${i + 1}`,
    caption: `Ambiente e Experiência ${BRAND_NAME}`,
    isHeroic: i === 0 || i === 4,
  })),
]

export function Gallery() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true })
  const [images, setImages] = useState(INITIAL_IMAGES)
  const [activeIdx, setActiveIdx] = useState(null)

  // Remove imagem que falhar ao carregar e recalcula o grid automaticamente
  const handleImageError = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id))
  }

  // Controles do Lightbox
  const openLightbox = (index) => {
    setActiveIdx(index)
  }

  const closeLightbox = useCallback(() => {
    setActiveIdx(null)
  }, [])

  const prevImage = useCallback(() => {
    if (activeIdx === null) return
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }, [activeIdx, images.length])

  const nextImage = useCallback(() => {
    if (activeIdx === null) return
    setActiveIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }, [activeIdx, images.length])

  // Teclado (Esc, Setas) e bloqueio de scroll do body
  useEffect(() => {
    if (activeIdx === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIdx, closeLightbox, prevImage, nextImage])

  // Classes de spans assimétricos para Bento Grid de acordo com o índice
  const getBentoClasses = (idx, total) => {
    // Primeiro item: destaque grande (2 colunas x 2 linhas em md+)
    if (idx === 0) {
      return 'col-span-2 row-span-2 min-h-[340px] md:min-h-[460px]'
    }
    // Terceiro item: paisagem horizontal larga
    if (idx === 3 && total >= 6) {
      return 'col-span-2 row-span-1 min-h-[200px] md:min-h-[250px]'
    }
    // Sexto item: destaque vertical ou duplo
    if (idx === 6 && total >= 8) {
      return 'col-span-2 row-span-1 min-h-[200px] md:min-h-[250px]'
    }
    // Demais: blocos modulares
    return 'col-span-1 row-span-1 min-h-[190px] md:min-h-[220px]'
  }

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="section bg-surface grain overflow-hidden border-b border-primary-950"
      aria-labelledby="galeria-title"
    >
      <div className="container-page relative z-10">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <span className="eyebrow text-accent-400 mb-4">Galeria Imersiva</span>
          <h2
            id="galeria-title"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-secondary-50 font-semibold tracking-tight leading-tight"
          >
            Sinta o Clima da Nossa <span className="italic font-display font-light text-accent-300">Casa</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-cream-muted font-body leading-relaxed max-w-2xl">
            Uma atmosfera pensada para quem ama desacelerar: luz intimista, taças selecionadas, garrafas raras e receitas com alma italiana.
          </p>
          <div className="mt-6 ornament opacity-70">
            <span />
          </div>
        </div>

        {/* Bento Grid Assimétrico com grid-auto-flow: dense */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 grid-flow-row-dense auto-rows-[200px] md:auto-rows-[220px]">
          {images.map((item, idx) => {
            const bentoSpan = getBentoClasses(idx, images.length)
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className={`group relative overflow-hidden rounded-sm bg-surface-raised cursor-pointer border border-primary-900/50 shadow-wine-sm transition-all duration-500 ease-decant hover:border-accent-400/60 hover:shadow-wine ${bentoSpan} ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: `${(idx % 8) * 80 + 100}ms`,
                }}
              >
                {/* Imagem */}
                <img
                  src={item.url}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={() => handleImageError(item.id)}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-decant group-hover:scale-108 filter brightness-[0.92] group-hover:brightness-105"
                />

                {/* Passe-partout moldura interna translúcida */}
                <div className="pointer-events-none absolute inset-2.5 rounded-[1px] border border-secondary-100/15 transition-all duration-400 group-hover:inset-3 group-hover:border-accent-400/50" />

                {/* Overlay no hover com ícone de expandir */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-deep/90 via-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5">
                  <div className="flex items-center justify-between text-secondary-100">
                    <p className="text-xs sm:text-sm font-display font-medium tracking-wide drop-shadow-md line-clamp-1">
                      {item.caption}
                    </p>
                    <div className="w-8 h-8 rounded-full bg-accent-500/90 text-surface flex items-center justify-center shrink-0 ml-2 shadow-copper">
                      <Maximize2 className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Badge para a foto de curadoria do cliente */}
                {item.id === 'curadoria-cliente' && (
                  <div className="absolute top-3 left-3 bg-surface-raised/90 backdrop-blur-md border border-accent-500/40 px-2.5 py-1 rounded-sm text-[10px] tracking-label uppercase font-medium text-accent-300 flex items-center gap-1.5 shadow-sm">
                    <Wine className="w-3 h-3 text-accent-400" />
                    <span>Seleção Exclusiva</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA ao final da Galeria */}
        <div
          className={`mt-14 sm:mt-16 flex flex-col items-center justify-center text-center transition-all duration-700 ease-decant ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-sm text-cream-muted mb-4 font-body">
            Gostaria de reservar uma mesa ou solicitar a carta de vinhos atualizada?
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-4 px-8"
            id="gallery-cta-whatsapp"
          >
            <MessageCircle className="w-4 h-4 text-surface shrink-0" aria-hidden="true" />
            <span>Reservar Minha Mesa pelo WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Lightbox em React Puro (Sem bibliotecas) */}
      {activeIdx !== null && images[activeIdx] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualização em tela cheia da galeria"
          className="fixed inset-0 z-50 bg-surface-deep/96 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Botão Fechar */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 rounded-full bg-surface-raised/80 text-cream hover:text-accent-400 hover:bg-surface-raised border border-primary-900 transition-colors focus-visible:outline-accent-400"
            aria-label="Fechar visualização"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>

          {/* Botão Anterior */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-surface-raised/80 text-cream hover:text-accent-400 hover:bg-surface-raised border border-primary-900 transition-colors focus-visible:outline-accent-400"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </button>

          {/* Botão Próxima */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-surface-raised/80 text-cream hover:text-accent-400 hover:bg-surface-raised border border-primary-900 transition-colors focus-visible:outline-accent-400"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </button>

          {/* Container da Imagem Ativa */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-sm border border-accent-500/40 shadow-2xl">
              <img
                src={images[activeIdx].url}
                alt={images[activeIdx].alt}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="mt-4 flex items-center justify-between w-full max-w-xl px-2 text-xs text-cream-muted">
              <span className="font-display text-sm text-secondary-100">
                {images[activeIdx].caption}
              </span>
              <span>
                {activeIdx + 1} de {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
