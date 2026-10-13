import { BRAND_NAME, NICHE, LOCATION, WHATSAPP_URL, PHONE } from '../data.js'
import { MessageCircle, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-deep text-cream-muted border-t border-primary-950 py-12 sm:py-16">
      <div className="container-page">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-primary-900/40 text-center md:text-left">
          {/* Identidade */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-display text-2xl font-bold tracking-wider text-secondary-100 uppercase">
              TROVATO <span className="font-display italic text-accent-400 font-normal">Vino</span>
            </span>
            <p className="mt-2 text-xs text-cream-muted max-w-sm">
              {NICHE} em {LOCATION.label}. Rótulos exclusivos, gastronomia artesanal e hospitalidade italiana.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-label font-medium">
            <a href="#pilares" className="hover:text-accent-300 transition-colors">
              Diferenciais
            </a>
            <a href="#galeria" className="hover:text-accent-300 transition-colors">
              Galeria
            </a>
            <a href="#depoimentos" className="hover:text-accent-300 transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="hover:text-accent-300 transition-colors">
              Horários &amp; Local
            </a>
          </div>

          {/* Botão WhatsApp */}
          <div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-3 px-5 inline-flex items-center gap-2"
              id="footer-cta-whatsapp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-surface" aria-hidden="true" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-muted/70 text-center sm:text-left">
          <p>
            &copy; {currentYear} {BRAND_NAME}. Todos os direitos reservados.
          </p>
          <p className="flex items-center justify-center gap-1.5">
            <span>Feito com paixão pela cultura do vinho</span>
            <Heart className="w-3 h-3 text-accent-500 fill-accent-500 inline" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
