import type { Metadata } from "next"

import { Approach } from "@/components/approach"
import { Capabilities } from "@/components/capabilities"
import { Contact } from "@/components/contact"
import Experience from "@/components/experience"
import { Hero } from "@/components/hero"
import { PracticeStrip } from "@/components/practice-strip"
import { SelectedWork } from "@/components/selected-work"
import { Stack } from "@/components/stack"

const title = "Kuldeep Singh Rajput · Software Engineer"
const description =
  "Portfolio of Kuldeep Singh Rajput, a software engineer focused on backend engineering, distributed systems, and full-stack development."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Kuldeep Singh Rajput",
    locale: "en_US",
    type: "website",
  },
}

export default function Page(): React.ReactElement {
  return (
    <main className="relative">
      <Hero />
      <PracticeStrip />
      <Experience />
      <SelectedWork />
      <Capabilities />
      <Approach />
      <Stack />
      <Contact />
    </main>
  )
}
