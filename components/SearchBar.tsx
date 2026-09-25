"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    router.push(value ? `/tienda?q=${encodeURIComponent(value)}` : "/tienda");
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Buscar juegos..."
        className="w-full rounded-xl border border-[#232636] bg-[#11131a] px-4 py-2 text-sm outline-none focus:border-[#7c5cff]"
      />
    </form>
  );
}
