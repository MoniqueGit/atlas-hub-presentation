import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Donut chart data ─────────────────────────────────── */
const CHARTS = {
  'chart-reviews': {
    title: 'Why guests leave bad reviews',
    data: [
      { label: 'Check-in problems',      value: 38, color: '#ef4444' },
      { label: 'Poor communication',     value: 24, color: '#f59e0b' },
      { label: 'Cleanliness issues',     value: 22, color: '#6366f1' },
      { label: 'Other reasons',          value: 16, color: 'rgba(255,255,255,0.25)' },
    ]
  },
  'chart-cost': {
    title: 'Robot cost breakdown — €1,500',
    data: [
      { label: 'Electronics & MCU',      value: 32, color: '#3b82f6' },
      { label: 'Chassis & Motors',       value: 22, color: '#f59e0b' },
      { label: 'Shell & 3D printing',    value: 18, color: '#8b5cf6' },
      { label: 'Battery + BMS',          value: 16, color: '#10b981' },
      { label: 'Assembly & testing',     value: 12, color: 'rgba(255,255,255,0.25)' },
    ]
  },
  'chart-market': {
    title: 'Europe short-term rental market',
    data: [
      { label: 'France',   value: 30, color: '#10b981' },
      { label: 'Spain',    value: 22, color: '#3b82f6' },
      { label: 'Italy',    value: 18, color: '#f59e0b' },
      { label: 'Germany',  value: 15, color: '#8b5cf6' },
      { label: 'Others',   value: 15, color: 'rgba(255,255,255,0.20)' },
    ]
  }
}

/* ── Build one SVG donut ──────────────────────────────── */
function buildDonut(container, chartId) {
  const config = CHARTS[chartId]
  if (!config) return

  const SIZE   = 260
  const CX     = SIZE / 2
  const CY     = SIZE / 2
  const R      = 98      // outer radius
  const HOLE   = 62      // inner radius (donut hole)
  const STROKE = R - HOLE
  const CIRC   = 2 * Math.PI * (HOLE + STROKE / 2)

  const ns = 'http://www.w3.org/2000/svg'

  /* SVG element */
  const svg = document.createElementNS(ns, 'svg')
  svg.setAttribute('viewBox', `0 0 ${SIZE} ${SIZE}`)
  svg.setAttribute('width',  String(SIZE))
  svg.setAttribute('height', String(SIZE))
  svg.setAttribute('class',  'donut-svg')
  svg.setAttribute('aria-hidden', 'true')

  /* Background track */
  const track = document.createElementNS(ns, 'circle')
  track.setAttribute('cx', String(CX))
  track.setAttribute('cy', String(CY))
  track.setAttribute('r',  String(HOLE + STROKE / 2))
  track.setAttribute('fill',   'none')
  track.setAttribute('stroke', 'rgba(255,255,255,0.04)')
  track.setAttribute('stroke-width', String(STROKE))
  svg.appendChild(track)

  /* Segments */
  let offset = 0
  const segments = []

  config.data.forEach((item) => {
    const slice = (item.value / 100) * CIRC
    const dash  = slice - 2   // 2px gap between slices

    const circle = document.createElementNS(ns, 'circle')
    circle.setAttribute('cx', String(CX))
    circle.setAttribute('cy', String(CY))
    circle.setAttribute('r',  String(HOLE + STROKE / 2))
    circle.setAttribute('fill',         'none')
    circle.setAttribute('stroke',       item.color)
    circle.setAttribute('stroke-width', String(STROKE))
    circle.setAttribute('stroke-dasharray',  `${dash} ${CIRC - dash}`)
    circle.setAttribute('stroke-dashoffset', String(CIRC - offset + CIRC / 4))
    circle.setAttribute('class', 'donut-seg')
    svg.appendChild(circle)

    segments.push({ el: circle, item, dash, offset, CIRC })
    offset += slice
  })

  container.appendChild(svg)
  return segments
}

/* ── Legend ───────────────────────────────────────────── */
function buildLegend(container, chartId) {
  const config = CHARTS[chartId]
  if (!config) return

  const legend = document.createElement('div')
  legend.className = 'donut-legend'

  config.data.forEach((item) => {
    const row = document.createElement('div')
    row.className = 'legend-row'

    const dot = document.createElement('span')
    dot.className = 'legend-dot'
    dot.style.background = item.color

    const pct = document.createElement('span')
    pct.className = 'legend-pct'
    pct.textContent = item.value + '%'

    const lbl = document.createElement('span')
    lbl.className = 'legend-lbl'
    lbl.textContent = item.label

    row.appendChild(dot)
    row.appendChild(pct)
    row.appendChild(lbl)
    legend.appendChild(row)
  })

  container.appendChild(legend)
}

/* ── Animate donut on scroll ──────────────────────────── */
function animateDonut(segments) {
  const CIRC = segments[0].CIRC

  segments.forEach((seg, i) => {
    const { el, dash, offset } = seg
    const startOffset = CIRC - offset + CIRC / 4
    const endOffset   = CIRC - offset - dash + CIRC / 4 - dash

    gsap.fromTo(el,
      { attr: { 'stroke-dashoffset': startOffset } },
      {
        attr: { 'stroke-dashoffset': CIRC / 4 - offset },
        duration: 0.9,
        ease: 'power3.out',
        delay: i * 0.18
      }
    )

    // Also fade in
    gsap.fromTo(el,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, delay: i * 0.18 }
    )
  })
}

/* ── Init all donuts ──────────────────────────────────── */
export function initPieCharts() {
  document.querySelectorAll('[data-donut]').forEach((container) => {
    const chartId  = container.dataset.donut
    const titleEl  = container.querySelector('.donut-title')
    const svgWrap  = container.querySelector('.donut-svg-wrap')
    const legendWrap = container.querySelector('.donut-legend-wrap')

    if (!svgWrap || !legendWrap) return

    const segments = buildDonut(svgWrap, chartId)
    buildLegend(legendWrap, chartId)

    // Fill title
    if (titleEl && CHARTS[chartId]) {
      titleEl.textContent = CHARTS[chartId].title
    }

    // Animate on scroll
    if (segments && segments.length) {
      ScrollTrigger.create({
        trigger: container,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.fromTo(container,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
          )
          animateDonut(segments)
          // Stagger legend rows in
          gsap.fromTo(
            container.querySelectorAll('.legend-row'),
            { opacity: 0, x: -12 },
            { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1, delay: 0.4 }
          )
        }
      })
    }
  })
}
