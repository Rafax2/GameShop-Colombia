"use client";

import type { Game } from "@/data/games";
import { useCart } from "@/components/CartProvider";
import { formatPrice, formatRating } from "@/lib/format";
import { getDiscount } from "@/lib/utils";

export default function GameDetails({ game }: { game: Game }) {
  const { addToCart } = useCart();
  const discount = getDiscount(game.price, game.originalPrice);

  return (
    <article className="overflow-hidden rounded-3xl border border-[#232636] bg-[#11131a]">
      <div
        className="h-64 bg-cover bg-center md:h-80"
        style={{ backgroundImage: `url(${game.image})` }}
      />
      <div className="grid gap-6 p-6 md:grid-cols-[1fr_280px]">
        <div>
          <p className="text-sm uppercase tracking-widest text-[#22d3ee]">
            {game.platform} · {game.category}
          </p>
          <h1 className="mt-2 text-4xl font-black">{game.title}</h1>
          <p className="mt-3 text-[#d5d9e6]">{game.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {game.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#232636] px-3 py-1 text-xs text-[#9aa3b8]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <aside className="h-fit rounded-2xl border border-[#232636] p-5">
          <p className="text-sm text-[#9aa3b8]">Valoración {formatRating(game.rating)}</p>
          <p className="mt-2 text-3xl font-bold">{formatPrice(game.price)}</p>
          {game.originalPrice ? (
            <p className="text-sm text-[#9aa3b8] line-through">
              {formatPrice(game.originalPrice)}
              {discount > 0 ? ` · -${discount}%` : ""}
            </p>
          ) : null}
          <button
            type="button"
            onClick={() => addToCart(game)}
            className="mt-4 w-full rounded-xl bg-[#7c5cff] px-4 py-3 font-semibold"
          >
            Añadir al carrito
          </button>
        </aside>
      </div>
    </article>
  );
}
