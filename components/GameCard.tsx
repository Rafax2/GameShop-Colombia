"use client";

import Link from "next/link";
import type { Game } from "@/data/games";
import { useCart } from "@/components/CartProvider";
import { formatPrice, formatRating } from "@/lib/format";
import { getDiscount } from "@/lib/utils";

export default function GameCard({ game }: { game: Game }) {
  const { addToCart } = useCart();
  const discount = getDiscount(game.price, game.originalPrice);

  return (
    <article className="overflow-hidden rounded-2xl border border-[#232636] bg-[#11131a]">
      <Link href={`/juegos/${game.slug}`} className="block">
        <div
          className="h-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${game.image})` }}
        />
      </Link>
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold">
            <Link href={`/juegos/${game.slug}`}>{game.title}</Link>
          </h3>
          <span className="text-sm text-[#22d3ee]">{formatRating(game.rating)}</span>
        </div>
        <p className="text-xs uppercase tracking-wide text-[#9aa3b8]">
          {game.platform} · {game.category}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold">{formatPrice(game.price)}</p>
            {game.originalPrice ? (
              <p className="text-xs text-[#9aa3b8] line-through">
                {formatPrice(game.originalPrice)}
                {discount > 0 ? ` · -${discount}%` : ""}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={() => addToCart(game)}
            className="rounded-lg bg-[#7c5cff] px-3 py-2 text-sm font-semibold"
          >
            Añadir
          </button>
        </div>
      </div>
    </article>
  );
}
