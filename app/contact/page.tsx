import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Habla con el equipo Sportiva para soporte, recomendaciones o alianzas deportivas.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <SectionTitle
        title="Estamos listos para ayudarte"
        subtitle="Completa el formulario y nuestro equipo se pondrá en contacto en menos de 24 horas."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <ContactClient />
        <div className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Canales directos
          </h3>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Email</p>
              <p>hola@sportiva.com</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                Teléfono
              </p>
              <p>+34 600 123 456</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                Showroom
              </p>
              <p>Av. del Rendimiento 120, Madrid</p>
            </div>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-300">
            Horario de atención: lunes a viernes de 9:00 a 18:00 (CET).
          </div>
        </div>
      </div>
    </div>
  );
}
