import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-slate-50 pb-12 pt-14 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Badge className="w-fit">Nueva colección 2025</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Tu deporte, mejor equipado
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 md:text-lg">
            Tecnología avanzada, confort premium y diseño urbano para rendir en
            cada entrenamiento. Sportiva te acompaña del gimnasio a la montaña.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/shop">Comprar ahora</Button>
            <Button
              variant="outline"
              href="#novedades"
              className="group"
            >
              Ver novedades
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">+4.500</p>
              <p>Clientes activos</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">24h</p>
              <p>Envíos express</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">98%</p>
              <p>Reseñas positivas</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-8 left-6 h-32 w-32 rounded-full bg-sky-200/50 blur-3xl dark:bg-sky-500/20" />
          <div className="absolute -bottom-10 right-0 h-40 w-40 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/20" />
          <div className="relative rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-2xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
            <Image
              src="/images/hero.svg"
              alt="Atleta con equipamiento deportivo"
              width={480}
              height={420}
              className="h-auto w-full"
              priority
            />
            <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-900 px-4 py-3 text-sm text-white">
              <span>Entrega gratuita desde $80</span>
              <Link href="/shop" className="font-semibold text-sky-300">
                Ver catálogo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
