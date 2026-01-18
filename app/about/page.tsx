import type { Metadata } from "next";
import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce la historia de Sportiva, nuestra misión y el equipo que impulsa una experiencia deportiva premium.",
};

const values = [
  {
    title: "Pasión por el deporte",
    description:
      "Vivimos el rendimiento desde dentro. Cada recomendación nace de entrenamiento real.",
  },
  {
    title: "Innovación continua",
    description:
      "Seleccionamos productos con tecnología probada para mejorar tu desempeño.",
  },
  {
    title: "Comunidad activa",
    description:
      "Creamos experiencias y contenido útil para acompañarte en cada meta.",
  },
];

const stats = [
  { label: "Atletas equipados", value: "+12K" },
  { label: "Marcas premium", value: "45" },
  { label: "Ciudades con envíos", value: "210" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <SectionTitle
        title="Creemos en el poder del movimiento"
        subtitle="Sportiva nació para simplificar la búsqueda de equipamiento deportivo confiable con una experiencia moderna."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-slate-600 dark:text-slate-300">
          <p>
            Desde 2016 trabajamos con atletas urbanos, entrenadores y aventureros
            outdoor para curar una selección de productos que realmente hacen la
            diferencia. Nuestro equipo analiza tendencias globales, pruebas de
            laboratorio y feedback directo de nuestra comunidad.
          </p>
          <p>
            Cada colección está diseñada para ofrecerte confianza, comodidad y
            rendimiento. Queremos que entrenes con seguridad, ya sea en la pista,
            el gimnasio o en plena naturaleza.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-slate-200 bg-white p-4 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <Image
            src="/images/about-team.svg"
            alt="Equipo Sportiva"
            width={420}
            height={360}
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {value.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
