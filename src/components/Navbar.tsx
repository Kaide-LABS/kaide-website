"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Problem", href: "#problem" },
  { label: "Architecture", href: "#architecture" },
  { label: "Capabilities", href: "#capabilities" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-6 py-2">
          {/* Logo — left */}
          <a href="#" className="justify-self-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Kaide.png" alt="Kaide" className="h-20 w-auto" />
          </a>

          {/* Desktop links — centered */}
          <div className="hidden items-center justify-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right — CTA (desktop) / hamburger (mobile) */}
        <div className="flex items-center justify-self-end">
          <a
            href="mailto:hafeedh@kaide.live"
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-accent-light md:inline-block"
          >
            Request Demo
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:hafeedh@kaide.live"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-accent px-5 py-2 text-center text-sm font-medium text-background transition-colors hover:bg-accent-light"
              >
                Request Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
