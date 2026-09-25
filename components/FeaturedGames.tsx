import { getFeaturedGames } from "@/data/games";
import GameGrid from "@/components/GameGrid";

export default function FeaturedGames() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Juegos destacados</h2>
      <GameGrid games={getFeaturedGames()} />
    </section>
  );
}
