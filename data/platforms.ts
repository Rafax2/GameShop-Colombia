export type Platform = {
  id: string;
  slug: string;
  name: string;
  image: string;
  accent: string;
  description: string;
};

export const platforms: Platform[] = [
  {
    id: "pc",
    slug: "pc",
    name: "PC",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=80",
    accent: "#7c5cff",
    description: "Claves digitales y ediciones para Windows.",
  },
  {
    id: "playstation",
    slug: "playstation",
    name: "PlayStation",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1200&q=80",
    accent: "#3b82f6",
    description: "Títulos para PS4 y PS5.",
  },
  {
    id: "xbox",
    slug: "xbox",
    name: "Xbox",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=1200&q=80",
    accent: "#22c55e",
    description: "Juegos para Xbox Series y Game Pass.",
  },
  {
    id: "nintendo",
    slug: "nintendo",
    name: "Nintendo",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=1200&q=80",
    accent: "#ef4444",
    description: "Aventuras exclusivas para Switch.",
  },
];
