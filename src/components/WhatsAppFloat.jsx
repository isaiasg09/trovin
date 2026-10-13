import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../data.js'

export function WhatsAppFloat() {
  return (
    <aside aria-label="Atendimento rápido pelo WhatsApp">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        id="whatsapp-float-button"
        className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 group flex items-center gap-2.5 bg-gradient-to-r from-accent-400 to-accent-600 text-surface p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-copper hover:shadow-copper-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-decant animate-pulse-glow focus-visible:outline-accent-400"
      >
        <MessageCircle className="w-6 h-6 text-surface shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline font-body text-xs font-bold uppercase tracking-wider pr-1">
          Atendimento WhatsApp
        </span>
      </a>
    </aside>
  )
}

export default WhatsAppFloat
