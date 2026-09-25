export type Game = {
  id: string;
  slug: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  platform: string;
  rating: number;
  featured: boolean;
  description: string;
  tags: string[];
};

export const games: Game[] = [
  {
    id: "1",
    slug: "elden-ring",
    title: "Elden Ring",
    price: 199900,
    originalPrice: 239900,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_hero.jpg",
    category: "rpg",
    platform: "pc",
    rating: 4.9,
    featured: true,
    description: "Explora las Tierras Intermedias en un RPG de mundo abierto de FromSoftware.",
    tags: ["mundo abierto", "souls", "acción"],
  },
  {
    id: "2",
    slug: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    price: 119900,
    originalPrice: 239900,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_hero.jpg",
    category: "accion",
    platform: "pc",
    rating: 4.6,
    featured: true,
    description: "Night City te espera. Construye tu leyenda en este RPG de acción futurista.",
    tags: ["rpg", "mundo abierto", "sci-fi"],
  },
  {
    id: "3",
    slug: "god-of-war-ragnarok",
    title: "God of War Ragnarök",
    price: 219900,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/library_hero.jpg",
    category: "accion",
    platform: "playstation",
    rating: 4.8,
    featured: true,
    description: "Kratos y Atreus se enfrentan al Ragnarök en una aventura épica.",
    tags: ["aventura", "mitología", "exclusivo"],
  },
  {
    id: "4",
    slug: "halo-infinite",
    title: "Halo Infinite",
    price: 79900,
    originalPrice: 239900,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/library_hero.jpg",
    category: "shooter",
    platform: "xbox",
    rating: 4.4,
    featured: false,
    description: "El Jefe Maestro vuelve en un shooter de mundo abierto.",
    tags: ["fps", "multijugador", "sci-fi"],
  },
  {
    id: "5",
    slug: "zelda-tears-of-the-kingdom",
    title: "Zelda: Tears of the Kingdom",
    price: 239900,
    image: "https://upload.wikimedia.org/wikipedia/en/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg",
    category: "aventura",
    platform: "nintendo",
    rating: 4.9,
    featured: true,
    description: "Explora los cielos y las profundidades de Hyrule.",
    tags: ["aventura", "puzzle", "exclusivo"],
  },
  {
    id: "6",
    slug: "fc-25",
    title: "EA Sports FC 25",
    price: 159900,
    originalPrice: 279900,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2669320/library_hero.jpg",
    category: "deportes",
    platform: "pc",
    rating: 4.2,
    featured: false,
    description: "El simulador de fútbol más actualizado, con modos carrera y Ultimate Team.",
    tags: ["fútbol", "multijugador", "simulación"],
  },
  {
    id: "7",
    slug: "stellar-blade",
    title: "Stellar Blade",
    price: 179900,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/3058860/library_hero.jpg",
    category: "accion",
    platform: "playstation",
    rating: 4.5,
    featured: false,
    description: "Combate de acción preciso en un futuro postapocalíptico.",
    tags: ["acción", "sci-fi", "combate"],
  },
  {
    id: "8",
    slug: "forza-horizon-5",
    title: "Forza Horizon 5",
    price: 139900,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/library_hero.jpg",
    category: "carreras",
    platform: "xbox",
    rating: 4.7,
    featured: true,
    description: "Festival de coches a cielo abierto por los paisajes de México.",
    tags: ["carreras", "mundo abierto", "coches"],
  },
];

export function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug);
}

export function getFeaturedGames() {
  return games.filter((game) => game.featured);
}

export function getGamesByCategory(category: string) {
  return games.filter((game) => game.category === category);
}

export function getGamesByPlatform(platform: string) {
  return games.filter((game) => game.platform === platform);
}

export function searchGames(query: string) {
  const value = query.trim().toLowerCase();
  if (!value) return games;
  return games.filter(
    (game) =>
      game.title.toLowerCase().includes(value) ||
      game.tags.some((tag) => tag.toLowerCase().includes(value)),
  );
}
