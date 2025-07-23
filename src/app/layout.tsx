import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export const metadata: Metadata = {
  title: "S.A.M.",
  description: "Stefano Altavista Web Developer",
  openGraph: {
    title: "S.A.M.",
    description: "Stefano Altavista Web Developer",
    url: "https://stefanoaltavista.com",
    siteName: "S.A.M.",
    images: [
      {
        url: "https://stefanoaltavista.com/images/this/Logo.png",
        width: 1200,
        height: 630,
        alt: "S.A.M. - Stefano Altavista Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "S.A.M.",
    description: "Stefano Altavista Web Developer",
    images: ["https://stefanoaltavista.com/images/this/Logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Background />
        {children}
        <Footer />
      </body>
    </html>
  );
}
