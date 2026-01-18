import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import type { Product } from "@/data/products";
import { Badge } from "@/components/Badge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <Badge>{product.category}</Badge>
          <div className="flex items-center gap-1 text-amber-400">
            <Star size={14} fill="currentColor" />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {product.rating}
            </span>
          </div>
        </div>
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">
          {product.name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-semibold text-slate-900 dark:text-white">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            {product.inStock ? "En stock" : "Agotado"}
          </span>
        </div>
      </div>
    </Link>
  );
}
