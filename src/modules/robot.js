import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export function initRobot(canvasId) {
  const canvas = document.getElementById(canvasId)
  if (!canvas) return null

  /* ── Renderer ─────────────────────────────────── */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.setClearColor(0x07090f, 1)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.4

  /* ── Scene ────────────────────────────────────── */
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x07090f)
  scene.fog = new THREE.FogExp2(0x07090f, 0.06)

  /* ── Camera ───────────────────────────────────── */
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
  camera.position.set(0, 0.9, 4.8)

  /* ── Lights ───────────────────────────────────── */
  const ambient = new THREE.AmbientLight(0xc8d8ff, 1.8)
  scene.add(ambient)

  const dirLight = new THREE.DirectionalLight(0xffffff, 2.2)
  dirLight.position.set(3, 5, 3)
  dirLight.castShadow = true
  dirLight.shadow.mapSize.set(2048, 2048)
  dirLight.shadow.camera.near = 0.1
  dirLight.shadow.camera.far = 20
  scene.add(dirLight)

  // Emerald key light (left-front, signature colour)
  const emeraldLight = new THREE.PointLight(0x10b981, 4.5, 12)
  emeraldLight.position.set(-2.5, 1.2, 3.0)
  scene.add(emeraldLight)

  // Warm front-right fill — lifts the dark body
  const frontFill = new THREE.DirectionalLight(0xffeedd, 1.4)
  frontFill.position.set(2, 1, 4)
  scene.add(frontFill)

  // Rim light (top-back, blue edge)
  const rimLight = new THREE.PointLight(0x60a5fa, 2.0, 10)
  rimLight.position.set(2, 3, -3)
  scene.add(rimLight)

  // OLED glow
  const oledLight = new THREE.PointLight(0x10b981, 1.2, 2.0)
  scene.add(oledLight)

  // LED ring glow
  const ledGlow = new THREE.PointLight(0x10b981, 2.0, 3.0)
  scene.add(ledGlow)

  /* ── Materials ────────────────────────────────── */
  // Body shell — dark navy, reads clearly against scene bg
  const matShell = new THREE.MeshStandardMaterial({
    color: 0x1a2035,
    roughness: 0.82,
    metalness: 0.20,
  })

  // Secondary panels
  const matDark = new THREE.MeshStandardMaterial({
    color: 0x151d30,
    roughness: 0.88,
    metalness: 0.15,
  })

  // Mid-tone accent (vents, joints)
  const matMid = new THREE.MeshStandardMaterial({
    color: 0x2a3558,
    roughness: 0.65,
    metalness: 0.55,
  })

  // Rubber tyre — very dark but has slight navy tint so it's visible
  const matRubber = new THREE.MeshStandardMaterial({
    color: 0x0d1120,
    roughness: 0.98,
    metalness: 0.02,
  })

  // Hub metal — brushed steel
  const matHub = new THREE.MeshStandardMaterial({
    color: 0x3a4a6a,
    roughness: 0.50,
    metalness: 0.80,
  })

  const matEmerald = new THREE.MeshBasicMaterial({ color: 0x10b981 })

  // Blue eye sensors
  const matEye = new THREE.MeshStandardMaterial({
    color: 0x020610,
    emissive: 0x1d4ed8,
    emissiveIntensity: 0.5,
    roughness: 0.2,
    metalness: 0.8,
  })

  // Eye lens glint
  const matEyeGlass = new THREE.MeshStandardMaterial({
    color: 0x0a0f2e,
    emissive: 0x3b82f6,
    emissiveIntensity: 0.9,
    roughness: 0.05,
    metalness: 0.95,
    transparent: true,
    opacity: 0.85,
  })

  /* ── Robot group ──────────────────────────────── */
  const robotGroup = new THREE.Group()
  scene.add(robotGroup)
  robotGroup.position.y = -0.5

  /* ════════════════════════════════════════════════
     WHEELS — large bicycle-style (matches image)
     ════════════════════════════════════════════════ */
  const WHEEL_R = 0.62    // large radius matching image
  const WHEEL_W = 0.23    // thick tyre
  const WHEEL_X = 0.86    // far out from body
  const WHEEL_Y = WHEEL_R // center sits at radius height

  function makeWheel(xSign) {
    const group = new THREE.Group()

    // Main tyre body
    const tyreGeo = new THREE.CylinderGeometry(WHEEL_R, WHEEL_R, WHEEL_W, 48)
    const tyre = new THREE.Mesh(tyreGeo, matRubber)
    tyre.rotation.z = Math.PI / 2
    tyre.castShadow = true
    group.add(tyre)

    // Outer tyre edge rings (tread detail)
    for (const offset of [-0.08, 0, 0.08]) {
      const edgeGeo = new THREE.TorusGeometry(WHEEL_R, 0.018, 8, 64)
      const edge = new THREE.Mesh(edgeGeo, new THREE.MeshStandardMaterial({
        color: 0x0c0c0c, roughness: 1.0, metalness: 0.0,
      }))
      edge.rotation.y = Math.PI / 2
      edge.position.x = offset
      group.add(edge)
    }

    // Hub disc (outer face)
    const hubDiscGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.005, 32)
    const hubDisc = new THREE.Mesh(hubDiscGeo, matHub)
    hubDisc.rotation.z = Math.PI / 2
    hubDisc.position.x = xSign * (WHEEL_W / 2 + 0.003)
    group.add(hubDisc)

    // Hub cap center
    const hubCapGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.04, 24)
    const hubCap = new THREE.Mesh(hubCapGeo, new THREE.MeshStandardMaterial({
      color: 0x1a1a1a, roughness: 0.7, metalness: 0.8,
    }))
    hubCap.rotation.z = Math.PI / 2
    group.add(hubCap)

    // Spokes (8)
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const pts = [
        new THREE.Vector3(xSign * WHEEL_W * 0.42, 0, 0),
        new THREE.Vector3(xSign * WHEEL_W * 0.42,
          Math.cos(angle) * (WHEEL_R - 0.08),
          Math.sin(angle) * (WHEEL_R - 0.08)),
      ]
      const geo = new THREE.BufferGeometry().setFromPoints(pts)
      const spoke = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0x1e1e1e }))
      group.add(spoke)
    }

    // Motor axle stub (inner side protrusion)
    const axleGeo = new THREE.CylinderGeometry(0.055, 0.055, 0.10, 16)
    const axle = new THREE.Mesh(axleGeo, matHub)
    axle.rotation.z = Math.PI / 2
    group.add(axle)

    group.position.set(xSign * WHEEL_X, WHEEL_Y, 0)
    return group
  }

  const wheelL = makeWheel(-1)
  const wheelR = makeWheel(1)
  robotGroup.add(wheelL, wheelR)

  // Front caster (tiny ball at front bottom)
  const casterGeo = new THREE.SphereGeometry(0.055, 16, 16)
  const caster = new THREE.Mesh(casterGeo, new THREE.MeshStandardMaterial({
    color: 0x111111, roughness: 0.9,
  }))
  caster.position.set(0, 0.055, 0.66)
  robotGroup.add(caster)

  /* ════════════════════════════════════════════════
     BODY — wide barrel (matches image)
     ════════════════════════════════════════════════ */
  const BODY_H   = 0.82
  const BODY_R   = 0.60
  const BODY_Y   = WHEEL_Y + 0.32   // body center y
  // Body bottom: BODY_Y - BODY_H/2 = 0.94 - 0.41 = 0.53 (above caster)

  const bodyGeo = new THREE.CylinderGeometry(BODY_R - 0.01, BODY_R + 0.03, BODY_H, 40)
  const body = new THREE.Mesh(bodyGeo, matShell)
  body.position.y = BODY_Y
  body.castShadow = true
  robotGroup.add(body)

  // Body detail rings (subtle panel lines like the image)
  for (const yOff of [-0.28, 0.28]) {
    const rGeo = new THREE.TorusGeometry(BODY_R + 0.005, 0.008, 8, 48)
    const r = new THREE.Mesh(rGeo, matMid)
    r.position.y = BODY_Y + yOff
    robotGroup.add(r)
  }

  // Motor housing bumps (left & right — where body meets wheel)
  function makeMotorHousing(xSign) {
    const hGeo = new THREE.CylinderGeometry(0.10, 0.12, 0.14, 20)
    const h = new THREE.Mesh(hGeo, matDark)
    h.rotation.z = Math.PI / 2
    h.position.set(xSign * (BODY_R + 0.01), BODY_Y, 0)
    return h
  }
  robotGroup.add(makeMotorHousing(-1), makeMotorHousing(1))

  /* ════════════════════════════════════════════════
     OLED DISPLAY — large & centered on body front
     (matches the prominent display in the image)
     ════════════════════════════════════════════════ */
  const oledCanvas = document.createElement('canvas')
  oledCanvas.width = 512
  oledCanvas.height = 320
  const oledCtx = oledCanvas.getContext('2d')

  const oledTex = new THREE.CanvasTexture(oledCanvas)

  // OLED bezel (dark border around screen)
  const bezelGeo = new THREE.PlaneGeometry(0.54, 0.36)
  const bezel = new THREE.Mesh(bezelGeo, new THREE.MeshBasicMaterial({ color: 0x050505 }))
  bezel.position.set(0, BODY_Y + 0.06, BODY_R + 0.001)
  robotGroup.add(bezel)

  const oledGeo = new THREE.PlaneGeometry(0.48, 0.30)
  const oledMat = new THREE.MeshBasicMaterial({ map: oledTex })
  const oled = new THREE.Mesh(oledGeo, oledMat)
  oled.position.set(0, BODY_Y + 0.06, BODY_R + 0.003)
  robotGroup.add(oled)
  oledLight.position.set(0, BODY_Y + 0.06, BODY_R + 0.6)

  // "ATLAS HUB" label on body (below OLED) — canvas texture
  const labelCv = document.createElement('canvas')
  labelCv.width = 512
  labelCv.height = 80
  const lCtx = labelCv.getContext('2d')
  lCtx.clearRect(0, 0, 512, 80)
  lCtx.fillStyle = 'rgba(16,185,129,0.65)'
  lCtx.font = '600 28px "Space Grotesk", monospace'
  lCtx.textAlign = 'center'
  lCtx.letterSpacing = '0.2em'
  lCtx.fillText('ATLAS HUB', 256, 52)
  const labelTex = new THREE.CanvasTexture(labelCv)
  const labelMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.52, 0.08),
    new THREE.MeshBasicMaterial({ map: labelTex, transparent: true })
  )
  labelMesh.position.set(0, BODY_Y - 0.22, BODY_R + 0.003)
  robotGroup.add(labelMesh)

  /* ════════════════════════════════════════════════
     LED BAND — prominent green ring at body top
     ════════════════════════════════════════════════ */
  const LED_BAND_Y = BODY_Y + BODY_H / 2 + 0.02
  const ledBandGeo = new THREE.TorusGeometry(BODY_R - 0.01, 0.030, 12, 64)
  const ledBandMat = new THREE.MeshBasicMaterial({ color: 0x10b981 })
  const ledBand = new THREE.Mesh(ledBandGeo, ledBandMat)
  ledBand.position.y = LED_BAND_Y
  robotGroup.add(ledBand)

  /* ════════════════════════════════════════════════
     SERVO JOINT (head–body connector)
     ════════════════════════════════════════════════ */
  const HEAD_GROUP_Y = LED_BAND_Y + 0.06
  const servoGeo = new THREE.CylinderGeometry(0.14, 0.16, 0.10, 20)
  const servo = new THREE.Mesh(servoGeo, matMid)
  servo.position.y = LED_BAND_Y + 0.02
  robotGroup.add(servo)

  /* ════════════════════════════════════════════════
     HEAD GROUP — flat disc (matches image exactly)
     ════════════════════════════════════════════════ */
  const headGroup = new THREE.Group()
  headGroup.position.y = HEAD_GROUP_Y
  robotGroup.add(headGroup)

  const HEAD_R = 0.60
  const HEAD_H = 0.28  // very flat disc, NOT a tall cylinder

  const headGeo = new THREE.CylinderGeometry(HEAD_R - 0.01, HEAD_R + 0.01, HEAD_H, 48)
  const head = new THREE.Mesh(headGeo, matShell)
  head.position.y = HEAD_H / 2
  head.castShadow = true
  headGroup.add(head)

  // Head bottom ring (junction detail)
  const headBotRingGeo = new THREE.TorusGeometry(HEAD_R + 0.005, 0.010, 8, 48)
  const headBotRing = new THREE.Mesh(headBotRingGeo, matMid)
  headBotRing.position.y = 0.01
  headGroup.add(headBotRing)

  /* ── Eye sensors on head front ─────────────────── */
  function makeEye(xPos) {
    const g = new THREE.Group()
    g.position.set(xPos, HEAD_H * 0.4, HEAD_R - 0.01)

    // Outer recessed ring
    const recessGeo = new THREE.CylinderGeometry(0.082, 0.082, 0.012, 32)
    const recess = new THREE.Mesh(recessGeo, matDark)
    recess.rotation.x = Math.PI / 2
    g.add(recess)

    // Mid ring
    const ringGeo1 = new THREE.TorusGeometry(0.082, 0.006, 8, 32)
    const ring1 = new THREE.Mesh(ringGeo1, matMid)
    g.add(ring1)

    // Inner ring (lighter)
    const ringGeo2 = new THREE.TorusGeometry(0.055, 0.005, 8, 32)
    const ring2 = new THREE.Mesh(ringGeo2, new THREE.MeshStandardMaterial({
      color: 0x222222, roughness: 0.5, metalness: 0.9,
    }))
    g.add(ring2)

    // Lens body
    const lensGeo = new THREE.CylinderGeometry(0.048, 0.048, 0.028, 24)
    const lens = new THREE.Mesh(lensGeo, matEye)
    lens.rotation.x = Math.PI / 2
    lens.position.z = 0.004
    g.add(lens)

    // Lens glass highlight
    const glassGeo = new THREE.CircleGeometry(0.032, 24)
    const glass = new THREE.Mesh(glassGeo, matEyeGlass)
    glass.position.z = 0.020
    g.add(glass)

    // Subtle blue point light per eye
    const eyePl = new THREE.PointLight(0x3b82f6, 0.25, 0.8)
    eyePl.position.z = 0.15
    g.add(eyePl)

    return g
  }

  headGroup.add(makeEye(-0.195))
  headGroup.add(makeEye(0.195))

  /* ── LED ring (9 LEDs around top of head disc) ─── */
  const ledMeshes   = []
  const ledLights   = []
  const LED_COUNT   = 9
  const LED_RADIUS  = HEAD_R - 0.06   // near the edge of the disc
  const LED_Y       = HEAD_H - 0.02   // on top of the disc

  for (let i = 0; i < LED_COUNT; i++) {
    const angle = (i / LED_COUNT) * Math.PI * 2
    const x = Math.sin(angle) * LED_RADIUS
    const z = Math.cos(angle) * LED_RADIUS

    const ledGeo = new THREE.SphereGeometry(0.038, 12, 12)
    const ledMat = new THREE.MeshBasicMaterial({ color: 0x10b981 })
    const led = new THREE.Mesh(ledGeo, ledMat)
    led.position.set(x, LED_Y, z)
    headGroup.add(led)
    ledMeshes.push(led)

    // Glow disc under each LED
    const glowGeo = new THREE.CircleGeometry(0.025, 12)
    const glow = new THREE.Mesh(glowGeo, new THREE.MeshBasicMaterial({
      color: 0x10b981, transparent: true, opacity: 0.4,
    }))
    glow.position.set(x, LED_Y - 0.001, z)
    glow.rotation.x = -Math.PI / 2
    headGroup.add(glow)

    // Per-LED point light
    const pl = new THREE.PointLight(0x10b981, 0.18, 0.8)
    pl.position.set(x, LED_Y + 0.05, z)
    headGroup.add(pl)
    ledLights.push(pl)
  }

  // Main LED ring glow (above head)
  ledGlow.position.set(0, HEAD_GROUP_Y + HEAD_H + 0.3, 0)

  /* ── OrbitControls ────────────────────────────── */
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  controls.dampingFactor = 0.04
  controls.autoRotate = true
  controls.autoRotateSpeed = 1.2
  controls.enablePan = false
  controls.minDistance = 2.8
  controls.maxDistance = 7.0
  controls.minPolarAngle = Math.PI * 0.12
  controls.maxPolarAngle = Math.PI * 0.72
  controls.target.set(0, 0.8, 0)
  controls.update()

  let autoRotateTimeout = null
  canvas.addEventListener('pointerdown', () => {
    controls.autoRotate = false
    clearTimeout(autoRotateTimeout)
  })
  canvas.addEventListener('pointerup', () => {
    autoRotateTimeout = setTimeout(() => { controls.autoRotate = true }, 1500)
  })
  canvas.addEventListener('pointerleave', () => {
    clearTimeout(autoRotateTimeout)
    autoRotateTimeout = setTimeout(() => { controls.autoRotate = true }, 1000)
  })

  /* ── Resize ───────────────────────────────────── */
  function resize() {
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    if (canvas.width !== w || canvas.height !== h) {
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
  }

  /* ── OLED Equalizer animation ─────────────────── */
  const BAR_COUNT = 20
  let barHeights = Array.from({ length: BAR_COUNT }, () => Math.random())
  let barTargets = Array.from({ length: BAR_COUNT }, () => Math.random())

  function drawOled() {
    const W = 512, H = 320
    oledCtx.fillStyle = '#000000'
    oledCtx.fillRect(0, 0, W, H)

    // Scanline overlay (CRT effect)
    for (let y = 0; y < H; y += 3) {
      oledCtx.fillStyle = 'rgba(0,0,0,0.18)'
      oledCtx.fillRect(0, y, W, 1)
    }

    // Update bar targets
    if (Math.random() < 0.04) {
      barTargets = barTargets.map(() => 0.1 + Math.random() * 0.9)
    }
    barHeights = barHeights.map((h, i) => h + (barTargets[i] - h) * 0.12)

    const barW    = 17
    const barGap  = 8
    const totalW  = BAR_COUNT * (barW + barGap) - barGap
    const startX  = (W - totalW) / 2
    const baseY   = H - 60

    barHeights.forEach((h, i) => {
      const barH = Math.max(6, h * (baseY - 20))
      const x    = startX + i * (barW + barGap)
      const y    = baseY - barH

      // Bar gradient — bright emerald top to darker base
      const grad = oledCtx.createLinearGradient(x, y, x, baseY)
      grad.addColorStop(0,   '#34d399')
      grad.addColorStop(0.45,'#10b981')
      grad.addColorStop(1,   '#064e3b')
      oledCtx.fillStyle = grad
      // Rounded bar tops
      oledCtx.beginPath()
      oledCtx.roundRect(x, y, barW, barH, [2, 2, 0, 0])
      oledCtx.fill()

      // Peak dot
      if (h > 0.65) {
        oledCtx.fillStyle = '#6ee7b7'
        oledCtx.fillRect(x, y - 4, barW, 2)
      }
    })

    // Bottom divider
    oledCtx.strokeStyle = 'rgba(16,185,129,0.25)'
    oledCtx.lineWidth = 1
    oledCtx.beginPath()
    oledCtx.moveTo(20, baseY + 4)
    oledCtx.lineTo(W - 20, baseY + 4)
    oledCtx.stroke()

    // Status label
    oledCtx.fillStyle = 'rgba(52,211,153,0.55)'
    oledCtx.font = '500 20px monospace'
    oledCtx.textAlign = 'center'
    oledCtx.fillText('LEA  ACTIVE', W / 2, H - 24)

    // Blinking dot
    if (Math.floor(Date.now() / 600) % 2 === 0) {
      oledCtx.fillStyle = '#10b981'
      oledCtx.beginPath()
      oledCtx.arc(W / 2 - 70, H - 29, 4, 0, Math.PI * 2)
      oledCtx.fill()
    }

    oledTex.needsUpdate = true
  }

  /* ── Animation loop ───────────────────────────── */
  let animId  = null
  let isActive = false

  function animate(time) {
    animId = requestAnimationFrame(animate)
    const t = time * 0.001

    resize()

    // Head gentle oscillation (looks at the room)
    headGroup.rotation.y = Math.sin(t * 0.55) * (Math.PI / 28)

    // Wheel rotation matching auto-rotate feel
    const spin = t * 0.35
    wheelL.rotation.z = -spin
    wheelR.rotation.z = -spin

    // LED ring — travelling wave pulse (like in the photo)
    ledMeshes.forEach((led, i) => {
      const wave = Math.sin(t * 3.0 + i * (Math.PI * 2 / LED_COUNT))
      const brightness = 0.45 + wave * 0.55
      led.material.color.setRGB(
        brightness * (16  / 255),
        brightness * (185 / 255),
        brightness * (129 / 255)
      )
      ledLights[i].intensity = 0.08 + wave * 0.22
    })

    // LED band pulse (faster, more dramatic)
    const bp = 0.6 + Math.sin(t * 4.0) * 0.4
    ledBandMat.color.setRGB(bp * 16/255, bp * 185/255, bp * 129/255)

    // Emerald key light breathe
    emeraldLight.intensity = 2.0 + Math.sin(t * 1.6) * 0.5

    // LED ring glow oscillate
    ledGlow.intensity = 0.9 + Math.sin(t * 2.2) * 0.4

    // OLED update
    drawOled()

    // Subtle float
    robotGroup.position.y = -0.5 + Math.sin(t * 0.75) * 0.035

    controls.update()
    renderer.render(scene, camera)
  }

  /* ── Intersection Observer ────────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isActive) {
        isActive = true
        animate(0)
      } else if (!entry.isIntersecting && isActive) {
        isActive = false
        cancelAnimationFrame(animId)
      }
    })
  }, { threshold: 0.1 })

  observer.observe(canvas)

  return { renderer, scene, camera, controls }
}
