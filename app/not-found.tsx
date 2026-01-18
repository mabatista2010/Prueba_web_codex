import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        404
      </p>
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
        Página no encontrada
      </h1>
      <p className="text-base text-slate-600 dark:text-slate-300">
        Lo sentimos, no pudimos encontrar lo que buscas. Vuelve al inicio o
        explora la tienda.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button href="/">Volver al inicio</Button>
        <Button href="/shop" variant="outline">
          Ir a la tienda
        </Button>
      </div>
      <Link
        href="/contact"
        className="text-sm font-semibold text-sky-600 hover:text-sky-500"
      >
        ¿Necesitas ayuda? Contáctanos
      </Link>
    </div>
  );
}
