import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Splitting from 'splitting'

gsap.registerPlugin(ScrollTrigger)

export function initAnimations() {
  /* ── Splitting.js ─────────────────────────────── */
  Splitting()

  /* ── Hero sequence ────────────────────────────── */
  const heroTl = gsap.timeline({ delay: 0.1 })
  heroTl
    .fromTo('.eyebrow',      { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .6, ease: 'power2.out' }, 0.1)
    .fromTo('.badge-pill',   { opacity: 0, scale: .9 }, { opacity: 1, scale: 1, duration: .5, ease: 'back.out(1.4)' }, 0.25)
    .fromTo('.section-hero .title-line:first-child .char',
      { opacity: 0, y: 30, rotateX: -25 },
      { opacity: 1, y: 0, rotateX: 0, duration: .65, ease: 'power3.out', stagger: .03 }, 0.35)
    .fromTo('.section-hero .title-line.title-italic .char',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: .55, ease: 'power2.out', stagger: .025 }, 0.6)
    .fromTo('.hero-description', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .6, ease: 'power2.out' }, 0.85)
    .fromTo('.hero-cta-group',   { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .5, ease: 'power2.out' }, 1.0)
    .fromTo('.hero-scroll-indicator', { opacity: 0 }, { opacity: 1, duration: .6 }, 1.2)
    .fromTo('.hero-meta',     { opacity: 0 }, { opacity: 1, duration: .5 }, 1.3)

  /* ── Bar charts — animate on scroll ──────────── */
  ScrollTrigger.create({
    trigger: '#problem',
    start: 'top 70%',
    once: true,
    onEnter: () => {
      // Animate section header
      gsap.fromTo('.section-header-left .eyebrow, .section-header-left .section-title, .section-header-left .section-body',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: .6, ease: 'power2.out', stagger: .1 }
      )

      // Animate chart titles and bars staggered
      const bars = document.querySelectorAll('.bar-fill')
      gsap.set('.chart-title', { opacity: 0, y: 10 })
      gsap.to('.chart-title', { opacity: 1, y: 0, duration: .5, ease: 'power2.out', stagger: .15, delay: .3 })

      bars.forEach((bar, i) => {
        const target = parseFloat(bar.dataset.target) || 0
        gsap.to(bar, {
          width: target + '%',
          duration: 1.2,
          ease: 'power3.out',
          delay: .5 + i * .12
        })
      })

      // Consequence cards
      gsap.fromTo('.consequence-card',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: .6, ease: 'power2.out', stagger: .12, delay: .8 }
      )
    }
  })

  /* ── Robot section ────────────────────────────── */
  ScrollTrigger.create({
    trigger: '#robot',
    start: 'top 75%',
    once: true,
    onEnter: () => {
      gsap.fromTo(['#robot .eyebrow', '#robot .section-title', '#robot .section-body'],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: .6, ease: 'power2.out', stagger: .1 }
      )
      gsap.fromTo('.step-item',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: .6, ease: 'power2.out', stagger: .12, delay: .3 }
      )
      gsap.fromTo('.robot-canvas-container',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: .8, ease: 'power2.out', delay: .2 }
      )
    }
  })

  /* ── Technical cutaway animation ─────────────── */
  ScrollTrigger.create({
    trigger: '#technical',
    start: 'top 70%',
    once: true,
    onEnter: () => {
      gsap.fromTo(['#technical .eyebrow', '#technical .section-title'],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: .6, ease: 'power2.out', stagger: .1 }
      )

      // Arch diagram nodes fade in
      gsap.fromTo('.arch-node, .arch-robot-center',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: .5, ease: 'power2.out', stagger: .07, delay: .2 }
      )

      // Arch arrows draw in sequentially
      for (let d = 0; d <= 5; d++) {
        const paths = document.querySelectorAll(`.arch-arrow[data-arch-delay="${d}"] .arch-path`)
        if (paths.length) {
          gsap.to(paths, {
            attr: { 'stroke-dashoffset': 0 },
            duration: .45,
            ease: 'power2.out',
            delay: .5 + d * 0.18
          })
        }
      }

      gsap.fromTo('.component-card',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: .55, ease: 'power2.out', stagger: .1, delay: .2 }
      )

      // Cutaway SVG: reveal parts by data-delay
      const delays = [0, 1, 2, 3, 4, 5, 6]
      delays.forEach(d => {
        const parts  = document.querySelectorAll(`.cutaway-part[data-delay="${d}"]`)
        const lines  = document.querySelectorAll(`.cutaway-line[data-delay="${d}"]`)
        const labels = document.querySelectorAll(`.cutaway-label[data-delay="${d}"]`)
        const delay  = 0.4 + d * 0.18

        if (parts.length)  gsap.to(parts,  { opacity: 1, duration: .5, ease: 'power2.out', delay })
        if (lines.length)  gsap.to(lines,  { strokeDashoffset: 0, duration: .6, ease: 'power2.out', delay: delay + .1 })
        if (labels.length) gsap.to(labels, { opacity: 1, duration: .4, ease: 'power2.out', delay: delay + .25 })
      })

      // LEDs pulse in
      gsap.to('.cutaway-led', {
        opacity: 1, duration: .3, stagger: .08, delay: 1.6, ease: 'power2.out',
        onComplete: () => {
          document.querySelectorAll('.cutaway-led').forEach((led, i) => {
            led.style.animation = `led-glow 1.8s ease-in-out ${i * 0.2}s infinite`
          })
        }
      })
    }
  })

  /* ── Demo section ─────────────────────────────── */
  ScrollTrigger.create({
    trigger: '#demo',
    start: 'top 75%',
    once: true,
    onEnter: () => {
      gsap.fromTo(['#demo .eyebrow', '#demo .section-title', '#demo .section-body'],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: .6, ease: 'power2.out', stagger: .1 }
      )
      gsap.fromTo('.voice-cmd',
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: .5, ease: 'power2.out', stagger: .08, delay: .3 }
      )
      gsap.fromTo('.demo-right',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: .7, ease: 'power2.out', delay: .2 }
      )
    }
  })

  /* ── Business section ─────────────────────────── */
  ScrollTrigger.create({
    trigger: '#business',
    start: 'top 75%',
    once: true,
    onEnter: () => {
      gsap.fromTo(['#business .eyebrow', '#business .section-title'],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: .6, ease: 'power2.out', stagger: .1 }
      )
      gsap.fromTo('.biz-stat-card',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: .55, ease: 'power2.out', stagger: .1, delay: .2 }
      )
      gsap.fromTo('.pricing-card',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: .6, ease: 'power2.out', delay: .4 }
      )
      gsap.fromTo('.biz-card, .closing-card',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: .6, ease: 'power2.out', stagger: .1, delay: .3 }
      )
    }
  })

  /* ── Text-swap stat counters ──────────────────── */
  document.querySelectorAll('[data-count-text]').forEach(el => {
    const final = el.dataset.countText
    ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true,
      onEnter: () => {
        gsap.fromTo(el,
          { opacity: 0, y: 10, scale: .9 },
          { opacity: 1, y: 0, scale: 1, duration: .8, ease: 'back.out(1.4)', onStart: () => { el.textContent = final } }
        )
      }
    })
  })

  /* ── Nav dots + progress bar ──────────────────── */
  const sectionIds    = ['hero','problem','robot','technical','demo','business','thanks']
  const sectionLabels = ['Overview','Problem','Concept','Tech','Demo','Impact','Thank You']
  const dots          = document.querySelectorAll('.nav-dot')
  const navLinks      = document.querySelectorAll('.nav-link')
  const sectionLabel  = document.getElementById('navSectionLabel')
  const progressBar   = document.getElementById('progressBar')

  sectionIds.forEach((id, i) => {
    const el = document.getElementById(id)
    if (!el) return
    ScrollTrigger.create({
      trigger: el, start: 'top 50%', end: 'bottom 50%',
      onEnter:     () => activate(i),
      onEnterBack: () => activate(i),
    })
  })

  function activate(i) {
    dots.forEach((d, j)     => d.classList.toggle('active', j === i))
    navLinks.forEach((l, j) => l.classList.toggle('active', j === i))
    if (sectionLabel) sectionLabel.textContent = sectionLabels[i]
  }

  if (progressBar) {
    ScrollTrigger.create({
      trigger: document.body, start: 'top top', end: 'bottom bottom',
      onUpdate: (self) => { progressBar.style.width = (self.progress * 100) + '%' }
    })
  }

  /* ── Nav dot clicks ───────────────────────────── */
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const target = document.querySelector(dot.dataset.target)
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    })
  })
}
