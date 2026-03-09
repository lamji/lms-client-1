# LMS Platform — MVP Specification

## Scope

This document defines the Minimum Viable Product for the LMS platform. It covers the learner-facing app/web experience, authentication flows, payment integration, and the admin dashboard. The MVP follows the exact scope and flow provided in the BRD draft.

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

### Purpose

The admin area enables the team to run daily LMS operations in one place: manage learners, publish content, monitor subscriptions, and track overall business performance.

### Team Roles (RBAC)

| Role | Permissions | Example Scenario |
|------|------------|-----------------|
| **Owner / Admin Lead** | Full control, team access setup, final approvals | Owner adds new staff → assigns Support role → saves. Staff can handle tickets but cannot edit billing settings. |
| **Content Admin** | Create, edit, publish, archive courses/lessons/questions | Content Admin opens Cardio Module 2 → updates lesson notes → submits for review → Owner approves → published. Learners see the revision within minutes. |
| **Finance Admin** | Review payments, plan status, billing concerns | Finance Admin opens failed payments → filters by today → marks users for follow-up. Billing issues resolved before access expires. |
| **Support Admin** | Assist with account issues, login help, subscription concerns | Support Admin receives "cannot log in" ticket → verifies email → triggers reset flow. Learner logs in again within one support session. |

**Access Control:** Each role sees only the modules and actions they need. Unauthorized access returns 403 and is logged in the audit trail.

> Scenario (Role Guard): Support Admin navigates to `/admin/pricing` → system checks role → returns 403 "Access Denied" → attempt logged in audit trail with timestamp, user ID, and attempted resource.

### Admin Modules & Acceptance Criteria

#### 1. Dashboard Overview

- Shows: active learners, paid learners, expiring plans, failed payments.
- **Acceptance:** Owner opens dashboard at 9 AM → sees 14 failed payments, 3 support tickets, 2 expiring plans → assigns failed payments to Finance Admin, tickets to Support Admin → each team member sees assigned items in their queue within 10 seconds.

#### 2. User Management

- Search by email/name, view profile, check subscription status, unlock accounts.
- **Acceptance:** Support Admin searches learner email → profile loads → sees "Account Locked (3 failed login attempts)" → clicks Unlock → system logs action with admin ID and timestamp → learner receives password reset email within 1 minute.
- **Edge case:** Email not found → search returns "No results" with suggestion to search by name or phone.

#### 3. Content Management

- Create, edit, publish, and archive courses, modules, and lessons.
- **Acceptance:** Content Admin receives new exam guideline → edits affected lessons → clicks "Request Publish" → Owner reviews diff → approves → content goes live. Previous version archived with full change history.
- **Edge case:** Two admins editing same lesson → system detects conflict → shows merge prompt.

#### 4. Question Bank

- Add questions, set topic/difficulty tags, attach explanations.
- **Acceptance:** Content Admin adds 20 questions tagged Pharma / Hard → attaches explanations per choice → submits. Questions appear in Question Bank as "Draft" → Content Admin creates Practice Set → marks "Ready for Learners."
- **Edge case:** CSV import with validation errors → system shows line-by-line errors → allows re-upload.

#### 5. Simulation Settings

- Configure timer, number of items, retake rules, passing score.
- **Acceptance:** Owner sets Board Review Mode: 90 min timer, 60 items, 2 retakes, 75% passing score → saves. New learners taking this simulation see enforced settings. Existing in-progress attempts keep old settings.
- **Edge case:** Invalid combination (60 items, 5-min timer) → validation error shown with recommendation.

#### 6. Subscription & Payment Monitoring

- View payment status, subscription lifecycle, failed payment recovery.
- **Acceptance:** Finance Admin opens Failed Payments → filters "Past 24 hours" → sees 3 payments failed (insufficient funds) → selects all → clicks "Send Retry Request" → learners receive email with "Retry Payment Now" button → payment succeeds via PayMongo → subscription auto-updates → learner regains access.
- **Edge case:** Payment fails again on retry → escalated to "Requires Manual Follow-up" → account locked after 3 consecutive failures.

#### 7. Reports & Analytics

- Growth metrics, conversion rates, learner performance by topic.
- **Acceptance:** Owner + Content Admin view monthly report → see low scores in Maternal Care topic → team creates reinforcement lessons targeting weak areas. Report exportable as CSV.

#### 8. Activity History / Audit Log

- Logs all major admin actions with who, what, when, before/after values.
- **Acceptance:** Learner reports "timer was wrong" → Owner opens Activity History → filters by "Simulation Settings" → sees entry: "[Admin Name] changed Board Review Mode Duration: 90→60 mins on [date/time]" → Owner corrects setting → optionally notifies affected learners.

### Admin Journey (Process Flow)

1. **Login** → Admin logs in → role-based dashboard loads → each role sees relevant modules and task queue.
2. **Triage** → Owner reviews priority queue → assigns payment issues to Finance, access issues to Support → notifications sent to assigned staff.
3. **Content** → Content Admin drafts lesson changes → submits for review → Owner approves → published to learners same day.
4. **Finance** → Finance Admin checks failed payment events → triggers retry or manual follow-up → subscriber access interruption minimized.
5. **Support** → Support Admin confirms learner identity → assists with reset flow → verifies login success → ticket resolved with confirmation.

### Non-Functional Requirements

| Requirement | Expectation | Scenario |
|------------|-------------|---------|
| **Security** | Role-based access control enforced server-side; unauthorized access blocked and logged | Support Admin opens finance settings → blocked by role policy → attempt logged → sensitive pages stay protected |
| **Reliability** | Payment → subscription updates are atomic with issue tracking | Payment succeeds → subscription updates automatically → log entry created → no lost access after payment |
| **Performance** | Core admin pages load in < 2 seconds | During live support call, user profile opens within 2 seconds → issue solved while learner is on the line |
| **Auditability** | All admin actions logged with before/after values | Owner investigates reported issue → checks logs → identifies root action and responsible admin → faster troubleshooting |
| **Data Privacy** | Payment info masked; PCI-DSS compliant handling | Admin sees masked card info only (`****1441`) → financial data exposure risk eliminated |

### Open Decisions (Client Input Needed)

| # | Decision | Option A | Option B |
|---|---------|----------|----------|
| 1 | Monthly plan renewal | **Auto-renew:** Continuous access, no action needed from learner | **Manual renew:** Learner notified before due date, must confirm payment each cycle |
| 2 | Plan upgrade/downgrade timing | **Immediate:** Change takes effect now, prorated billing | **Next cycle:** Change takes effect on next billing date, simpler reconciliation |
| 3 | Admin visibility of payment data | **Masked only:** All roles see `****1441` format | **Role-based:** Finance sees expanded transaction refs, others see masked only |
| 4 | Account reset policy | **Verify → Reset → Log:** Support confirms identity before resetting access | Needs client to define acceptable verification methods (email, phone, security question) |
| 5 | Content publishing approval | **Single approver:** Faster publishing, Content Admin → Owner approves | **Two-person approval:** Reduces risk for high-impact curriculum changes |
