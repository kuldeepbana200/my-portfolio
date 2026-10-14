"use client";

import { motion } from "framer-motion"
import { EXPERIENCE, LEADERSHIP } from "@/lib/content"
import { cn } from "@/lib/utils"

export default function Experience() {
  return (
    <motion.section
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
      viewport={{ once: true, margin: "-200px" }}
      id="experience"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="text-center mb-12">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Experience
        </motion.h2>
      </div>

      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-8"
      >
        {EXPERIENCE.map((exp) => (
          <motion.div
            key={exp.role}
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-l-2 border-hairline pl-4"
          >
            <motion.h3
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-semibold"
            >
              {exp.role}
            </motion.h3>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-2 text-body-strong"
            >
              {exp.company}
            </motion.p>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-1 text-muted-soft"
            >
              {exp.period}
            </motion.p>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-4 text-body"
            >
              {exp.description}
            </motion.p>
          </motion.div>

        ))}
      </motion.div>

      <div className="mt-20 mb-12 text-center">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Leadership
        </motion.h2>
      </div>

      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-8"
      >
        {LEADERSHIP.map((item) => (
          <motion.div
            key={`${item.role}-${item.company}`}
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-l-2 border-hairline pl-4"
          >
            <h3 className="text-xl font-semibold">{item.role}</h3>
            <p className="mt-2 text-body-strong">{item.company}</p>
            <p className="mt-1 text-muted-soft">{item.period}</p>
            <p className="mt-4 text-body">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}