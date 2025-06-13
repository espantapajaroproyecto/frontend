import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Exportar metadata (sin viewport ni themeColor)
export const metadata: Metadata = {
  title: "Espanta Pajaros",
  description: "N/A",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next15", "pwa", "next-pwa"],
  authors: [
    {
      name: "espantpajaros",
    },
  ],
  // Si más adelante necesitás icons, podés descomentar esta parte:
  // icons: [
  //   { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
  //   { rel: "icon", url: "icons/icon-128x128.png" },
  // ],
};

// Exportar themeColor por separado
export const themeColor = [
  { media: "(prefers-color-scheme: dark)", color: "#fff" },
];

// Exportar viewport por separado
export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
