"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Toast } from "@/components/Toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<{
    text: string;
    variant: "success" | "error";
  } | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = /\S+@\S+\.\S+/.test(email);
    if (!isValid) {
      setMessage({
        text: "Ingresa un correo válido para recibir novedades.",
        variant: "error",
      });
      return;
    }
    setMessage({
      text: "¡Listo! Pronto recibirás lanzamientos y ofertas exclusivas.",
      variant: "success",
    });
    setEmail("");
  };

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
        Newsletter Sportiva
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        Recibe tendencias, guías y promociones deportivas cada semana.
      </p>
      <form
        className="mt-6 flex flex-col gap-3 sm:flex-row"
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-label="Correo electrónico"
        />
        <Button type="submit" className="sm:min-w-[160px]">
          Suscribirme
        </Button>
      </form>
      {message ? (
        <div className="mt-4">
          <Toast message={message.text} variant={message.variant} />
        </div>
      ) : null}
    </div>
  );
}
