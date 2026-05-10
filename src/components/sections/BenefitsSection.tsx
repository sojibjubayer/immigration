import {
  BellRing,
  BriefcaseBusiness,
  CheckCircle2,
  Clock,
  FileCheck2,
  ShieldCheck,
  TrendingUp,
  Users2,
} from "lucide-react";

const benefits = [
  {
    title: "Save Staff Time",
    desc: "Keep visa information, leads, clients, appointments, and payments organized in one CRM instead of using many spreadsheets.",
    icon: Clock,
  },
  {
    title: "Reduce Missed Follow-ups",
    desc: "Track reminders for leads, documents, payments, appointments, and client updates so your team never forgets important actions.",
    icon: BellRing,
  },
  {
    title: "Improve Consultant Accuracy",
    desc: "Consultants can quickly check countrywise visa requirements, documents, process steps, and important notes during consultation.",
    icon: FileCheck2,
  },
  {
    title: "Manage Leads Professionally",
    desc: "Record every inquiry from WhatsApp, calls, social media, website, or walk-in visitors and track them until conversion.",
    icon: TrendingUp,
  },
  {
    title: "Organize Client Records",
    desc: "Store client information, interested country, visa type, application status, remarks, and assigned staff in one place.",
    icon: Users2,
  },
  {
    title: "Track Payments Clearly",
    desc: "Manage service fees, paid amounts, due amounts, payment status, receipt details, and payment history easily.",
    icon: ShieldCheck,
  },
];

const highlights = [
  "Less manual paperwork",
  "Better staff coordination",
  "Clear client communication",
  "Faster daily operation",
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-primary-light/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-light/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left Content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-light px-4 py-2 text-sm font-black text-accent">
              <BriefcaseBusiness size={16} />
              CRM Benefits
            </div>

            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-text-main sm:text-5xl">
              Designed to make visa consultancy work faster, cleaner, and more
              professional.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-text-muted sm:text-lg">
              Immigration CRM helps your office reduce manual work, organize
              client data, improve follow-ups, and give consultants quick access
              to accurate visa information.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary">
                    <CheckCircle2 size={18} />
                  </div>

                  <p className="text-sm font-bold text-text-main">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-4xl border border-border bg-linear-to-br from-primary to-accent p-6 text-white shadow-xl shadow-primary/15">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                Business Impact
              </p>

              <h3 className="mt-3 text-2xl font-black">
                More organized office. Better follow-up. Higher conversion.
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75">
                A structured CRM helps your team work with confidence and gives
                your consultancy a more professional client management process.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className={`rounded-4xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                    index === 1 || index === 4 ? "sm:translate-y-8" : ""
                  }`}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary-light to-accent-light text-primary">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-black text-text-main">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-text-muted">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}