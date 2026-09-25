import { platforms } from "@/data/platforms";
import PlatformBanner from "@/components/PlatformBanner";

export default function PlatformBanners() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Plataformas</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {platforms.map((platform) => (
          <PlatformBanner key={platform.id} platform={platform} />
        ))}
      </div>
    </section>
  );
}
