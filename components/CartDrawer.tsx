"use client";

import Link from "next/link";
import CartItem from "@/components/CartItem";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/format";

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70">
      <aside className="absolute inset-y-0 right-0 flex w-[min(100%,420px)] flex-col bg-[#11131a]">
        <div className="flex items-center justify-between border-b border-[#232636] p-4">
          <h2 className="text-lg font-bold">Carrito</h2>
          <button type="button" onClick={closeCart}>
            Cerrar
          </button>
        </div>
        <div className="flex-1 space-y-3 overflow-auto p-4">
          {items.length === 0 ? (
            <p className="text-[#9aa3b8]">El carrito está vacío.</p>
          ) : (
            items.map((item) => <CartItem key={item.game.id} item={item} />)
          )}
        </div>
        <div className="border-t border-[#232636] p-4">
          <p className="mb-3 font-semibold">Total {formatPrice(subtotal)}</p>
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/carrito"
              onClick={closeCart}
              className="rounded-xl border border-[#232636] px-4 py-3 text-center"
            >
              Ver carrito
            </Link>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="rounded-xl bg-[#7c5cff] px-4 py-3 text-center font-semibold"
            >
              Checkout
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
