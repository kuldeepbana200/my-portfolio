// Every bit of text/data the site shows lives here, so our components stay clean and easy to re-skin.

/**
 * Centralized site copy.
 *
 * This file holds the repeating, list-shaped content rendered across the
 * portfolio — nav links, projects, capabilities, the stack, footer columns,
 * and so on. One-off strings (headlines, section intros, CTA labels) stay
 * inline in their components; only data with a repeating pattern lives here so
 * it's easy to edit, translate, or hand off in one place.
 *
 * Each export is consumed by the component named in its comment.
 */

/* ============================================================
   DESIGN TOKENS — copy/paste into app/globals.css during the
   design-system step of the tutorial.
   (1) goes inside `@theme inline { ... }`
   (2) + (3) go inside `:root { ... }`
   ============================================================

   (1) Editorial --color-* entries — paste inside `@theme inline`:

    // Editorial design tokens: surfaces
    --color-canvas: var(--canvas);
    --color-canvas-soft: var(--canvas-soft);
    --color-surface-card: var(--surface-card);
    --color-surface-strong: var(--surface-strong);

    // Hairlines
    --color-hairline: var(--hairline);
    --color-hairline-soft: var(--hairline-soft);
    --color-hairline-strong: var(--hairline-strong);

    // Text
    --color-ink: var(--ink);
    --color-body: var(--body);
    --color-body-strong: var(--body-strong);
    --color-muted-ink: var(--muted-ink);
    --color-muted-soft: var(--muted-soft);
    --color-on-primary: var(--on-primary);

    // Brand
    --color-primary-active: var(--primary-active);

    // Overlay pair: light cream type + dark scrim ink
    --color-overlay-cream: var(--overlay-cream);
    --color-overlay-ink: var(--overlay-ink);

    // Terminal palette — macOS-style window dots
    --color-term-red: var(--term-red);
    --color-term-yellow: var(--term-yellow);
    --color-term-green: var(--term-green);

    // Semantic
    --color-success: var(--success);
    --color-error: var(--error);

   ------------------------------------------------------------

   (2) Editorial :root values — paste inside `:root`:

    // Brand accent: used scarcely, primary CTAs + wordmark only
    --primary: #f54e00;
    --primary-foreground: #ffffff;
    --primary-active: #d04200;
    --on-primary: #ffffff;

    // Surfaces: warm cream canvas, never pure white
    --canvas: #f7f7f4;
    --canvas-soft: #fafaf7;
    --surface-card: #ffffff;
    --surface-strong: #e6e5e0;

    // Hairlines: depth via 1px lines, no shadows
    --hairline: #e6e5e0;
    --hairline-soft: #efeee8;
    --hairline-strong: #cfcdc4;

    // Text: warm near-black ink
    --ink: #26251e;
    --body: #5a5852;
    --body-strong: #26251e;
    --muted-ink: #807d72;
    --muted-soft: #a09c92;

    // Terminal palette — macOS-style window dots (stack.config mock only)
    --term-red: #ff5f57;
    --term-yellow: #febc2e;
    --term-green: #28c840;

    // Overlay pair: cream type + ink scrim for media-backed regions
    --overlay-cream: #f7f6f1;
    --overlay-ink: #0f0f0c;

    // Semantic
    --success: #1f8a65;
    --error: #cf2d56;

   ------------------------------------------------------------

   (3) Shadcn -> editorial remap — paste inside `:root`
       (replace the starter's standalone shadcn default values):

    --background: var(--canvas);
    --foreground: var(--ink);
    --card: var(--surface-card);
    --card-foreground: var(--ink);
    --popover: var(--surface-card);
    --popover-foreground: var(--ink);
    --secondary: var(--surface-strong);
    --secondary-foreground: var(--ink);
    --muted: var(--canvas-soft);
    --muted-foreground: var(--body);
    --accent: var(--hairline-soft);
    --accent-foreground: var(--ink);
    --destructive: var(--error);
    --border: var(--hairline);
    --input: var(--hairline);
    --ring: var(--hairline-strong);

   ============================================================ */

// --- Site header ----------------------------------------------------------
// components/site-header.tsx — primary + mobile nav.
export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Approach", href: "#process" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
] as const

export const HERO = {
  eyebrow: "SOFTWARE ENGINEER · NIT ROURKELA",
  headline: ["I build systems that", "make software work."],
  description:
    "I'm Kuldeep, an engineer interested in backend systems, distributed architecture, and AI-powered applications. I work primarily with Java, Spring Boot, and modern full-stack technologies, turning complex workflows into software that is practical and reliable.",
} as const

export const WORK_INTRO = {
  period: "Selected projects",
  title: "Systems built across backend engineering, distributed workflows, and full-stack development.",
} as const

export const CONTACT_COPY = {
  title: "Interested in the systems behind a product?",
  body: "I enjoy working on backend systems, distributed workflows, and full-stack products where careful engineering makes a practical difference.",
  linkLabel: "Connect on LinkedIn",
  link: "https://www.linkedin.com/in/kuldeep-singh-rajput2004/",
  resumeLabel: "View my resume",
  resume:
    "https://drive.google.com/file/d/1tDALlrGO4HgrsrXFu4H3Ft8MBGGKBa_F/view?usp=sharing",
  emailLabel: "Email me",
  email: "mailto:banakuldeep200@gmail.com",
} as const

// --- Practice strip -------------------------------------------------------
// components/practice-strip.tsx — the thin band of practice areas.
export const PRACTICE_AREAS = [
  { k: "01", v: "Backend Engineering" },
  { k: "02", v: "Distributed Systems" },
  { k: "03", v: "Full-Stack Development" },
  { k: "04", v: "Data & Messaging" },
  { k: "05", v: "Testing & Reliability" },
] as const

// --- Selected work --------------------------------------------------------
// components/selected-work.tsx — the project carousel.
export type Project = {
  index: string
  title: string
  description: string
  year: string
  status: string
  tags: readonly string[]
  href?: string
  image: string
  imageAlt: string
}

export const PROJECTS: readonly Project[] = [
  {
    index: "01",
    title: "Smart Crop System",
    description:
      "A crop advisory and management system with separate farmer, officer, and admin workflows. The application combines authenticated access, relational data modeling, REST APIs, and Gemini-powered crop guidance.",
    year: "—",
    status: "Project",
    tags: ["Java", "Spring Boot", "PostgreSQL", "React", "JWT", "Gemini API"],
    image: "/assets/projects/interior-design-platform.png",
    imageAlt:
      "Smart Crop System project visual.",
  },
  {
    index: "02",
    title: "Cortex.AI",
    description:
      "An AI application organized as three services, with multi-agent orchestration through LangGraph and integrations with external model and search providers. It also includes session and usage management across the application stack.",
    year: "—",
    status: "Project",
    tags: ["React", "Node.js", "Express", "LangGraph", "MongoDB", "Redis", "Docker"],
    image: "/assets/projects/automation-agent-systems.png",
    imageAlt:
      "Cortex.AI project visual.",
  },
  {
    index: "03",
    title: "Event-Driven Food Ordering Platform",
    description:
      "A food-ordering system split across four services and connected with Kafka. The design uses Saga and Outbox patterns to coordinate service work, with JUnit, Mockito, and Testcontainers supporting automated verification.",
    year: "—",
    status: "Project",
    tags: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "Testcontainers"],
    image: "/assets/projects/headshot-generator.png",
    imageAlt:
      "Event-driven food ordering platform project visual.",
  },
  {
    index: "04",
    title: "BraynAI",
    description:
      "A full-stack AI SaaS platform with React and Tailwind on the client, an Express and Node.js API, and MongoDB persistence through Mongoose. It combines Gemini article, blog-title, and PDF resume review workflows with ClipDrop image generation, Cloudinary media handling, JWT and email-verification auth, Razorpay payments, markdown content, and a community image feed with likes.",
    year: "—",
    status: "Featured Project",
    tags: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "Cloudinary", "Razorpay"],
    href: "https://github.com/kuldeepbana200/BraynAi",
    image: "/assets/projects/braynai-project.svg",
    imageAlt: "BraynAI workspace illustration showing its AI tools and SaaS architecture.",
  },
]

// --- Capabilities ---------------------------------------------------------
// components/capabilities.tsx — the three practice cards. Cards map to the
// icons in components/capability-icons.tsx by position.
export const CAPABILITIES = [
  {
    num: "— 01",
    title: "Backend Engineering",
    body: "Backend services built around clear APIs, sound data models, and predictable behavior across integrations and failure cases.",
    items: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "JPA / Hibernate",
    ],
  },
  {
    num: "— 02",
    title: "Distributed Systems",
    body: "Service-oriented workflows and event-driven communication with attention to consistency, retries, and the boundaries between services.",
    items: [
      "Apache Kafka",
      "Saga pattern",
      "Outbox pattern",
      "Docker",
    ],
  },
  {
    num: "— 03",
    title: "Data & Full-Stack Development",
    body: "Relational data modeling and responsive product interfaces that make complex workflows usable from end to end.",
    items: [
      "PostgreSQL",
      "React",
      "Node.js",
      "SQL",
    ],
  },
] as const

// --- Approach -------------------------------------------------------------
// components/approach.tsx — the four ordered process steps.
export const APPROACH_STEPS = [
  {
    k: "— Step 01",
    t: "Understand the problem",
    d: "Clarify the users, workflow, constraints, and failure cases before choosing a technical solution.",
  },
  {
    k: "— Step 02",
    t: "Design the system",
    d: "Shape the data model, service boundaries, API contracts, and messaging flow so the system is understandable before implementation.",
  },
  {
    k: "— Step 03",
    t: "Implement and test",
    d: "Build in small increments, then use unit, integration, and end-to-end tests to validate behavior at the boundaries that matter.",
  },
  {
    k: "— Step 04",
    t: "Improve reliability",
    d: "Use logs, tests, and observed failure modes to remove fragile paths and make the system easier to operate and change.",
  },
] as const

// --- Stack ----------------------------------------------------------------
// components/stack.tsx — the editor-mockup panes. Each item is [name, tag].
export const STACK_PANES = [
  {
    title: "Backend Engineering",
    items: [
      ["Java", "language"],
      ["Spring Boot", "framework"],
      ["REST APIs", "service boundary"],
      ["JPA / Hibernate", "persistence"],
    ],
  },
  {
    title: "Data & Messaging",
    items: [
      ["PostgreSQL", "database"],
      ["SQL", "query language"],
      ["Apache Kafka", "messaging"],
      ["MongoDB", "document store"],
    ],
  },
  {
    title: "Full-Stack Development",
    items: [
      ["React", "library"],
      ["Node.js", "runtime"],
      ["Express", "framework"],
      ["JavaScript", "language"],
    ],
  },
  {
    title: "Delivery & Testing",
    items: [
      ["Docker", "containerization"],
      ["JUnit", "unit testing"],
      ["Mockito", "test doubles"],
      ["Testcontainers", "integration testing"],
      ["Git", "version-control"],
    ],
  },
] as const

// --- About ----------------------------------------------------------------
// components/contact.tsx (About band) — the meta definition list. [key, value].
export const ABOUT_META = [
  ["Education", "B.Tech ECE · NIT Rourkela"],
  ["CGPA", "9.37"],
  ["Practice", "Backend & Full-Stack Engineering"],
  ["Experience", "BNY Mellon"],
  ["Projects", "Cortex.AI · Smart Crop · Event Platform"],
  ["Leadership", "Training & Placement · Film & Music · A&C Club"],
] as const

// --- About Text -----------------------------------------------------------
// components/about.tsx — main about paragraph.
export const ABOUT = {
  text: "I'm Kuldeep Singh Rajput, a B.Tech student in Electronics and Communication Engineering at NIT Rourkela, where I maintain a 9.37 CGPA. My experience at BNY Mellon has taken me through test automation, deployment workflows, and Kafka tuning, while projects such as Cortex.AI, Smart Crop System, and an event-driven food platform have deepened my interest in backend systems, distributed architecture, and AI-powered applications.",
} as const

// --- Site footer ----------------------------------------------------------
// components/site-footer.tsx — link columns. Each link is [label, href].
export const FOOTER_COLUMNS = [
  {
    title: "Site",
    links: [
      ["Work", "#work"],
      ["Capabilities", "#capabilities"],
      ["Approach", "#process"],
      ["Stack", "#stack"],
      ["About", "#about"],
    ],
  },
  {
    title: "Contact",
    links: [
      ["LinkedIn ↗", "https://www.linkedin.com/in/kuldeep-singh-rajput2004/"],
      ["Email ↗", "mailto:banakuldeep200@gmail.com"],
    ],
  },
] as const

// --- Experience -----------------------------------------------------------
// components/experience.tsx — professional history entries.
export type Experience = {
  role: string
  company: string
  period: string
  description: string
}

export const EXPERIENCE: readonly Experience[] = [
  {
    role: "Software Development Engineer Intern",
    company: "BNY Mellon",
    period: "May–July 2026",
    description: "Built Zephyr Scale and Jira REST API test-automation workflows, then packaged test execution and result publishing into a reusable CI/CD pipeline. Automated FastPath RFC deployment workflows, reducing approvals from seven days to under one hour. Also tuned Apache Kafka topics and concurrent consumer configurations to improve messaging throughput.",
  },
]

export const LEADERSHIP = [
  {
    role: "Training Coordinator",
    company: "Training & Placement Cell, NIT Rourkela",
    period: "NIT Rourkela",
    description: "Coordinated student-facing training and placement activities alongside academic and recruiting stakeholders.",
  },
  {
    role: "Dean's Nominee",
    company: "Film & Music Society, NIT Rourkela",
    period: "August 2025–August 2026",
    description: "Represented student interests in the society's coordination and decision-making work.",
  },
  {
    role: "President",
    company: "Analytics & Consulting Club, NIT Rourkela",
    period: "May 2025–May 2026",
    description: "Led 50+ members and launched NIT Rourkela's first consulting casebook for 100+ aspirants.",
  },
] as const

// --- Open Source Contributions --------------------------------------------
// Legacy widget data is intentionally not included.
export type Contribution = {
  project: string
  description: string
  url: string
}

export const OPEN_SOURCE_CONTRIBUTIONS: readonly Contribution[] = []

// --- Beyond Code ----------------------------------------------------------
// components/beyond-code.tsx — beyond code section.
export const BEYOND_CODE = [
  {
    title: "Leadership",
    description: "I enjoy making technical ideas easier to share, whether that means coordinating a student team or turning a broad topic into a useful casebook.",
  },
  {
    title: "Systems Thinking",
    description: "I like tracing a workflow across APIs, data, messaging, and user experience instead of treating each layer as an isolated task.",
  },
  {
    title: "Clear Communication",
    description: "Good documentation and clear interfaces reduce avoidable complexity for the people who build, test, and maintain a system.",
  },
] as const


/*
Navigation Bar Variants:

type Variant = "overlay" | "solid"

const VARIANT_STYLES: Record<
  Variant,
  {
    header: string
    wordmark: string
    nav: string
    navLink: string
    action: string
    //  Hamburger / close trigger shown on small screens.
    trigger: string
    // Mobile dropdown panel surface.
    panel: string
    //  Links inside the mobile panel.
    panelLink: string
    //  Hairline divider inside the mobile panel.
    panelDivider: string
  }
> = {
  overlay: {
    header: "",
    wordmark: "text-overlay-cream",
    nav: "text-overlay-cream/95",
    navLink: "hover:text-overlay-cream",
    action:
      "border-overlay-cream/55 bg-overlay-ink/55 text-overlay-cream backdrop-blur-[6px] hover:bg-overlay-ink/70",
    trigger:
      "border-overlay-cream/55 bg-overlay-ink/55 text-overlay-cream backdrop-blur-[6px] hover:bg-overlay-ink/70",
    panel:
      "border-overlay-cream/15 bg-overlay-ink/85 text-overlay-cream backdrop-blur-xl",
    panelLink: "text-overlay-cream/85 hover:text-overlay-cream",
    panelDivider: "bg-overlay-cream/12",
  },
  solid: {
    header: "border-b border-hairline bg-canvas/85 backdrop-blur",
    wordmark: "text-ink",
    nav: "text-body",
    navLink: "hover:text-ink",
    action:
      "border-hairline-strong bg-surface-card text-ink hover:bg-surface-strong",
    trigger:
      "border-hairline-strong bg-surface-card text-ink hover:bg-surface-strong",
    panel: "border-hairline bg-canvas/95 text-ink backdrop-blur-xl",
    panelLink: "text-body hover:text-ink",
    panelDivider: "bg-hairline",
  },
}

*/