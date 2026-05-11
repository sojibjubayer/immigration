import Link from "next/link";
import {
  BadgeCheck,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const pricingFeatures = [
  "Visa information management",
  "Lead management",
  "Follow-up reminders",
  "Visitor management",
  "Client management",
  "Appointment management",
  "Payment tracking",
  "Staff management",
  "Role-based access",
  "Basic reporting dashboard",
];

const pricingCards = [
  {
    name: "Starter",
    price: "499",
    currency: "QAR",
    period: "/ month",
    setup: "Setup from QAR 1,500",
    desc: "For small visa consultancy offices that need lead, visitor, client, and follow-up management.",
    badge: "Small Office",
    users: "Up to 3 staff users",
    features: [
      "Lead management",
      "Visitor management",
      "Client management",
      "Follow-up reminders",
      "Basic payment tracking",
    ],
  },
  {
    name: "Professional",
    price: "899",
    currency: "QAR",
    period: "/ month",
    setup: "Setup from QAR 2,500",
    desc: "For growing immigration offices that need complete CRM workflow with staff and appointment management.",
    badge: "Most Popular",
    featured: true,
    users: "Up to 8 staff users",
    features: [
      "Everything in Starter",
      "Visa information management",
      "Appointment management",
      "Staff management",
      "Role-based access",
      "Dashboard reports",
    ],
  },
  {
    name: "Enterprise",
    price: "1,499+",
    currency: "QAR",
    period: "/ month",
    setup: "Custom setup quotation",
    desc: "For agencies that need custom modules, multi-branch setup, advanced reports, and priority support.",
    badge: "Agency Plan",
    users: "Unlimited / custom users",
    features: [
      "Everything in Professional",
      "Custom module setup",
      "Multi-branch support",
      "Advanced reporting",
      "Priority support",
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.06),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.08),transparent_38%)]" />

      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-sm font-bold text-blue-600 shadow-sm">
            <CreditCard size={16} />
            Qatar Market Pricing
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Simple CRM pricing for immigration consultancy offices in Qatar.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Choose a monthly package based on your office size, staff users,
            required modules, and support needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingCards.map((plan) => (
            <div
              key={plan.name}
              className={`group relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.featured
                  ? "border-blue-600 bg-slate-900 text-white shadow-xl"
                  : "border-slate-200 bg-white text-slate-900 hover:border-blue-200"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-blue-600 to-pink-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  Recommended
                </div>
              )}

              <div
                className={`inline-flex w-fit items-center gap-2 rounded-lg px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                  plan.featured
                    ? "bg-white/10 text-blue-200"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                <Sparkles size={14} />
                {plan.badge}
              </div>

              <h3 className="mt-5 text-2xl font-bold">{plan.name}</h3>

              <p
                className={`mt-1 text-sm font-medium ${
                  plan.featured ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {plan.users}
              </p>

              <div className="mt-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold uppercase">
                    {plan.currency}
                  </span>

                  <span className="text-5xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>

                  <span
                    className={`text-sm font-medium ${
                      plan.featured ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <p
                  className={`mt-2 text-sm font-bold ${
                    plan.featured ? "text-pink-300" : "text-blue-600"
                  }`}
                >
                  {plan.setup}
                </p>
              </div>

              <p
                className={`mt-6 text-sm leading-relaxed ${
                  plan.featured ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {plan.desc}
              </p>

              <div className="mt-8 flex flex-1 flex-col gap-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className={`mt-0.5 shrink-0 ${
                        plan.featured ? "text-pink-300" : "text-blue-600"
                      }`}
                    />

                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="#request-demo"
                className={`mt-auto flex w-full items-center justify-center rounded-xl px-6 py-4 text-sm font-bold transition-all duration-200 ${
                  plan.featured
                    ? "bg-white text-slate-950 hover:bg-pink-50"
                    : "bg-linear-to-r from-blue-600 to-pink-500 text-white shadow-lg shadow-pink-500/20 hover:scale-[1.02]"
                }`}
              >
                Request Demo
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-100 to-pink-100 text-blue-600">
                <ShieldCheck size={32} />
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                Fully customizable for your specific workflow.
              </h3>

              <p className="mt-4 text-lg text-slate-600">
                Start with core modules and expand as your team grows. We tailor
                the platform to match how your office actually operates.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {pricingFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:border-blue-200"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                    <BadgeCheck size={16} />
                  </div>

                  <span className="text-sm font-semibold text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-slate-500">
            *Pricing indicated is for standard SaaS subscriptions. Final
            investment may vary based on on-premise hosting, data migration,
            WhatsApp API integration, custom reporting, and support
            requirements.
          </p>
        </div>
      </div>
    </section>
  );
}