"use client";

import { motion } from "framer-motion"
import { PROJECTS } from "@/lib/content"
import { cn } from "@/lib/utils"

export default function Work() {
  return (
    <motion.section
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
      viewport={{ once: true, margin: "-200px" }}
      id="work"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="text-center mb-12">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Selected Work
        </motion.h2>
      </div>

      <div className="grid gap-12">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.index}
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-b border-hairline pb-8 last:border-b-0 last:pb-0"
          >
            <div className="flex items-start gap-6">
              {/* Project number */}
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-shrink-0 text-muted-soft text-base font-mono"
              >
                {project.index}
              </motion.div>

              {/* Project content */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex-1 space-y-4"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-body">{project.description}</p>

                <div className="flex flex-wrap gap-4 mt-2">
                  <span className="inline-flex items-center gap-1 text-xs font-mono">
                    <span className="border-b border-hairline">{project.year}</span>
                    <span className="border-b border-hairline">{project.status}</span>
                  </span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 text-xs font-mono">
                      <span className="border-b border-hairline">{tag}</span>
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-baseline gap-2 text-sm">
                  <a
                    href={project.href}
                    className={cn(
                      "border-b border-hairline hover:border-body",
                      "whitespace-nowrap"
                    )}
                  >
                    GitHub
                  </a>
                  {/* Live demo link - only if available, otherwise omit */}
                </div>

                {/* Project image */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-6"
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="rounded-md border border-hairline"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}