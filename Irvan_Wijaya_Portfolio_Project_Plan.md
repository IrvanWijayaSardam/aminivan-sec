# Irvan Wijaya — Portfolio Website Redesign Project Plan

**Version:** 1.0  
**Date:** 4 November 2026  
**Project type:** Personal brand / technical portfolio  
**Existing site:** https://irfanwijayasardam.wixsite.com/home  
**Primary source:** `CV - Irvan Wijaya- Technical Support Engineer.pdf` (provided CV)

> **Positioning:** Mobile Application Security Engineer | Solutions Engineer | Android Engineer
>
> **One-line proposition:** Bridging mobile engineering, application security, and enterprise technical solutions.

## 1. Executive Summary

Rebuild the existing Wix portfolio into a fast, responsive, technically credible personal website. The new site must communicate a career trajectory from Android engineering to mobile security and customer-facing solutions engineering, without hiding the Android development foundation. Optimize for APAC/global recruiters, security engineering hiring managers, prospective consulting clients, and engineering peers.

**Primary outcome:** A recruiter can understand Irvan's specialization, evidence of technical capability, and contact options in under 30 seconds.

**Secondary outcomes:** Publish defensible technical case studies, provide an up-to-date CV, and build a sustainable technical writing platform.

### Source boundaries

- **CV-confirmed:** roles at DoveRunner, BRI, PalmVB, Kelola Karta Raya; PLNS and Metronome Engines projects; certifications CMPen-Android, CAPen, and Cyber Security Engineer; university education and listed skills.
- **Existing-site confirmed:** current site has Home, Experience, Portfolio, Contact, skills logos, certificates, security research items, and Android project showcase.
- **Additional career context to verify before publishing:** customer-facing POCs, enterprise pre-sales work, Android/iOS protection troubleshooting, root/jailbreak detection analysis, cross-region stakeholder collaboration, and specific lab work. These are suggested topics, not CV-verified public claims.
- **Do not publish:** customer names from support cases, exploit details against live customer apps, internal ticket identifiers, unpublished roadmap, client-specific incident metrics, proprietary code, confidential screenshots, or security bypasses without authorization.

## 2. Existing Website Audit

**Reviewed:** Public Wix home page at the URL above (4 Nov 2026).

### Retain and improve

- Personal name and recognizable Android/mobile security identity.
- Existing portfolio topics: reverse engineering, Android applications, POS/hardware pager, BRImo, flight booking.
- Certifications, career history, and contact links.

### Fix in redesign

1. **Positioning is dated:** existing headline emphasizes Android Developer and Mobile Security Engineer, but does not feature current Solutions/Technical Support Engineer work.
2. **Information architecture:** replace long mixed homepage sections with focused navigation and dedicated case-study pages.
3. **Proof over logo grids:** organize skills by capabilities and link them to work samples.
4. **Career accuracy:** current site labels BRI `Jan 2024–Present`, while CV says `Jan 2024–Dec 2025`; reconcile dates and overlapping contracts before launch.
5. **Content quality:** update copy, proofread labels, and remove unused or unclear navigation (e.g. Book Online unless needed).
6. **Professional polish:** replace Wix promotional framing and generic imagery with a custom domain, consistent visual language, clear CTAs, and working social links.
7. **Footer:** replace existing `© 2035` with a current, automatically generated year.
8. **Contact:** simplify to email, LinkedIn, GitHub, and optional form; do not expose a phone number by default.

## 3. Audience and User Journeys

| Audience | Main question | Required proof | Desired action |
|---|---|---|---|
| Solutions Engineering recruiter | Can he bridge technical security and customers? | Current role, troubleshooting, communication, POC stories | Download CV / contact |
| Mobile AppSec hiring manager | Can he analyze and protect mobile apps? | Security labs, tooling, responsible methodology, certifications | View security case studies |
| Android engineering lead | Can he ship production Android features? | BRI work, Kotlin architecture, kiosk/hardware integrations | View engineering projects |
| Consulting prospect | Can he scope and deliver technical research? | Services, sanitized outcomes, process | Send inquiry |

## 4. Brand and Design System

**Recommended visual direction:** Premium dark technical, not neon-hacker.

- **Personality:** credible, precise, calm, engineering-led, internationally oriented.
- **Palette:** background `#0B1018`; surface `#121B27`; primary text `#F1F5F9`; muted text `#9BAABD`; accent teal `#2DD4BF`; border `#263444`; optional light theme.
- **Typography:** Inter or Geist for UI; JetBrains Mono for labels, tags, code, and command snippets.
- **Visuals:** subtle grid texture, restrained terminal/code motif, abstract mobile security diagrams, genuine screenshots of own projects, certification thumbnails where permitted.
- **Motion:** 150–250 ms hover states, subtle reveal animations, respect `prefers-reduced-motion`.
- **Avoid:** fake live terminal logs, exaggerated hacker imagery, meaningless progress bars, autoplay video, overuse of gradients.

### Design tokens

```css
:root {
  --background: #0b1018;
  --surface: #121b27;
  --text: #f1f5f9;
  --muted: #9baabd;
  --accent: #2dd4bf;
  --border: #263444;
  --radius-card: 16px;
  --content-width: 1120px;
}
```

## 5. Site Map and Page Requirements

```text
/
├── /about
├── /experience
├── /projects
│   └── /projects/[slug]
├── /research
│   └── /research/[slug]
├── /certifications
├── /contact
└── /resume.pdf
```

**Global navigation:** Home · Experience · Projects · Research · About · Contact · [Resume]

### 5.1 Home

1. **Hero:** Name, primary role, concise value proposition, CTAs (`Explore Work`, `Download CV`, `Contact Me`).
2. **Trust strip:** Specialties (`Android`, `Mobile AppSec`, `Reverse Engineering`, `Solutions Engineering`) and real certifications; no invented employer endorsements.
3. **Featured work:** 3 cards covering security, Android banking, and embedded/kiosk engineering.
4. **Expertise:** three capability pillars with supporting examples.
5. **Career snapshot:** short timeline highlighting DoveRunner, BRI, PalmVB.
6. **Featured research:** 2–3 write-ups or coming-soon placeholders only in development, not empty published cards.
7. **Contact CTA:** professional email and LinkedIn.

**Suggested hero copy:**

> **Irvan Wijaya**  
> **Mobile Security Engineer & Solutions Engineer**  
> I work at the intersection of mobile engineering, application security, and enterprise technical solutions—helping teams build, troubleshoot, and protect Android and iOS applications.
>
> [Explore My Work] [Download CV]

Note: iOS experience is supported by additional professional context, but not explicitly detailed in the uploaded CV; confirm public wording before launch.

### 5.2 About

- Short professional narrative: Android developer → security practitioner → customer-facing mobile security engineer.
- Core interests: mobile hardening, reverse engineering, runtime protections, Android architecture, secure device integration.
- Education: Bachelor's in Informatics Engineering, AMIKOM University, GPA 3.85/4.0 (CV).
- Languages: Indonesian, English.
- Optional photo: real professional portrait, not AI-generated impersonation.
- Personal information should be limited to professional details.

### 5.3 Experience

Use reverse-chronological cards with role, engagement type, dates, location, technologies, 2–4 achievements, and related projects.

| Organization | Role | Dates from CV | Highlight |
|---|---|---|---|
| DoveRunner | Technical Support Engineer (Contract) | Jan 2025–Present | Mobile security troubleshooting, RCA, ticket ownership, security/engineering collaboration |
| PT Bank Rakyat Indonesia | Android Developer (Contract) | Jan 2024–Dec 2025 | BRImo investment features, gRPC stock architecture, gold, DPLK, BRImo Junior |
| PalmVB | Fullstack Android Developer (Part Time) | Jan–Jul 2025 | Palm-vein kiosk/EDC integration, modular Android, Spring Boot/Golang services |
| Kelola Karta Raya | Android Kotlin Developer (Contract) | Dec 2022–Apr 2023 | POS, backend synchronization, authentication, printing, security testing |
| Binar Academy | Android Developer (Bootcamp) | Aug–Dec 2022 | FlitAirlines app and team leadership |

**Verification needed:** BRI date on old site differs from CV; CV overlaps BRI and DoveRunner. Preserve factual overlapping contract roles, but confirm exact dates and role classifications.

### 5.4 Projects

**Category filters:** All · Mobile Security · Android Engineering · Backend & Embedded · Research.

**Featured candidate projects (publish only with appropriate permissions):**

1. **Mobile Application Security Integration (PLNS)** — Security SDK integration, anti-tampering, root/Frida detection, credential protection. *CV-confirmed; verify disclosure permission.*
2. **Android Reverse Engineering & Automation (Metronome Engines)** — Frida-based analysis, environment checks, Python automation, MongoDB workflows. *CV-confirmed; anonymize clients and avoid actionable abuse.*
3. **BRImo Investment Experiences** — Mutual funds, stock gRPC integration, gold, investment recap, pension features. *CV-confirmed; describe personal contribution, not proprietary implementation.*
4. **Palm Vein Authentication Kiosk** — Android kiosk, biometric scanner integration, modular design, Spring Boot/Golang microservices, Docker. *CV-confirmed; review third-party hardware imagery.*
5. **Integrated Distribution & POS** — Kotlin POS, token authentication, thermal printing, backend sync. *CV-confirmed.*
6. **POS + Hardware Pager Thesis** — C#, Spring Boot, NodeMCU/IoT hardware pager. *CV-confirmed; legacy Wix has supporting project description.*
7. **FlitAirlines** — Kotlin flight booking MVP and team leadership. *CV-confirmed.*

**Optional independent labs (create/verify artifacts first):** Android runtime detection test bench; Android app hardening evaluation; secure mobile diagnostic workflow; reverse-engineering learning notes. Label these as personal lab research, never as completed employer deliverables.

### 5.5 Research / Technical Writing

Suggested content pillars:

- Android reverse engineering fundamentals (JADX, Ghidra, Smali).
- Authorized runtime instrumentation and Frida-based test methodology.
- Android root/emulator detection and limitations of client-side trust.
- App hardening: anti-tampering, obfuscation, and defense-in-depth.
- Mobile application troubleshooting: logcat, ANR, Crashlytics, reproducibility.
- Mobile architecture: Kotlin, gRPC, secure device communication.

**Editorial rules:** Use self-owned apps or explicitly authorized labs; avoid publishing secrets, customer bypass scripts, unpublished vulnerabilities, or detailed exploitation of live services. Include testing scope, version/date, findings, limitations, and mitigations.

### 5.6 Certifications

- Certified Mobile Pentester (CMPen-Android) — The SecOps Group, Jul 2024.
- Certified AppSec Pentester (CAPen) — The SecOps Group, Jan 2025.
- Cyber Security Engineer — Merdeka Siber, Aug 2024.
- Binar Academy Android Developer training.
- Red Hat Linux administration training/award: verify exact credential title before calling it an external certification.

Provide issuer, date, badge/image if licensed, and verified credential link when available. Do not expose certificate IDs unless necessary.

### 5.7 Contact

- Primary: `irfanwijayasardam@gmail.com` (from CV).
- GitHub: username `IrvanWijayaSardam` (verify destination).
- LinkedIn: handle `aminivan` (verify destination).
- Optional form: name, email, message, spam protection, success/error state, privacy note.
- Do not show phone/WhatsApp by default unless intentionally desired.

## 6. Case Study Content Template

Each project detail page must answer: **What was the problem, what did I own, how did I approach it, and what changed?**

```md
---
title: "Project title"
summary: "One sentence"
category: "Mobile Security"
role: "Your actual role"
period: "Verified period"
stack: ["Kotlin", "Frida"]
featured: true
confidentiality: "Public / Sanitized / Permission required"
---

## Overview
## Problem & Constraints
## My Responsibilities
## Architecture / Approach
## Technical Challenges
## Results & Evidence
## Security / Privacy Considerations
## Lessons Learned
## Related Links
```

**Metrics policy:** CV states PalmVB modular architecture reduced development time by 30%; use only if defensible and approved. Do not invent adoption numbers, vulnerability counts, customer names, or performance benchmarks.

## 7. Technical Architecture

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js (App Router) + TypeScript | SEO, route-based content, reusable components |
| Styling | Tailwind CSS | Consistent design tokens and responsive styling |
| UI | shadcn/ui + Lucide | Accessible building blocks, restrained iconography |
| Animation | Motion / Framer Motion | Optional, lightweight interactions |
| Content | MDX + frontmatter | Version-controlled case studies and articles |
| Hosting | Vercel | Straightforward deployment and previews |
| Analytics | Privacy-conscious analytics | Measure portfolio usage without invasive tracking |
| Contact | Email link first; optional server-side form | Minimal maintenance and spam exposure |
| CI | GitHub Actions / Vercel checks | Lint, typecheck, build and link validation |

**MVP principle:** No database, admin dashboard, authentication, or CMS required. Add a CMS only if nontechnical editing becomes a real need.

### Proposed directory layout

```text
portfolio/
├── public/
│   ├── images/
│   ├── certificates/
│   └── resume.pdf
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── experience/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── projects/[slug]/page.tsx
│   │   ├── research/page.tsx
│   │   ├── research/[slug]/page.tsx
│   │   ├── certifications/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── projects/
│   │   └── ui/
│   ├── content/
│   │   ├── projects/*.mdx
│   │   └── research/*.mdx
│   ├── data/
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   └── certifications.ts
│   └── lib/
│       └── content.ts
├── package.json
└── README.md
```

## 8. Functional and Nonfunctional Requirements

### Functional

- Responsive header, mobile navigation, footer, and theme toggle (optional).
- Search-engine indexable page titles, descriptions, canonical URLs, Open Graph images.
- Project/research lists with category filtering and direct links.
- MDX article rendering with syntax highlighting and optional table of contents.
- Downloadable current resume; prominent GitHub, LinkedIn, and email links.
- Accessible forms only if a contact backend is implemented.
- Sitemap, robots directives, custom 404, and metadata for social sharing.

### Quality targets

- Mobile-first at 360px, 768px, 1024px, and 1440px widths.
- WCAG 2.2 AA-oriented contrast, keyboard access, focus visibility, semantic headings, and alt text.
- Lighthouse targets: Performance >=90, Accessibility >=95, SEO >=95 on representative pages (targets, not guarantees).
- LCP <2.5 s, CLS <0.1, INP <200 ms at 75th percentile where field data is available.
- Minimal client JavaScript, optimized images, no layout shift from badges/images.
- No secrets in source control; safe dependency update policy.

## 9. SEO and Personal Brand Strategy

**Primary keywords (use naturally):** Mobile Security Engineer, Solutions Engineer, Android Security, Android Developer, Reverse Engineering, Mobile Application Security, Jakarta / Indonesia.

**Suggested home title:** `Irvan Wijaya | Mobile Security & Solutions Engineer`

**Suggested description:** `Portfolio of Irvan Wijaya, a mobile security and Android engineer specializing in reverse engineering, application protection, technical troubleshooting, and secure mobile solutions.`

- Use real name consistently; keep old Wix link redirecting or pointing to the new domain where possible.
- Create a custom domain after verifying availability; no assumed ownership.
- Add JSON-LD Person structured data with verified professional profiles.
- Publish useful original research rather than keyword-stuffed posts.
- Keep resume PDF and website experience dates synchronized.

## 10. Roadmap and Deliverables

| Phase | Work | Deliverable | Exit criterion |
|---|---|---|---|
| 0. Discovery | Verify CV facts, audit Wix assets, permissions, goals | Content inventory | No unverified public claims |
| 1. UX | Sitemap, wireframes, design tokens, responsive states | Approved Figma-like screen specification | Hero and navigation approved |
| 2. Foundation | Next.js setup, layout, typography, SEO base | Deployable scaffold | Typecheck/build pass |
| 3. Core pages | Home, About, Experience, Contact, Certifications | MVP site | Content reviewed |
| 4. Case studies | 3 strong projects + 1 research post | Evidence-backed portfolio | Each has clear role and results |
| 5. QA | Accessibility, performance, mobile, metadata, links | QA checklist | No blocking issues |
| 6. Launch | Domain, analytics, resume, deployment | Public portfolio | Live links and forms tested |
| 7. Growth | More case studies, posts, updates | Monthly content cadence | Sustainable maintenance |

### MVP scope (first release)

- Home, About, Experience, Projects, 3 project details, Certifications, Contact.
- One visual theme, responsive layout, downloadable CV, social links.
- No backend or CMS; research section can launch with one complete post or be deferred.

### Post-MVP

- Technical research library with tags and search.
- Architecture diagrams, sanitized demo videos, downloadable project summaries.
- Light theme, interactive lab demos, internationalization (English first; Indonesian optional).

## 11. Priority Backlog

| ID | Priority | Task | Acceptance criteria |
|---|---|---|---|
| P-01 | P0 | Reconcile work dates and titles | CV and site agree |
| P-02 | P0 | Confirm public-disclosure permissions | Sensitive work sanitized or excluded |
| P-03 | P0 | Finalize hero messaging | Security + solutions + engineering clear |
| P-04 | P0 | Build responsive shell | Mobile and desktop nav work |
| P-05 | P0 | Publish core experience timeline | All dates verified |
| P-06 | P0 | Write 3 featured case studies | Problem, role, approach, evidence |
| P-07 | P0 | Add contact and CV | Links tested |
| P-08 | P1 | Add certificate verification links | Links and labels verified |
| P-09 | P1 | Add research content pipeline | MDX article builds correctly |
| P-10 | P1 | SEO, accessibility, performance audit | Targets evaluated |
| P-11 | P2 | Add theme switcher | Preference persists appropriately |
| P-12 | P2 | Add advanced project filtering | Accessible, shareable filtering |

## 12. Launch Checklist

- [ ] Confirm exact current job title and role scope.
- [ ] Reconcile BRI role dates with old Wix and CV.
- [ ] Verify names, links, certification issuer titles, and credentials.
- [ ] Obtain permission for client/employer/project disclosure where required.
- [ ] Remove confidential details and unapproved screenshots.
- [ ] Select custom domain and configure HTTPS.
- [ ] Export/archive existing Wix assets and written content.
- [ ] Finalize 3 strong case studies.
- [ ] Refresh resume PDF and ensure consistency.
- [ ] Test navigation, downloads, email links, and form if present.
- [ ] Validate mobile layouts and keyboard navigation.
- [ ] Check Open Graph preview, sitemap, robots, and indexing.
- [ ] Run performance/accessibility checks.
- [ ] Publish and monitor for broken links.

## 13. Maintenance Plan

**Monthly:** Add or improve one article/project, verify all links, update technologies and achievements.  
**Quarterly:** Refresh CV, audit SEO and performance, review certifications, revise featured projects.  
**Whenever changing jobs:** Update role dates, professional summary, hero positioning, and downloadable resume together.

## 14. Decisions Needed Before Development

1. **Brand emphasis:** Mobile Security + Solutions Engineering (recommended), or primarily Android Development?
2. **Public projects:** Which employer/client work can be described and which must remain anonymized?
3. **Assets:** Existing project screenshots, diagrams, GitHub repositories, credential verification links, and professional photo.
4. **Domain:** New custom domain or temporary Vercel subdomain?
5. **Contact:** Email-only or a maintained contact form?

---

## Appendix A — Suggested Short About Copy

> I'm Irvan Wijaya, an engineer focused on mobile application security, Android development, and technical problem-solving. My work spans production Android features, reverse engineering and security analysis, enterprise application troubleshooting, and hardware-integrated mobile systems. I enjoy translating complex technical findings into practical improvements for engineering teams and stakeholders.

## Appendix B — Suggested Project Card Copy

**Mobile Security Integration**  
Android application protection, runtime threat detection, and security validation.  
`Mobile AppSec` · `Android` · `Security Testing`

**BRImo Investment Features**  
Production Android engineering for financial services, including investment experiences and gRPC-backed market data features.  
`Kotlin` · `Android` · `gRPC`

**Palm-Vein Authentication Kiosk**  
Android kiosk and embedded biometric device integration supported by modular architecture and backend services.  
`Android` · `Spring Boot` · `Golang` · `Docker`

---

**References:** Uploaded 4-page CV (current source of record); publicly accessible Wix homepage, inspected 4 Nov 2026. All proposed design decisions, site architecture, and roadmap items are recommendations, not claims from the source materials.

---

## 15. Design Addendum — CTF-Inspired Security Research Portfolio (v1.1)

**Design reference:** Minimal, typography-led developer portfolio with a technical command-line aesthetic. The request references an "Aditya Alok" page, but an exact reference URL was not supplied, so this is an original interpretation rather than a verified recreation of that specific page.

### Design principle

**CTF-inspired visual language, not fabricated CTF participation.** Irvan has practical mobile security and reverse engineering experience, but no stated CTF competition history. Use terminal interfaces, monospace metadata, hex-like motifs, lab IDs, and write-up structures to signal technical curiosity. Never display fictional CTF ranks, solves, scores, flags, leaderboard positions, or badges.

### Visual system

- **Palette:** ink `#090e14`, surface `#111922`, card `#141e29`, border `#263441`, text `#e5edf2`, muted `#91a4b2`, accent green `#a4f4bb`, cyan `#7bd5dc`.
- **Typography:** contemporary sans-serif for editorial headlines, monospace for navigation, command prompts, section IDs, and metadata.
- **Composition:** large introductory headline, restrained animations, readable spacing, fine grid background, cards with code-like labels.
- **Tone:** confident, thoughtful, precise; avoid exaggerated "elite hacker" or anonymous/underground visual tropes.
- **Accessibility:** visible keyboard focus, semantic headings, adequate contrast, no essential information hidden in animations or terminal-only interactions.

### Homepage content order

1. Sticky navigation: About, Expertise, Security Lab, Experience, Contact.
2. Hero: **Building secure. Thinking deeper.** + brief cross-disciplinary positioning.
3. Interactive terminal with harmless local commands: `help`, `about`, `skills`, `projects`, `contact`, `clear`.
4. About: Android development + mobile security + enterprise technical solutions.
5. Expertise cards: Mobile Security, Reverse Engineering, Solutions Engineering.
6. Security Lab: research-oriented write-ups with transparent status labels.
7. Selected engineering projects: BRImo investment features and biometric kiosk integration.
8. Experience timeline, credentials, contact links, CV.

### Security Lab taxonomy

- **Research Note:** concept, question, test setup, observations, lessons learned.
- **Lab Walkthrough:** authorized local environment, objective, methodology, results, defensive takeaways.
- **Engineering Case Study:** problem, constraints, approach, role, outcome, technology.
- **Tooling Note:** Frida/JADX/Ghidra/ADB setup or methodology, with safe and authorized scope.

Suggested content categories: `Android Internals`, `Static Analysis`, `Dynamic Analysis`, `Mobile App Protection`, `Secure Engineering`, `Technical Troubleshooting`.

### Trust and disclosure rules

- Label proposed articles **Draft** or **Planned** until written and verified.
- Avoid inventing metrics, exploit discoveries, competition experience, customer endorsements, or tool releases.
- Do not reveal proprietary customer incidents, nonpublic vulnerabilities, internal support logs, confidential screenshots, or bypass techniques against customer apps.
- Public work examples should use permission-cleared material, open-source targets, or purpose-built demo apps.

### Interactive behavior

- Terminal commands must be client-side, sandboxed to static portfolio data, and must not execute arbitrary code or make privileged requests.
- Provide standard visible navigation and contact buttons; the terminal is optional progressive enhancement.
- Keep motion subtle and respect reduced-motion preferences in the production implementation.

### Prototype artifact

**`Irvan_Portfolio_CTF_Prototype.html`** is a standalone responsive HTML/CSS/JavaScript sample implementing the homepage concept. It uses no external libraries, build tools, or tracking scripts. Open directly in a browser to preview. It is a visual prototype, not a complete production website; research write-ups, actual CV download, analytics, SEO refinement, and publishing remain implementation tasks.

### Next build phase

1. Approve the visual direction and finalize public-facing copy.
2. Confirm experience dates and public disclosure permissions.
3. Port the approved design to Next.js, TypeScript, and Tailwind CSS.
4. Implement MDX-backed research and project detail pages.
5. Add CV download, mobile QA, accessibility, metadata, and deployment.
