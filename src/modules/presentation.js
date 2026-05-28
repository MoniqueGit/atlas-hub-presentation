/* ── Presentation Mode ───────────────────────────────────
   Spacebar / ArrowRight = next slide
   ArrowLeft / Backspace  = previous slide
   Escape                 = exit
   Button "▶ Present"    = enter / exit
   ─────────────────────────────────────────────────────── */

const SLIDES = [
  { id: 'hero',       label: 'Introduction' },
  { id: 'problem',    label: 'The Problem'  },
  { id: 'robot',      label: 'Atlas Hub'    },
  { id: 'technical',  label: 'Architecture' },
  { id: 'demo',       label: 'Live Demo'    },
  { id: 'business',   label: 'Impact'       },
  { id: 'thanks',     label: 'Thank You'    },
]

let currentSlide = 0
let isActive = false

function makeSvgPlay() {
  const ns = 'http://www.w3.org/2000/svg'
  const svg = document.createElementNS(ns, 'svg')
  svg.setAttribute('width', '14')
  svg.setAttribute('height', '14')
  svg.setAttribute('viewBox', '0 0 24 24')
  svg.setAttribute('fill', 'none')
  svg.setAttribute('stroke', 'currentColor')
  svg.setAttribute('stroke-width', '2')
  const poly = document.createElementNS(ns, 'polygon')
  poly.setAttribute('points', '5 3 19 12 5 21 5 3')
  poly.setAttribute('fill', 'currentColor')
  poly.setAttribute('stroke', 'none')
  svg.appendChild(poly)
  return svg
}

function makeSvgStop() {
  const ns = 'http://www.w3.org/2000/svg'
  const svg = document.createElementNS(ns, 'svg')
  svg.setAttribute('width', '14')
  svg.setAttribute('height', '14')
  svg.setAttribute('viewBox', '0 0 24 24')
  svg.setAttribute('fill', 'none')
  svg.setAttribute('stroke', 'currentColor')
  svg.setAttribute('stroke-width', '2')
  const rect = document.createElementNS(ns, 'rect')
  rect.setAttribute('x', '3')
  rect.setAttribute('y', '3')
  rect.setAttribute('width', '18')
  rect.setAttribute('height', '18')
  rect.setAttribute('rx', '2')
  svg.appendChild(rect)
  const path = document.createElementNS(ns, 'path')
  path.setAttribute('d', 'M10 9v6m4-6v6')
  svg.appendChild(path)
  return svg
}

function setBtnLabel(btn, entering) {
  while (btn.firstChild) btn.removeChild(btn.firstChild)
  btn.appendChild(entering ? makeSvgPlay() : makeSvgStop())
  btn.appendChild(document.createTextNode(entering ? ' Present' : ' Exit'))
}

export function initPresentation() {
  const btn        = document.getElementById('presentBtn')
  const overlay    = document.getElementById('presentOverlay')
  const counter    = document.getElementById('slideCounter')
  const slideLabel = document.getElementById('slideLabel')
  const prevBtn    = document.getElementById('slidePrev')
  const nextBtn    = document.getElementById('slideNext')

  if (!btn || !overlay) return

  function updateCounter() {
    if (counter)    counter.textContent    = (currentSlide + 1) + ' / ' + SLIDES.length
    if (slideLabel) slideLabel.textContent = SLIDES[currentSlide].label
    if (prevBtn) prevBtn.style.opacity = currentSlide === 0                   ? '0.25' : '1'
    if (nextBtn) nextBtn.style.opacity = currentSlide === SLIDES.length - 1  ? '0.25' : '1'
  }

  const goodbyeVideo = document.getElementById('goodbyeVideo')

  function goTo(index) {
    if (index < 0 || index >= SLIDES.length) return
    currentSlide = index
    const target = document.getElementById(SLIDES[currentSlide].id)
    if (target) {
      target.scrollIntoView({ behavior: 'instant', block: 'start' })
    }
    updateCounter()

    // Slide 7 (thanks) → play the embedded video
    if (SLIDES[currentSlide].id === 'thanks' && goodbyeVideo) {
      goodbyeVideo.currentTime = 0
      goodbyeVideo.play().catch(() => {})
    } else if (goodbyeVideo) {
      goodbyeVideo.pause()
    }
  }

  function enter() {
    isActive = true
    overlay.classList.add('visible')
    setBtnLabel(btn, false)
    btn.classList.add('btn-exit')
    document.body.classList.add('present-mode')
    goTo(currentSlide)
  }

  function exit() {
    isActive = false
    overlay.classList.remove('visible')
    setBtnLabel(btn, true)
    btn.classList.remove('btn-exit')
    document.body.classList.remove('present-mode')
  }

  // Initial state
  setBtnLabel(btn, true)

  btn.addEventListener('click', () => (isActive ? exit() : enter()))
  if (prevBtn) prevBtn.addEventListener('click', () => goTo(currentSlide - 1))
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(currentSlide + 1))

  document.addEventListener('keydown', (e) => {
    if (!isActive) return
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault()
      goTo(currentSlide + 1)
    }
    if (e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'PageUp') {
      e.preventDefault()
      goTo(currentSlide - 1)
    }
    if (e.key === 'Escape') exit()
  })

  updateCounter()
}
