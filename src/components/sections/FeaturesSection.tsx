import {
  BadgeCheck,
  BellRing,
  CalendarCheck,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquareText,
  UserRoundCheck,
  Users,
  UsersRound,
} from "lucide-react";

const features = [
  {
    title: "Visa Information Management",
    desc: "Admin can add, update, and manage countrywise visa information, required documents, processing time, fees, notes, and FAQs.",
    icon: FileText,
  },
  {
    title: "Lead Management",
    desc: "Track new inquiries from WhatsApp, calls, social media, website, or walk-in sources with lead status and assigned staff.",
    icon: BadgeCheck,
  },
  {
    title: "Follow-up Reminder System",
    desc: "Set reminders for leads, missing documents, payments, appointments, passport collection, and client updates.",
    icon: BellRing,
  },
  {
    title: "Visitor Management",
    desc: "Record office walk-in visitors, visit purpose, interested country, visa type, handled staff, and remarks.",
    icon: UsersRound,
  },
  {
    title: "Client Management",
    desc: "Manage confirmed clients, personal details, visa interest, assigned consultant, application notes, and activity history.",
    icon: Users,
  },
  {
    title: "Appointment Management",
    desc: "Schedule office consultation, VFS, embassy, biometric, medical, interview, document, and passport collection appointments.",
    icon: CalendarCheck,
  },
  {
    title: "Payment Management",
    desc: "Track service fees, paid amount, due balance, payment method, receipt number, payment status, and payment remarks.",
    icon: CreditCard,
  },
  {
    title: "Staff Management",
    desc: "Manage staff accounts, roles, access permissions, assigned tasks, and team activity from the admin dashboard.",
    icon: UserRoundCheck,
  },
];

const previewItems = [
  "Countrywise visa database",
  "Lead status tracking",
  "Client follow-up reminders",
  "Appointment scheduling",
  "Payment and due tracking",
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute -left-30 top-20 h-80 w-80 rounded-full bg-primary-light/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-accent-light/80 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-black text-primary shadow-sm">
            <LayoutDashboard size={16} />
            CRM Features
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-text-main sm:text-5xl">
            Everything your immigration consultancy needs in one organized CRM.
          </h2>

          <p className="mt-6 text-base leading-8 text-text-muted sm:text-lg">
            Immigration CRM gives your team the tools to manage visa
            information, leads, visitors, clients, appointments, payments, and
            staff with a clean and professional workflow.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-4xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary-light to-accent-light text-primary transition group-hover:scale-105">
                  <Icon size={26} />
                </div>

                <h3 className="text-lg font-black text-text-main">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-muted">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Preview */}
        <div className="mt-16 grid gap-8 rounded-[2.5rem] border border-border bg-white p-6 shadow-xl shadow-slate-200/70 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="rounded-4xl bg-linear-to-br from-primary to-accent p-8 text-white">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
              <MessageSquareText size={28} />
            </div>

            <p className="text-sm font-black uppercase tracking-[0.2em] text-white/70">
              Built for Visa Offices
            </p>

            <h3 className="mt-4 text-3xl font-black leading-tight">
              Simple for staff. Powerful for admins.
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/75">
              Your team can quickly add leads, check visa information, schedule
              appointments, set follow-ups, and update payment details without
              confusion.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {previewItems.map((item, index) => (
              <div
                key={item}
                className={`rounded-3xl border border-border bg-background p-5 ${
                  index === 4 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-primary">
                  <BadgeCheck size={18} />
                </div>

                <p className="text-base font-black text-text-main">{item}</p>

                <p className="mt-2 text-sm leading-6 text-text-muted">
                  Keep your consultancy operation structured, searchable, and
                  easy to manage.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}