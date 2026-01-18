import type { Metadata } from "next";
import { ShopClient } from "./ShopClient";

export const metadata: Metadata = {
  title: "Tienda",
  description:
    "Explora productos Sportiva para running, fitness, fútbol y outdoor. Filtra, ordena y encuentra tu equipamiento ideal.",
};

export default function ShopPage() {
  return <ShopClient />;
}
