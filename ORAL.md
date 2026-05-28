# ORAL.md — Atlas Hub · Script Final
## IUT Montpellier-Sète · GEII/ESE · Young Inventor Contest · 2026
### Youri Figuié & Luis Causse · 8–10 min + 5 min Q&A · 04/06/2026

> **Exam context:** You are inventors presenting your machine to the **World Company** jury.
> The jury evaluates: PPT quality, grammar, vocabulary, delivery, and Q&A interaction.
> **No reading — notes are reference only. Make eye contact. Be convincing.**

---

## TIMING OVERVIEW

| Time          | Speaker | Slide              | Topic                         |
|---------------|---------|--------------------|-------------------------------|
| 0:00 – 0:45   | Luis    | 1 — Hero           | Hook & introduction           |
| 0:45 – 2:30   | Luis    | 2 — Problem        | The 3AM problem + charts      |
| 2:30 – 4:45   | Youri   | 3 — Robot          | How Atlas Hub works           |
| 4:45 – 6:15   | Youri   | 4 — Tech           | Inside the robot              |
| 6:15 – 7:00   | Luis    | 5 — Demo           | Live demo walkthrough         |
| 7:00 – 8:30   | Luis    | 6 — Impact         | Business case + pricing + ROI |
| 8:30 – 8:45   | Both    | 7 — Thank You      | Conclusion & call to invest   |
| 8:45 – 13:45  | Both    | —                  | Questions & answers           |

> **Tip:** Speak slowly and clearly. Pause after key numbers — let the jury write them down.
> If you finish early — pause, look at the jury, smile. Do NOT rush.

---

## VOCABULARY QUICK REFERENCE

| Technical      | Business          | Transitions                   |
|----------------|-------------------|-------------------------------|
| embedded system | return on investment | *"As you can see..."*       |
| microcontroller | subscription model | *"This is why..."*          |
| speech-to-text  | property manager   | *"In other words..."*       |
| ultrasonic sensor | short-term rental | *"Let me explain..."*       |
| differential drive | market share    | *"I'd like to point out..."* |
| cloud inference | recurring revenue  | *"To put it simply..."*     |
| obstacle avoidance | profit margin  | *"What this means is..."*   |

---

---

# PART 1 — INTRODUCTION
## SLIDE 1 · Luis · ~45 seconds

**[Stand up straight. Look at the jury. Smile confidently.]**

> "Good morning, World Company."

**[Short pause. Scan the room.]**

> "My name is Luis Causse.
> And I'm here with my associate, Youri Figuié.
> We are the founders of **Atlas Agency** —
> a technology start-up based in Montpellier, France."

**[Pause. Change tone — tell a story now.]**

> "Today, we are here to present our invention:
> **Atlas Hub** — the world's first autonomous AI concierge robot
> for short-term rental apartments."

**[Slow down. Make eye contact with one jury member.]**

> "But before we show you the technology —
> I'd like you to imagine a situation."

> "You arrive at your Airbnb.
> It's 3 in the morning.
> You don't know the WiFi password.
> The heating isn't working.
> And the host — is asleep."

**[Pause. Look at the jury.]**

> "What do you do?
> You wait. You send a message. You hope.
> **That is the problem we are solving.**"

**[Transition gesture to next slide.]**

---

---

# PART 2 — THE PROBLEM
## SLIDE 2 · Luis · ~1 minute 45 seconds

> "Short-term rentals are one of the fastest-growing markets in Europe.
> There are currently over **15 million properties** listed online."

**[Point to the bar chart.]**

> "But there is a serious problem — response time.
>
> When a guest needs help at night,
> the average host takes **47 minutes** to respond.
>
> With a QR code app — maybe 18 minutes.
> Still too slow.
>
> With Atlas Hub — **under 2 seconds.**"

**[Small pause. Let the contrast land.]**

**[Point to the consequence cards below.]**

> "And the consequences are real.
>
> Thirty-eight percent of bad reviews are caused by check-in problems.
> Twenty-four percent — because the host didn't communicate.
>
> And here is something that surprised us:
> sixty-seven percent of guest complaints happen at night."

**[Look at the jury directly.]**

> "One bad review on Airbnb can take weeks to recover from.
> For a property manager with ten apartments —
> that is thousands of euros in lost bookings."

**[Look at Youri. Hand off naturally.]**

> "Youri will now show you our solution."

---

---

# PART 3 — MEET ATLAS HUB
## SLIDE 3 · Youri · ~2 minutes 15 seconds

**[Step forward. Point to the robot video rotating on screen.]**

> "Thank you, Luis.
> So — this is **Atlas Hub**."

**[Pause. Let the jury look at the robot.]**

> "It is a compact wheeled robot that lives inside the apartment —
> always on, always available, day and night.
>
> Let me explain how it works. Four steps."

**[Count with your fingers — more natural than a pointer.]**

> "**Step one** — A PIR motion sensor detects the guest entering the room.
> Range: up to five meters.
>
> **Step two** — The robot drives toward them automatically.
> It avoids chairs, bags, suitcases — any obstacle.
>
> **Step three** — It listens.
> A MEMS microphone captures the voice clearly,
> even in a noisy room.
>
> **Step four** — It answers.
> Our AI system — called **LEA**, Live Experience Agent — generates a personalised response
> in the guest's own language, through the speaker,
> in under two seconds."

**[Pause. Smile.]**

> "No app.
> No phone.
> No friction.
> The guest simply — talks to the robot."

> "LEA speaks over 50 languages.
> It knows every detail about the apartment —
> the WiFi password, the checkout time, local restaurants, emergency contacts.
> And unlike a human host — it never gets tired, and it never gets frustrated."

---

---

# PART 4 — TECHNICAL ARCHITECTURE
## SLIDE 4 · Youri · ~1 minute 30 seconds

**[Point to the component photo on screen.]**

> "Let me show you what is inside Atlas Hub."

> "The brain of the robot is an **ESP32-S3** microcontroller.
> It runs at 240 megahertz, has two processor cores,
> and includes built-in WiFi.
> It costs approximately **five euros** —
> which is why we can keep the hardware price reasonable."

**[Point to the audio components.]**

> "For voice:
> The MEMS microphone captures the guest's question.
> It sends the audio to our cloud server via WiFi.
> In the cloud, **Whisper** converts speech to text.
> **LEA** generates the answer.
> And the speaker plays the response — all in under two seconds."

**[Point to the navigation components.]**

> "For movement:
> Three ultrasonic sensors detect obstacles left, front, and right.
> Two DC motors move the robot.
> A servo motor rotates the head toward the guest
> before the robot starts moving — it looks more natural."

> "The robot runs on a **LiPo 2,500 milliamp-hour battery**.
> Four hours of active use, twelve hours in standby."

**[Look at Luis. Hand off.]**

---

---

# PART 5 — LIVE DEMO
## SLIDE 5 · Luis · ~45 seconds

**[Step forward. Point to the demo interface on screen.]**

> "Now — let me show you Atlas Hub in action."

> "On screen, you can see our demo interface.
> This simulates exactly what happens when a guest speaks to the robot."

**[Point to the voice commands on the left.]**

> "A guest asks: *'What is the WiFi password?'*
> LEA processes the question in the cloud —
> and responds in under two seconds, in the guest's language."

**[Point to the response on the right side of the screen.]**

> "The host configures everything — through our Atlas Stay dashboard.
> One dashboard. One subscription.
> The host never has to be physically present."

**[Look at Luis. Transition naturally.]**

> "And this is not a concept. The AI pipeline is fully functional.
> Let me now show you why this matters for the business."

---

---

# PART 6 — BUSINESS IMPACT
## SLIDE 6 · Luis · ~1 minute 30 seconds

**[Step forward confidently. Point to the 4 stat cards.]**

> "Why should the World Company invest in Atlas Hub?"

> "The European short-term rental market has **15 million properties**.
> Property managers often handle five, ten, even twenty apartments simultaneously.
>
> With Atlas Hub, hosts see an **82%** reduction in night workload
> and an average increase of **0.4 stars** on Airbnb.
>
> On Airbnb — half a star translates to **28% more bookings.**"

**[Point to the ROI block on the left.]**

> "Now — the key question: does it pay off?
>
> One bad review costs a host approximately **five hundred euros**
> in lost future bookings.
>
> If Atlas Hub prevents just **three bad reviews** per year —
> the hardware pays for itself. Completely.
> From year two onwards, the host pays only twelve euros a month."

**[Point to the pricing card on the right.]**

> "One thousand five hundred euros — one time.
> Twelve euros a month — bundled with Atlas Stay,
> our platform that is **already live** in Montpellier today.
>
> Fifteen million properties in Europe.
> **The market is waiting.**"

**[Look at Youri. Both step together for conclusion.]**

---

---

# CONCLUSION
## SLIDE 7 · Both · ~15 seconds

**[Both stand. Video plays automatically. Youri speaks first.]**

**YOURI:**
> "To summarise —
> Atlas Hub is an embedded AI invention
> that solves a very real, very costly problem:
> the 3AM guest experience.
>
> Simple hardware.
> Powerful intelligence.
> Zero friction."

**LUIS:**
> "We believe Atlas Hub is the most commercially viable invention in this room today.
>
> **Thank you for your attention.**
> We are ready for your questions."

**[Both stand still. Smile. Make eye contact with the jury. Wait.]**

---

---

# Q&A — QUESTIONS & ANSWERS
## ~5 minutes · Prepared answers

> **Remember:** Listen to the full question before answering.
> If you don't understand — say: *"Could you please repeat the question?"*
> Keep answers under **40 seconds** each.
> Transitions: *"That's a great question."* / *"I'm glad you asked that."*

---

### TECHNICAL QUESTIONS · Youri answers

---

**Q — Why did you choose the ESP32-S3 and not a Raspberry Pi?**

> "The ESP32-S3 costs around five euros, boots in under two seconds,
> and uses much less power — about ten times less than a Raspberry Pi.
> Since all heavy AI processing happens in the cloud over WiFi,
> we don't need more computing power on the robot itself.
> This keeps the hardware cost low and the battery life long."

---

**Q — How does the robot avoid obstacles?**

> "We use three HC-SR04 ultrasonic sensors — front, front-left, and front-right.
> They detect objects up to four meters away.
> The ESP32 reads the distances ten times per second
> and adjusts the motor speed to steer around obstacles.
> It's a reactive navigation algorithm — simple, fast, and reliable."

---

**Q — What happens if the WiFi goes down?**

> "The robot switches to an offline fallback mode automatically.
> Basic information — the WiFi password, checkout time, emergency contacts —
> is stored directly on the ESP32's flash memory.
> So Atlas Hub continues to work, even without internet access."

---

**Q — How long does the battery last?**

> "About four hours of active use — when the robot is moving and speaking.
> In standby mode — parked and waiting — around twelve hours.
> We are also designing an automatic docking station
> so the robot recharges itself when not in use."

---

**Q — How does the head rotation work?**

> "An SG90 servo motor controls the head rotation.
> When the PIR sensor detects a guest,
> the head turns toward the detection zone first —
> before the robot starts moving.
> This makes the interaction feel more natural, more human."

---

**Q — What programming language did you use?**

> "The robot firmware is written in C++ with the Arduino framework for ESP32.
> The cloud AI backend — LEA — runs on Python with FastAPI.
> The Atlas Stay dashboard is a web application built with React and TypeScript."

---

### BUSINESS QUESTIONS · Luis answers

---

**Q — Is one thousand five hundred euros not too expensive?**

> "For an individual traveller — yes, it might seem expensive.
> But our customers are professional property managers
> who handle five, ten, or more apartments.
> For them, it is a one-time investment per apartment.
> If Atlas Hub prevents just three bad reviews per year —
> each worth five hundred euros in lost bookings —
> it pays for itself in the first year."

---

**Q — Who are your main competitors?**

> "Our main competitors today are smart locks and QR code information guides.
> But these solutions still require the guest to use their phone.
> No competitor currently offers a physical, voice-interactive AI presence
> inside the apartment itself.
> That is our key differentiator."

---

**Q — How does LEA know the details of each apartment?**

> "Hosts configure LEA through the Atlas Stay dashboard —
> it takes about ten minutes.
> They enter the WiFi password, house rules, local restaurant recommendations,
> emergency contacts — anything they want LEA to know.
> This information is automatically loaded before each guest check-in."

---

**Q — What about data privacy? Is it GDPR compliant?**

> "Yes, Atlas Hub is fully GDPR compliant.
> The robot only records audio after the wake-word is detected.
> The audio is processed in our cloud and **immediately deleted** after the response.
> No voice data is stored. No personal information is kept."

---

**Q — Is this a real product or just a concept?**

> "It is an engineering invention — but it is based on a real, working platform.
> Atlas Stay is already deployed in Montpellier today.
> Atlas Hub is the next hardware step.
> The electronics architecture is fully designed and functional.
> We are ready to move to the prototype phase."

---

**Q — What is LEA exactly?**

> "LEA stands for Live Experience Agent.
> It is our AI layer — hosted in the cloud — that processes the guest's voice,
> understands the question using Whisper for speech recognition,
> generates a personalised answer using a large language model,
> and sends the audio response back to the robot.
> The guest never sees any of that — for them, it just works."

---

---

## EMERGENCY PHRASES

If you lose your train of thought:
> *"Let me rephrase that..."*
> *"What I mean is..."*
> *"In other words..."*

If you don't understand a question:
> *"I'm sorry, could you please repeat the question?"*
> *"Could you be more specific?"*

If the answer is beyond the project scope:
> *"That is a great question — it is something we plan to explore in the next phase."*

To gain time before answering:
> *"That's a very interesting point..."*
> *"Good question — let me think about that for a second..."*

---

---

## KEY NUMBERS TO MEMORISE

| Number     | What it means                              |
|------------|--------------------------------------------|
| 47 min     | Average host response time at night        |
| < 2 sec    | Atlas Hub response time                    |
| 38%        | Bad reviews caused by check-in problems    |
| 67%        | Complaints between 10PM and 8AM            |
| +0.4★      | Average Airbnb rating boost with Atlas Hub |
| +28%       | More bookings per half-star improvement    |
| ↓82%       | Host workload reduction at night           |
| 15M        | Short-term rentals in Europe               |
| €500       | Value of one bad review (lost bookings)    |
| €1 500     | Hardware cost — covered by 3 reviews saved |
| €12/month  | Monthly software subscription              |
| 50+        | Languages LEA speaks                       |
| 5€         | Cost of the ESP32-S3 microcontroller       |
