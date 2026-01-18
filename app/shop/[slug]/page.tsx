import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ProductDetailClient } from "./ProductDetailClient";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return {
      title: "Producto no encontrado",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  return <ProductDetailClient product={product} related={related} />;
}
