"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/format";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearCart();
    setDone(true);
  }

  if (done) {
    return (
      <section className="rounded-2xl border border-[#232636] bg-[#11131a] p-8">
        <h1 className="text-3xl font-bold">Pedido confirmado</h1>
        <p className="mt-2 text-[#9aa3b8]">
          Recibirás las claves en tu correo en unos minutos.
        </p>
        <Link href="/tienda" className="mt-6 inline-block text-[#22d3ee]">
          Seguir comprando
        </Link>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="rounded-2xl border border-[#232636] bg-[#11131a] p-8">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="mt-2 text-[#9aa3b8]">Tu carrito está vacío.</p>
        <Link href="/tienda" className="mt-4 inline-block text-[#22d3ee]">
          Volver a la tienda
        </Link>
      </section>
    );
  }

  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_300px]">
      <form
        onSubmit={onSubmit}
        className="space-y-4 rounded-2xl border border-[#232636] bg-[#11131a] p-6"
      >
        <h1 className="text-3xl font-bold">Checkout</h1>
        <label className="block text-sm">
          Nombre
          <input
            required
            name="name"
            className="mt-1 w-full rounded-xl border border-[#232636] bg-[#07080c] px-3 py-2"
          />
        </label>
        <label className="block text-sm">
          Email
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-xl border border-[#232636] bg-[#07080c] px-3 py-2"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-xl bg-[#7c5cff] px-4 py-3 font-semibold"
        >
          Pagar {formatPrice(subtotal)}
        </button>
      </form>
      <aside className="h-fit rounded-2xl border border-[#232636] bg-[#11131a] p-5">
        <h2 className="font-semibold">Resumen</h2>
        <ul className="mt-3 space-y-2 text-sm text-[#9aa3b8]">
          {items.map((item) => (
            <li key={item.game.id} className="flex justify-between">
              <span>
                {item.game.title} × {item.quantity}
              </span>
              <span>{formatPrice(item.game.price * item.quantity)}</span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
