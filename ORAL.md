# ORAL.md — Atlas Hub · Presentation Script
## IUT Montpellier-Sète · GEII/ESE · Young Inventor Contest · 2026
### Youri Figuié & Luis Causse · 10 min + 5 min Q&A · 04/06/2026

> **Context:** You are inventors presenting Atlas Hub to the **World Company** jury.
> The jury looks at: slide quality, grammar, vocabulary, delivery, and Q&A.
> **Do not read — use notes as a guide only. Look at the jury. Speak clearly.**

---

## TIMING OVERVIEW

| Time           | Speaker | Slide               | Topic                        |
|----------------|---------|---------------------|------------------------------|
| 0:00 – 0:45    | Luis    | 1 — Hero            | Hook + introduction          |
| 0:45 – 2:15    | Luis    | 2 — Problem         | The 3AM problem + data       |
| 2:15 – 3:45    | Youri   | 3 — Robot           | How Atlas Hub works          |
| 3:45 – 5:00    | Youri   | 4 — Components      | What's inside                |
| 5:00 – 6:00    | Youri   | 5 — Pipeline        | The full system              |
| 6:00 – 6:45    | Luis    | 6 — Demo            | Live demo walkthrough        |
| 6:45 – 8:15    | Luis    | 7 — Impact          | Business case + pricing      |
| 8:15 – 8:30    | Both    | 8 — Thank You       | Conclusion                   |
| 8:30 – 13:30   | Both    | —                   | Questions & answers          |

> **Tip:** Speak slowly. Pause after big numbers — let the jury write them down.
> If you finish early, smile and wait. Do not rush.

---

## VOCABULARY QUICK REFERENCE

| Technical           | Business             | Transitions               |
|---------------------|----------------------|---------------------------|
| embedded system     | return on investment | *"As you can see..."*     |
| microcontroller     | subscription model   | *"This is why..."*        |
| speech-to-text      | property manager     | *"In other words..."*     |
| ultrasonic sensor   | short-term rental    | *"Let me explain..."*     |
| differential drive  | market share         | *"Look at this..."*       |
| cloud processing    | recurring revenue    | *"The result is..."*      |
| obstacle avoidance  | profit margin        | *"To put it simply..."*   |

---

# SLIDE 1 — INTRODUCTION
## Luis · ~45 seconds

**[Stand up. Look at the jury. Smile.]**

> "Good morning."

**[Short pause.]**

> "My name is Luis Causse.
> I'm here with Youri Figuié.
> We are second-year GEII students at IUT Montpellier-Sète.
> Today, we present **Atlas Hub** — our invention."

**[Change tone. Tell a story.]**

> "But first — imagine this.
> You arrive at your Airbnb. It's 3 in the morning.
> You don't know the WiFi password.
> The heating doesn't work.
> And the host is asleep."

**[Pause. Look at the jury.]**

> "What do you do?
> You wait. You send a message. You hope.
> **That is the problem we are solving.**"

---

# SLIDE 2 — THE PROBLEM
## Luis · ~1 min 30 sec

> "Short-term rentals are growing fast in Europe.
> There are more than **15 million properties** on Airbnb today."

**[Point to the bar chart.]**

> "But there is a big problem — response time at night.
>
> When a guest needs help, the average host takes **47 minutes** to answer.
> A QR code app? Maybe 18 minutes. Still too slow.
> With Atlas Hub — **under 2 seconds.**"

**[Pause. Let the numbers land.]**

**[Point to the consequence cards.]**

> "And the cost is real.
> 38% of bad reviews come from check-in problems.
> 67% of guest complaints happen at night.
>
> One bad review on Airbnb can cost a host **500 euros in lost bookings.**
> That's a serious problem."

**[Look at Youri. Hand over.]**

> "Youri will now show you our solution."

---

# SLIDE 3 — MEET ATLAS HUB
## Youri · ~1 min 30 sec

**[Point to the robot video on screen.]**

> "Thank you, Luis.
> So — this is **Atlas Hub.**"

**[Pause. Let the jury look at it.]**

> "It's a small robot that lives inside the apartment.
> It's always on — 24 hours a day, 7 days a week.
>
> Here's how it works. Four steps."

**[Count on your fingers.]**

> "**Step one** — A motion sensor detects the guest. Range: 5 meters.
>
> **Step two** — The robot moves toward them automatically.
> It avoids chairs, bags, everything in its way.
>
> **Step three** — It listens. A microphone captures the voice clearly.
>
> **Step four** — It answers.
> Our AI — called **LEA** — speaks back in the guest's language
> in under 2 seconds."

**[Smile.]**

> "No app. No phone. No waiting.
> The guest just talks to the robot.
> LEA knows over 50 languages — and it never gets tired."

---

# SLIDE 4 — COMPONENTS
## Youri · ~1 min 15 sec

**[Point to the photo on screen.]**

> "Let me show you what's inside."

> "The brain is an **ESP32-S3** microcontroller.
> It runs at 240 MHz, has two processor cores, and built-in WiFi.
> It costs about **5 euros** — which keeps our hardware price low."

**[Point to the list.]**

> "The MEMS microphone captures the guest's voice
> and sends it to our cloud server via WiFi.
>
> Three ultrasonic sensors detect obstacles.
> Two motors move the robot forward.
> A servo motor turns the head toward the guest — it looks more natural.
>
> Everything runs on a **2,500 mAh battery** — about 4 hours of use."

---

# SLIDE 5 — THE PIPELINE
## Youri · ~1 min

**[Point to the diagram on screen.]**

> "Now let me show you the full system — step by step."

**[Point to the top row.]**

> "When the guest speaks:
> The microphone captures the voice.
> The ESP32 sends it to the cloud over WiFi.
> **Whisper** converts speech to text.
> **LEA** generates the answer.
> The speaker plays it back. All in **under 2 seconds.**"

**[Point to the bottom row.]**

> "For movement:
> The PIR sensor detects the guest.
> The ultrasonic sensors check for obstacles.
> The ESP32 controls the motors through the L298N driver.
> The robot moves — safely and automatically."

**[Look at Luis. Hand over.]**

> "Luis will now show you the demo."

---

# SLIDE 6 — LIVE DEMO
## Luis · ~45 sec

**[Point to the demo interface on screen.]**

> "Now — let's see Atlas Hub in action."

> "On screen, you can see our demo interface.
> This is exactly what happens when a guest talks to the robot."

**[Point to the voice commands on the left.]**

> "A guest asks: 'What is the WiFi password?'
> LEA processes the question in the cloud —
> and answers in under 2 seconds, in the guest's own language."

> "The host sets everything up in the **Atlas Stay dashboard.**
> One platform. One subscription.
> The host never needs to be there at night."

---

# SLIDE 7 — BUSINESS IMPACT
## Luis · ~1 min 30 sec

**[Point to the 4 stat cards.]**

> "Why should you invest in Atlas Hub?"

> "There are **15 million** short-term rentals in Europe.
> With Atlas Hub, hosts get:
> 82% less work at night.
> Plus 0.4 stars on their Airbnb rating.
>
> On Airbnb, that half-star means **28% more bookings.**"

**[Point to the ROI block.]**

> "Does it pay off?
> One bad review costs about **500 euros** in lost bookings.
> If Atlas Hub stops just **3 bad reviews per year** —
> the hardware pays for itself. Completely."

**[Point to the pricing card.]**

> "The price:
> **1,500 euros one time** for the hardware.
> **12 euros per month** — included in Atlas Stay Premium.
>
> 15 million properties in Europe.
> **The market is ready.**"

**[Look at Youri. Both step forward.]**

---

# SLIDE 8 — THANK YOU
## Both · ~15 sec

**[Both stand. Video plays.]**

**YOURI:**
> "To summarise —
> Atlas Hub is an embedded AI robot
> that solves a real problem: the 3AM guest experience.
> Simple hardware. Powerful AI. Zero friction."

**LUIS:**
> "Atlas Stay is already live in Montpellier.
> Atlas Hub is the next step.
> Thank you for listening — we are ready for your questions."

**[Both stand still. Smile. Look at the jury. Wait.]**

---

# Q&A — QUESTIONS & ANSWERS
## ~5 minutes

> **Remember:** Listen to the full question before you answer.
> If you don't understand: *"Could you please repeat the question?"*
> Keep answers under 40 seconds each.
> Start with: *"That's a good question."* or *"I'm glad you asked."*

---

### TECHNICAL QUESTIONS · Youri answers

**Q — Why did you use the ESP32-S3 and not a Raspberry Pi?**
> "The ESP32-S3 costs about 5 euros and uses much less power.
> All the heavy AI processing happens in the cloud, not on the robot.
> So we don't need more power on the device.
> This keeps the battery life long and the cost low."

**Q — How does the robot avoid obstacles?**
> "We use three ultrasonic sensors — front, left, and right.
> They detect objects up to 4 meters away.
> The ESP32 reads the distances and adjusts the motors to go around them."

**Q — What if the WiFi goes down?**
> "The robot switches to offline mode automatically.
> Basic answers — WiFi password, checkout time, emergency contacts —
> are stored on the ESP32 itself.
> So Atlas Hub still works without internet."

**Q — How long does the battery last?**
> "About 4 hours of active use.
> In standby mode — parked and waiting — around 12 hours.
> We are also designing a docking station so the robot recharges itself."

**Q — How does the head rotation work?**
> "An SG90 servo motor controls the head.
> When the sensor detects a guest, the head turns toward them first.
> Then the robot starts moving. It looks more natural that way."

---

### BUSINESS QUESTIONS · Luis answers

**Q — Is 1,500 euros not too expensive?**
> "For a single traveller — maybe.
> But our customers are property managers with 5 to 20 apartments.
> For them, it's a one-time investment per apartment.
> If Atlas Hub stops just 3 bad reviews per year — each worth 500 euros —
> it pays for itself in the first year."

**Q — Who are your competitors?**
> "Our main competitors are smart locks and QR code guides.
> But they all need a phone.
> No competitor today offers a physical AI robot that talks to the guest.
> That is our main difference."

**Q — How does LEA know the apartment details?**
> "The host fills in the Atlas Stay dashboard — WiFi, house rules, local tips.
> It takes about 10 minutes.
> This information is loaded into LEA before each check-in."

**Q — What about data privacy?**
> "The robot only records audio when the guest speaks to it.
> The audio is deleted right after the answer.
> No voice data is kept. We follow GDPR rules."

**Q — Is this a real product or just a concept?**
> "Atlas Stay is already working in Montpellier today.
> Atlas Hub is the next hardware step.
> The electronics are fully designed and working.
> We are ready to build the first real prototype."

---

## EMERGENCY PHRASES

If you lose your train of thought:
> *"Let me rephrase that..."*
> *"What I mean is..."*
> *"In other words..."*

If you don't understand a question:
> *"I'm sorry — could you repeat the question please?"*

If the question is outside the project:
> *"That's a great question — it's something we plan to work on next."*

To buy time before answering:
> *"Good question — let me think for a second..."*

---

## KEY NUMBERS TO MEMORISE

| Number     | What it means                               |
|------------|---------------------------------------------|
| 47 min     | Average host response time at night         |
| < 2 sec    | Atlas Hub response time                     |
| 38%        | Bad reviews caused by check-in problems     |
| 67%        | Complaints between 10PM and 8AM             |
| +0.4★      | Average Airbnb rating boost                 |
| +28%       | More bookings per half-star improvement     |
| ↓82%       | Host workload reduction at night            |
| 15M        | Short-term rentals in Europe                |
| €500       | Cost of one bad review (lost bookings)      |
| €1,500     | Hardware cost — covered by 3 reviews saved  |
| €12/month  | Monthly software subscription               |
| 50+        | Languages LEA speaks                        |
| €5         | Cost of the ESP32-S3 chip                   |
