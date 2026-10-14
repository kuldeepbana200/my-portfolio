# Kuldeep Singh Rajput — Developer Portfolio

Personal portfolio for Kuldeep Singh Rajput, a software engineer focused on backend engineering, distributed systems, and full-stack development.

![Portfolio hero — day mode](./project-images/Portfolio-Hero-Day.png)

## 🎯 What you'll build

A production-quality **Next.js 16 portfolio website** with a warm, editorial "magazine" design system and choreographed motion:

- 🌗 **Interactive day/night hero switch** - swap a day background video for a night one with smooth choreography (the signature feature).
- 🌗 **Interactive day/night hero switch** with responsive scenic media.
- 🎨 **Editorial design system** - cream canvas, hairline borders (no drop shadows), light display type, one orange accent.
- 🖼️ **Selected Work** animated project carousel.
- 🧩 **Capabilities** section with hand-crafted animated icons.
- 🪜 **Approach**, faux code-editor **Stack**, **About** + **Contact** sections.
- 🧭 Scroll-aware **header** with mobile menu, plus a matching footer.
- 🎬 **Framer Motion animations** - scroll reveals via a reusable component, with full `prefers-reduced-motion` support.
- 📱 Fully **responsive** and content-centralized.

Built with **Next.js 16 (App Router + Turbopack)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, **Motion (Framer Motion)**, **@phosphor-icons/react**, and **next-themes**.

---

## 📦 What's inside this starter (vs. what you'll build)

This repo is intentionally small - it holds the **content and media** so you can focus on building the actual site in the video.

| ✅ Included in the starter | 🛠️ You build in the tutorial |
|---|---|
| A pre-configured **Next.js 16 scaffold** - clone, `bun install`, `bun dev` and you're running | Every component and section |
| `public/assets/` - all images, hero **day + night videos**, and posters | The design system in `app/globals.css` |
| `lib/content.ts` - all site copy pre-written (nav, projects, capabilities, stack, footer) | The day/night switch, widgets, and Motion animations |

> 💡 Pre-written content means **no pausing to copy text**. Pull it from `lib/content.ts` exactly when the video does.

---

## 🚀 How to use these starter files

Clone this repo **alongside the tutorial** and code as you watch. Bun is recommended (it's what the video uses), but npm / pnpm / yarn work too.

```bash
# 1. Clone the starter files
git clone https://github.com/codebucks27/nextjs-portfolio-starter-template.git
cd nextjs-portfolio-starter-template

# 2. Install dependencies (Bun recommended - it's what the video uses)
bun install        # or: npm install / pnpm install / yarn

# 3. Start the dev server
bun dev            # or: npm run dev

# 4. Open http://localhost:3000 and start building along with the video 🎬
```

> ℹ️ **Requirements:** Node.js 20.9+ (or Bun 1.2+). The portfolio does not require API keys or an `.env` file to run.

---

## ⭐ Found this useful?

**Please star this repo** - it helps other developers find the tutorial and keeps free content like this coming. It takes two seconds and genuinely makes a difference. 🙏

---

## 📸 Screenshots

### 🌙 Hero — Night mode
![Portfolio hero — night mode](./project-images/Portfolio-Hero-Night.png)

### 🗂️ Selected Work
![Selected Work section](./project-images/Portfolio-Selected-Work-Section.png)

### 🧩 Capabilities
![Capabilities section](./project-images/Portfolio-Capabilities-Section.png)

### 🪜 Approach
![Approach section](./project-images/Portfolio-Approach-Section.png)

### 💻 Stack
![Stack section](./project-images/Portfolio-Stack-Section.png)

### ✉️ Contact
![Contact section](./project-images/Portfolio-Contact-Section.png)

### 🔻 Footer
![Footer section](./project-images/Portfolio-Footer-Section.png)

---

---

The portfolio content is centralized in `lib/content.ts` so personal details can be updated without changing the presentation components.