import Link from "next/link";
import type { Platform } from "@/data/platforms";

export default function PlatformBanner({ platform }: { platform: Platform }) {
  return (
    <Link
      href={`/tienda?plataforma=${platform.slug}`}
      className="relative min-h-[160px] overflow-hidden rounded-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${platform.image})` }}
    >
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(90deg, ${platform.accent}cc, transparent)` }}
      />
      <div className="relative z-10 p-6">
        <h3 className="text-2xl font-black">{platform.name}</h3>
        <p className="mt-1 max-w-sm text-sm text-white/90">{platform.description}</p>
      </div>
    </Link>
  );
}
