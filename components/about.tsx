"use client";

import { motion } from "framer-motion"
import { ABOUT } from "@/lib/content"
import { cn } from "@/lib/utils"

export default function About() {
  return (
    <motion.section
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
      viewport={{ once: true, margin: "-200px" }}
      id="about"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="text-center mb-12">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          About Me
        </motion.h2>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="prose prose-invert max-w-none"
      >
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {ABOUT.text}
        </motion.p>
      </motion.div>
    </motion.section>
  )
}