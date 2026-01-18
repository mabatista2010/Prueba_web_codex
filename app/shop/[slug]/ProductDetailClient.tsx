"use client";

import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";
import type { Product } from "@/data/products";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { ProductCard } from "@/components/ProductCard";
import { SectionTitle } from "@/components/SectionTitle";
import { Toast } from "@/components/Toast";
import { useCart } from "@/components/CartContext";

export function ProductDetailClient({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { addItem } = useCart();
  const [message, setMessage] = useState<string | null>(null);

  const handleAdd = () => {
    addItem(product);
    setMessage("Producto añadido al carrito.");
    setTimeout(() => setMessage(null), 2500);
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="relative h-80 w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="space-y-6">
          <Badge>{product.category}</Badge>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {product.name}
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-amber-400">
              <Star size={16} fill="currentColor" />
              <span className="text-sm text-slate-600 dark:text-slate-300">
                {product.rating} estrellas
              </span>
            </div>
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              {product.inStock ? "En stock" : "Agotado"}
            </span>
          </div>
          <p className="text-base text-slate-600 dark:text-slate-300">
            {product.description}
          </p>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {product.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                {bullet}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <p className="text-3xl font-semibold text-slate-900 dark:text-white">
              ${product.price.toFixed(2)}
            </p>
            <Button onClick={handleAdd}>Añadir al carrito</Button>
          </div>
          {message ? <Toast message={message} variant="success" /> : null}
        </div>
      </div>

      <div className="mt-16">
        <SectionTitle
          title="También te puede interesar"
          subtitle="Más opciones seleccionadas para completar tu kit deportivo."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
