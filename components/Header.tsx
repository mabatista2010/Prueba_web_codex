"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun, ShoppingBag } from "lucide-react";
import { Button } from "@/components/Button";
import { useCart } from "@/components/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/shop", label: "Tienda" },
  { href: "/about", label: "Sobre nosotros" },
  { href: "/contact", label: "Contacto" },
];

type Theme = "light" | "dark";

export function Header() {
  const { totalItems } = useCart();
  const [theme, setTheme] = useState<Theme>("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const stored = localStorage.getItem("sportiva-theme") as Theme | null;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const nextTheme = stored ?? (prefersDark ? "dark" : "light");
      setTheme(nextTheme);
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
    } catch {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", next === "dark");
      }
      try {
        localStorage.setItem("sportiva-theme", next);
      } catch {
        // Ignore storage errors (private mode or blocked storage).
      }
      return next;
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-600 text-white">
              S
            </span>
            <span className="text-slate-900 dark:text-white">Sportiva</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-slate-900 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Cambiar modo de color"
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white"
              )}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div className="hidden items-center gap-2 sm:flex">
              <ShoppingBag size={18} className="text-slate-600 dark:text-slate-300" />
              <span className="text-sm text-slate-600 dark:text-slate-300">
                {totalItems} item{totalItems === 1 ? "" : "s"}
              </span>
            </div>
            <Button href="/shop" className="hidden sm:inline-flex">
              Ver tienda
            </Button>
            <button
              type="button"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:text-white md:hidden"
            >
              <span
                className={cn(
                  "absolute h-0.5 w-5 rounded-full bg-current transition duration-300",
                  isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
                )}
              />
              <span
                className={cn(
                  "absolute h-0.5 w-5 rounded-full bg-current transition duration-300",
                  isMenuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute h-0.5 w-5 rounded-full bg-current transition duration-300",
                  isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
                )}
              />
            </button>
          </div>
        </div>
        <div
          className={cn(
            "pointer-events-none mt-4 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-xl transition duration-300 dark:border-slate-800 dark:bg-slate-950/95 md:hidden",
            isMenuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          )}
        >
          <nav className="grid gap-4 text-base font-semibold text-slate-700 dark:text-slate-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 transition hover:border-slate-200 hover:bg-slate-50 dark:hover:border-slate-800 dark:hover:bg-slate-900/60"
              >
                {link.label}
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Ir</span>
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300">
            <span className="font-semibold text-slate-900 dark:text-white">
              Tu carrito
            </span>
            <div className="flex items-center justify-between">
              <span>
                {totalItems} item{totalItems === 1 ? "" : "s"} guardados
              </span>
              <Button
                href="/shop"
                className="w-full justify-center rounded-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Ver tienda
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
