import {
  Award,
  BadgeCheck,
  Bike,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";

const features = [
  {
    title: "Envíos en 24/48h",
    description: "Logística inteligente para que entrenes sin esperas.",
    icon: Truck,
  },
  {
    title: "Calidad verificada",
    description: "Marcas líderes y pruebas reales con atletas.",
    icon: BadgeCheck,
  },
  {
    title: "Devoluciones simples",
    description: "30 días para cambiar tu equipamiento sin estrés.",
    icon: Package,
  },
  {
    title: "Soporte experto",
    description: "Asesoría personalizada para cada disciplina.",
    icon: Award,
  },
  {
    title: "Pagos seguros",
    description: "Plataforma con cifrado y protección avanzada.",
    icon: ShieldCheck,
  },
  {
    title: "Entrenamiento integral",
    description: "Desde running hasta outdoor, todo en un solo lugar.",
    icon: Bike,
  },
];

export function FeatureGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <div
            key={feature.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-300">
              <Icon size={22} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
