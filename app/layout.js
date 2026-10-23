import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "KanchanFlow - Manufacturing CRM",
    template: "%s | KanchanFlow",
  },
  description:
    "KanchanFlow is a manufacturing CRM for precision job shops and MSME contract manufacturers. Manage quotations, drawing revisions, work orders and shop-floor pipelines in one place.",
  openGraph: {
    title: "KanchanFlow - Manufacturing CRM",
    description:
      "Manufacturing CRM for precision job shops. Manage quotations, drawing revisions, work orders and shop-floor pipelines.",
    type: "website",
    siteName: "KanchanFlow",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col bg-off-white text-dark-text antialiased`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
