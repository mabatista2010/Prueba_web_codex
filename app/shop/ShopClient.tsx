"use client";

import { useMemo, useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { ProductCard } from "@/components/ProductCard";
import { Input } from "@/components/Input";
import { categories, products } from "@/data/products";

const sortOptions = [
  { value: "popularity", label: "Popularidad" },
  { value: "price-asc", label: "Precio: menor a mayor" },
  { value: "price-desc", label: "Precio: mayor a menor" },
];

export function ShopClient() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [sort, setSort] = useState("popularity");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.toLowerCase();
    const byCategory = products.filter((product) =>
      selectedCategory === "Todos"
        ? true
        : product.category === selectedCategory
    );
    const bySearch = byCategory.filter((product) =>
      product.name.toLowerCase().includes(normalizedQuery)
    );

    return [...bySearch].sort((a, b) => {
      if (sort === "price-asc") {
        return a.price - b.price;
      }
      if (sort === "price-desc") {
        return b.price - a.price;
      }
      return b.popularity - a.popularity;
    });
  }, [query, selectedCategory, sort]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <SectionTitle
        title="Tienda Sportiva"
        subtitle="Explora todo nuestro catálogo y encuentra el equipamiento ideal para tu disciplina."
      />

      <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center">
          <Input
            placeholder="Buscar producto"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Buscar producto"
          />
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory("Todos")}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                selectedCategory === "Todos"
                  ? "border-sky-500 bg-sky-500 text-white"
                  : "border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-300"
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  selectedCategory === category
                    ? "border-sky-500 bg-sky-500 text-white"
                    : "border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Ordenar
          </label>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm outline-none focus-visible:border-sky-500 focus-visible:ring-2 focus-visible:ring-sky-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
        {filteredProducts.length} productos encontrados
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
