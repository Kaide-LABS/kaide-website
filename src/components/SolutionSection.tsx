"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleUp } from "@/lib/animations";

export default function SolutionSection() {
  return (
    <section id="architecture" className="px-6 py-28 lg:py-36">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-16 text-center">
          <motion.p
            variants={fadeUp}
            className="mb-4 font-mono text-xs tracking-widest text-accent uppercase"
          >
            Our Architecture
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            The Self-Auditing Architecture.{" "}
            <span className="text-accent">Delivered in Days, Not Months.</span>
          </motion.h2>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Node diagram */}
          <motion.div
            variants={scaleUp}
            className="w-full max-w-md mx-auto rounded-2xl border border-border bg-card/50 overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Architecture.png" alt="Multi-agent architecture diagram" className="w-full h-auto" />
          </motion.div>

          {/* Text content */}
          <div className="space-y-8">
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-muted"
            >
              Kaide specializes in designing and deploying deterministic,
              multi-agent AI systems. Instead of relying on a single prompt, we
              build asynchronous workflows where AI agents audit their own work
              before it ever reaches the end-user.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-muted"
            >
              We specialize in deploying custom multi-agent layer architectures.
              Because every enterprise bottleneck is different, the specific
              layers, agents, and auditing mechanisms are custom-engineered to
              fit the exact requirements of your project.
            </motion.p>

            {/* Velocity card */}
            <motion.div
              variants={scaleUp}
              className="rounded-2xl border border-accent/30 bg-accent/5 p-8"
            >
              <p className="font-mono text-xs tracking-widest text-accent uppercase">
                Velocity Without Compromise
              </p>
              <p className="mt-4 text-5xl font-bold tracking-tight text-accent">
                7–10{" "}
                <span className="text-lg font-normal text-muted">
                  Days to Production
                </span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                You get the extreme speed of agile AI development combined with
                the rigorous stability and QA of a senior engineering team,
                ensuring zero compromise on quality.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
