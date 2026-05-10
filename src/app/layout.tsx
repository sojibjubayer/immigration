import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Immigration CRM | CRM for Visa Consultancies",
    template: "%s | Immigration CRM",
  },
  description:
    "Immigration CRM is a modern CRM system for visa and immigration consultancy offices to manage leads, clients, follow-ups, appointments, payments, and staff.",
  keywords: [
    "Immigration CRM",
    "Visa CRM",
    "Consultancy CRM",
    "Immigration consultancy software",
    "Visa consultancy management system",
    "Lead management CRM",
    "Client management CRM",
    "Samira Cloud CRM",
  ],
  openGraph: {
    title: "Immigration CRM | CRM for Visa Consultancies",
    description:
      "Manage visa information, leads, follow-ups, visitors, clients, appointments, payments, and staff from one organized CRM platform.",
    url: "https://crm.samiracloud.com",
    siteName: "Immigration CRM",
    type: "website",
  },
  alternates: {
    canonical: "https://crm.samiracloud.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}