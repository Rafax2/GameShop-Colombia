"use client";

import { useCart } from "@/components/CartProvider";

export default function CartButton() {
  const { totalItems, toggleCart } = useCart();

  return (
    <button
      type="button"
      onClick={toggleCart}
      className="relative rounded-xl border border-[#232636] px-3 py-2 text-sm"
    >
      Carrito
      {totalItems > 0 ? (
        <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-[#7c5cff] px-1 text-xs">
          {totalItems}
        </span>
      ) : null}
    </button>
  );
}
