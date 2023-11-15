import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "./_components/navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="en" className="h-screen bg-slate-100">
      <Navbar />
      <main className="bg-slate-100 pb-20 pt-40">{children}</main>
    </div>
  );
}
