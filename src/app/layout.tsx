import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { FloatingNav } from "@/components/ui/navbar";
import { navItems } from "@/utils/nav-items";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leonardo Malini Coradini",
  description: "...",
  keywords: [
    "Web",
    "FrontEnd Portfolio",
    "Malini",
    "Coradini",
    "React Portfolio",
    "Front Porfolio",
    "FrontEnd Developer",
    "FrontEnd Developer Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          <main className="min-h-screen flex flex-col gap-6  items-center justify-center space-y-12 px-10 py-10 pt-20 md:pt-32">
            {children}
            <Analytics />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
