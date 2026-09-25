import Link from "next/link";
import type { Category } from "@/data/categories";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/tienda?categoria=${category.slug}`}
      className="overflow-hidden rounded-2xl border border-[#232636] bg-[#11131a]"
    >
      <div
        className="h-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${category.image})` }}
      />
      <div className="p-3">
        <h3 className="font-semibold">{category.name}</h3>
        <p className="text-xs text-[#9aa3b8]">{category.description}</p>
      </div>
    </Link>
  );
}
