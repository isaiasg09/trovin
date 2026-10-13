# DESIGN BRIEF — Trovato Vino

> Loja de vinhos & bistrô no Parque Continental, São Paulo.
> Documento de direção de arte. Todo o código segue estas decisões.

---

## 1. Arquétipo e personalidade

**Arquétipo: Enoteca Italiana de Bairro — Premium Acolhedor.**
Não é uma adega fria de "vinho caro": as avaliações falam em *rótulos raros que fogem do comum*, mas também em *clima familiar*, *atmosfera alegre*, *panino ma ra vi lho so* e *se sentir em casa*. A marca precisa unir a sofisticação de uma carta de vinhos curada com o calor de uma mesa italiana. A logomarca confirma: serifa didone de alto contraste (elegância editorial) + silhueta de garrafa em cobre (artesanal, quente).

**3 adjetivos (extraídos das avaliações):**
1. **Curada** — "curadoria impecável", "rótulos selecionados", "vinhos raros e exclusivos".
2. **Aconchegante** — "clima familiar", "ambiente acolhedor", "a gente entra e já se sente em casa".
3. **Generosa** — "atendimento excelente", "ajuda a escolher sem pressa", "porções generosas", "feitos com muito capricho".

**Voz da copy:** calorosa, sensorial e segura. Frases curtas, verbos de experiência (provar, brindar, escolher, ficar). Nunca arrogante; sempre convidativa.

---

## 2. Paleta (tokens em `src/index.css`, expostos em `tailwind.config.js`)

Derivada da logo (preto profundo + marfim + cobre da garrafa) e das referências enviadas (bordô intenso, papel marfim, manchas de vinho).

| Token | Função | Base |
| --- | --- | --- |
| `primary` (50–950) | **Bordô "Barolo"**: fundos de marca, títulos sobre marfim, overlay do Hero. | `primary-700 #641726`, `primary-900 #2E0911` |
| `secondary` (50–400) | **Marfim "Pergaminho"**: seções claras, texto sobre escuro, cards claros. | `secondary-100 #F8F1E4` |
| `accent` (300–800) | **Cobre "Garrafa"** (tirado do contorno da logo): **única cor de CTA**, filetes, ornamentos. | `accent-500 #C8834F` |
| `surface` / `surface-raised` | Fundo das seções escuras (preto-vinho, não preto puro) e cards sobre ele. | `#150A0D` / `#1F1014` |
| `ink` / `ink-muted` | Texto sobre marfim. | `#24161A` / `#5E4A4C` |
| `cream-muted` | Texto secundário sobre escuro. | `#CDBDA9` |

**Regras**
- CTA = gradiente cobre (`accent-400 → accent-600`) com texto `surface` (contraste ≈ 6:1). Nenhum outro elemento usa cobre como fundo.
- Sobre marfim, textos em cobre usam `accent-700` (≥ 4.5:1). Sobre escuro, `accent-400/500`.
- **Tema misto**: seções alternam escuro-vinho (Hero, Galeria, Contato, Rodapé) e marfim (Pilares, Depoimentos), como as páginas de uma carta de vinhos. A faixa final é bordô pleno.
- `theme-color`: `primary-900`.

---

## 3. Tipografia

| Papel | Fonte | Justificativa |
| --- | --- | --- |
| Display (`font-display`) | **Bodoni Moda** (400–700 + itálico) | Didone de alto contraste, a mesma família visual do "TROVATO" da logo e da referência "Crafting *Perfection*". O itálico faz o papel da "assinatura" manuscrita. |
| Texto (`font-body`) | **Jost** (300–600) | Geométrica, leve e com DNA europeu (Futura). Equilibra a dramaticidade da Bodoni e lê muito bem em telas pequenas. |

**Escala**: H1 `text-5xl → md:text-7xl → lg:text-[5.5rem]`, `leading-[0.95]`, `tracking-tight`. H2 `text-4xl → md:text-5xl`. H3 `text-2xl`. Corpo `text-base/relaxed → md:text-lg`.
**Eyebrows**: Jost 500, `uppercase`, `tracking-[0.32em]`, `text-xs`, sempre precedidos de um filete cobre.
**Assinatura**: palavras-chave em *Bodoni itálico* cobre dentro dos títulos (ex.: "Vinhos que *fogem do comum*").

---

## 4. Formas, sombras e texturas

- **Raios**: secos. `rounded-sm` (2px) em botões, cards e fotos. Exceção assinatura: **arco de garrafa** (`rounded-t-full`) na moldura da foto de curadoria — ecoa o ombro da garrafa da logo e os arcos de uma cantina italiana.
- **Molduras**: fotos e cards têm um *passe-partout* — borda fina interna `accent/30` deslocada (efeito rótulo/moldura de quadro).
- **Sombras**: profundas e quentes, nunca cinza. `shadow-wine` (bordô difuso) e `shadow-copper` (brilho cobre nos CTAs).
- **Texturas (CSS/SVG data-URI apenas)**:
  - `bg-grain`: ruído `feTurbulence` a 6–8% sobre seções escuras (grão de filme / papel).
  - `bg-paper`: grão mais suave sobre marfim.
  - **Anel de taça**: SVG inline de mancha circular de vinho, opacidade baixa, decorando seções marfim (referência às manchas das referências).
  - **Garrafa em traço**: SVG da silhueta da garrafa da logo, desenhada em cobre com animação de traço no Hero.

---

## 5. Componentes

- **Botão primário (CTA)**: retângulo `rounded-sm`, gradiente cobre, texto `uppercase tracking-[0.18em]` Jost 600, ícone `MessageCircle`, **brilho diagonal (shine)** atravessando no hover, `-translate-y-1` e `shadow-copper`. Mín. 44px de altura. Hero: `px-8 py-5 text-lg md:text-xl` + `animate-pulse-glow`.
- **Botão secundário**: contorno 1px cobre/marfim, fundo transparente, preenchimento sutil no hover.
- **Cards de pilar**: fundo marfim claro (`secondary-50`), borda `primary/10`, número romano em Bodoni itálico no canto, ícone Lucide em losango cobre que gira 45° e escala no hover.
- **Cards de depoimento**: `secondary-50` sobre `secondary-100`, aspas `Quote` gigantes em bordô/10 no canto, avatar circular bordô com inicial em Bodoni.
- **Divisores**: filete fino + **losango** central (`◆` desenhado em CSS), cor cobre — como o ornamento de uma carta de vinhos.

---

## 6. Movimento

**Lento, elegante, "decantado".** Duração 0.9–1.2s, easing `cubic-bezier(0.22, 1, 0.36, 1)`, deslocamentos curtos (24px). Cascatas de 120–150ms. Hover em 300–500ms. Nada saltita; tudo "assenta" como vinho na taça. `pulse-glow` com ciclo de 2.8s (respiração, não alarme). `prefers-reduced-motion` desliga todas as animações e mostra o conteúdo imediatamente.
