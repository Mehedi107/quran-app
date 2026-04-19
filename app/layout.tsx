import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  Inter,
  Amiri,
  Noto_Naskh_Arabic,
} from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/components/SettingsProvider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const amiri = Amiri({
  weight: "400",
  subsets: ["arabic"],
  variable: "--font-amiri",
});

const noto = Noto_Naskh_Arabic({
  weight: "400",
  subsets: ["arabic"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "Quran Explorer",
  description: "Quran Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      className={`${inter.className} ${amiri.variable} ${noto.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <SettingsProvider>
          <Navbar />
          {children}
        </SettingsProvider>
      </body>
    </html>
  );
}
