import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

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
            <body>
                <Background />
                {children}
                <Footer />
            </body>
        </html>
    );
}
