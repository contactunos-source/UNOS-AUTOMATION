# UNOS AUTOMATIONS

> **AI Voice Agents & Business Automation Platform**  
> High-performance, Apple-inspired agency website built with Next.js 15, React 19, Tailwind CSS, and Framer Motion.

---

## ⚡ Overview

**UNOS AUTOMATIONS** designs and deploys tailored AI automation solutions, intelligent phone receptionists, and modern conversion websites for dental clinics and service-based businesses.

### Key Features
- **Apple-Inspired Design Philosophy**: High visual hierarchy, clean editorial typography, subtle orange accents, and fluid interactions.
- **Interactive Demos**: Simulated AI voice agent reception interface with live soundwave animations and real-time step pipeline.
- **Redesigned Services Showcase**: Bento-grid layout highlighting AI Voice Agents, Web Development, Workflow Automation, Appointment Booking, and WhatsApp & CRM Lead Velocity.
- **Direct WhatsApp Conversion**: Centralized WhatsApp click-to-chat integration (`https://wa.me/919182078320`) with prefilled contextual messages.
- **Secure Contact Form**: Server-side inquiry handling via Nodemailer SMTP with full input validation and duplicate submission protection.

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) v18+ (v20+ recommended)
- npm, pnpm, or yarn

### 2. Installation
```bash
git clone https://github.com/contactunos-source/UNOS-AUTOMATION.git
cd UNOS-AUTOMATION
npm install
```

### 3. Environment Configuration
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your credentials in `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contactunos@gmail.com
SMTP_PASS=your-16-char-app-password
CONTACT_EMAIL_TO=contactunos@gmail.com
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:4000](http://localhost:4000) in your browser.

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 🛠 Tech Stack
- **Framework**: Next.js 15 (App Router, Turbopack)
- **UI & Animation**: React 19, Framer Motion, Lucide React
- **Styling**: Tailwind CSS v4
- **Backend Email**: Nodemailer SMTP
- **Typography**: Inter (Google Fonts via Next Font)

---

## 📄 License
Private & Proprietary — © UNOS AUTOMATIONS. All rights reserved.
