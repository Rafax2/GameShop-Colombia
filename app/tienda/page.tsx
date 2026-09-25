import GameGrid from "@/components/GameGrid";
import { games } from "@/data/games";

type SearchParams = Promise<{ categoria?: string; plataforma?: string; q?: string }>;

export default async function TiendaPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const filtered = games.filter((game) => {
    const byCategory = !params.categoria || game.category === params.categoria;
    const byPlatform = !params.plataforma || game.platform === params.plataforma;
    const byQuery =
      !params.q || game.title.toLowerCase().includes(params.q.toLowerCase());
    return byCategory && byPlatform && byQuery;
  });

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm text-[#9aa3b8]">Catálogo</p>
        <h1 className="text-3xl font-bold">Tienda GameVerse</h1>
      </div>
      <GameGrid games={filtered} />
    </section>
  );
}
