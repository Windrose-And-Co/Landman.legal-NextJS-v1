import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { navbarItems } from "./navbarItems";
import Footer from "./components/Footer";
import { inter, hind, montserrat, lora, saira } from './fonts';

export const metadata: Metadata = {
  title: {
    default: "Landman Legal - The Law Office of Nathaniel Landman, LLC | Professional and experienced tax, estate, estate planning, and small business matters law firm in St. Louis, MO",
    template: "%s | Landman Legal"
  },
  description: "Landman Legal helps you get the best tax, estate, estate planning, and small business matters help from an experienced law firm with a strong track record in tax settlement, past due, and estate planning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${hind.variable} ${montserrat.variable} ${lora.variable} ${saira.variable}`}>
      <body className={`bg-dark-blue text-light-grey min-h-screen flex flex-col font-sans`}>
        <Navbar items={navbarItems} />
        <main className="flex-grow py-16 rounded-xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
