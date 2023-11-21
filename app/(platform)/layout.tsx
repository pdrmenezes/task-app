import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "../(marketing)/_components/navbar";
import { Footer } from "../(marketing)/_components/footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <div className="h-screen bg-slate-100">
        <Navbar />
        <main className="h-full">{children}</main>
        <Footer />
      </div>
    </ClerkProvider>
  );
}
