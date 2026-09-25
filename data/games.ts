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
  // =========================
  // RPG
  // =========================

  {
    id: "1",
    slug: "elden-ring",
    title: "Elden Ring",
    price: 199900,
    originalPrice: 239900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_hero.jpg",
    category: "rpg",
    platform: "pc",
    rating: 4.9,
    featured: true,
    description:
      "Explora las Tierras Intermedias en un RPG de mundo abierto de FromSoftware.",
    tags: ["mundo abierto", "souls", "acción"],
  },

  {
    id: "9",
    slug: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    price: 179900,
    originalPrice: 239900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/library_hero.jpg",
    category: "rpg",
    platform: "pc",
    rating: 4.9,
    featured: true,
    description:
      "Forma tu grupo y adéntrate en una aventura de rol donde tus decisiones cambian la historia.",
    tags: ["rpg", "fantasía", "aventura", "estrategia"],
  },

  {
    id: "10",
    slug: "the-witcher-3",
    title: "The Witcher 3: Wild Hunt",
    price: 89900,
    originalPrice: 159900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/library_hero.jpg",
    category: "rpg",
    platform: "pc",
    rating: 4.8,
    featured: true,
    description:
      "Conviértete en Geralt de Rivia y recorre un enorme mundo lleno de monstruos, secretos y decisiones.",
    tags: ["rpg", "fantasía", "mundo abierto", "aventura"],
  },

  {
    id: "11",
    slug: "black-myth-wukong",
    title: "Black Myth: Wukong",
    price: 159900,
    originalPrice: 219900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/library_hero.jpg",
    category: "rpg",
    platform: "pc",
    rating: 4.8,
    featured: true,
    description:
      "Embárcate en una aventura de acción inspirada en la mitología china y descubre los secretos del Destinado.",
    tags: ["rpg", "acción", "mitología", "fantasía"],
  },

  {
    id: "12",
    slug: "sekiro-shadows-die-twice",
    title: "Sekiro: Shadows Die Twice",
    price: 119900,
    originalPrice: 199900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/library_hero.jpg",
    category: "rpg",
    platform: "pc",
    rating: 4.8,
    featured: false,
    description:
      "Domina el combate con espada y conviértete en el shinobi de una aventura desafiante.",
    tags: ["souls", "acción", "samurái", "aventura"],
  },

  // =========================
  // ACCIÓN
  // =========================

  {
    id: "2",
    slug: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    price: 119900,
    originalPrice: 239900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_hero.jpg",
    category: "accion",
    platform: "pc",
    rating: 4.6,
    featured: true,
    description:
      "Night City te espera. Construye tu leyenda en este RPG de acción futurista.",
    tags: ["rpg", "mundo abierto", "sci-fi"],
  },

  {
    id: "3",
    slug: "god-of-war-ragnarok",
    title: "God of War Ragnarök",
    price: 219900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/library_hero.jpg",
    category: "accion",
    platform: "playstation",
    rating: 4.8,
    featured: true,
    description:
      "Kratos y Atreus se enfrentan al Ragnarök en una aventura épica.",
    tags: ["aventura", "mitología", "exclusivo"],
  },

  {
    id: "13",
    slug: "marvels-spider-man-2",
    title: "Marvel's Spider-Man 2",
    price: 199900,
    originalPrice: 249900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2651280/library_hero.jpg",
    category: "accion",
    platform: "pc",
    rating: 4.7,
    featured: true,
    description:
      "Peter Parker y Miles Morales unen fuerzas para proteger Nueva York de nuevas amenazas.",
    tags: ["superhéroes", "acción", "mundo abierto", "aventura"],
  },

  {
    id: "14",
    slug: "assassins-creed-shadows",
    title: "Assassin's Creed Shadows",
    price: 179900,
    originalPrice: 239900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/3159330/library_hero.jpg",
    category: "accion",
    platform: "pc",
    rating: 4.4,
    featured: false,
    description:
      "Explora el Japón feudal y domina dos estilos de juego diferentes.",
    tags: ["acción", "aventura", "japón", "sigilo"],
  },

  {
    id: "15",
    slug: "monster-hunter-wilds",
    title: "Monster Hunter Wilds",
    price: 199900,
    originalPrice: 249900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2246340/library_hero.jpg",
    category: "accion",
    platform: "pc",
    rating: 4.6,
    featured: true,
    description:
      "Caza monstruos gigantes y crea nuevas armas y armaduras en un mundo salvaje.",
    tags: ["acción", "caza", "cooperativo", "aventura"],
  },

  // =========================
  // AVENTURA
  // =========================

  {
    id: "5",
    slug: "zelda-tears-of-the-kingdom",
    title: "Zelda: Tears of the Kingdom",
    price: 239900,
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg",
    category: "aventura",
    platform: "nintendo",
    rating: 4.9,
    featured: true,
    description:
      "Explora los cielos y las profundidades de Hyrule.",
    tags: ["aventura", "puzzle", "exclusivo"],
  },

  {
    id: "16",
    slug: "hogwarts-legacy",
    title: "Hogwarts Legacy",
    price: 119900,
    originalPrice: 239900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/library_hero.jpg",
    category: "aventura",
    platform: "pc",
    rating: 4.6,
    featured: true,
    description:
      "Vive tu propia aventura en el mundo mágico de Hogwarts.",
    tags: ["aventura", "magia", "mundo abierto", "fantasía"],
  },

  {
    id: "17",
    slug: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    price: 149900,
    originalPrice: 239900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/library_hero.jpg",
    category: "aventura",
    platform: "pc",
    rating: 4.9,
    featured: true,
    description:
      "Únete a la banda de Arthur Morgan en una enorme aventura ambientada en el Viejo Oeste.",
    tags: ["mundo abierto", "western", "aventura", "acción"],
  },

  {
    id: "18",
    slug: "the-last-of-us-part-i",
    title: "The Last of Us Part I",
    price: 169900,
    originalPrice: 239900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/library_hero.jpg",
    category: "aventura",
    platform: "pc",
    rating: 4.7,
    featured: false,
    description:
      "Acompaña a Joel y Ellie en un viaje por un mundo devastado.",
    tags: ["aventura", "supervivencia", "historia", "acción"],
  },

  // =========================
  // SHOOTER
  // =========================

  {
    id: "4",
    slug: "halo-infinite",
    title: "Halo Infinite",
    price: 79900,
    originalPrice: 239900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/library_hero.jpg",
    category: "shooter",
    platform: "xbox",
    rating: 4.4,
    featured: false,
    description:
      "El Jefe Maestro vuelve en un shooter de mundo abierto.",
    tags: ["fps", "multijugador", "sci-fi"],
  },

  {
    id: "19",
    slug: "doom-eternal",
    title: "DOOM Eternal",
    price: 69900,
    originalPrice: 139900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/library_hero.jpg",
    category: "shooter",
    platform: "pc",
    rating: 4.8,
    featured: true,
    description:
      "Ábrete camino a través de hordas demoníacas en el brutal combate de DOOM Eternal.",
    tags: ["fps", "acción", "demonios", "violento"],
  },

  {
    id: "20",
    slug: "call-of-duty-modern-warfare-iii",
    title: "Call of Duty: Modern Warfare III",
    price: 159900,
    originalPrice: 279900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2519060/library_hero.jpg",
    category: "shooter",
    platform: "pc",
    rating: 4.2,
    featured: false,
    description:
      "Combate moderno con campaña, multijugador y acción intensa.",
    tags: ["fps", "multijugador", "acción", "guerra"],
  },

  {
    id: "21",
    slug: "helldivers-2",
    title: "Helldivers 2",
    price: 119900,
    originalPrice: 179900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/553850/library_hero.jpg",
    category: "shooter",
    platform: "pc",
    rating: 4.5,
    featured: true,
    description:
      "Forma un escuadrón y lucha por la humanidad en este shooter cooperativo.",
    tags: ["fps", "cooperativo", "multijugador", "acción"],
  },

  // =========================
  // DEPORTES
  // =========================

  {
    id: "6",
    slug: "fc-25",
    title: "EA Sports FC 25",
    price: 159900,
    originalPrice: 279900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2669320/library_hero.jpg",
    category: "deportes",
    platform: "pc",
    rating: 4.2,
    featured: false,
    description:
      "El simulador de fútbol más actualizado, con modos carrera y Ultimate Team.",
    tags: ["fútbol", "multijugador", "simulación"],
  },

  {
    id: "22",
    slug: "nba-2k25",
    title: "NBA 2K25",
    price: 129900,
    originalPrice: 239900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2878980/library_hero.jpg",
    category: "deportes",
    platform: "pc",
    rating: 4.3,
    featured: false,
    description:
      "Vive la experiencia del baloncesto con equipos, jugadores y modos competitivos.",
    tags: ["baloncesto", "deportes", "multijugador", "simulación"],
  },

  {
    id: "23",
    slug: "ea-sports-fc-26",
    title: "EA Sports FC 26",
    price: 189900,
    originalPrice: 299900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/3405690/library_hero.jpg",
    category: "deportes",
    platform: "pc",
    rating: 4.4,
    featured: true,
    description:
      "Compite en una nueva temporada de fútbol con nuevos modos y experiencias.",
    tags: ["fútbol", "deportes", "multijugador", "simulación"],
  },

  // =========================
  // CARRERAS
  // =========================

  {
    id: "8",
    slug: "forza-horizon-5",
    title: "Forza Horizon 5",
    price: 139900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/library_hero.jpg",
    category: "carreras",
    platform: "xbox",
    rating: 4.7,
    featured: true,
    description:
      "Festival de coches a cielo abierto por los paisajes de México.",
    tags: ["carreras", "mundo abierto", "coches"],
  },

  {
    id: "24",
    slug: "need-for-speed-unbound",
    title: "Need for Speed Unbound",
    price: 89900,
    originalPrice: 199900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1846380/library_hero.jpg",
    category: "carreras",
    platform: "pc",
    rating: 4.2,
    featured: false,
    description:
      "Compite por las calles y construye tu reputación en carreras urbanas.",
    tags: ["carreras", "coches", "mundo abierto", "arcade"],
  },

  {
    id: "25",
    slug: "assetto-corsa-competizione",
    title: "Assetto Corsa Competizione",
    price: 79900,
    originalPrice: 159900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/805550/library_hero.jpg",
    category: "carreras",
    platform: "pc",
    rating: 4.5,
    featured: false,
    description:
      "Experimenta una simulación de carreras enfocada en realismo y competición.",
    tags: ["carreras", "simulación", "coches", "competición"],
  },

  // =========================
  // SIMULACIÓN
  // =========================

  {
    id: "26",
    slug: "microsoft-flight-simulator",
    title: "Microsoft Flight Simulator",
    price: 159900,
    originalPrice: 239900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/library_hero.jpg",
    category: "simulacion",
    platform: "pc",
    rating: 4.4,
    featured: false,
    description:
      "Pilota diferentes aeronaves y explora el planeta desde el aire.",
    tags: ["simulación", "aviones", "realista", "mundo abierto"],
  },

  {
    id: "27",
    slug: "cities-skylines",
    title: "Cities: Skylines",
    price: 59900,
    originalPrice: 119900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/255710/library_hero.jpg",
    category: "simulacion",
    platform: "pc",
    rating: 4.6,
    featured: false,
    description:
      "Construye y administra tu propia ciudad desde cero.",
    tags: ["simulación", "ciudades", "estrategia", "construcción"],
  },

  // =========================
  // INDIE
  // =========================

  {
    id: "28",
    slug: "hades",
    title: "Hades",
    price: 59900,
    originalPrice: 99900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/library_hero.jpg",
    category: "indie",
    platform: "pc",
    rating: 4.9,
    featured: true,
    description:
      "Lucha para escapar del inframundo en este intenso roguelike de acción.",
    tags: ["indie", "roguelike", "acción", "mitología"],
  },

  {
    id: "29",
    slug: "hollow-knight",
    title: "Hollow Knight",
    price: 49900,
    originalPrice: 89900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/library_hero.jpg",
    category: "indie",
    platform: "pc",
    rating: 4.9,
    featured: false,
    description:
      "Explora un enorme reino subterráneo lleno de secretos, enemigos y desafíos.",
    tags: ["indie", "metroidvania", "aventura", "acción"],
  },

  // =========================
  // TERROR
  // =========================

  {
    id: "30",
    slug: "resident-evil-4",
    title: "Resident Evil 4",
    price: 99900,
    originalPrice: 179900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/library_hero.jpg",
    category: "terror",
    platform: "pc",
    rating: 4.8,
    featured: true,
    description:
      "Leon S. Kennedy se enfrenta a una misión de rescate en una terrorífica aldea.",
    tags: ["terror", "acción", "supervivencia", "zombis"],
  },

  {
    id: "31",
    slug: "resident-evil-village",
    title: "Resident Evil Village",
    price: 89900,
    originalPrice: 179900,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/library_hero.jpg",
    category: "terror",
    platform: "pc",
    rating: 4.6,
    featured: false,
    description:
      "Descubre los secretos de una misteriosa aldea en una nueva aventura de terror.",
    tags: ["terror", "acción", "supervivencia", "horror"],
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