"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ProblemSection() {
  return (
    <section id="problem" className="px-6 py-28 lg:py-36">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 font-mono text-xs tracking-widest text-accent uppercase"
        >
          The Trust Gap
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl"
        >
          Enterprise Clients Don&apos;t Buy &ldquo;Magic.&rdquo;{" "}
          <span className="text-accent">They Buy Reliability.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-lg leading-relaxed text-muted"
        >
          For AI-first B2B SaaS companies, shipping fast is easy. But deploying
          AI into enterprise environments — where a single missed clause or
          hallucinated data point creates massive financial liability — is the
          real bottleneck.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg leading-relaxed text-muted"
        >
          Standard LLM integrations{" "}
          <span className="font-semibold text-foreground">guess</span>.
          Enterprise software needs to{" "}
          <span className="font-semibold text-foreground">know</span>. When your
          AI hallucinates, you don&apos;t just get a bad output; you churn
          high-value clients and burn your runway.
        </motion.p>
      </motion.div>
    </section>
  );
}
