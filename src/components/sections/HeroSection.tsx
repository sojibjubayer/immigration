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
  {
    label: "Core Modules",
    value: "8+",
  },
  {
    label: "CRM Focused",
    value: "100%",
  },
  {
    label: "Built For",
    value: "Visa Offices",
  },
];

const featurePills = [
  {
    label: "Visa Information",
    icon: FileText,
  },
  {
    label: "Lead Management",
    icon: BadgeCheck,
  },
  {
    label: "Client Management",
    icon: Users,
  },
  {
    label: "Appointments",
    icon: CalendarCheck,
  },
  {
    label: "Payments",
    icon: CreditCard,
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-35 -top-35 h-96 w-96 rounded-full bg-primary-light blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-24 h-96 w-96 rounded-full bg-accent-light blur-3xl" />
      <div className="pointer-events-none absolute -bottom-45 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary-light/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-bold text-primary shadow-sm">
              <Sparkles size={16} />
              Immigration Consultancy CRM
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-text-main sm:text-5xl lg:text-6xl">
              Manage your visa consultancy business from one powerful CRM.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
              Immigration CRM helps visa and immigration consultancy offices
              manage visa information, leads, follow-ups, visitors, clients,
              appointments, payments, and staff from one organized platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {featurePills.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-bold text-text-muted shadow-sm"
                  >
                    <Icon size={16} className="text-primary" />
                    {item.label}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#request-demo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold text-white shadow-xl shadow-primary/20 transition hover:bg-primary-dark"
              >
                Request Demo
                <ArrowRight size={20} />
              </Link>

              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white px-7 py-4 text-base font-bold text-text-main shadow-sm transition hover:border-accent hover:text-accent"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-border bg-white p-4 shadow-sm"
                >
                  <p className="text-2xl font-black text-text-main">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Preview Card */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-3xl bg-primary/10 lg:block" />
            <div className="absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-3xl bg-accent/10 lg:block" />

            <div className="relative rounded-4xl border border-border bg-white p-4 shadow-2xl shadow-slate-200/80">
              <div className="overflow-hidden rounded-3xl bg-linear-to-br from-primary to-accent p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white/70">
                      CRM Dashboard
                    </p>
                    <h2 className="mt-1 text-2xl font-black">
                      Today Overview
                    </h2>
                  </div>

                  <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-bold backdrop-blur">
                    Live
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      label: "New Leads",
                      value: "24",
                    },
                    {
                      label: "Follow-ups",
                      value: "12",
                    },
                    {
                      label: "Visitors",
                      value: "08",
                    },
                    {
                      label: "Appointments",
                      value: "06",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-3xl bg-white/15 p-5 backdrop-blur"
                    >
                      <p className="text-3xl font-black">{item.value}</p>
                      <p className="mt-1 text-sm font-semibold text-white/75">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl bg-white p-5 text-text-main">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-black">Visa Information</p>
                      <p className="mt-1 text-xs font-semibold text-text-muted">
                        Countrywise consultant data
                      </p>
                    </div>

                    <div className="rounded-full bg-primary-light px-3 py-1 text-xs font-black text-primary">
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
                        className="flex items-center gap-3 rounded-2xl border border-border bg-background p-3"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-light text-accent">
                          <BadgeCheck size={16} />
                        </div>
                        <p className="text-sm font-bold text-text-muted">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 bottom-10 hidden rounded-3xl border border-border bg-white p-4 shadow-xl lg:block">
              <p className="text-xs font-bold uppercase tracking-wide text-text-muted">
                Follow-up Reminder
              </p>
              <p className="mt-1 text-lg font-black text-text-main">
                Never miss a client
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}