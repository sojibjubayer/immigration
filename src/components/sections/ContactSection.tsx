import Link from "next/link";
import {
  Building2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const contactItems = [
  {
    title: "Email",
    value: "info@samiracloud.com",
    desc: "Send us your CRM requirement",
    icon: Mail,
  },
  {
    title: "Phone / WhatsApp",
    value: "+974 0000 0000",
    desc: "Contact for demo and pricing",
    icon: Phone,
  },
  {
    title: "Location",
    value: "Doha, Qatar",
    desc: "CRM solution for consultancy offices",
    icon: MapPin,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute -lef-35 top-10 h-80 w-80 rounded-full bg-primary-light/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -right-35 h-80 w-80 rounded-full bg-accent-light/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light px-4 py-2 text-sm font-black text-primary">
              <MessageCircle size={16} />
              Contact Us
            </div>

            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-text-main sm:text-5xl">
              Ready to discuss your immigration CRM requirement?
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-text-muted sm:text-lg">
              Contact us to request a demo, discuss features, ask about pricing,
              or customize the CRM based on your visa consultancy workflow.
            </p>

            <div className="mt-8 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-3xl border border-border bg-background p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-primary-light to-accent-light text-primary">
                      <Icon size={22} />
                    </div>

                    <div>
                      <p className="text-sm font-black text-text-main">
                        {item.title}
                      </p>
                      <p className="mt-1 text-base font-bold text-primary">
                        {item.value}
                      </p>
                      <p className="mt-1 text-sm text-text-muted">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-4xl border border-border bg-linear-to-br from-primary to-accent p-6 text-white shadow-xl shadow-primary/15">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <Building2 size={24} />
              </div>

              <h3 className="text-2xl font-black">
                Built for immigration and visa consultancy offices.
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75">
                From leads to payments, Immigration CRM helps your team manage
                daily office operations in one clean and professional system.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-4xl border border-border bg-white p-6 shadow-2xl shadow-slate-200/80 lg:p-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">
                Send Message
              </p>
              <h3 className="mt-3 text-3xl font-black text-text-main">
                Request more information
              </h3>
              <p className="mt-3 text-sm leading-7 text-text-muted">
                Fill out the form and we will contact you with demo details and
                CRM setup information.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-bold text-text-main"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold text-text-main outline-none transition placeholder:text-text-muted focus:border-primary focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-bold text-text-main"
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    id="contact-phone"
                    type="text"
                    placeholder="+974..."
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold text-text-main outline-none transition placeholder:text-text-muted focus:border-primary focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-bold text-text-main"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold text-text-main outline-none transition placeholder:text-text-muted focus:border-primary focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="company-name"
                  className="mb-2 block text-sm font-bold text-text-main"
                >
                  Company / Consultancy Name
                </label>
                <input
                  id="company-name"
                  type="text"
                  placeholder="Your consultancy name"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold text-text-main outline-none transition placeholder:text-text-muted focus:border-primary focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-bold text-text-main"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your CRM requirement..."
                  className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold text-text-main outline-none transition placeholder:text-text-muted focus:border-primary focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-black text-white shadow-xl shadow-primary/20 transition hover:bg-primary-dark"
              >
                Send Message
                <Send size={20} />
              </button>

              <p className="text-center text-xs font-semibold leading-6 text-text-muted">
                This form is for demo and CRM information requests only.
              </p>
            </form>

            <div className="mt-6 text-center">
              <Link
                href="#request-demo"
                className="text-sm font-black text-accent transition hover:text-accent-dark"
              >
                Or request a demo directly →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}