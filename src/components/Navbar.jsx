import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import {
  BRAND_NAME,
  WHATSAPP_URL,
  BRAND_IMAGES,
  CLIENT_ASSETS,
  LOCATION,
} from '../data.js'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Cadeia de fontes de logo: URLs de imagens_identidade_visual -> asset do cliente -> fallback tipográfico
  const logoCandidates = [
    ...BRAND_IMAGES,
    CLIENT_ASSETS?.logo,
  ].filter(Boolean)
  const [candidateIndex, setCandidateIndex] = useState(0)
  const [logoFailedAll, setLogoFailedAll] = useState(logoCandidates.length === 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleImageError = () => {
    if (candidateIndex + 1 < logoCandidates.length) {
      setCandidateIndex((prev) => prev + 1)
    } else {
      setLogoFailedAll(true)
    }
  }

  const navLinks = [
    { label: 'O Bistrô', href: '#sobre' },
    { label: 'Por Que Nos Escolher', href: '#pilares' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Horários & Contato', href: '#contato' },
  ]

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-decant ${
        isScrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-primary-900/60 shadow-wine-sm py-3.5'
          : 'bg-gradient-to-b from-surface-deep/90 via-surface/60 to-transparent py-5'
      }`}
    >
      <div className="container-page flex items-center justify-between">
        {/* Logomarca com fallback robusto em cadeia */}
        <a
          href="#"
          className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-90"
          aria-label={`${BRAND_NAME} - Página inicial`}
        >
          {!logoFailedAll && logoCandidates[candidateIndex] ? (
            <div className="relative flex items-center">
              <img
                src={logoCandidates[candidateIndex]}
                alt={`Logomarca oficial da ${BRAND_NAME}, loja de vinhos e bistrô em ${LOCATION.short}`}
                referrerPolicy="no-referrer"
                onError={handleImageError}
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="sr-only">{BRAND_NAME}</span>
            </div>
          ) : (
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-secondary-100 uppercase">
                TROVATO <span className="font-display italic text-accent-400 font-normal">Vino</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent-500/90 font-medium">
                Vinhos & Bistrô
              </span>
            </div>
          )}
        </a>

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-label font-medium text-cream-muted hover:text-accent-400 transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-3 px-5 sm:px-6"
            id="nav-cta-desktop"
          >
            <MessageCircle className="w-4 h-4 text-surface shrink-0" aria-hidden="true" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Botão Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-[11px] py-2.5 px-3.5"
            aria-label="Pedir no WhatsApp"
            id="nav-cta-mobile-header"
          >
            <MessageCircle className="w-3.5 h-3.5 text-surface" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-sm text-cream hover:text-accent-400 hover:bg-surface-raised focus-visible:outline-accent-400 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-accent-400" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-cream" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Painel Mobile Animado */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bg-surface-raised/95 backdrop-blur-xl border-b border-primary-900/80 shadow-wine transition-all duration-300 ease-decant overflow-hidden ${
          mobileMenuOpen ? 'max-h-[420px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0 pointer-events-none'
        }`}
      >
        <div className="container-page flex flex-col gap-4">
          <nav className="flex flex-col gap-2" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm uppercase tracking-label font-medium text-cream py-2.5 px-3 rounded-sm hover:bg-primary-950/60 hover:text-accent-400 transition-colors flex items-center justify-between border-b border-primary-950/40"
              >
                <span>{link.label}</span>
                <span className="text-accent-500/60 text-xs">◆</span>
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="btn-primary w-full text-center mt-2"
            id="nav-cta-mobile-menu"
          >
            <MessageCircle className="w-4 h-4 text-surface shrink-0" aria-hidden="true" />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
