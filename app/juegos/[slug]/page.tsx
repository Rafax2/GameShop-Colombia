import { notFound } from "next/navigation";
import GameDetails from "@/components/GameDetails";
import { getGameBySlug } from "@/data/games";

type Params = Promise<{ slug: string }>;

export default async function GamePage({ params }: { params: Params }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) notFound();

  return <GameDetails game={game} />;
}
