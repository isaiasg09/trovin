/**
 * Horários: parsing, resumo, destaque do dia e status "aberto agora"
 * (fuso America/Sao_Paulo). Tudo derivado de data.horarios.
 */
import { data } from '../data.js'

/** Índices compatíveis com Date#getDay() (0 = domingo). */
const DAY_KEYS = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab']
export const SCHEMA_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const SHORT_LABELS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

const normalize = (s) =>
  String(s)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

const capitalize = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s)
const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

export function parseHours(list) {
  if (!Array.isArray(list)) return []
  return list
    .map((line) => {
      if (typeof line !== 'string') return null
      const i = line.indexOf(':')
      if (i === -1) return null
      const day = line.slice(0, i).trim()
      const value = line.slice(i + 1).trim()
      const dayIndex = DAY_KEYS.indexOf(normalize(day).slice(0, 3))
      let ranges = [...value.matchAll(/(\d{1,2}):(\d{2})\s*[–—-]\s*(\d{1,2}):(\d{2})/g)].map((m) => ({
        opens: `${m[1].padStart(2, '0')}:${m[2]}`,
        closes: `${m[3].padStart(2, '0')}:${m[4]}`,
      }))
      if (!ranges.length && /24\s*horas/i.test(value)) ranges = [{ opens: '00:00', closes: '23:59' }]
      const closed = !value || /fechado/i.test(value) || ranges.length === 0
      return {
        day,
        label: capitalize(day),
        shortLabel: dayIndex >= 0 ? SHORT_LABELS[dayIndex] : capitalize(day.slice(0, 3)),
        value: value || 'Fechado',
        dayIndex,
        closed,
        ranges,
      }
    })
    .filter(Boolean)
}

export const HOURS = parseHours(data.horarios)

/** Agora em São Paulo: { dayIndex (compatível com getDay), minutes }. */
export function getSaoPauloNow(date = new Date()) {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Sao_Paulo',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    }).formatToParts(date)
    const get = (t) => parts.find((p) => p.type === t)?.value
    const dayIndex = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'))
    const minutes = (Number(get('hour')) % 24) * 60 + Number(get('minute'))
    if (dayIndex >= 0 && Number.isFinite(minutes)) return { dayIndex, minutes }
  } catch {
    /* fallback abaixo */
  }
  return { dayIndex: date.getDay(), minutes: date.getHours() * 60 + date.getMinutes() }
}

/** true/false para "aberto agora"; null quando não há horários. */
export function isOpenNow(hours = HOURS, now = getSaoPauloNow()) {
  if (!hours.length) return null
  const today = hours.find((h) => h.dayIndex === now.dayIndex)
  const yesterday = hours.find((h) => h.dayIndex === (now.dayIndex + 6) % 7)
  const inRange = (r, t) => {
    const o = toMinutes(r.opens)
    let c = toMinutes(r.closes)
    if (c <= o) c += 1440
    return t >= o && t < c
  }
  if (today && !today.closed && today.ranges.some((r) => inRange(r, now.minutes))) return true
  // turnos que atravessam a meia-noite
  if (yesterday && !yesterday.closed && yesterday.ranges.some((r) => inRange(r, now.minutes + 1440))) return true
  return false
}

/** Agrupa dias consecutivos com o mesmo horário: [{ days: 'Qua – Qui', value }]. */
export function summarizeHours(hours = HOURS) {
  const groups = []
  hours.forEach((h) => {
    if (h.closed) return
    const last = groups[groups.length - 1]
    if (last && last.value === h.value && last.lastPos === hours.indexOf(h) - 1) {
      last.end = h.shortLabel
      last.lastPos = hours.indexOf(h)
    } else {
      groups.push({ start: h.shortLabel, end: null, value: h.value, lastPos: hours.indexOf(h) })
    }
  })
  return groups.map((g) => ({ days: g.end ? `${g.start} – ${g.end}` : g.start, value: g.value }))
}

/** Frase com os dias de funcionamento, ex.: "de quarta a sábado". */
export function openDaysPhrase(hours = HOURS) {
  const open = hours.filter((h) => !h.closed)
  if (!open.length) return ''
  const names = open.map((h) => h.day.replace(/-feira$/i, '').toLowerCase())
  const positions = open.map((h) => hours.indexOf(h))
  const consecutive = positions.every((p, i) => i === 0 || p === positions[i - 1] + 1)
  if (open.length === 7) return 'todos os dias'
  if (consecutive && open.length > 2) return `de ${names[0]} a ${names[names.length - 1]}`
  if (names.length === 1) return `às ${names[0]}s`
  return names.slice(0, -1).join(', ') + ' e ' + names[names.length - 1]
}
