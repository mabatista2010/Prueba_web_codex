export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  rating: number;
  description: string;
  bullets: string[];
  category: "Running" | "Fitness" | "Fútbol" | "Outdoor";
  image: string;
  inStock: boolean;
  popularity: number;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "run-velocity-1",
    name: "Zapatillas Velocity Pro",
    slug: "zapatillas-velocity-pro",
    price: 129.9,
    rating: 4.8,
    description:
      "Diseñadas para carreras largas con amortiguación reactiva y soporte preciso.",
    bullets: [
      "Espuma de retorno energético",
      "Malla transpirable",
      "Suela antideslizante",
    ],
    category: "Running",
    image: "/images/product-running.svg",
    inStock: true,
    popularity: 95,
    featured: true,
  },
  {
    id: "run-sprint-2",
    name: "Camiseta Sprint Dry",
    slug: "camiseta-sprint-dry",
    price: 39.9,
    rating: 4.6,
    description:
      "Camiseta técnica ultraligera que mantiene tu ritmo con frescura total.",
    bullets: ["Secado rápido", "Costuras planas", "Tejido elástico"],
    category: "Running",
    image: "/images/product-running-2.svg",
    inStock: true,
    popularity: 82,
    featured: true,
  },
  {
    id: "fit-core-3",
    name: "Set de Mancuernas Core 10kg",
    slug: "mancuernas-core-10kg",
    price: 79.5,
    rating: 4.7,
    description:
      "Entrena fuerza total con agarre seguro y recubrimiento premium.",
    bullets: ["Agarre antideslizante", "Núcleo de acero", "Protección de piso"],
    category: "Fitness",
    image: "/images/product-fitness.svg",
    inStock: true,
    popularity: 88,
    featured: true,
  },
  {
    id: "fit-flex-4",
    name: "Tapete Flex Training",
    slug: "tapete-flex-training",
    price: 29.9,
    rating: 4.5,
    description:
      "Base acolchada ideal para yoga, core y entrenamiento funcional.",
    bullets: ["Densidad alta", "Textura antideslizante", "Fácil de transportar"],
    category: "Fitness",
    image: "/images/product-fitness-2.svg",
    inStock: true,
    popularity: 74,
  },
  {
    id: "fit-band-5",
    name: "Bandas Power Loop",
    slug: "bandas-power-loop",
    price: 24.0,
    rating: 4.4,
    description:
      "Kit de resistencia progresiva para entrenamiento de todo el cuerpo.",
    bullets: ["5 niveles", "Látex reforzado", "Incluye bolsa"],
    category: "Fitness",
    image: "/images/product-fitness-3.svg",
    inStock: true,
    popularity: 71,
  },
  {
    id: "soccer-strike-6",
    name: "Balón Strike Pro",
    slug: "balon-strike-pro",
    price: 45.0,
    rating: 4.6,
    description:
      "Balón oficial con tacto suave y control optimizado en cada pase.",
    bullets: ["Costuras termoselladas", "Control aéreo", "Uso mixto"],
    category: "Fútbol",
    image: "/images/product-soccer.svg",
    inStock: true,
    popularity: 90,
    featured: true,
  },
  {
    id: "soccer-guard-7",
    name: "Espinilleras Guard Elite",
    slug: "espinilleras-guard-elite",
    price: 34.5,
    rating: 4.3,
    description:
      "Protección flexible con ajuste anatómico para partidos intensos.",
    bullets: ["Carcasa ligera", "Espuma EVA", "Correa ajustable"],
    category: "Fútbol",
    image: "/images/product-soccer-2.svg",
    inStock: true,
    popularity: 63,
  },
  {
    id: "soccer-kit-8",
    name: "Kit Entrenamiento Match",
    slug: "kit-entrenamiento-match",
    price: 59.0,
    rating: 4.5,
    description:
      "Conos, escalerilla y bandas para mejorar agilidad y precisión.",
    bullets: ["Incluye 20 conos", "Escalerilla 6m", "Bolsa de transporte"],
    category: "Fútbol",
    image: "/images/product-soccer-3.svg",
    inStock: true,
    popularity: 66,
  },
  {
    id: "out-peak-9",
    name: "Chaqueta Peak Shell",
    slug: "chaqueta-peak-shell",
    price: 149.0,
    rating: 4.7,
    description:
      "Protección impermeable ligera para senderos y climas cambiantes.",
    bullets: ["Membrana 10K", "Capucha ajustable", "Bolsillos térmicos"],
    category: "Outdoor",
    image: "/images/product-outdoor.svg",
    inStock: true,
    popularity: 86,
    featured: true,
  },
  {
    id: "out-trail-10",
    name: "Mochila Trail 20L",
    slug: "mochila-trail-20l",
    price: 89.0,
    rating: 4.4,
    description:
      "Distribución inteligente del peso y ventilación para largas rutas.",
    bullets: ["Panel ventilado", "Hidratación compatible", "Peso liviano"],
    category: "Outdoor",
    image: "/images/product-outdoor-2.svg",
    inStock: true,
    popularity: 77,
  },
  {
    id: "out-camp-11",
    name: "Linterna Aurora",
    slug: "linterna-aurora",
    price: 34.9,
    rating: 4.2,
    description:
      "Iluminación potente con autonomía extendida para aventuras nocturnas.",
    bullets: ["3 modos de luz", "Batería recargable", "Resistente al agua"],
    category: "Outdoor",
    image: "/images/product-outdoor-3.svg",
    inStock: true,
    popularity: 58,
  },
  {
    id: "run-pulse-12",
    name: "Reloj Pulse Track",
    slug: "reloj-pulse-track",
    price: 119.0,
    rating: 4.5,
    description:
      "Registra tu ritmo, distancia y recuperación con métricas claras.",
    bullets: ["GPS integrado", "Monitor cardíaco", "Batería 10 días"],
    category: "Running",
    image: "/images/product-running-3.svg",
    inStock: true,
    popularity: 84,
  },
];

export const categories = ["Running", "Fitness", "Fútbol", "Outdoor"] as const;
