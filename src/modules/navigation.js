import VanillaTilt from 'vanilla-tilt'

export function initNavigation() {
  /* ── Smooth scroll for anchor links ───────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(anchor.getAttribute('href'))
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    })
  })

  /* ── Keyboard navigation ──────────────────────── */
  const sectionIds = ['#hero', '#problem', '#robot', '#technical', '#demo', '#business']
  let currentSection = 0

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault()
      currentSection = Math.min(currentSection + 1, sectionIds.length - 1)
      document.querySelector(sectionIds[currentSection])?.scrollIntoView({ behavior: 'smooth' })
    }
    if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault()
      currentSection = Math.max(currentSection - 1, 0)
      document.querySelector(sectionIds[currentSection])?.scrollIntoView({ behavior: 'smooth' })
    }
  })

  /* ── Custom cursor ────────────────────────────── */
  const cursor = document.getElementById('cursor')
  const cursorDot = document.getElementById('cursorDot')
  let mouseX = 0, mouseY = 0
  let curX = 0, curY = 0

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  // Smooth cursor follow
  function animateCursor() {
    curX += (mouseX - curX) * 0.12
    curY += (mouseY - curY) * 0.12

    if (cursor) {
      cursor.style.left = curX + 'px'
      cursor.style.top = curY + 'px'
    }
    if (cursorDot) {
      cursorDot.style.left = mouseX + 'px'
      cursorDot.style.top = mouseY + 'px'
    }

    requestAnimationFrame(animateCursor)
  }
  animateCursor()

  // Cursor states
  document.querySelectorAll('a, button, [data-tilt]').forEach(el => {
    el.addEventListener('mouseenter', () => cursor?.classList.add('cursor-hover'))
    el.addEventListener('mouseleave', () => cursor?.classList.remove('cursor-hover'))
  })
}

export function initTilt() {
  const tiltEls = document.querySelectorAll('[data-tilt]')
  if (!tiltEls.length) return

  VanillaTilt.init(tiltEls, {
    max: 8,
    speed: 400,
    glare: true,
    'max-glare': 0.05,
    perspective: 800,
  })
}
