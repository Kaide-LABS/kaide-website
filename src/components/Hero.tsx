"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      {/* Radial gold orb */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]" />

      {/* Dot grid overlay */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 font-mono text-sm tracking-widest text-accent uppercase"
        >
          Multi-Agent AI Architecture
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Engineering Trust for{" "}
          <span className="text-accent">AI-First</span> B2B SaaS.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted"
        >
          We build multi-agent, self-auditing AI architectures that eliminate
          hallucinations and reduce liability for enterprise software.
          Engineered and deployed in{" "}
          <span className="font-semibold text-foreground">7-10 days</span> or
          you get your money back — no questions asked.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="mailto:hafeedh@kaide.live"
            className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-light"
          >
            Request a Demo
          </a>
          <a
            href="#architecture"
            className="rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:border-muted hover:bg-card"
          >
            View Architecture
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
