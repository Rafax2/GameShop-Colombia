export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: "accion",
    slug: "accion",
    name: "Acción",
    description: "Combate, adrenalina y ritmo alto.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rpg",
    slug: "rpg",
    name: "RPG",
    description: "Historias profundas y progresión de personaje.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "shooter",
    slug: "shooter",
    name: "Shooter",
    description: "FPS y TPS para jugar solo o en equipo.",
    image: "https://images.unsplash.com/photo-1550745165-9bc8b375bec4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "aventura",
    slug: "aventura",
    name: "Aventura",
    description: "Exploración, puzzles y mundos por descubrir.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "deportes",
    slug: "deportes",
    name: "Deportes",
    description: "Fútbol, competición y temporadas actuales.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "carreras",
    slug: "carreras",
    name: "Carreras",
    description: "Velocidad, circuitos y mundo abierto.",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687a?auto=format&fit=crop&w=800&q=80",
  },
];
