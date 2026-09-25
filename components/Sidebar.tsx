"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/categories";
import { platforms } from "@/data/platforms";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-fit rounded-2xl border border-[#232636] bg-[#11131a] p-4 lg:block">
      <p className="mb-3 text-xs uppercase tracking-widest text-[#9aa3b8]">
        Explorar
      </p>
      <nav className="space-y-1 text-sm">
        <Link
          href="/tienda"
          className={cn(
            "block rounded-lg px-3 py-2",
            pathname === "/tienda" && "bg-[#7c5cff]/20 text-[#7c5cff]",
          )}
        >
          Todos los juegos
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/tienda?categoria=${category.slug}`}
            className="block rounded-lg px-3 py-2 hover:bg-white/5"
          >
            {category.name}
          </Link>
        ))}
      </nav>
      <p className="mb-3 mt-6 text-xs uppercase tracking-widest text-[#9aa3b8]">
        Plataformas
      </p>
      <nav className="space-y-1 text-sm">
        {platforms.map((platform) => (
          <Link
            key={platform.id}
            href={`/tienda?plataforma=${platform.slug}`}
            className="block rounded-lg px-3 py-2 hover:bg-white/5"
          >
            {platform.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
