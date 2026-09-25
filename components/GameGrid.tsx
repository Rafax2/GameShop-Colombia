import type { Game } from "@/data/games";
import GameCard from "@/components/GameCard";

export default function GameGrid({ games }: { games: Game[] }) {
  if (games.length === 0) {
    return (
      <p className="rounded-2xl border border-[#232636] bg-[#11131a] p-8 text-[#9aa3b8]">
        No hay juegos para este filtro.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
