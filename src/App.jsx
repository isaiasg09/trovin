import { SEO } from './components/SEO.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'
import { Benefits } from './components/Benefits.jsx'
import { Gallery } from './components/Gallery.jsx'
import { Reviews } from './components/Reviews.jsx'
import { FinalCTA } from './components/FinalCTA.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import { WhatsAppFloat } from './components/WhatsAppFloat.jsx'

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-cream selection:bg-accent-400 selection:text-surface">
      {/* Sincronização dinâmica de SEO e JSON-LD */}
      <SEO />

      {/* 7.1 Navbar (sticky top-0 z-50) */}
      <Navbar />

      {/* Estrutura Narrativa Principal */}
      <main id="main-content" className="flex-1">
        {/* 7.2 Hero (acima da dobra) */}
        <Hero />

        {/* 7.3 Seção de Valor: “Por que nos escolher?” */}
        <Benefits />

        {/* 7.4 Galeria Imersiva (Bento Grid + Lightbox puro) */}
        <Gallery />

        {/* 7.5 Prova Social Elevada: Depoimentos */}
        <Reviews />

        {/* 7.6 Faixa de CTA Final */}
        <FinalCTA />

        {/* 7.7 Contato */}
        <Contact />
      </main>

      {/* 7.7 Rodapé */}
      <Footer />

      {/* 7.8 Botão Flutuante de WhatsApp */}
      <WhatsAppFloat />
    </div>
  )
}

export default App
