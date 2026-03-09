// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ce fichier gère le style général
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greathem Lab | Excellence & Technologie",
  description: "Boutique officielle de ressources numériques de haute qualité.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* Le CartProvider permet au panier de fonctionner sur tout le site */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}