import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProductCard } from "@/components/ProductCard";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { CTASection } from "@/components/CTASection";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Descubre Sportiva, la tienda deportiva moderna con colecciones para running, fitness, fútbol y outdoor.",
};

const collections = [
  {
    title: "Running",
    description: "Ligereza, amortiguación y potencia para tus marcas.",
    image: "/images/collection-running.svg",
  },
  {
    title: "Fitness",
    description: "Equilibrio perfecto entre fuerza y funcionalidad.",
    image: "/images/collection-fitness.svg",
  },
  {
    title: "Fútbol",
    description: "Control total, precisión y resistencia en cada partido.",
    image: "/images/collection-soccer.svg",
  },
  {
    title: "Outdoor",
    description: "Equipos confiables para aventura y exploración.",
    image: "/images/collection-outdoor.svg",
  },
];

export default function HomePage() {
  const featured = products.filter((product) => product.featured).slice(0, 4);

  return (
    <div className="pb-16">
      <Hero />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionTitle
          title="Colecciones pensadas para tu ritmo"
          subtitle="Selecciona tu disciplina y descubre equipamiento diseñado para impulsar tus objetivos."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => (
            <div
              key={collection.title}
              className="flex flex-col items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {collection.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {collection.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionTitle
            title="Por qué Sportiva"
            subtitle="Una experiencia premium de compra, asesoría y rendimiento para atletas de todos los niveles."
          />
          <div className="mt-10">
            <FeatureGrid />
          </div>
        </div>
      </section>

      <section
        id="novedades"
        className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6"
      >
        <SectionTitle
          title="Productos destacados"
          subtitle="Lo más buscado por nuestra comunidad deportiva esta temporada."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionTitle
            title="Historias reales de atletas"
            subtitle="Conoce cómo Sportiva impulsa a personas reales a superar sus marcas."
          />
          <div className="mt-10">
            <Testimonials />
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Newsletter />
        <CTASection />
      </section>
    </div>
  );
}
