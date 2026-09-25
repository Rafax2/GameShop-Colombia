"use client";

import Link from "next/link";
import CartButton from "@/components/CartButton";
import SearchBar from "@/components/SearchBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#232636] bg-[#07080c]/90 backdrop-blur">
      <div className="container-gv flex items-center gap-4 py-4">
        <Link href="/" className="text-xl font-black tracking-tight">
          GAME<span className="text-[#7c5cff]">VERSE</span>
        </Link>
        <div className="hidden flex-1 md:block">
          <SearchBar />
        </div>
        <nav className="hidden items-center gap-4 text-sm md:flex">
          <Link href="/tienda">Tienda</Link>
          <Link href="/carrito">Carrito</Link>
        </nav>
        <CartButton />
      </div>
    </header>
  );
}
