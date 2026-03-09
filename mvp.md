# LMS Platform — MVP Specification

## Scope

This document defines the Minimum Viable Product for the LMS platform. It covers the learner-facing app/web experience, authentication flows, payment integration, and the admin dashboard. The MVP follows the exact scope and flow provided in the BRD draft.

---

## Development & Pricing

### Project Overview

This is an **enterprise-level Learning Management System** built to serve medical professionals and educational institutions. The scope is comprehensive, covering responsive web, mobile native apps (iOS/Android), secure payment processing, and a robust admin dashboard. While the initial investment is significant, the ROI is assured through:

- **High-margin subscription model** — recurring monthly revenue with multiple tiers
- **Scalable infrastructure** — built on serverless and cloud-native tech (zero ops overhead)
- **Low customer acquisition cost** — direct institutional partnerships reduce marketing spend
- **Minimal churn risk** — mission-critical educational platform with high stickiness

### Development Investment

**Total Project Cost: ₱300,000 – ₱350,000** 

This covers **full development, deployment, and 3 months of post-launch support**.

#### Ownership & Revenue Share

- **Developer Equity:** 15% ownership stake in the platform
- **Developer Ongoing Revenue:** 15% monthly from all subscription revenue for maintenance, support, and feature upgrades (no additional development costs for updates)

**Example:** If the platform generates ₱100,000/month in subscription revenue:
- Developer receives: ₱15,000/month perpetually (for maintenance + future upgrades + feature development)
- Client retains: ₱85,000/month as net profit

### Project Timeline & Deliverables

#### **Phase 1: Web & Admin Dashboard** (Weeks 1–4)

**⚠️ PAYMENT REQUIRED FIRST:** 30% down payment (₱90,000 – ₱105,000) must be received and cleared before development begins.

**Deliverable:** Full-featured web platform + admin dashboard

- Learner authentication (login, signup, forgot password)
- Free simulation experience
- Subscription flow integration with PayMongo
- Learner profile with payment history
- Admin dashboard (all 5 sections: Dashboard, Subscribers, Unsubscribers, Modules, Payments)
- Database schema, API endpoints, security hardening
- **Delivery:** End of Month 1 (upon receiving down payment)

**Payment Milestone 1:** 30% down payment (₱90,000 – ₱105,000)
- **Due:** Before development kickoff
- **Condition:** Development starts only after payment clears

---

#### **Phase 2: Mobile Apps (iOS + Android)** (Weeks 5–8)
**Deliverable:** React Native iOS and Android apps with feature parity to web

- React Native cross-platform development (single codebase for iOS + Android)
- Offline capability for course content
- Push notifications for learning reminders
- One-time purchase & auto-renew subscription support
- Apple App Store & Google Play Store app submission prep
- **Delivery:** End of Month 2 or earlier

**Payment Milestone 2:** 35% of remaining balance (₱73,500 – ₱85,750)

---

#### **Phase 3: QA, Stress Testing & Security Hardening** (Weeks 9–10)
**Deliverable:** Production-ready, security-audited platform

- End-to-end testing across all devices and browsers
- Load testing (1,000+ concurrent users)
- Security audit (OWASP Top 10, PCI-DSS compliance for payments)
- Penetration testing by third-party security firm (optional add-on)
- Bug fixes and performance optimization
- **Delivery:** 1–2 weeks post-Phase 2

**Payment Milestone 3:** 20% of remaining balance (₱42,000 – ₱48,997)

---

#### **Phase 4: App Store Deployment & Launch** (Weeks 11–16)
**Deliverable:** Live on web, App Store, and Google Play

- Apple App Store review (1–3 weeks typical)
- Google Play Store review (1 week typical)
- Bug fixes post-review
- Production support & monitoring
- Learner onboarding & customer success materials
- **Delivery:** Ongoing; expected live within 2–3 weeks of submission

**Payment Milestone 4:** Final 15% (₱45,000 – ₱52,500)

### Payment Terms & Schedule

**⚠️ CRITICAL:** Down payment of **30% must be received and cleared BEFORE development begins**. No work will commence until payment is confirmed.

#### Payment Milestones

| Milestone | Deliverable | Percentage | Amount (₱) | Payment Timing |
|-----------|-------------|------------|-----------|----------------|
| **Down Payment** | Project kickoff + design approval | 30% | 90,000 – 105,000 | **BEFORE Phase 1 starts** |
| **Phase 1 Complete (Week 4)** | Web + Admin dashboard live | 35% | 105,000 – 122,500 | Upon Phase 1 delivery |
| **Phase 2 Complete (Week 8)** | iOS + Android apps ready | 20% | 60,000 – 70,000 | Upon Phase 2 delivery |
| **Phase 3 & 4 Complete (Week 16)** | Live on App Store + Play Store | 15% | 45,000 – 52,500 | Upon final launch |
| **TOTAL** | Full platform live, production-ready | 100% | 300,000 – 350,000 | — |

**Payment Method:** Bank transfer only
**Invoice Terms:** 30% down payment upfront, remaining 70% split across phase milestones

### Developer Ongoing Revenue & Support (15% Monthly)

After launch, the developer receives 15% of all monthly subscription revenue in perpetuity, which covers **unlimited**:

- Bug fixes and hotfixes
- Performance optimization
- Security patches and updates
- New feature development (within reason)
- Infrastructure scaling
- Third-party service integrations (e.g., new payment gateways)
- Analytics dashboards and reporting
- 24/7 monitoring and uptime management

**No additional development costs for the client.** The 15% developer commission covers everything.

### Why This Pricing is Fair

| Factor | Justification |
|--------|---------------|
| **Complexity** | Enterprise architecture (microservices-ready, scalable, secure) |
| **Timeline** | 4 months from contract to live (aggressive but achievable) |
| **Team** | Senior full-stack engineer + junior dev (cost-optimized) |
| **Tech Stack** | Modern, maintainable, zero vendor lock-in |
| **Support** | 3 years of maintenance + upgrades included in 15% |
| **ROI** | Breakeven within 6–12 months depending on marketing |

### Success Metrics & Revenue Projections

- **Month 1–3:** Onboard 100–200 learners, validate product-market fit
- **Month 6:** Reach ₱50,000+/month in recurring revenue
  - Developer receives: ₱7,500/month (15%)
  - Client retains: ₱42,500/month (85%)
- **Year 1:** Scale to ₱200,000+/month recurring
  - Developer receives: ₱30,000/month (15%)
  - Client retains: ₱170,000/month (85%)
- **Year 3:** Platform self-sustainable; developer overhead reduces to 5 hours/week
  - Developer receives: ₱45,000–75,000/month (15% of ₱300k–500k MRR)
  - Client retains: ₱255,000–425,000/month (85%)

---

## External Services

### Payment

- **Paymongo** — <https://www.paymongo.com/pricing>
- Supported methods: GCash, Maya, Credit/Debit

### Cloud Services

- **NorthFlank** (Pay as you go)
  - Database backup
  - Scale as you go

### Tech Stack

- Next.js (Free)
- Stateless backend (Free)
- MongoDB (Free)
- Redis (Free)

### Video Hosting

- TBA (For upgrade)

### Domain

- Namecheap (Yearly renew — depends on domain selected)

### App Store / Play Store

- Apple App Store (iOS): $99/year ≈ PHP 5,500–5,700/year
- Google Play Store (Android): $25 one-time ≈ PHP 1,400–1,500

---

## Work Breakdown Sheet

### 1.0 Re-usable OTP Flow

1. System validates the OTP.
2. If valid → show new password inputs (requires a temporary token).
   - New password
   - Confirm new password
   - System sends the newly created password.
     - If success → proceed to next().
     - If failed → alert and retry.
3. If not valid → apply rate limit.
   - Block brute-force attempts.
   - Allowed 3 wrong OTP attempts.
   - After 3rd attempt → invalidate the OTP, temporarily block the IP.
   - Wait 5 minutes before requesting a new OTP.

---

### Login

1. User inputs email address.
2. User inputs password (can show/hide password).
3. User clicks Login.
   - System validates the login payload via Zod.
   - If success → redirect to homepage.
   - If failed → alert and retry.
4. Has Forgot Password and Sign Up links.

---

### Forgot Password

1. User inputs email address.
   - System generates OTP and sends via email.
   - OTP expiration: 5 minutes.
2. User inputs OTP → apply **1.0 OTP Flow**.
3. If user does not input OTP → redirect to login after \_\_\_ minutes.

---

### Sign Up

1. By default: Email + Password.
2. User inputs email → system validates via OTP.
3. User inputs OTP → apply **1.0 OTP Flow**.
   - If success → show password inputs.
4. User inputs password (new password + confirm password).
5. User clicks Next.
6. Show form for required details:
   - Name
   - Last Name
   - Address
   - Mobile Number
   - TBD — other details
7. User clicks Sign Up.
   - System validates payload via Zod.
   - If passed → call API → save to database → redirect to login.
   - If failed → alert user to correct details and retry.

---

## APP/WEB Main Screens

### Home Page — Header

- **Left:** Menu icon
  - My Learning (if logged in)
  - Certificates (if logged in)
  - FAQ
  - About Us
  - Courses
  - Contacts
- **Right:**
  - If logged in → show profile icon
    - On click → show menu: Profile (redirect), Logout (invalidate token, clear session, redirect to login)
  - If not logged in → show Login button (redirect to login)

### Home Page — Hero Section

- Image slideshow using React Slick.

### Home Page — Subscriber Course View

- Show list of courses.
- Each course card has a progress bar.
- **Continue** button → resume from last session (disabled when due is unpaid).
- **Start** button → for new courses (disabled when due is unpaid).

### Home Page — Non-Subscriber Simulation View

- List of test simulation cards (fully clickable, no lock icon, accessible immediately).
- **CTA: Start Free** → opens modal:
  1. User selects number of items.
  2. User starts simulation.
  3. After finished:
     - System validates answers.
     - Shows scores.
     - Shows each question with answer and explanation per choice (why A is wrong, why B is wrong, why C is correct).
     - Shows strengths, weaknesses, and areas for improvement.
  4. Show subscription plan cards:
     - **Monthly** — list of included features
     - **Quarterly** — list of included features
     - **Yearly** — list of included features
  5. User clicks Subscribe:
     - System calls API → PayMongo payment intent.
     - Supported: GCash, Maya, Credit/Debit.
     - Show modal with available payment options → user selects.
     - System calls PayMongo attach payment method.
     - PayMongo processes payment → triggers webhook.
     - System receives webhook:
       - Processes payment.
       - Saves encrypted payment info to user record (card details, e-wallet details).
       - Updates user status: non-subscriber → subscriber.
       - Updates payment status based on selected plan:
         - Monthly: marks current date to end date (e.g., March 10 → April 10) as paid.
         - Same logic for other plans.
- **Clarification needed:** Is monthly payment auto-deduct or does user need to be notified for upcoming due?

### Modal Reviewer

- One question at a time.
- Has timer (set by admin in admin dashboard).
- User reads question → selects answer via radio buttons.
- **Next** button → moves to next question.
- **Previous** button → go back and change answer *(to be clarified)*.

---

## Profile Screen

- User profile picture.
- **Cards:**
  - Simulation test score
  - Test performance tracker
- Other personal details.
- **Payment method:**
  - Saved for easy repayment next billing (encrypted).
  - Only the user can see masked values:
    - Cards: `**********1441`
    - GCash: `*********2183`
  - System and admin staff cannot see sensitive payment values.
  - Even in PayMongo this is encrypted.
- **Subscription card:**
  - Shows selected plan.
  - Upgrade (e.g., Monthly → Quarterly).
  - Downgrade plan.
- **Logout** action.

---

## Admin BRD

### Overview

Simple admin dashboard accessible via side navigation. 5 sections covering day-to-day operations.

---

### Side Navigation

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Dashboard** | Analytics overview |
| 2 | **Subscribers** | List of active paid users |
| 3 | **Unsubscribers** | List of expired / non-subscribed users |
| 4 | **Modules** | Upload question sets via CSV |
| 5 | **Payments** | Manage subscription plans and pricing |

---

### 1. Dashboard

- **Analytics Cards** (displayed in a row):
  - Total Sales (revenue)
  - Total Students (all registered users)
  - Subscribers (active paid users)
  - Total Courses / Modules
- **Sales Chart** — line chart showing sales over time (weekly or monthly view).

> Scenario: Admin opens Dashboard → sees 4 metric cards (₱48,500 sales, 320 students, 210 subscribers, 12 courses) → line chart shows upward trend this month.

---

### 2. Subscribers

- Table/list of all users with an active paid subscription.
- Columns: Name, Email, Plan, Start Date, End Date, Status.
- Searchable and sortable.

> Scenario: Admin searches "juan" → finds Juan dela Cruz on Quarterly plan expiring April 10 → verifies account is active.

---

### 3. Unsubscribers

- Table/list of users with no active subscription (expired or never subscribed).
- Columns: Name, Email, Last Plan, Expired / Unsubscribed Date.
- Searchable and sortable.

> Scenario: Admin opens Unsubscribers → identifies users whose plan expired this week → exports list for re-engagement.

---

### 4. Modules

- **Download CSV Template** button — downloads the required column format for question upload.
- **Upload: Simulation Module** — uploads questions for the free simulation (non-subscriber flow).
- **Upload: Subscriber Module** — uploads questions for paid subscriber courses.

CSV template columns: `question, choice_a, choice_b, choice_c, choice_d, correct_answer, explanation`

> Scenario: Admin downloads template → fills in 50 questions → clicks "Upload: Simulation Module" → selects CSV → system validates → questions imported and available in simulation flow.

> Edge case: CSV has missing columns → system shows row-by-row errors → admin corrects and re-uploads.

---

### 5. Payments

- **Plan Cards** — existing plans displayed as cards in a flex row. Each card shows: title, price, perks list.
- **Add Payment Plan** button — opens a modal to create a new plan. Maximum 3 plans; button disabled at limit.
  - Modal fields: Title, Price, Perks (list of features)
  - **Save** button — saves and adds new card to the flex row.
- Admin can edit or remove existing plan cards.

> Scenario: Admin sees 2 existing plan cards (Monthly ₱299, Quarterly ₱799) → clicks "Add Payment Plan" → modal opens → enters Title: "Yearly", Price: ₱2,499, Perks: [Unlimited simulations, All modules, Priority support] → clicks Save → new card appears. "Add Payment Plan" now disabled (3 plans reached).

---

### Open Decisions (Client Input Needed)

| # | Decision | Option A | Option B |
|---|---------|----------|----------|
| 1 | Monthly plan renewal | **Auto-renew:** PayMongo charges saved method automatically | **Manual renew:** Learner notified before due, must confirm each cycle |
| 2 | Plan change timing | **Immediate:** Takes effect now, prorated billing | **Next cycle:** Takes effect on next billing date |
| 3 | Account reset policy | **Verify → Reset → Log:** Support confirms identity first | Client to define: email OTP, phone call, or security question |
