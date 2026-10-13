/**
 * Fonte única de verdade para FATOS do negócio.
 *
 * Correções aplicadas ao JSON recebido (somente sintaxe, nenhum valor alterado):
 *  - `"facebook": null"` → `"facebook": null` (aspa solta).
 *  - URLs que chegaram embrulhadas em markdown "[url](url)" (artefato de colagem)
 *    foram desembrulhadas para a URL pura idêntica.
 */
export const data = {
  nome: 'Trovato Vino | Loja de Vinhos no Parque Continental',
  nome_completo_maps: 'Trovato Vino | Loja de Vinhos no Parque Continental',
  endereco: 'R. Eva Terpins, 258 - Parque Continental, São Paulo - SP, 05327-030, Brasil',
  telefone: '(11) 99408-6827',
  link_whatsapp: 'https://wa.me/5511994086827',
  redes_sociais: {
    site_oficial: 'https://linktr.ee/trovato.vino',
    instagram: 'https://www.instagram.com/trovatovino',
    facebook: null,
    spotify: 'https://open.spotify.com/playlist/5m5B4UN3Ko7x0OfUpyCvpc',
  },
  horarios: [
    'segunda-feira: Fechado',
    'terça-feira: Fechado',
    'quarta-feira: 13:30 – 21:00',
    'quinta-feira: 13:30 – 21:00',
    'sexta-feira: 13:30 – 22:00',
    'sábado: 11:30 – 22:00',
    'domingo: Fechado',
  ],
  nota_geral: 4.9,
  avaliacoes_destaque: [
    {
      autor: 'Ana Cristina',
      nota: 5,
      texto:
        'Atmosfera alegre, excelente atendimento, panino ma ra vi lho so e uma diversidade de vinhos que dá vontade de provar cada um! Recomendo!',
    },
    {
      autor: 'Helena Esposito',
      nota: 5,
      texto:
        'Uma verdadeira joia italiana em Osasco: Trovato Vinho & Bistrô\nEm meio ao ritmo acelerado da cidade, Osasco acaba de ganhar um refúgio encantador para os amantes de vinho e da boa gastronomia italiana. O Trovatovino, comandado com carinho e autenticidade pelos proprietários Júlio e Raquel, é um pequeno bistrô que oferece muito mais do que uma simples refeição: proporciona uma experiência sensorial inesquecível.\nO diferencial da casa começa pelos vinhos. A curadoria de rótulos é cuidadosa e apaixonada – ali você encontra vinhos raros e exclusivos, que não se veem facilmente nas prateleiras do mercado. Cada garrafa traz uma história e harmoniza perfeitamente com o clima acolhedor do bistrô.\nPara acompanhar os vinhos, o Trovato oferece entradas deliciosas como caldo verde, bruschettas crocantes, pães e ciabattas artesanais, todos feitos por eles mesmos, com ingredientes de qualidade e um toque artesanal que se sente em cada mordida.\nE como não poderia faltar em um legítimo bistrô italiano, as massas são um espetáculo à parte: preparadas com técnica e alma, remetem ao verdadeiro sabor da Itália tradicional, com molhos saborosos e porções generosas.\nMais do que um restaurante, o Trovato é um pedacinho da Itália em Osasco – um espaço onde o bom gosto, a hospitalidade e a excelência se encontram para criar momentos especiais. Vale cada visita!',
    },
    {
      autor: 'Jéssica Duregger',
      nota: 5,
      texto:
        'Maravilhoso! Amamos conhecer a Trovato Vino. Atendimento excelente, gastronomia e vinhos incríveis! Parabéns! Indico e voltaremos sempre!',
    },
    {
      autor: 'Sheylla',
      nota: 5,
      texto:
        'O Trovato Vino é simplesmente incrível! Um lugar com clima familiar e extremamente aconchegante, daqueles em que a gente entra e já se sente em casa. O ambiente é acolhedor, perfeito para momentos tranquilos e boas conversas. Os vinhos são excelentes, com ótimas opções, e os paninis… maravilhosos, saborosos e feitos com muito capricho. Um espaço que conquista pelo cuidado, pelo sabor e pela experiência. Com certeza um lugar para voltar sempre! 🍷🥪✨',
    },
    {
      autor: 'Vinícius Soares',
      nota: 5,
      texto:
        'Uma verdadeira joia na região do Parque Continental! A curadoria de vinhos é impecável, com rótulos selecionados que fogem do comum. O grande diferencial é o atendimento: a equipe realmente entende do assunto e ajuda a escolher a garrafa ideal sem pressa. Ambiente charmoso e muito agradável. Recomendo demais para quem mora entre Osasco e SP',
    },
  ],
  fotos_local_maps: [
    'https://places.googleapis.com/v1/places/ChIJ-_rLGGX_zpQRq4tyyJHngjk/photos/Aa-ngMavzUg0U__DPq5DvcUwdEm4TDWm1bANNSr3h3Ewp4WZmgYQqdIA11NP69XJjc1MlTfKa-zRgCccyfpT2-n0CDTjhR0uEUejPLzbT3Qsv6Cpg_2tW1266bpmOFCErD6yXUDlRALZWGqIAiDeqoHdT2hakeKJ-BoumQDUq3gVbLT7ldpRUE0sHN46UMSbNFCfC32y8NGHwZCfEXCff5Fl-6RLJfeViY7wv7oi7_u7zu-ZjNHSbbKq3T1-cPQAQpNingX6ukoAfhYNo9k_dWIXM4PWAz3YRpEPHvhG9Eqfnb5Vb2lQ1I8cclExJllf7XMwbW5d2tNqJl55hb8PhCwuapI5ybVQQpmBcezEkvJHO8xPlwEqVqK1lNBofSjqSJkWkCfpuO4T_4chCx-riVEhPl20Z54YphFSyFrbwzIf1xMb-Q/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848',
    'https://places.googleapis.com/v1/places/ChIJ-_rLGGX_zpQRq4tyyJHngjk/photos/Aa-ngMYynEmceRRIE_aZqT5RUPn_dxuHAsWTHnkMEajr25ee-xqqKE_sIj_l6FdjEOt9L_wpbfPkYQQqyI3tdUJTjA6lSTH8wpTUb-iPrOXc2zoLgcbzBx4-dQKK6P4cvRUV2b9FVO-SUM5wVn2HMuUfGhbo60Dzi6eTe4pAUSHEP3pmYMtmEnt1K8QWdGBW9pWYWOimlx0lWHeKc-2Bh5wLeAYJjwbr4gTsFxvIgiZ5DI2AhjUcJ3UcZfct2w3JX1VidRKY7NSw_m8Um3TjwybTnEsbLFE_lJ0TqKyPNYAb2n4F2Tdgk9zkF5KPCMe3NcxRkLZn-AA8rwg-qJhZs7hzW81Wo3e3AbrxOBObjJTBbyGPzceJbhNgJovzQKkWGZDIrLLQDvX3MNmwgp7if5VJvTB5T-UnWCZrN0Y5UfZr0B8jdQ/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848',
    'https://places.googleapis.com/v1/places/ChIJ-_rLGGX_zpQRq4tyyJHngjk/photos/Aa-ngMYRwmsqhJJdY92X1Dn_--ZpTpPjP-I1rOVFbYHkwNwxs0W3_WXB-pB43bcv5fOtK8HVGGdJVNJ8sdA5cs-DcmY2ueCmAk6CGWCREEUOrcgYT07F5rfol39wZNaazP7C5PKL_KJspKOG8-tSmzJJuZOWz2GsdjZuThwGp7uKZNeO9ChDUHj2rqAAwaitIeFhepge-vaXPjlDeAflgv_QCwz63UwV-ddM2gtUd7mh-q6o00C_uIqYPSgxUcFDaKZyG9EyAdxxOwLdCyFR5yj7oyCZ0XtbdhNl_2NTlf298kjU_a_OsVG24C9c8m8D7eXCiXFz-onI9ZLx1v1S42tasoCWGFBlEO_9LXdBsrSbXvzhMCT3E7DFvqFTUsMy18hjPsH9_AvlO1PC5tww1aFhOqx7QU9Hzi_TEVnu9Sk9b9rxOA/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848',
    'https://places.googleapis.com/v1/places/ChIJ-_rLGGX_zpQRq4tyyJHngjk/photos/Aa-ngMa4fNY88Ad4lJDkz3krKqTSpNiDJxcxXZE_wxYqho2NPgCTKjH8gJOlZ4dZRdjV_UZJPmnjVCJov88wCXKPtkVFteSYP5v-h_z4OCbLtMfR1RscXLud5geX8VcIDSjY6UZHxmpaH41iNPpG83QIHXSAdC5-GMQmTl4yqsY6lFU2pEvqN70sBF--SwaPyywBB_svd5Hal05uR624fidewzljxSE_itiPCo9mW1HIpm9FoaHs_-wh0MeScsthw7sPpicLWdqlgEkCIPyrb0_WJWoP6Mip-o5eDxGgL24g42IQC8FnXC5SlQUjtEnamTQPKslJfeD7Zknyq-LIa1YiqU7Rkh812R_a56IvX3S7U5DNWtRl2NRNgXMC0Xx5w2gjvQPUlgmoXTtcj74I0_jK64O15bTI4pNN4omPNIieVNLeVw/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848',
    'https://places.googleapis.com/v1/places/ChIJ-_rLGGX_zpQRq4tyyJHngjk/photos/Aa-ngMZLyH-UXc3q_TNk85vBGdkADX8VxKqCu1QHk4d1gmI107QccVJzchS97Qk6bXcmxz1G2iLUh-1b6tuVUJ3BlqZEK8tEsPRxsbb6TCQt4tejxy8tmp-bWslHEbM4WUHU31--80esCx_zHlYUNZgTNFRXmHL_pbufynLtc7yn7K9MCaUNfglOd2oPp4ZS_RC9PFXVfVPcf-8aDQ5LkL-qFE1QW-fQ8A4iW-UopiYo6mreT_uFsKsahFY14eG8A0Nm4m57jWvS1_f5u_s8csYgfiSh0RLUSvTT-tGwa5IjuAngRDIQdCi5GiRh7Z1hFyrCwOoIra4YCHvs3yOlOfN2QOQyzAu6toUqiR2_lHfAexAbKVVD4PKf_r9XtMXnNB9Wfra-53_K0edwziUxWXh_Q-I8ZV06XADKy0o28n_e8SbX/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848',
    'https://places.googleapis.com/v1/places/ChIJ-_rLGGX_zpQRq4tyyJHngjk/photos/Aa-ngMZlac-NjyDt4XRSE4VYMDyU33Ulgr6rBGVW0p-fGVjnnJlqUTQzGSRrTX6y_j50KCEDggI7aph_y2F3R3JAdvkLjq50oSRf-N2y905on1ykJdpw23TY4Y3jgNsktPIDFJ7nlUD6mgZ049bWdQrW1A9LW2JfVRn_xzOy6WL6l9Bxu77QxOZFfusN69mNX6VhzeLSYzW1SGeh7UCjF0kp1B3FRmWuRTRiel-M7XIwEWRR2pxLWsyW2d-7_NXXMylSa_9k0HU8C3Bs8q9HP9L7sV3vJwQmmTgNrx3VmxGHqjO5VwFoYHvROIS9AxhZz8FiM-cZvSVMIRKN9D3eadiUPGzNrDakNnD_nX6TSFlfMk-hlx7uyGdk8T1ik9ZTq2W7neaB4EFScPak9Y8J225xHvCUPv9-kf-NclyMEozgd4ZO/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848',
    'https://places.googleapis.com/v1/places/ChIJ-_rLGGX_zpQRq4tyyJHngjk/photos/Aa-ngMb0T_H_GZ748Ii47CnXsigxgwsHYDeSK90mIh2j-3GgaNiQTQ5qbZjZ2IPWhJdUykz3Ri436Xx9zBEG6TJtFboM3q9sXK9iDQq78HjCzOhI7oLMpysgfiwPjOB2GLMhP7njd5pZ1vHCRdAgaHUMCpF5eFntCR5GSVfBtaLyGPIzNc6yv0_7rk8zOj5kyVLuV5xyhfKBY4LNpVxglkau5faB5_aWKt-1RoJFkPbnELL2fW7zekMZzp64P-XGiK993tiIX8D7zpwoREyAJsz5aZYquEVz87fbY9uW-wGOuas1rTUW1SJQo6Y_tPy83d9QKjMylYb4NB9aSYjjgEzDj_OQSFshheawKoieT2GVzjG6vrFz8IQRvSTfnOBBx4fO6DcbOmIt3zKYiGOZB8EY1dpsPzfF81rLLMmFrwbQu_62Bw/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848',
    'https://places.googleapis.com/v1/places/ChIJ-_rLGGX_zpQRq4tyyJHngjk/photos/Aa-ngMbPnpxFA3esB99GMeqSrKmKZ8N1N7_F8R99bofOeXmr_5IX-Khk-pHArFkp0_MqX6HE4_8yTQiwqKLISKkNhdBdUu-hk0XacAM9CvtLB6o5mMxDKrs8SJa0qBDfxoxJ7oiz3xRmz4igOsy2vBlhTOSu9FdkakMzFTqp9YDNWT1lfUjAWa-ds3CiBa2jb52vXvEGuwJViBNA0DWchZE90dHt9hud4NRlSdIhFLnSztMVPwiQxjzoZd-GjcbmfvbpaCn596e2mKc7uzoJU6ZP5gosQwJP18c-oa-MRIJjyau--oNsvhf7PF3pBKueizFZOUEUcVajf1QXqjwip9zwOQn2NsGLmyH89esqz_h-nDh16SdsCap8Clnf-ZEhqwA62dW8h8xlN6XBT5rDegBk63j1ArGwGLVXBCsvIdm1ITos/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848',
    'https://places.googleapis.com/v1/places/ChIJ-_rLGGX_zpQRq4tyyJHngjk/photos/Aa-ngMbh37FVdCX1BviO1XOj4ixRMOiv5jqz-Fupj9_fY_WuQA8ToaFGaT46pcFGChjeRR1HPZGRO0duCwcnjvxuX8XK5RY6__78gy6lH3_JnfA20k8esJAXlxf9nadnICqB7ld9CdaePMG1rjrW1gd5G972d5Nm2QmMPNezVWmin1HoVZw33fc7ysX6p64oucclMxQ1ax41g3e6JSw86WPp09awYpSF53mYQJrLIt02Jf8PsIXtJqNEEHL5kVcswQ8G4EvZPr9msRiJKZ-9u8vintD7lb9ExWcha2ZQV76Z8S2RFU9VFWMWCoqillSZEkYlGXfRBQ_hgix3t8jgb1595KwSVKqGcCtpbOF3CZvKlr38pUW95z7-Z5pgsXOv2UpTlDteFWqgYCLEqdpyhDhGFssAMRbD-k3Xp7-TouPNAupF8g/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848',
    'https://places.googleapis.com/v1/places/ChIJ-_rLGGX_zpQRq4tyyJHngjk/photos/Aa-ngMaTcHza6BQ7juNkrdG9Z9EVA5ooyUmBbdDk8KHtRKjoO9bKIl82bKHj-bD9B-jvcYdfpgZV_TDRhteEawrnis8ZOZg0WWjTVqM5ErScP2a15tNNktfifSjMLrUknt7VWdU1sOTrp3Ml0jCkl_qIvPdBujC98ZawuyvCq7Oj4jYVR7BKGtvNGzioPna5C2cxJ9ypZ29RIM406vkycaGcI9UD5duDmc4Yhf_G-0oKGB-s03jbWmI6mU9Dq2vs0LFl3AJ9ydc7MtjoM4-5yyDrbOQN8Dv0uriSHuqu0gHXJCin-lAfa3xrc1eOxf9kZDzPWBwFtD_RqR-JT7cYUUtESAqpe4yvpvsmYDyGIKGI2CG12c4PK0PJmrBmOQu3Kxx_jzy13pL0bkUIrFu4YoCb3sPXVV6lIUKWHFHETeG1j-GlQw/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848',
  ],
  imagens_identidade_visual: [],
}

/* -------------------------------------------------------------------------- */
/*  Assets oficiais enviados diretamente pelo cliente (fora do JSON do Maps)  */
/* -------------------------------------------------------------------------- */
export const CLIENT_ASSETS = {
  /** Logomarca oficial (convertida para PNG transparente). */
  logo: '/brand/trovato-logo.png',
  /** Foto de rótulos da casa, usada na seção de curadoria. */
  curadoria: '/brand/curadoria-rotulos.jpg',
}

/* -------------------------------------------------------------------------- */
/*  Constantes derivadas                                                      */
/* -------------------------------------------------------------------------- */

const str = (v) => (typeof v === 'string' ? v.trim() : '')
const arr = (v) => (Array.isArray(v) ? v.filter((x) => typeof x === 'string' && x.trim()) : [])

/** Nome limpo da marca: primeiro segmento antes de "|", " - " ou " – ". */
export const BRAND_NAME = (str(data.nome).split(/\s*\|\s*|\s+[-–—]\s+/)[0] || str(data.nome)).trim()

/** Nome oficial completo (JSON-LD e onde o nome oficial for necessário). */
export const OFFICIAL_NAME = str(data.nome) || BRAND_NAME

/** Nicho deduzido a partir do nome ("Loja de Vinhos") e das avaliações (bistrô, paninis, massas). */
export const NICHE = 'Loja de Vinhos & Bistrô'
export const NICHE_SHORT = 'loja de vinhos'

/** Link único de conversão. Reutilizado em TODOS os CTAs. */
export const WHATSAPP_URL = str(data.link_whatsapp)

/** Endereço parseado: "Rua, nº - Bairro, Cidade - UF, CEP, País". */
function parseAddress(endereco) {
  const raw = str(endereco)
  const fallback = { street: raw, neighborhood: '', city: '', region: '', postalCode: '', country: 'BR', full: raw }
  if (!raw) return fallback
  const m = raw.match(/^(.*?)\s+-\s+([^,]+),\s*([^,]+?)\s*-\s*([A-Z]{2})(?:,\s*(\d{5}-?\d{3}))?/)
  if (!m) {
    const cep = raw.match(/\d{5}-?\d{3}/)
    return { ...fallback, postalCode: cep ? cep[0] : '' }
  }
  return {
    street: m[1].trim(),
    neighborhood: m[2].trim(),
    city: m[3].trim(),
    region: m[4].trim(),
    postalCode: (m[5] || '').trim(),
    country: 'BR',
    full: raw,
  }
}

export const ADDRESS = parseAddress(data.endereco)

/** Localização oficial usada em toda a copy/SEO (nunca a de avaliações). */
export const LOCATION = {
  neighborhood: ADDRESS.neighborhood,
  city: ADDRESS.city,
  /** "Parque Continental, São Paulo" */
  label: [ADDRESS.neighborhood, ADDRESS.city].filter(Boolean).join(', '),
  /** Preferência para títulos curtos: bairro, senão cidade. */
  short: ADDRESS.neighborhood || ADDRESS.city,
}

export const PHOTOS = arr(data.fotos_local_maps)
export const BRAND_IMAGES = arr(data.imagens_identidade_visual)
export const REVIEWS = Array.isArray(data.avaliacoes_destaque)
  ? data.avaliacoes_destaque.filter((r) => r && str(r.texto))
  : []
export const RATING = typeof data.nota_geral === 'number' ? data.nota_geral : null
export const PHONE = str(data.telefone)
export const PHONE_HREF = PHONE ? `tel:+55${PHONE.replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, '')}` : ''

/** Redes sociais com valor válido (null/vazio são descartados). */
export const SOCIAL_LINKS = Object.entries(data.redes_sociais || {})
  .filter(([, url]) => str(url))
  .map(([key, url]) => ({ key, url: str(url) }))

export const MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(str(data.nome_completo_maps) || `${str(data.nome)} ${str(data.endereco)}`)

export const MAPS_EMBED_URL = ADDRESS.full
  ? `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS.full)}&output=embed`
  : ''
