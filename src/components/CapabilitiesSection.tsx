"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  FileSearch,
  Mic,
  ArrowUpCircle,
  Rocket,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import CaseStudyModal, { type CaseStudyDetail } from "./CaseStudyModal";

const capabilities = [
  {
    icon: FileSearch,
    title: "AI Lease Portfolio Analyser",
    tag: "Commercial Real Estate",
    body: "Engineered a three-agent AI pipeline (extraction, validation, synthesis) that ingests 2\u201320 PDF leases, extracts structured clause data across 12 categories, cross-references terms across the portfolio, and surfaces quantified savings opportunities with deterministic risk scoring.",
    label: "Case Study: Lease Portfolio Analysis",
  },
  {
    icon: ShieldCheck,
    title: "AI Anti-Cheat Interview Platform",
    tag: "HR Tech & Recruitment",
    body: "Built a live coding interview platform with a 10-layer behavioral detection engine that analyses keystroke velocity, rhythm, cursor linearity, and focus patterns in real-time. Includes adaptive per-candidate baselines, webcam telemetry via automated vision AI, auto-interrogation, and a forensic recruiter dashboard with session replay.",
    label: "Case Study: Interview Integrity Platform",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing Intelligence",
    tag: "Restaurant & Food Delivery",
    body: "Built a competitive intelligence platform that automates headless browser scraping of competitor menus across delivery apps, uses AI-powered semantic category mapping to normalise inconsistent menu data, tracks pricing trends over time, and surfaces item-level price gap opportunities with ROI projections.",
    label: "Case Study: Pricing Intelligence Platform",
  },
  {
    icon: Mic,
    title: "Voice-to-Deal PWA",
    tag: "Commercial Real Estate Brokerage",
    body: "Engineered a mobile-first PWA that lets brokers speak deal details into their phone and receive structured, CRM-ready data back in under 10 seconds. Multi-model pipeline with speech-to-text transcription, multimodal extraction, and live market intelligence — plus smart badges, missing-field coaching, and one-tap LOI generation.",
    label: "Case Study: Voice-to-Deal Module",
  },
  {
    icon: ArrowUpCircle,
    title: "B2B SaaS Infrastructure Upgrades",
    tag: "Enterprise Contracts",
    body: "Upgrading existing single-prompt SaaS tools into reliable, multi-agent pipelines to secure enterprise contracts and reduce client churn.",
    label: null,
  },
  {
    icon: Rocket,
    title: "Pre-Funding Prototype Engineering",
    tag: "Seed-Stage Founders",
    body: "Partnering with founders to build technically defensible, enterprise-ready AI prototypes that secure seed funding.",
    label: null,
  },
];

const caseStudyDetails: Record<number, CaseStudyDetail> = {
  0: {
    title: "Sentinel Radar",
    tag: "Multi-Agent Lease Portfolio Analyser",
    overview:
      "In Commercial Real Estate, missing a single clause in a dense lease document results in massive financial leakage and liability. We engineered a deterministic, three-agent pipeline that ingests dense PDFs, extracts structured clause data, cross-references terms across an entire portfolio, and surfaces quantified savings opportunities — replacing single-prompt guessing with an auditable, enterprise-grade system.",
    features: [
      {
        title: "Deterministic Risk Scoring",
        description:
          "Replaced opaque AI scores with a formula-driven, auditable risk matrix — e.g., Base 50 + 25 points for no break clause + 10 points for uncapped liability.",
      },
      {
        title: "Clause Comparison Variance",
        description:
          "Interactive, side-by-side matrices that instantly highlight outlier clauses across multi-property portfolios.",
      },
      {
        title: "Quantified ROI Calculator",
        description:
          "Automatically calculates the exact monetary value of renegotiating specific flagged clauses, such as turnover rent optimization and admin fee reduction.",
      },
      {
        title: "Graceful Degradation",
        description:
          "The pipeline is fault-tolerant — if the validation layer experiences API timeouts, extraction continues, ensuring the demo never hard-crashes.",
      },
    ],
    valueProposition:
      "Transforms a manual, error-prone lease review process into a deterministic, auditable pipeline that surfaces quantified savings across an entire portfolio in minutes instead of weeks.",
  },
  1: {
    title: "Forensic Anti-Cheat Engine",
    tag: "Behavioral Telemetry for Technical Interviews",
    overview:
      "Generative AI tools have severely compromised technical recruitment. We engineered an AI-resistant, 10-layer behavioral detection engine integrated natively into a cloud-based code editor — providing defensible, audit-ready integrity verification without invasive proctoring.",
    features: [
      {
        title: "Adaptive Baselines",
        description:
          "Calibrates a unique typing and correction baseline for each candidate in the first 60 seconds, eliminating false positives for naturally fast typists.",
      },
      {
        title: "Compound Event Triggers",
        description:
          "Prevents false flags by requiring multiple detection layers to agree — e.g., Focus Loss + Bulk Insert + 0% Undo Ratio.",
      },
      {
        title: "Auto-Interrogation",
        description:
          "Automatically locks the editor and generates targeted questions about suspicious code blocks, forcing the candidate to explain their logic live.",
      },
      {
        title: "Audit-Ready Forensics",
        description:
          "Outputs a structured, highly defensible evidence chain and session replay that satisfies enterprise HR compliance requirements.",
      },
    ],
    valueProposition:
      "Gives recruiters a defensible, compliance-ready way to verify candidate integrity — without blanket AI bans or invasive Big Brother proctoring that candidates despise.",
  },
  2: {
    title: "Dynamic Pricing Intelligence",
    tag: "Multi-Tenant F&B Data Orchestration",
    overview:
      "The food and beverage industry suffers from a severe data silo problem. We engineered a headless data ingestion and semantic mapping pipeline that bypasses closed APIs, normalises unstructured competitor data at scale, and surfaces actionable pricing opportunities.",
    features: [
      {
        title: "Automated Gap Identification",
        description:
          "An analytical engine that compares the operator's menu against normalised market data, flagging specific items priced more than 10% below local averages.",
      },
      {
        title: "ROI Projection Calculator",
        description:
          "Translates identified pricing gaps into concrete annual revenue projections based on operator volume, proving the software's ROI instantly.",
      },
      {
        title: "Semantic Category Mapping",
        description:
          "Uses advanced semantic embeddings with cosine similarity to map wildly inconsistent competitor menu categories into unified canonical categories.",
      },
      {
        title: "Asynchronous Alerting",
        description:
          "Tracks 30-day and 90-day price trends and fires specific alerts when competitors alter pricing or remove items.",
      },
    ],
    valueProposition:
      "Replaces guesswork-based cost-plus pricing with data-driven competitive intelligence, unlocking revenue opportunities that operators couldn't previously see.",
  },
  3: {
    title: "Voice Commander",
    tag: "AI-Native CRE Deal Intelligence PWA",
    overview:
      "A rapidly scaling Commercial Real Estate CRM startup needed a mobile-first field tool to bridge the gap between field intelligence and CRM entry. We deployed a Sidecar PWA that converts voice memos and photos into structured, CRM-ready deal data in seconds.",
    features: [
      {
        title: "Zero-Friction CRM Entry",
        description:
          "Converts a rambling 60-second voice memo into structured, 10-point JSON deal data instantly — no manual typing required.",
      },
      {
        title: "Missing Field Detection",
        description:
          "A quality-gate algorithm that flags critical missing data like Square Footage or Rent and prompts the broker before saving.",
      },
      {
        title: "Smart Badges",
        description:
          "Keyword triggers automatically tag deals with visual priority badges such as Urgent or Motivated Seller.",
      },
      {
        title: "Automated Document Drafting",
        description:
          "One-click client-side PDF generation of Letters of Intent and follow-up emails using extracted deal variables.",
      },
    ],
    valueProposition:
      "Eliminates the friction between field intelligence and CRM data entry, letting brokers capture deal details on the move without slowing down their workflow.",
  },
};

export default function CapabilitiesSection() {
  const [activeStudy, setActiveStudy] = useState<CaseStudyDetail | null>(null);

  return (
    <section id="capabilities" className="px-6 py-28 lg:py-36">
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
            What We Build
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            Built for <span className="text-accent">High-Stakes</span> Data.
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((cap, i) => {
            const isClickable = i in caseStudyDetails;
            return (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                className={`group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/30 hover:bg-card-hover${isClickable ? " cursor-pointer" : ""}`}
                onClick={
                  isClickable
                    ? () => setActiveStudy(caseStudyDetails[i])
                    : undefined
                }
              >
                <div className="mb-4 flex items-center gap-3">
                  <cap.icon size={20} className="text-accent" />
                  <span className="font-mono text-xs tracking-wider text-accent uppercase">
                    {cap.tag}
                  </span>
                </div>

                {cap.label && (
                  <p className="mb-2 inline-block rounded-full border border-accent/20 bg-accent/5 px-3 py-0.5 font-mono text-[10px] tracking-wider text-accent uppercase">
                    {cap.label}
                  </p>
                )}

                <h3 className="text-xl font-semibold text-foreground">
                  {cap.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {cap.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <CaseStudyModal
        study={activeStudy}
        onClose={() => setActiveStudy(null)}
      />
    </section>
  );
}
