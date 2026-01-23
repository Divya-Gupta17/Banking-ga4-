import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "SecureBank - Your Trusted Financial Partner",
  description: "Leading banking solutions for personal loans, home loans, and savings accounts with competitive rates and trusted service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
