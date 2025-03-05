import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import JsonLd from "@/components/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sota Stack - Minnesota Custom Software Development",
  description: "Minnesota-based custom software company specializing in websites, cloud hosting, and custom software solutions for businesses of all sizes. Founded by Minnesota natives with over 20 years combined experience.",
  keywords: "software development, cloud hosting, web development, Minnesota tech, custom software, Sota Stack, Minneapolis web development, St. Paul software, Minnesota developers, Adam Worden, Steve Dockendorf",
  authors: [
    { name: "Adam Worden" },
    { name: "Steve Dockendorf" }
  ],
  creator: "Sota Stack",
  publisher: "Sota Stack",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://sotastack.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sotastack.com",
    title: "Sota Stack - Minnesota Custom Software Development",
    description: "Custom websites, cloud hosting, and software solutions built by Minnesota developers for local businesses. Over 20 years of combined experience.",
    siteName: "Sota Stack",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sota Stack - Minnesota Custom Software Development",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sota Stack - Minnesota Custom Software Development",
    description: "Custom websites, cloud hosting, and software solutions built by Minnesota developers for local businesses.",
    images: ["/twitter-image.jpg"],
    creator: "@sotastack",
  },
  verification: {
    google: "google-site-verification-code", // Add your verification code when you have one
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
