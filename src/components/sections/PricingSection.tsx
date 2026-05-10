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
    price: "Custom",
    desc: "Best for small visa consultancy offices starting with organized lead and client management.",
    badge: "For Small Offices",
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
    price: "Custom",
    desc: "Best for growing immigration offices that need complete CRM features and staff workflow.",
    badge: "Most Popular",
    featured: true,
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
    price: "Custom",
    desc: "Best for multi-branch agencies that need advanced setup, custom modules, and priority support.",
    badge: "For Agencies",
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
      className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute -left-35 top-10 h-80 w-80 rounded-full bg-accent-light/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-35 bottom-10 h-80 w-80 rounded-full bg-primary-light/80 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-black text-primary shadow-sm">
            <CreditCard size={16} />
            Flexible Pricing
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-text-main sm:text-5xl">
            Choose a CRM plan based on your consultancy size and workflow.
          </h2>

          <p className="mt-6 text-base leading-8 text-text-muted sm:text-lg">
            Immigration CRM pricing can be customized based on your office size,
            number of staff, required modules, and support needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricingCards.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-4xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                plan.featured
                  ? "border-primary bg-linear-to-br from-primary to-accent text-white shadow-primary/20"
                  : "border-border bg-white text-text-main"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-wide text-primary shadow-lg">
                  Recommended
                </div>
              )}

              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black ${
                  plan.featured
                    ? "bg-white/20 text-white"
                    : "bg-primary-light text-primary"
                }`}
              >
                <Sparkles size={16} />
                {plan.badge}
              </div>

              <h3 className="text-2xl font-black">{plan.name}</h3>

              <div className="mt-4 flex items-end gap-2">
                <p className="text-5xl font-black">{plan.price}</p>
                <p
                  className={`pb-2 text-sm font-bold ${
                    plan.featured ? "text-white/70" : "text-text-muted"
                  }`}
                >
                  pricing
                </p>
              </div>

              <p
                className={`mt-5 text-sm leading-7 ${
                  plan.featured ? "text-white/75" : "text-text-muted"
                }`}
              >
                {plan.desc}
              </p>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <CheckCircle2
                      size={20}
                      className={
                        plan.featured
                          ? "mt-0.5 shrink-0 text-white"
                          : "mt-0.5 shrink-0 text-primary"
                      }
                    />
                    <p
                      className={`text-sm font-bold ${
                        plan.featured ? "text-white" : "text-text-main"
                      }`}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="#request-demo"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-black transition ${
                  plan.featured
                    ? "bg-white text-primary hover:bg-primary-light"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                Request Demo
              </Link>
            </div>
          ))}
        </div>

        {/* Included Features */}
        <div className="mt-16 rounded-[2.5rem] border border-border bg-white p-6 shadow-xl shadow-slate-200/70 lg:p-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary-light to-accent-light text-primary">
                <ShieldCheck size={28} />
              </div>

              <h3 className="text-3xl font-black leading-tight text-text-main">
                Every plan can be customized for your office.
              </h3>

              <p className="mt-4 text-sm leading-7 text-text-muted">
                You can start with the most important modules first and add more
                features later as your consultancy grows.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {pricingFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent">
                    <BadgeCheck size={18} />
                  </div>

                  <p className="text-sm font-bold text-text-main">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-sm leading-7 text-text-muted">
            Pricing depends on setup, customization, number of staff users,
            modules, hosting, and support requirements. Request a demo to get a
            suitable package for your consultancy.
          </p>
        </div>
      </div>
    </section>
  );
}