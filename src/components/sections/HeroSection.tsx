import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CreditCard,
  FileText,
  Sparkles,
  Users,
} from "lucide-react";

const heroStats = [
  { label: "Core Modules", value: "8+" },
  { label: "CRM Focused", value: "100%" },
  { label: "Built For", value: "Visa Offices" },
];

const featurePills = [
  { label: "Visa Information", icon: FileText },
  { label: "Lead Management", icon: BadgeCheck },
  { label: "Client Management", icon: Users },
  { label: "Appointments", icon: CalendarCheck },
  { label: "Payments", icon: CreditCard },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-(--primary) px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Premium Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.20),transparent_35%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.18),transparent_35%)]" />

      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-24 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-xl">
              <Sparkles size={16} className="text-pink-300" />
              Immigration Consultancy CRM
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Manage your visa consultancy business from one powerful CRM.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Immigration CRM helps visa and immigration consultancy offices
              manage visa information, leads, follow-ups, visitors, clients,
              appointments, payments, and staff from one organized platform.
            </p>

            {/* Feature Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {featurePills.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-slate-200 backdrop-blur-xl"
                  >
                    <Icon size={16} className="text-pink-300" />
                    {item.label}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#request-demo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-(--secondary) to-(--accent) px-7 py-4 text-base font-bold text-white shadow-[0_20px_60px_rgba(236,72,153,0.28)] transition duration-300 hover:scale-[1.02]"
              >
                Request Demo
                <ArrowRight size={20} />
              </Link>

              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-xl transition hover:bg-white/15"
              >
                Explore Features
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
                >
                  <p className="text-2xl font-black text-white">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Preview */}
          <div className="relative">
            <div className="absolute -left-8 -top-8 hidden h-32 w-32 rounded-full bg-blue-500/20 blur-3xl lg:block" />

            <div className="absolute -bottom-8 -right-8 hidden h-32 w-32 rounded-full bg-pink-500/20 blur-3xl lg:block" />

            {/* Main Card */}
            <div className="relative rounded-4xl border border-white/10 bg-white/10 p-4 shadow-[0_20px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="overflow-hidden rounded-[1.75rem] bg-linear-to-br from-slate-950 via-blue-900 to-pink-600 p-6 text-white">
                {/* Header */}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-white/70">
                      CRM Dashboard
                    </p>

                    <h2 className="mt-1 text-2xl font-black">
                      Today Overview
                    </h2>
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
                    Live
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "New Leads", value: "24" },
                    { label: "Follow-ups", value: "12" },
                    { label: "Visitors", value: "08" },
                    { label: "Appointments", value: "06" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
                    >
                      <p className="text-3xl font-black">{item.value}</p>

                      <p className="mt-1 text-sm font-semibold text-white/70">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* White Card */}
                <div className="mt-6 rounded-3xl border border-white/20 bg-white p-5 text-(--text-main) shadow-2xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-black">
                        Visa Information
                      </p>

                      <p className="mt-1 text-xs font-semibold text-(--text-muted)">
                        Countrywise consultant data
                      </p>
                    </div>

                    <div className="rounded-full bg-pink-50 px-3 py-1 text-xs font-black text-pink-600">
                      Updated
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      "Work visa country details",
                      "Visit visa document checklist",
                      "Processing time and consultant notes",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-(--border) bg-slate-50 p-3"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-50 text-pink-600">
                          <BadgeCheck size={16} />
                        </div>

                        <p className="text-sm font-bold text-(--text-muted)">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -left-4 bottom-10 hidden rounded-3xl border border-white/10 bg-white/90 p-4 shadow-2xl backdrop-blur-xl lg:block">
              <p className="text-xs font-bold uppercase tracking-wide text-(--text-muted)">
                Follow-up Reminder
              </p>

              <p className="mt-1 text-lg font-black text-(--text-main)">
                Never miss a client
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}