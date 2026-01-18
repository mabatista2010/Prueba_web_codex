import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";

export const metadata: Metadata = {
  title: {
    default: "Sportiva | Tienda deportiva moderna",
    template: "%s | Sportiva",
  },
  description:
    "Sportiva es la tienda deportiva moderna para running, fitness, fútbol y outdoor. Equipo premium, envíos rápidos y asesoría experta.",
  metadataBase: new URL("https://sportiva.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
