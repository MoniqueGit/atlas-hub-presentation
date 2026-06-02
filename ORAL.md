# ORAL.md — Atlas Hub · Presentation Script
## IUT Montpellier-Sète · GEII/ESE · Young Inventor Contest · 2026
### Youri Figuié & Luis Causse · 10 min + 5 min Q&A · 04/06/2026

> **Context:** You are inventors presenting Atlas Hub to the **World Company** jury.
> The jury evaluates: slide quality, grammar, vocabulary, delivery, and Q&A.
> **Do not read — use notes as a reference only. Look at the jury. Speak naturally.**

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

> **Tip:** Speak slowly and clearly. Pause after big numbers — let the jury write them down.
> If you finish early, smile and wait. Do not rush to fill the silence.

---

## VOCABULARY QUICK REFERENCE

| Technical           | Business             | Transitions                    |
|---------------------|----------------------|--------------------------------|
| embedded system     | return on investment | *"As you can see on the slide..."* |
| microcontroller     | subscription model   | *"This is why..."*             |
| speech-to-text      | property manager     | *"In other words..."*          |
| ultrasonic sensor   | short-term rental    | *"What this means is..."*      |
| differential drive  | market share         | *"Let me show you..."*         |
| cloud processing    | recurring revenue    | *"The result is clear..."*     |
| obstacle avoidance  | profit margin        | *"To put it simply..."*        |

---

# SLIDE 1 — INTRODUCTION
## Luis · ~45 seconds

**[Stand up straight. Look at the jury. Smile confidently.]**

> "Good morning, everyone."

**[Short pause. Scan the room.]**

> "My name is Luis Causse, and I'm here with my partner Youri Figuié.
> We are second-year GEII students, specialising in embedded systems at IUT Montpellier-Sète.
> Today, we are proud to present our invention: **Atlas Hub**."

**[Change tone — slower, more dramatic. Tell the story.]**

> "But before we show you the technology, I'd like you to imagine a situation.
> You arrive at your Airbnb apartment. It's 3 in the morning.
> You don't know the WiFi password, the heating isn't working,
> and the host — is completely asleep."

**[Pause. Make eye contact with one jury member.]**

> "What do you do? You wait. You send a message. You hope for the best.
> And that, ladies and gentlemen, is exactly the problem we are solving."

---

# SLIDE 2 — THE PROBLEM
## Luis · ~1 min 30 sec

> "The short-term rental market is one of the fastest-growing markets in Europe,
> with more than **15 million properties** listed online today."

**[Point to the bar chart.]**

> "But there is a very serious problem with guest experience at night.
> When a guest needs help, the average host takes **47 minutes** to respond.
> With a QR code app, it might be 18 minutes — but that is still far too long.
> With Atlas Hub, the answer comes in **under 2 seconds.**"

**[Pause. Let the contrast land.]**

**[Point to the consequence cards below.]**

> "And the consequences are real. As you can see on the slide,
> 38% of bad reviews are directly caused by check-in problems,
> and 67% of guest complaints happen between 10PM and 8AM.
> One single bad review on Airbnb can cost a host around **500 euros in lost bookings** —
> and that's a problem that our product solves completely."

**[Look at Youri. Hand over naturally.]**

> "Youri will now show you how Atlas Hub works."

---

# SLIDE 3 — MEET ATLAS HUB
## Youri · ~1 min 30 sec

**[Step forward. Point to the robot rotating on screen.]**

> "Thank you, Luis. So — this is **Atlas Hub.**"

**[Pause. Let the jury look at it for a moment.]**

> "It is a compact wheeled robot that lives inside the apartment,
> and it is available 24 hours a day, 7 days a week — no exceptions.
> Let me explain how it works in four simple steps."

**[Count on your fingers — more natural than a pointer.]**

> "**Step one** — a PIR motion sensor detects when a guest enters the room,
> with a range of up to 5 meters.
>
> **Step two** — the robot drives toward the guest automatically,
> and it avoids any obstacle in its way — chairs, bags, suitcases.
>
> **Step three** — it listens. A high-quality MEMS microphone
> captures the guest's voice clearly, even in a noisy environment.
>
> **Step four** — it answers. Our AI system, called **LEA**,
> generates a personalised response in the guest's own language
> and plays it through the speaker — all in under 2 seconds."

**[Smile. Let it breathe.]**

> "There is no app to download, no phone to unlock, and no waiting.
> The guest simply talks to the robot, and LEA speaks back.
> It supports over 50 languages and knows every detail about the apartment —
> and unlike a human host, it never gets tired."

---

# SLIDE 4 — COMPONENTS
## Youri · ~1 min 15 sec

**[Point to the components photo on the left side of the screen.]**

> "Let me show you what is actually inside Atlas Hub."

> "The brain of the robot is an **ESP32-S3** microcontroller,
> running at 240 MHz with two processor cores and built-in WiFi.
> It costs approximately **5 euros**, which is why we can keep the hardware price reasonable."

**[Point to each item on the component list.]**

> "For voice capture, we use a MEMS microphone that filters out background noise
> and sends the audio to our cloud server over WiFi.
> For navigation, three HC-SR04 ultrasonic sensors handle obstacle detection
> with a range of up to 4 meters, and two DC motors drive the robot forward.
> A small SG90 servo motor rotates the head toward the guest before the robot starts moving —
> which makes the whole interaction feel much more natural.
> Finally, everything is powered by a 2,500 mAh LiPo battery,
> giving about **4 hours of active use** and 12 hours in standby."

---

# SLIDE 5 — THE PIPELINE
## Youri · ~1 min

**[Point to the diagram on screen.]**

> "Now, let me walk you through the full system pipeline — from the guest's voice to the answer."

**[Point to the top row — Voice pipeline.]**

> "When the guest speaks, the MEMS microphone captures the audio
> and the ESP32 sends it to our cloud server over WiFi.
> In the cloud, **Whisper** — an AI tool from OpenAI — converts the speech into text.
> Then **LEA** generates the right answer, and the text is converted back to audio
> by our text-to-speech engine, which plays through the speaker.
> The entire process takes **under 2 seconds.**"

**[Point to the bottom row — Navigation pipeline.]**

> "At the same time, the navigation system is running in parallel.
> The PIR sensor detects the guest, the ultrasonic sensors check for obstacles,
> and the ESP32 sends movement commands to the L298N motor driver,
> which controls the two DC motors. The robot moves toward the guest safely and automatically."

**[Look at Luis. Hand over.]**

> "Luis will now show you what this looks like in practice."

---

# SLIDE 6 — LIVE DEMO
## Luis · ~45 sec

**[Step forward. Point to the demo interface on screen.]**

> "Now let me show you Atlas Hub in action."

> "On the screen, you can see our demo interface,
> which simulates exactly what happens when a guest speaks to the robot."

**[Point to the voice commands on the left side.]**

> "For example, a guest says: *'What is the WiFi password?'*
> LEA processes the question in the cloud and responds in under 2 seconds,
> in the guest's own language — with the exact information they need."

> "The host sets everything up in advance through the **Atlas Stay dashboard** —
> one simple platform, one subscription, and no need to be physically present at night.
> The robot handles everything on its own."

---

# SLIDE 7 — BUSINESS IMPACT
## Luis · ~1 min 30 sec

**[Step forward confidently. Point to the 4 stat cards.]**

> "So — why should the World Company invest in Atlas Hub?"

> "There are currently **15 million** short-term rentals in Europe,
> and property managers often handle 5, 10, even 20 apartments at the same time.
> With Atlas Hub, hosts see an **82% reduction** in their workload at night,
> and an average increase of **0.4 stars** on their Airbnb rating.
> On Airbnb, that half-star difference translates directly into **28% more bookings** —
> which is a significant increase in revenue."

**[Point to the ROI block on the left.]**

> "Now, the key question: does it pay off?
> One bad review costs a host approximately **500 euros** in lost future bookings.
> If Atlas Hub prevents just **3 bad reviews per year**,
> the hardware has already paid for itself — completely, in year one.
> From year two onwards, the host pays only **12 euros per month**, which is pure profit."

**[Point to the pricing card on the right.]**

> "The price is **1,500 euros** as a one-time hardware cost,
> plus 12 euros per month bundled with Atlas Stay Premium —
> our platform that is already live in Montpellier today.
> With 15 million eligible properties across Europe, **the market is ready.**"

**[Look at Youri. Both step together for the conclusion.]**

---

# SLIDE 8 — THANK YOU
## Both · ~15 sec

**[Both stand. Video plays automatically. Youri speaks first.]**

**YOURI:**
> "To summarise — Atlas Hub is an embedded AI invention that solves
> a very real and very costly problem: the 3AM guest experience.
> Simple hardware, powerful intelligence, and zero friction for the guest."

**LUIS:**
> "It connects directly to Atlas Stay, our platform that is already deployed in Montpellier.
> We believe Atlas Hub is ready for the next step — and so are we.
> Thank you very much for your attention, and we are happy to answer your questions."

**[Both stand still. Smile. Make eye contact with the jury. Wait calmly.]**

---

# Q&A — QUESTIONS & ANSWERS
## ~5 minutes

> **Remember:** Listen to the full question before you answer.
> If you don't understand: *"Could you please repeat the question?"*
> Keep answers under 40 seconds. Begin with: *"That's a good question."*

---

### TECHNICAL QUESTIONS · Youri answers

**Q — Why did you use the ESP32-S3 and not a Raspberry Pi?**
> "The ESP32-S3 costs about 5 euros and uses much less power than a Raspberry Pi.
> Since all the heavy AI processing happens in the cloud over WiFi,
> we don't need more computing power on the robot itself.
> This keeps the hardware cost low and the battery life long."

**Q — How does the robot avoid obstacles?**
> "We use three HC-SR04 ultrasonic sensors placed at the front, front-left, and front-right.
> They detect objects up to 4 meters away, and the ESP32 reads the distances
> ten times per second to adjust the motor speed and steer around any obstacle."

**Q — What if the WiFi goes down?**
> "The robot automatically switches to an offline fallback mode.
> Basic information — the WiFi password, checkout time, and emergency contacts —
> is stored directly on the ESP32's flash memory,
> so Atlas Hub continues to work even without an internet connection."

**Q — How long does the battery last?**
> "About 4 hours of active use, when the robot is moving and speaking.
> In standby mode — parked and waiting — it lasts around 12 hours.
> We are also designing an automatic docking station so the robot recharges itself when it's not in use."

**Q — How does the head rotation work?**
> "An SG90 servo motor controls the head rotation.
> When the PIR sensor detects a guest, the head turns toward the detection zone first,
> before the robot starts moving forward. This makes the interaction feel more natural and human."

---

### BUSINESS QUESTIONS · Luis answers

**Q — Is 1,500 euros not too expensive?**
> "For an individual traveller, it might seem expensive — but that is not our target customer.
> Our customers are professional property managers who handle 5 to 20 apartments at a time.
> For them, it is a one-time investment per apartment, and if Atlas Hub prevents just
> 3 bad reviews per year — each worth 500 euros in lost bookings —
> it pays for itself completely within the first year."

**Q — Who are your competitors?**
> "Our main competitors today are smart locks and QR code information guides.
> However, these solutions still require the guest to use their smartphone.
> No competitor currently offers a physical, voice-interactive AI presence inside the apartment itself,
> and that is our key difference."

**Q — How does LEA know the apartment details?**
> "The host fills in the Atlas Stay dashboard, which takes about 10 minutes.
> They enter the WiFi password, house rules, local restaurant recommendations,
> and emergency contacts — anything they want LEA to know.
> This information is automatically loaded before each guest checks in."

**Q — What about data privacy and GDPR?**
> "Atlas Hub is fully GDPR compliant. The robot only records audio
> after the guest speaks to it, and the audio is processed in the cloud
> and deleted immediately after the response is generated.
> No voice data is stored, and no personal information is kept."

**Q — Is this a real product or just a concept?**
> "Atlas Stay is already deployed and working in Montpellier today, so the software platform is real.
> Atlas Hub is the next hardware step, and the full electronics architecture
> is designed and functional. We are ready to move to the prototype phase."

---

## EMERGENCY PHRASES

If you lose your train of thought:
> *"Let me rephrase that..."* / *"What I mean is..."* / *"In other words..."*

If you don't understand a question:
> *"I'm sorry, could you please repeat the question?"*

If the question is outside the project scope:
> *"That's a great question — it is something we plan to explore in the next phase of development."*

To gain time before answering:
> *"That's a very interesting point..."* / *"Good question — let me think about that for a second."*

---

## KEY NUMBERS TO MEMORISE

| Number     | What it means                               |
|------------|---------------------------------------------|
| 47 min     | Average host response time at night         |
| < 2 sec    | Atlas Hub response time                     |
| 38%        | Bad reviews caused by check-in problems     |
| 67%        | Complaints between 10PM and 8AM             |
| +0.4★      | Average Airbnb rating boost with Atlas Hub  |
| +28%       | More bookings per half-star improvement     |
| ↓82%       | Host workload reduction at night            |
| 15M        | Short-term rentals in Europe                |
| €500       | Cost of one bad review (lost bookings)      |
| €1,500     | Hardware cost — covered by 3 reviews saved  |
| €12/month  | Monthly software subscription               |
| 50+        | Languages LEA speaks                        |
| €5         | Cost of the ESP32-S3 chip                   |
