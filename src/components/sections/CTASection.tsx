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
  { title: "Visa Info", icon: FileText },
  { title: "Lead Tracking", icon: BadgeCheck },
  { title: "Follow-ups", icon: CalendarCheck },
  { title: "Secure CRM", icon: ShieldCheck },
];

const demoItems = [
  "Module overview and feature explanation",
  "Consultancy workflow discussion",
  "Pricing and setup guidance",
  "Customization options for your office",
];

export default function CTASection() {
  return (
    <section
      id="request-demo"
      className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.10),transparent_35%)]" />
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] border border-white/70 bg-white/80 p-3 shadow-[0_30px_100px_rgba(15,23,42,0.12)] backdrop-blur-xl">
          <div className="overflow-hidden rounded-4xl bg-linear-to-br from-slate-950 via-blue-900 to-pink-600 p-6 text-white sm:p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-white backdrop-blur-xl">
                  <Sparkles size={16} className="text-pink-200" />
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
                        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/15"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-pink-200 ring-1 ring-white/10 transition group-hover:scale-110">
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
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-black text-slate-950 shadow-[0_20px_60px_rgba(255,255,255,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-pink-50"
                  >
                    Request Demo
                    <ArrowRight size={20} />
                  </Link>

                  <Link
                    href="#features"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-4 text-base font-black text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/15"
                  >
                    View Features
                  </Link>
                </div>
              </div>

              <div className="rounded-4xl border border-white/70 bg-white/95 p-6 text-slate-900 shadow-[0_24px_90px_rgba(15,23,42,0.20)] backdrop-blur-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-100 to-pink-100 text-blue-700">
                  <MessageCircle size={28} />
                </div>

                <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
                  Demo Includes
                </p>

                <h3 className="mt-3 text-3xl font-black leading-tight text-slate-950">
                  See how the CRM fits your office workflow.
                </h3>

                <div className="mt-6 space-y-4">
                  {demoItems.map((item) => (
                    <div key={item} className="flex gap-3">
                      <BadgeCheck
                        size={20}
                        className="mt-0.5 shrink-0 text-pink-500"
                      />
                      <p className="text-sm font-bold leading-6 text-slate-600">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-slate-100 bg-slate-50 p-5">
                  <p className="text-sm font-black text-slate-950">
                    Best for:
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Immigration consultancies, visa agencies, travel visa
                    offices, work permit processing agencies, and student visa
                    consultants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-semibold leading-7 text-slate-500">
          Immigration CRM can be customized based on your modules, staff users,
          office process, and support requirements.
        </p>
      </div>
    </section>
  );
}