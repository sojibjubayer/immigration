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
    value: "+974 7129 4020",
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
      className="relative overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.10),transparent_35%)]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-black text-blue-600 shadow-sm">
              <MessageCircle size={16} />
              Contact Us
            </div>

            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Ready to discuss your immigration CRM requirement?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:mt-6 sm:text-lg">
              Contact us to request a demo, discuss features, ask about pricing,
              or customize the CRM based on your visa consultancy workflow.
            </p>

            <div className="mt-8 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex gap-4 rounded-3xl border border-white/70 bg-white/85 p-4 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_20px_60px_rgba(236,72,153,0.10)] sm:rounded-[1.75rem] sm:p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-100 to-pink-100 text-blue-700 transition duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-black text-slate-950">
                        {item.title}
                      </p>

                      <p className="mt-1 wrap-break-word text-sm font-bold text-blue-600 sm:text-base">
                        {item.value}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-[1.75rem] bg-linear-to-br from-slate-950 via-blue-900 to-pink-600 p-6 text-white shadow-[0_24px_80px_rgba(236,72,153,0.18)] sm:rounded-4xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl">
                <Building2 size={24} />
              </div>

              <h3 className="text-xl font-black sm:text-2xl">
                Built for immigration and visa consultancy offices.
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75">
                From leads to payments, Immigration CRM helps your team manage
                daily office operations in one clean and professional system.
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/70 bg-white/90 p-5 shadow-[0_24px_90px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:rounded-4xl sm:p-6 lg:p-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
                Send Message
              </p>

              <h3 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
                Request more information
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Fill out the form and we will contact you with demo details and
                CRM setup information.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-bold text-slate-900"
                  >
                    Full Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-bold text-slate-900"
                  >
                    Phone / WhatsApp
                  </label>

                  <input
                    id="contact-phone"
                    type="text"
                    placeholder="+974..."
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-bold text-slate-900"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="company-name"
                  className="mb-2 block text-sm font-bold text-slate-900"
                >
                  Company / Consultancy Name
                </label>

                <input
                  id="company-name"
                  type="text"
                  placeholder="Your consultancy name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-bold text-slate-900"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your CRM requirement..."
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-pink-500 px-7 py-4 text-base font-black text-white shadow-[0_20px_60px_rgba(236,72,153,0.20)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(236,72,153,0.28)]"
              >
                Send Message
                <Send size={20} />
              </button>

              <p className="text-center text-xs font-semibold leading-6 text-slate-500">
                This form is for demo and CRM information requests only.
              </p>
            </form>

            <div className="mt-6 text-center">
              <Link
                href="#request-demo"
                className="text-sm font-black text-pink-600 transition hover:text-pink-700"
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