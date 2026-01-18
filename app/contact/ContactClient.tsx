"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { Toast } from "@/components/Toast";

const reasons = [
  "Soporte de pedidos",
  "Recomendación de producto",
  "Alianzas deportivas",
  "Otros",
];

export function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: reasons[0],
    message: "",
  });
  const [status, setStatus] = useState<{
    text: string;
    variant: "success" | "error";
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({
        text: "Completa todos los campos obligatorios para continuar.",
        variant: "error",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setStatus({ text: "El correo ingresado no es válido.", variant: "error" });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message ?? "Error inesperado");
      }

      setStatus({
        text: "¡Mensaje enviado! Nuestro equipo te responderá pronto.",
        variant: "success",
      });
      setForm({ name: "", email: "", reason: reasons[0], message: "" });
    } catch (error) {
      setStatus({
        text:
          error instanceof Error
            ? error.message
            : "Hubo un problema al enviar tu mensaje.",
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            Nombre completo
          </label>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            Correo electrónico
          </label>
          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          Motivo
        </label>
        <select
          name="reason"
          value={form.reason}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none focus-visible:border-sky-500 focus-visible:ring-2 focus-visible:ring-sky-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
        >
          {reasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          Mensaje
        </label>
        <Textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Cuéntanos en qué podemos ayudarte"
          required
        />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Enviar mensaje"}
      </Button>
      {status ? <Toast message={status.text} variant={status.variant} /> : null}
    </form>
  );
}
