"use client";

import type { CartItem as CartItemType } from "@/lib/cart";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/format";

export default function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <article className="flex gap-3 rounded-2xl border border-[#232636] bg-[#07080c] p-3">
      <div
        className="h-16 w-20 shrink-0 rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${item.game.image})` }}
      />
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold">{item.game.title}</h3>
        <p className="text-sm text-[#9aa3b8]">
          {formatPrice(item.game.price)} × {item.quantity}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={() => updateQuantity(item.game.id, item.quantity - 1)}
            className="h-7 w-7 rounded-md border border-[#232636]"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            type="button"
            onClick={() => updateQuantity(item.game.id, item.quantity + 1)}
            className="h-7 w-7 rounded-md border border-[#232636]"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => removeFromCart(item.game.id)}
            className="ml-auto text-xs text-[#9aa3b8]"
          >
            Quitar
          </button>
        </div>
      </div>
    </article>
  );
}
