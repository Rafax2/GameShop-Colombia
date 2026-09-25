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
    price: 49.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
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
    price: 29.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
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
    price: 54.99,
    image: "https://images.unsplash.com/photo-1605901309584-818e49551453?auto=format&fit=crop&w=1200&q=80",
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
    price: 19.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1550745165-9bc8b375bec4?auto=format&fit=crop&w=1200&q=80",
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
    price: 59.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80",
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
    price: 39.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
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
    price: 44.99,
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80",
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
    price: 34.99,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687a?auto=format&fit=crop&w=1200&q=80",
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
