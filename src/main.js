import './style.css'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'

import Lenis from 'lenis'
import { initParticles }    from './modules/particles.js'
import { initAnimations }   from './modules/animations.js'
import { initDemo }         from './modules/demo.js'
import { initNavigation, initTilt } from './modules/navigation.js'
import { initPresentation } from './modules/presentation.js'
import { initPieCharts }   from './modules/piecharts.js'

/* ── Lenis smooth scroll ──────────────────────────── */
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
})
function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
requestAnimationFrame(raf)

/* ── Init on DOMContentLoaded ─────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavigation()
  initPresentation()
  initParticles('particlesCanvas')
  initAnimations()
  initDemo()
  initPieCharts()

  setTimeout(() => {
    initTilt()
  }, 150)
})

/* ── Cursor hover class ───────────────────────────── */
const s = document.createElement('style')
s.textContent = '.cursor.cursor-hover{width:48px!important;height:48px!important;border-color:rgba(16,185,129,.9)!important;background:rgba(16,185,129,.05)!important}'
document.head.appendChild(s)
