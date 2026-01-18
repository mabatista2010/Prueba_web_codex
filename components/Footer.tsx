import Link from "next/link";

const footerLinks = [
  { href: "/shop", label: "Tienda" },
  { href: "/about", label: "Sobre nosotros" },
  { href: "/contact", label: "Contacto" },
  { href: "/shop", label: "Novedades" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-600 text-white">
              S
            </span>
            Sportiva
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Equipamos a atletas urbanos y exploradores con lo último en tecnología
            deportiva. Rendimiento, estilo y servicio cercano.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © 2025 Sportiva. Todos los derechos reservados. Información legal
            ficticia para demo.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-slate-600 dark:text-slate-300">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Navegación
          </p>
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-slate-900 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
