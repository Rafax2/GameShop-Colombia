import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "GameShop Colombia — Tienda de videojuegos",
  description: "Compra juegos digitales en Colombia para PC, PlayStation, Xbox y Nintendo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <Header />
          <div className="container-gv grid gap-6 py-6 lg:grid-cols-[240px_1fr]">
            <Sidebar />
            <main className="min-w-0">{children}</main>
          </div>
          <Footer />
          <MobileMenu />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
