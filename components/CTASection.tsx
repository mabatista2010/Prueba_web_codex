import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="rounded-[32px] bg-sky-600 px-6 py-10 text-white shadow-xl md:px-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">
            Entrena con propósito
          </p>
          <h3 className="mt-3 text-3xl font-bold">
            Planifica tu próxima meta con Sportiva
          </h3>
          <p className="mt-3 text-sm text-sky-100">
            Accede a kits personalizados y asesoría para cada disciplina.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" variant="secondary">
            Hablar con un experto
          </Button>
          <Button href="/shop" variant="ghost" className="text-white">
            Explorar tienda
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
