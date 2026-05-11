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

const dashboardStats = [
  { label: "New Leads", value: "24" },
  { label: "Follow-ups", value: "12" },
  { label: "Visitors", value: "08" },
  { label: "Appointments", value: "06" },
];

const visaItems = [
  "Work visa country details",
  "Visit visa document checklist",
  "Processing time and consultant notes",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-(--primary) px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.20),transparent_35%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.18),transparent_35%)]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl sm:-left-40 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl sm:-right-40 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/5 blur-3xl sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="text-center lg:text-left">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-xl sm:mb-6 sm:text-sm">
              <Sparkles size={16} className="shrink-0 text-pink-300" />
              <span className="truncate">Immigration Consultancy CRM</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl lg:mx-0 lg:text-6xl">
              Manage your visa consultancy business from one powerful CRM.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
              Immigration CRM helps visa and immigration consultancy offices
              manage visa information, leads, follow-ups, visitors, clients,
              appointments, payments, and staff from one organized platform.
            </p>

            <div className="mx-auto mt-7 flex max-w-2xl flex-wrap justify-center gap-2.5 sm:mt-8 sm:gap-3 lg:mx-0 lg:justify-start">
              {featurePills.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-bold text-slate-200 backdrop-blur-xl sm:px-4 sm:text-sm"
                  >
                    <Icon size={15} className="shrink-0 text-pink-300" />
                    <span className="truncate">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4 lg:mx-0 lg:justify-start">
              <Link
                href="#request-demo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-(--secondary) to-(--accent) px-7 py-4 text-sm font-bold text-white shadow-[0_20px_60px_rgba(236,72,153,0.28)] transition duration-300 hover:scale-[1.02] sm:text-base"
              >
                Request Demo
                <ArrowRight size={20} />
              </Link>

              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/15 sm:text-base"
              >
                Explore Features
              </Link>
            </div>

            <div className="mx-auto mt-9 grid max-w-md grid-cols-1 gap-3 sm:mt-10 sm:max-w-xl sm:grid-cols-3 sm:gap-4 lg:mx-0">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-xl sm:text-left"
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

          <div className="relative mx-auto w-full max-w-md sm:max-w-xl lg:max-w-none">
            <div className="absolute -left-8 -top-8 hidden h-32 w-32 rounded-full bg-blue-500/20 blur-3xl lg:block" />
            <div className="absolute -bottom-8 -right-8 hidden h-32 w-32 rounded-full bg-pink-500/20 blur-3xl lg:block" />

            <div className="relative rounded-[1.75rem] border border-white/10 bg-white/10 p-2.5 shadow-[0_20px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-4">
              <div className="overflow-hidden rounded-[1.5rem] bg-linear-to-br from-slate-950 via-blue-900 to-pink-600 p-4 text-white sm:rounded-[1.75rem] sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white/70 sm:text-sm">
                      CRM Dashboard
                    </p>
                    <h2 className="mt-1 text-xl font-black sm:text-2xl">
                      Today Overview
                    </h2>
                  </div>

                  <div className="shrink-0 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                    Live
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
                  {dashboardStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-5"
                    >
                      <p className="text-2xl font-black sm:text-3xl">
                        {item.value}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-white/70 sm:text-sm">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-3xl border border-white/20 bg-white p-4 text-(--text-main) shadow-2xl sm:mt-6 sm:p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-black">Visa Information</p>
                      <p className="mt-1 text-xs font-semibold text-(--text-muted)">
                        Countrywise consultant data
                      </p>
                    </div>

                    <div className="w-fit rounded-full bg-pink-50 px-3 py-1 text-xs font-black text-pink-600">
                      Updated
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {visaItems.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-(--border) bg-slate-50 p-3"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-50 text-pink-600">
                          <BadgeCheck size={16} />
                        </div>

                        <p className="text-sm font-bold leading-6 text-(--text-muted)">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

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