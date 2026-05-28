import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initDemo() {
  const groups = document.querySelectorAll('.msg-group')
  if (!groups.length) return

  let hasStarted = false

  ScrollTrigger.create({
    trigger: '#demo',
    start: 'top 60%',
    once: true,
    onEnter: () => {
      if (!hasStarted) {
        hasStarted = true
        startConversation()
      }
    }
  })

  function typeMessage(bubble, text, onComplete) {
    const span = bubble.querySelector('.typewriter-text')
    const cursor = bubble.querySelector('.typewriter-cursor')
    if (!span) { if (onComplete) onComplete(); return }

    span.textContent = ''
    let i = 0
    const speed = 28 // ms per character

    function type() {
      if (i < text.length) {
        span.textContent += text[i]
        i++
        setTimeout(type, speed + Math.random() * 20)
      } else {
        // Hide cursor after done
        setTimeout(() => {
          if (cursor) cursor.style.opacity = '0'
          if (onComplete) onComplete()
        }, 400)
      }
    }

    if (cursor) cursor.style.opacity = '1'
    type()
  }

  function showGroup(groupEl, delay, onComplete) {
    const leaBubble = groupEl.querySelector('.bubble-lea[data-typewriter]')
    const fullText = groupEl.querySelector('.msg-data')
    const text = fullText ? fullText.dataset.full : ''

    setTimeout(() => {
      // Fade in the group
      gsap.to(groupEl, { opacity: 1, duration: 0.4, ease: 'power2.out' })

      // Short pause then type the LEA response
      setTimeout(() => {
        typeMessage(leaBubble, text, onComplete)
      }, 600)
    }, delay)
  }

  function startConversation() {
    // Show exchange 1
    showGroup(groups[0], 200, () => {
      // After exchange 1, wait then show exchange 2
      if (groups[1]) {
        showGroup(groups[1], 1200, () => {
          // After exchange 2, wait then show exchange 3
          if (groups[2]) {
            showGroup(groups[2], 1200, null)
          }
        })
      }
    })
  }
}
