export function initParticles(canvasId) {
  const canvas = document.getElementById(canvasId)
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  let particles = []
  let animId = null
  let W = 0
  let H = 0

  const PARTICLE_COUNT = 80
  const EMERALD = [16, 185, 129]

  class Particle {
    constructor() { this.reset() }

    reset() {
      this.x = Math.random() * W
      this.y = Math.random() * H
      this.vx = (Math.random() - 0.5) * 0.25
      this.vy = (Math.random() - 0.5) * 0.25
      this.radius = Math.random() * 1.5 + 0.5
      this.alpha = Math.random() * 0.04 + 0.01
      this.life = 0
      this.maxLife = Math.random() * 300 + 150
    }

    update() {
      this.x += this.vx
      this.y += this.vy
      this.life++

      // Wrap around
      if (this.x < 0) this.x = W
      if (this.x > W) this.x = 0
      if (this.y < 0) this.y = H
      if (this.y > H) this.y = 0
    }

    draw() {
      // Fade in/out
      const progress = this.life / this.maxLife
      const fade = progress < 0.1
        ? progress * 10
        : progress > 0.9
          ? (1 - progress) * 10
          : 1

      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${EMERALD[0]},${EMERALD[1]},${EMERALD[2]},${this.alpha * fade})`
      ctx.fill()
    }
  }

  function resize() {
    W = canvas.offsetWidth
    H = canvas.offsetHeight
    canvas.width = W
    canvas.height = H
  }

  function init() {
    resize()
    particles = Array.from({ length: PARTICLE_COUNT }, () => {
      const p = new Particle()
      p.life = Math.floor(Math.random() * p.maxLife)
      return p
    })
  }

  function loop() {
    animId = requestAnimationFrame(loop)
    ctx.clearRect(0, 0, W, H)

    particles.forEach(p => {
      if (p.life >= p.maxLife) p.reset()
      p.update()
      p.draw()
    })

    // Draw connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100) {
          const alpha = (1 - dist / 100) * 0.015
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(${EMERALD[0]},${EMERALD[1]},${EMERALD[2]},${alpha})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }
  }

  init()
  loop()

  window.addEventListener('resize', () => {
    resize()
    particles.forEach(p => {
      if (p.x > W) p.x = Math.random() * W
      if (p.y > H) p.y = Math.random() * H
    })
  })

  return () => cancelAnimationFrame(animId)
}
