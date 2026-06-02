# Atlas Hub — Oral Presentation Script
## 10 Minutes · Youri Figuié & Luis Causse
### IUT Montpellier-Sète · GEII/ESE · 2026

---

## Timing Overview

| Time     | Speaker | Slide         | Topic                        |
|----------|---------|---------------|------------------------------|
| 0:00–1:00 | Luis   | 1 — Hero      | Hook + Introduction          |
| 1:00–3:00 | Luis   | 2 — Problem   | The 3AM problem + charts     |
| 3:00–5:30 | Youri  | 3 — Robot     | Atlas Hub — how it works     |
| 5:30–7:30 | Youri  | 4 — Technical | Inside the robot             |
| 7:30–9:30 | Luis   | 5–6 — Impact  | Business case + conclusion   |
| 9:30–10:00 | Both  | 6 — End       | Thank you                    |

---

## SLIDE 1 — Introduction *(Luis · ~1 min)*

> **"Good morning everyone."**
>
> "My name is Luis Causse, and I'm here with Youri Figuié.  
> We are second-year GEII students, specialising in embedded systems.
>
> Today, we present **Atlas Hub** — an autonomous AI robot for short-term rentals.
>
> But first — imagine this:  
> You arrive at your Airbnb at 3AM.  
> You don't know the WiFi password.  
> The heating doesn't work.  
> And the host is asleep."

**[Pause. Look at the audience.]**

> "What do you do?  
> That's exactly the problem we're solving."

---

## SLIDE 2 — The Problem *(Luis · ~2 min)*

> **"Short-term rentals are booming."**
>
> "There are over 15 million properties in Europe.  
> But there's a big pain point: **the check-in experience at night.**
>
> [Point to bar chart — response time]  
> When a guest has a question, the average host takes **47 minutes** to respond.  
> With a QR code app — maybe 18 minutes. Still too long.  
> With Atlas Hub — **under 2 seconds.**
>
> [Point to pie chart — why bad reviews]  
> And look at why guests leave bad reviews:  
> 38% because of check-in problems.  
> 24% because the host didn't communicate.  
> These are problems that kill your Airbnb rating overnight.
>
> One bad review on Airbnb can take **weeks** to recover from."

---

## SLIDE 3 — Meet Atlas Hub *(Youri · ~2:30 min)*

> **"So — this is Atlas Hub."**  
> *(gesture toward the 3D robot on screen)*
>
> "It's a small wheeled robot that lives in the apartment, available 24/7.  
> Here's how it works — four simple steps:
>
> **Step 01** — A PIR sensor detects the guest entering, up to 5 meters.  
> **Step 02** — The robot drives toward them. It avoids obstacles automatically.  
> **Step 03** — It listens. A MEMS microphone captures the voice clearly.  
> **Step 04** — It answers. Our AI — called **LEA** — responds through the speaker,  
> in the guest's language, in under 2 seconds.
>
> No app. No phone. No friction.  
> **You just talk to the robot.**"

**[Let the robot rotate on screen for a moment.]**

> "It supports over 50 languages, knows every detail of the apartment,  
> and never gets tired."

---

## SLIDE 4 — Technical Architecture *(Youri · ~2 min)*

> **"Let me show you what's inside."**  
> *(gesture toward the cutaway diagram)*
>
> "The brain is an **ESP32-S3** microcontroller — 240MHz, dual-core, built-in WiFi.  
> It's small, cheap, and efficient — no Raspberry Pi needed.
>
> At the top: a **MEMS microphone** captures voice.  
> The **9 WS2812B LEDs** show the robot's status in real time.  
> Green = listening. Blue = thinking.
>
> For movement: two DC motors, controlled by an **L298N driver**.  
> Three **HC-SR04 ultrasonic sensors** handle obstacle avoidance.
>
> Everything runs on a **LiPo 2500mAh battery** — about 4 hours of autonomy.
>
> [Point to architecture diagram]  
> The voice pipeline: microphone → ESP32 → WiFi → cloud.  
> In the cloud: **Whisper** converts speech to text.  
> **LEA** generates the answer.  
> **TTS** sends it back to the speaker."

---

## SLIDE 5–6 — Business Impact *(Luis · ~2 min)*

> **"Now — why does this matter commercially?"**
>
> "There are 15 million short-term rentals in Europe.  
> Property managers often handle 5, 10, even 20 apartments.  
> Every night-time question is a problem — and a risk to their rating.
>
> Atlas Hub costs **€1,500 per apartment** — a one-time hardware cost.  
> Software maintenance — **€12 per month** — is bundled with Atlas Stay.
>
> [Point to cost pie chart]  
> Most of the cost is in electronics and mechanics — components that we source,  
> assemble, and test ourselves.
>
> The return is clear:  
> 82% reduction in host workload.  
> +0.4 stars on average Airbnb rating.  
> On Airbnb, that half-star difference can increase bookings by 20–30%."

---

## CONCLUSION *(Both · ~30 sec)*

**Youri:**
> "To summarise — Atlas Hub is an embedded AI system  
> that solves a very real problem: the 3AM guest experience.  
> Simple hardware. Powerful AI. Zero friction."

**Luis:**
> "It connects directly to our existing Atlas Stay platform,  
> already deployed in Montpellier.  
> Thank you for listening — we're happy to answer your questions."

---

## Q&A — Likely Questions & Prepared Answers *(5 min)*

---

### Technical Questions *(Youri answers)*

**Q: Why ESP32-S3 and not a Raspberry Pi?**
> "The ESP32-S3 costs around €5, boots in under 2 seconds,  
> and uses much less power. Since all heavy processing goes to the cloud via WiFi,  
> we don't need more on-device power."

**Q: How does the robot avoid obstacles?**
> "Three HC-SR04 ultrasonic sensors — front, front-left, front-right.  
> They detect objects up to 4 meters away. The ESP32 adjusts the motor speed  
> to steer around them in real time."

**Q: What if WiFi goes down?**
> "The robot switches to an offline fallback mode.  
> Basic answers — WiFi password, checkout time, emergency contacts —  
> are stored locally on the ESP32's flash memory."

**Q: Battery autonomy?**
> "About 4 hours of active use. In standby — parked and waiting — around 12 hours.  
> We are designing an automatic docking station for recharging."

**Q: How does the head rotation work?**
> "An SG90 servo motor controls the head. When the PIR sensor detects a guest,  
> the head turns toward the detection direction before the robot starts moving."

---

### Business Questions *(Luis answers)*

**Q: Is €1,500 not too expensive?**
> "For a professional property manager with 5+ apartments, it's a one-time investment.  
> If Atlas Hub prevents just 3 bad reviews per year — each worth roughly €500 in lost bookings —  
> it pays for itself in the first year."

**Q: Who are your competitors?**
> "Smart locks and QR code guides — but they require a phone.  
> No current competitor offers a physical, voice-interactive AI presence in the apartment.  
> That's our differentiation."

**Q: How does LEA know the apartment details?**
> "Hosts configure LEA through the Atlas Stay dashboard — WiFi, house rules, local tips.  
> The information is loaded before each guest check-in."

**Q: What about data privacy?**
> "The robot only records when the wake word is detected.  
> Audio is processed in the cloud and immediately deleted.  
> We comply with GDPR — no permanent voice storage."

---

*Atlas Agency · IUT Montpellier-Sète · GEII/ESE · 2026*  
*atlastheone.xyz*
