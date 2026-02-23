"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-28 lg:py-36">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Upgrade Your <span className="text-accent">AI Architecture.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-lg text-muted"
        >
          Let&apos;s discuss your enterprise bottleneck.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <a
            href="mailto:hafeedh@kaide.live"
            className="inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-light"
          >
            Email Us
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-8 font-mono text-xs text-muted"
        >
          hafeedh@kaide.live &middot; Global / Remote
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-12 text-xs text-muted/50"
        >
          &copy; {new Date().getFullYear()} Kaide AI. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
}
