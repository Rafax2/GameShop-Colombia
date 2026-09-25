import Link from "next/link";
import type { Game } from "@/data/games";
import { formatPrice } from "@/lib/format";

export default function HeroBanner({ game }: { game: Game }) {
  return (
    <article
      className="relative min-h-[320px] overflow-hidden rounded-3xl bg-cover bg-center"
      style={{ backgroundImage: `url(${game.image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-end p-8">
        <p className="text-sm uppercase tracking-widest text-[#22d3ee]">Destacado</p>
        <h2 className="mt-1 text-4xl font-black">{game.title}</h2>
        <p className="mt-2 max-w-xl text-[#d5d9e6]">{game.description}</p>
        <div className="mt-5 flex items-center gap-4">
          <span className="text-xl font-bold">{formatPrice(game.price)}</span>
          <Link
            href={`/juegos/${game.slug}`}
            className="rounded-xl bg-[#7c5cff] px-4 py-2 font-semibold"
          >
            Ver juego
          </Link>
        </div>
      </div>
    </article>
  );
}
