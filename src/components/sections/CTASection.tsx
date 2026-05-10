import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  FileText,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const ctaFeatures = [
  {
    title: "Visa Info",
    icon: FileText,
  },
  {
    title: "Lead Tracking",
    icon: BadgeCheck,
  },
  {
    title: "Follow-ups",
    icon: CalendarCheck,
  },
  {
    title: "Secure CRM",
    icon: ShieldCheck,
  },
];

export default function CTASection() {
  return (
    <section
      id="request-demo"
      className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute -left-35 top-10 h-80 w-80 rounded-full bg-primary-light/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-35 bottom-10 h-80 w-80 rounded-full bg-accent-light/80 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.5rem] border border-border bg-white p-6 shadow-2xl shadow-slate-200/80 sm:p-8 lg:p-10">
          <div className="rounded-4xl bg-linear-to-br from-primary to-accent p-8 text-white sm:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              {/* Left Content */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-black text-white backdrop-blur">
                  <Sparkles size={16} />
                  Request CRM Demo
                </div>

                <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
                  Ready to manage your immigration consultancy smarter?
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                  Start using a CRM designed specifically for visa and
                  immigration consultancy offices. Organize leads, clients,
                  appointments, payments, follow-ups, and visa information in
                  one professional platform.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {ctaFeatures.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-3 rounded-2xl bg-white/15 p-4 backdrop-blur"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
                          <Icon size={18} />
                        </div>

                        <p className="text-sm font-black text-white">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-black text-primary shadow-xl shadow-primary/20 transition hover:bg-primary-light"
                  >
                    Request Demo
                    <ArrowRight size={20} />
                  </Link>

                  <Link
                    href="#features"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-base font-black text-white backdrop-blur transition hover:bg-white/20"
                  >
                    View Features
                  </Link>
                </div>
              </div>

              {/* Right Card */}
              <div className="rounded-4xl bg-white p-6 text-text-main shadow-2xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary-light to-accent-light text-primary">
                  <MessageCircle size={28} />
                </div>

                <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">
                  Demo Includes
                </p>

                <h3 className="mt-3 text-3xl font-black leading-tight">
                  See how the CRM fits your office workflow.
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    "Module overview and feature explanation",
                    "Consultancy workflow discussion",
                    "Pricing and setup guidance",
                    "Customization options for your office",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <BadgeCheck
                        size={20}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      <p className="text-sm font-bold leading-6 text-text-muted">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-border bg-background p-5">
                  <p className="text-sm font-black text-text-main">
                    Best for:
                  </p>
                  <p className="mt-2 text-sm leading-7 text-text-muted">
                    Immigration consultancies, visa agencies, travel visa
                    offices, work permit processing agencies, and student visa
                    consultants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-semibold leading-7 text-text-muted">
          Immigration CRM can be customized based on your modules, staff users,
          office process, and support requirements.
        </p>
      </div>
    </section>
  );
}