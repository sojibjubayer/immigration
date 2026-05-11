import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Benefits", href: "/benefits" },
  { label: "Pricing", href: "/pricing" },
  { label: "Request Demo", href: "/request-demo" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

const featureLinks = [
  "Visa Information",
  "Lead Management",
  "Follow-up Reminders",
  "Client Management",
  "Payment Tracking",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.16),transparent_35%)]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1.2fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-pink-500 text-lg font-black text-white shadow-lg shadow-pink-500/20">
                CRM
              </div>

              <div>
                <p className="text-xl font-black tracking-tight">
                  Immigration CRM
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-400">
                  by Samira Cloud
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              A modern CRM system designed for immigration and visa consultancy
              offices to manage visa information, leads, follow-ups, visitors,
              clients, appointments, payments, and staff in one organized
              platform.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {["f", "IG", "in"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  aria-label={item}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-black text-slate-300 transition hover:-translate-y-1 hover:border-pink-400/40 hover:bg-white/10 hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em]">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-slate-400 transition hover:text-pink-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em]">
              Features
            </h3>

            <ul className="mt-5 space-y-3">
              {featureLinks.map((item) => (
                <li key={item} className="text-sm font-semibold text-slate-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em]">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              {[
                {
                  title: "Email",
                  value: "info@samiracloud.com",
                  icon: Mail,
                  color: "text-blue-300",
                },
                {
                  title: "Phone",
                  value: "+974 7129 4020",
                  icon: Phone,
                  color: "text-pink-300",
                },
                {
                  title: "Location",
                  value: "Doha, Qatar",
                  icon: MapPin,
                  color: "text-blue-300",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-3">
                    <Icon className={`mt-0.5 shrink-0 ${item.color}`} size={18} />
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-white">
                        {item.title}
                      </p>
                      <p className="wrap-break-word text-sm text-slate-400">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <Link
                href="/request-demo"
                className="inline-flex w-full justify-center rounded-full bg-linear-to-r from-blue-600 to-pink-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-pink-500/20 transition hover:-translate-y-1 hover:shadow-xl sm:w-auto"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Immigration CRM. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4">
            {companyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold transition hover:text-pink-300"
              >
                {link.label}
              </Link>
            ))}

            <span className="font-semibold">Powered by Samira Cloud</span>
          </div>
        </div>
      </div>
    </footer>
  );
}