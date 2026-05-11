"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  BellRing,
  BriefcaseBusiness,
  CheckCircle2,
  Clock,
  FileCheck2,
  ShieldCheck,
  TrendingUp,
  Users2,
  LucideIcon
} from "lucide-react";

// --- Types ---
interface Benefit {
  title: string;
  desc: string;
  icon: LucideIcon;
}

// --- Data ---
const benefits: Benefit[] = [
  {
    title: "Save Staff Time",
    desc: "Keep visa information, leads, clients, and payments organized in one CRM instead of messy spreadsheets.",
    icon: Clock,
  },
  {
    title: "Reduce Missed Follow-ups",
    desc: "Track reminders for leads and documents so your team never forgets an important client action.",
    icon: BellRing,
  },
  {
    title: "Improve Accuracy",
    desc: "Consultants can quickly check country-specific visa requirements and process steps during consultation.",
    icon: FileCheck2,
  },
  {
    title: "Manage Leads",
    desc: "Record every inquiry from WhatsApp, calls, or social media and track them until conversion.",
    icon: TrendingUp,
  },
  {
    title: "Organize Records",
    desc: "Store client information, application status, and remarks in one centralized, secure place.",
    icon: Users2,
  },
  {
    title: "Track Payments",
    desc: "Manage service fees, paid amounts, and payment history with automated receipt details.",
    icon: ShieldCheck,
  },
];

const highlights: string[] = [
  "Less manual paperwork",
  "Better staff coordination",
  "Clear client communication",
  "Faster daily operation",
];

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      {/* Visual Background Accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_35%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-125 w-125 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.05),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          
          {/* Left Column: Typography & Impact */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white px-4 py-2 text-sm font-bold text-pink-600 shadow-sm">
              <BriefcaseBusiness size={16} />
              CRM Benefits
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Professional tools for <span className="text-blue-600">Visa Experts.</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Our CRM helps your office reduce manual work, organize
              client data, and gives consultants instant access to accurate visa protocols.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/50 p-3 backdrop-blur-sm transition-all hover:border-blue-300"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Dark Impact Card */}
            <div className="mt-12 rounded-[2.5rem] bg-slate-900 p-10 text-white shadow-2xl transition-transform hover:scale-[1.02]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-400">
                Business Growth
              </p>
              <h3 className="mt-4 text-2xl font-bold leading-snug">
                More organization. <br />Higher conversions.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Stop losing leads in spreadsheets. A structured process gives 
                your consultancy the professional edge needed to win trust.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Benefits Grid */}
          <motion.div
            className="grid gap-6 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              // Desktop staggered effect: shifts the second column down slightly
              const desktopOffset = index % 2 !== 0 ? "lg:translate-y-10" : "";

              return (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className={`group relative flex flex-col rounded-4xl border border-slate-200 bg-white p-8 shadow-sm transition-colors hover:border-blue-400 hover:shadow-xl ${desktopOffset}`}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-3">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-500">
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}