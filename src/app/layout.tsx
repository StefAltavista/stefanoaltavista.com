import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
const Background = dynamic(() => import("@/components/Background"), {
    ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "S.A.M.",
    description: "Stefano Altavista Web Developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Background />

                {children}
                <Footer />
            </body>
        </html>
    );
}
