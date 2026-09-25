"use client";

import Link from "next/link";
import CartItem from "@/components/CartItem";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/format";

export default function CarritoPage() {
  const { items, subtotal, clearCart } = useCart();

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tu carrito</h1>
        {items.length > 0 ? (
          <button
            type="button"
            onClick={clearCart}
            className="text-sm text-[#9aa3b8] hover:text-white"
          >
            Vaciar
          </button>
        ) : null}
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-[#232636] bg-[#11131a] p-8">
          <p className="text-[#9aa3b8]">Todavía no hay juegos en el carrito.</p>
          <Link href="/tienda" className="mt-4 inline-block text-[#22d3ee]">
            Ir a la tienda
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <div className="space-y-3">
            {items.map((item) => (
              <CartItem key={item.game.id} item={item} />
            ))}
          </div>
          <aside className="h-fit rounded-2xl border border-[#232636] bg-[#11131a] p-5">
            <p className="text-[#9aa3b8]">Subtotal</p>
            <p className="mt-1 text-2xl font-bold">{formatPrice(subtotal)}</p>
            <Link
              href="/checkout"
              className="mt-4 block rounded-xl bg-[#7c5cff] px-4 py-3 text-center font-semibold"
            >
              Ir al checkout
            </Link>
          </aside>
        </div>
      )}
    </section>
  );
}
