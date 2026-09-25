"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/categories";
import { platforms } from "@/data/platforms";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, string> = {
  accion: "⚔",
  rpg: "◈",
  aventura: "🗺",
  shooter: "✦",
  deportes: "⚽",
  carreras: "🏎",
  estrategia: "♟",
  horror: "☠",
};

const platformIcons: Record<string, string> = {
  pc: "▣",
  playstation: "◉",
  xbox: "✕",
  nintendo: "◆",
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-full max-w-[240px] shrink-0 rounded-2xl border border-white/[0.07] bg-[#0b1020]/90 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:block">

      {/* HEADER */}
      <div className="mb-5">
        <div className="mb-1 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#7c5cff]/15 text-[#8b5cff]">
            ✦
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Explorar
          </p>
        </div>

        <p className="pl-9 text-[11px] text-[#69738c]">
          Encuentra tu próximo juego
        </p>
      </div>

      {/* CATEGORIES */}
      <div>
        <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#69738c]">
          Categorías
        </p>

        <nav className="space-y-1">
          <Link
            href="/tienda"
            className={cn(
              "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200",
              pathname === "/tienda"
                ? "bg-[#7c5cff]/15 text-white shadow-[inset_2px_0_0_#7c5cff]"
                : "text-[#9aa3b8] hover:bg-white/[0.04] hover:text-white",
            )}
          >
            <span
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-lg text-xs transition-colors",
                pathname === "/tienda"
                  ? "bg-[#7c5cff]/20 text-[#8b5cff]"
                  : "bg-white/[0.04] text-[#69738c] group-hover:text-white",
              )}
            >
              ◈
            </span>

            <span className="flex-1">Todos los juegos</span>

            {pathname === "/tienda" && (
              <span className="h-1.5 w-1.5 rounded-full bg-[#8b5cff] shadow-[0_0_8px_#8b5cff]" />
            )}
          </Link>

          {categories.map((category) => {
            const isActive =
              pathname === "/tienda" &&
              false;

            return (
              <Link
                key={category.id}
                href={`/tienda?categoria=${category.slug}`}
                className={cn(
                  "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[#9aa3b8] transition-all duration-200",
                  "hover:bg-white/[0.04] hover:text-white",
                  isActive && "bg-[#7c5cff]/15 text-white",
                )}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.035] text-xs text-[#69738c] transition-all duration-200 group-hover:bg-[#7c5cff]/10 group-hover:text-[#8b5cff]">
                  {categoryIcons[category.slug] ?? "•"}
                </span>

                <span className="flex-1">{category.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* DIVIDER */}
      <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* PLATFORMS */}
      <div>
        <div className="mb-2 flex items-center justify-between px-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#69738c]">
            Plataformas
          </p>

          <span className="text-[10px] text-[#4f5870]">
            {platforms.length}
          </span>
        </div>

        <nav className="space-y-1">
          {platforms.map((platform) => (
            <Link
              key={platform.id}
              href={`/tienda?plataforma=${platform.slug}`}
              className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[#9aa3b8] transition-all duration-200 hover:bg-white/[0.04] hover:text-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.035] text-xs text-[#69738c] transition-all duration-200 group-hover:bg-[#00d9ff]/10 group-hover:text-[#00d9ff]">
                {platformIcons[platform.slug] ?? "•"}
              </span>

              <span className="flex-1">{platform.name}</span>

              <span className="text-[#3f475b] transition-colors group-hover:text-[#69738c]">
                →
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* BOTTOM PROMO */}
      <div className="mt-5 overflow-hidden rounded-xl border border-[#7c5cff]/10 bg-gradient-to-br from-[#7c5cff]/10 via-[#2563ff]/5 to-transparent p-3">
        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#7c5cff]/10 text-[#8b5cff]">
          ✦
        </div>

        <p className="text-xs font-semibold text-white">
          ¿Buscas algo específico?
        </p>

        <p className="mt-1 text-[10px] leading-relaxed text-[#69738c]">
          Explora nuestro catálogo y encuentra tu próximo juego.
        </p>
      </div>
    </aside>
  );
}