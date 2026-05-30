import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://jasodatos.com"),
  title: {
    default: "JasoDatos | Inteligencia comercial para PYMES",
    template: "%s | JasoDatos",
  },
  description:
    "JasoDatos convierte archivos de ventas e inventario en dashboards, alertas de stock y reportes listos para tomar decisiones comerciales.",
  applicationName: "JasoDatos",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "JasoDatos | Deja de adivinar y decide con datos",
    description:
      "Sube tu archivo de ventas o inventario y obtén KPIs, stock en riesgo, productos dormidos y reportes listos para compartir.",
    url: "https://jasodatos.com",
    siteName: "JasoDatos",
    type: "website",
    locale: "es_EC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}