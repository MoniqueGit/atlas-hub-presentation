# Atlas Hub — AI Robot Presentation Site

**Youri & Thomas · IUT Montpellier-Sète · GEII/ESE · 2026**

A premium one-page presentation site for Atlas Hub, an autonomous AI robot for short-term rental concierge services — built on the Atlas Stay ecosystem.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

---

## Tech Stack

| Library | Role |
|---------|------|
| **Vite 5** | Fast bundler + dev server |
| **Three.js r169** | 3D robot model (pure primitives, no GLTF) |
| **GSAP 3 + ScrollTrigger** | Scroll animations, counters, reveals |
| **Lenis** | Ultra-smooth scroll with inertia |
| **Splitting.js** | Letter-by-letter text reveal animations |
| **vanilla-tilt** | 3D hover tilt effect on cards |

## Structure

```
src/
  main.js               # Entry point: Lenis + module init
  style.css             # Full design system (Atlas Agency)
  modules/
    robot.js            # Three.js 3D robot — all primitives
    particles.js        # Hero background particle field
    animations.js       # GSAP ScrollTrigger + Splitting.js
    demo.js             # Typewriter conversation animation
    navigation.js       # Custom cursor + keyboard nav + vanilla-tilt
```

## Sections

1. **Hero** — Particle field, Splitting.js title, animated CTA
2. **Problem Statement** — Counter-up stats, tilt cards
3. **Meet Atlas Hub** — Interactive Three.js 3D robot (drag + zoom)
4. **Technical Architecture** — Flow diagram + component grid
5. **Live Demo** — LEA conversation typewriter effect
6. **Business Impact** — Stats grid, closing card

## Design System

- **Fonts**: Space Grotesk (titles) + Inter (body)
- **Background**: `#080808` deep black
- **Accent**: Emerald `#10b981`, Amber `#f59e0b`, Blue AI `#3b82f6`
- **Motion**: GSAP `power2.out` 0.6s, stagger 0.08s, ScrollTrigger once

---

*Atlas Agency · atlastheone.xyz*
