"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="#home" className="group flex min-w-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt="Samira Cloud"
            width={42}
            height={42}
            className="h-10 w-10 rounded-xl object-contain sm:h-11 sm:w-11"
            priority
          />

          <div className="min-w-0">
            <p className="truncate text-base font-black leading-none tracking-tight text-slate-950 sm:text-lg">
              Immigration CRM
            </p>

            <p className="mt-1 truncate text-xs font-semibold text-slate-500">
              by Samira Cloud
            </p>
          </div>
        </Link>

        <div className="hidden items-center rounded-full border border-slate-200 bg-white/80 p-1 shadow-sm backdrop-blur-xl lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#request-demo"
            className="rounded-full bg-linear-to-r from-blue-600 to-pink-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-pink-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Request Demo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:bg-slate-50 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white/95 shadow-xl backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-130 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-600 transition hover:bg-linear-to-r hover:from-blue-50 hover:to-pink-50 hover:text-slate-950"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#request-demo"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-2xl bg-linear-to-r from-blue-600 to-pink-500 px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-pink-500/20"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
