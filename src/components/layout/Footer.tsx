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
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-accent text-lg font-black text-white shadow-lg shadow-primary/20">
                CRM
              </div>

              <div>
                <p className="text-xl font-black tracking-tight text-text-main">
                  Immigration CRM
                </p>
                <p className="mt-1 text-sm font-semibold text-text-muted">
                  by Samira Cloud
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-text-muted">
              A modern CRM system designed for immigration and visa consultancy
              offices to manage visa information, leads, follow-ups, visitors,
              clients, appointments, payments, and staff in one organized
              platform.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm font-black text-text-muted transition hover:border-primary hover:bg-primary-light hover:text-primary"
              >
                f
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm font-black text-text-muted transition hover:border-accent hover:bg-accent-light hover:text-accent"
              >
                IG
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm font-black text-text-muted transition hover:border-primary hover:bg-primary-light hover:text-primary"
              >
                in
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-text-main">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-text-muted transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-text-main">
              Features
            </h3>

            <ul className="mt-5 space-y-3">
              {featureLinks.map((item) => (
                <li
                  key={item}
                  className="text-sm font-semibold text-text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-text-main">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex gap-3">
                <Mail className="mt-0.5 text-primary" size={18} />
                <div>
                  <p className="text-sm font-bold text-text-main">Email</p>
                  <p className="text-sm text-text-muted">
                    info@samiracloud.com
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-0.5 text-accent" size={18} />
                <div>
                  <p className="text-sm font-bold text-text-main">Phone</p>
                  <p className="text-sm text-text-muted">+974 0000 0000</p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-0.5 text-primary" size={18} />
                <div>
                  <p className="text-sm font-bold text-text-main">Location</p>
                  <p className="text-sm text-text-muted">Doha, Qatar</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/request-demo"
                className="inline-flex rounded-full bg-linear-to-r from-primary to-accent px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:shadow-xl"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Immigration CRM. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {companyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold transition hover:text-primary"
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