"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export interface CaseStudyDetail {
  title: string;
  tag: string;
  overview: string;
  features: { title: string; description: string }[];
  valueProposition: string;
}

interface CaseStudyModalProps {
  study: CaseStudyDetail | null;
  onClose: () => void;
}

export default function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (study) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [study]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {study && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 backdrop-blur-sm px-4 py-12 sm:py-20"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-3xl rounded-2xl border border-border bg-card p-8 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/30 hover:text-foreground"
            >
              <X size={16} />
            </button>

            <p className="mb-2 font-mono text-xs tracking-widest text-accent uppercase">
              {study.tag}
            </p>
            <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {study.title}
            </h3>

            <p className="mt-6 text-base leading-relaxed text-muted">
              {study.overview}
            </p>

            <div className="mt-8 space-y-4">
              <p className="font-mono text-xs tracking-widest text-accent uppercase">
                Key Capabilities
              </p>
              {study.features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-border bg-background/50 p-5"
                >
                  <div className="flex items-start gap-3">
                    <ChevronRight
                      size={16}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{f.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {f.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-6">
              <p className="font-mono text-xs tracking-widest text-accent uppercase">
                Core Value
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {study.valueProposition}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
