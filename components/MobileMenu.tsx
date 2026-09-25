"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/data/categories";
import SearchBar from "@/components/SearchBar";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-40 rounded-full bg-[#7c5cff] px-4 py-3 font-semibold shadow-lg lg:hidden"
      >
        Menú
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 bg-black/70 lg:hidden">
          <div className="absolute inset-y-0 right-0 w-[min(90%,360px)] bg-[#11131a] p-5">
            <div className="mb-4 flex items-center justify-between">
              <strong>Navegación</strong>
              <button type="button" onClick={() => setOpen(false)}>
                Cerrar
              </button>
            </div>
            <SearchBar />
            <nav className="mt-4 grid gap-2 text-sm">
              <Link href="/" onClick={() => setOpen(false)}>
                Inicio
              </Link>
              <Link href="/tienda" onClick={() => setOpen(false)}>
                Tienda
              </Link>
              <Link href="/carrito" onClick={() => setOpen(false)}>
                Carrito
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/tienda?categoria=${category.slug}`}
                  onClick={() => setOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
