export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Valeria Torres",
    role: "Runner amateur",
    quote:
      "Sportiva me ayudó a encontrar el calzado perfecto. El envío fue rapidísimo y la calidad se nota desde el primer uso.",
    rating: 5,
  },
  {
    id: "t-2",
    name: "Carlos Méndez",
    role: "Entrenador fitness",
    quote:
      "El equipo de entrenamiento es sólido y los detalles de cada producto están muy bien explicados. Gran experiencia.",
    rating: 4,
  },
  {
    id: "t-3",
    name: "Lucía Salas",
    role: "Aventurera outdoor",
    quote:
      "Compré la chaqueta Peak Shell y no me falló en la montaña. Perfecta para clima impredecible.",
    rating: 5,
  },
];
