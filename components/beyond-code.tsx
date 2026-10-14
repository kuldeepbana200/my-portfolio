"use client";

import { motion } from "framer-motion"
import { BEYOND_CODE } from "@/lib/content"
import { cn } from "@/lib/utils"

export default function BeyondCode() {
  return (
    <motion.section
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
      viewport={{ once: true, margin: "-200px" }}
      id="beyond-code"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="text-center mb-12">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Beyond Code
        </motion.h2>
      </div>

      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {BEYOND_CODE.map((item) => (
          <motion.div
            key={item.title}
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-hairline rounded-md p-6"
          >
            <motion.h3
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-semibold"
            >
              {item.title}
            </motion.h3>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-body"
            >
              {item.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}