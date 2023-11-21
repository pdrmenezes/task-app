import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

export const metadata: Metadata = {
  title: "Home",
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en" className="h-screen bg-slate-100">
      <Navbar />
      <main className="bg-slate-100 pb-20 pt-40">{children}</main>
      <Footer />
    </div>
  );
}
