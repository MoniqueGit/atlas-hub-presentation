/* Neural network background canvas — Atlas Hub v2 */
export function initBackground() {
  const canvas = document.getElementById('bgCanvas')
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  const NODE_COUNT = 60
  const MAX_DIST = 190
  const nodes = []
  const pulses = []
  let W, H, frame = 0, running = true

  function resize() {
    W = canvas.width = window.innerWidth
    H = canvas.height = window.innerHeight
    nodes.forEach(n => {
      if (n.x > W) n.x = Math.random() * W
      if (n.y > H) n.y = Math.random() * H
    })
  }

  function createNodes() {
    nodes.length = 0
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 0.9 + Math.random() * 1.3,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.008 + Math.random() * 0.013,
        isBlue: Math.random() > 0.73,
      })
    }
  }

  function trySpawnPulse() {
    if (pulses.length > 8) return
    const maxTries = 60
    for (let t = 0; t < maxTries; t++) {
      const i = Math.floor(Math.random() * nodes.length)
      const j = Math.floor(Math.random() * nodes.length)
      if (i === j) continue
      const dx = nodes[i].x - nodes[j].x
      const dy = nodes[i].y - nodes[j].y
      const d2 = dx * dx + dy * dy
      if (d2 < MAX_DIST * MAX_DIST) {
        pulses.push({ from: i, to: j, progress: 0, speed: 0.005 + Math.random() * 0.009 })
        return
      }
    }
  }

  function loop() {
    if (!running) return
    requestAnimationFrame(loop)
    ctx.clearRect(0, 0, W, H)
    frame++

    /* ── Update node positions ── */
    for (const n of nodes) {
      n.x += n.vx
      n.y += n.vy
      n.phase += n.phaseSpeed
      if (n.x < -30) n.x = W + 30
      else if (n.x > W + 30) n.x = -30
      if (n.y < -30) n.y = H + 30
      else if (n.y > H + 30) n.y = -30
    }

    /* ── Draw connections ── */
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const d2 = dx * dx + dy * dy
        if (d2 < MAX_DIST * MAX_DIST) {
          const alpha = (1 - Math.sqrt(d2) / MAX_DIST) * 0.09
          ctx.beginPath()
          ctx.moveTo(nodes[i].x, nodes[i].y)
          ctx.lineTo(nodes[j].x, nodes[j].y)
          ctx.strokeStyle = `rgba(16,185,129,${alpha})`
          ctx.lineWidth = 0.45
          ctx.stroke()
        }
      }
    }

    /* ── Draw data pulses ── */
    for (let k = pulses.length - 1; k >= 0; k--) {
      const p = pulses[k]
      p.progress += p.speed
      if (p.progress >= 1) { pulses.splice(k, 1); continue }
      const a = nodes[p.from], b = nodes[p.to]
      const x = a.x + (b.x - a.x) * p.progress
      const y = a.y + (b.y - a.y) * p.progress

      const grd = ctx.createRadialGradient(x, y, 0, x, y, 7)
      grd.addColorStop(0, 'rgba(52,211,153,0.72)')
      grd.addColorStop(0.5, 'rgba(52,211,153,0.2)')
      grd.addColorStop(1, 'rgba(52,211,153,0)')
      ctx.beginPath()
      ctx.arc(x, y, 7, 0, Math.PI * 2)
      ctx.fillStyle = grd
      ctx.fill()
    }

    /* ── Draw nodes ── */
    for (const n of nodes) {
      const glow = 0.2 + 0.3 * Math.sin(n.phase)
      const rgb = n.isBlue ? '96,165,250' : '16,185,129'

      /* Soft glow halo */
      ctx.beginPath()
      ctx.arc(n.x, n.y, n.r * 6, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${rgb},${glow * 0.07})`
      ctx.fill()

      /* Core dot */
      ctx.beginPath()
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${rgb},${glow + 0.28})`
      ctx.fill()
    }

    if (frame % 28 === 0) trySpawnPulse()
  }

  W = canvas.width = window.innerWidth
  H = canvas.height = window.innerHeight
  createNodes()
  loop()

  window.addEventListener('resize', resize)
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden
    if (running) loop()
  })
}
