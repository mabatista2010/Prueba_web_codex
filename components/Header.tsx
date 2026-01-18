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
          </div>
        </div>
        <nav className="mt-4 flex flex-wrap gap-4 text-sm font-medium text-slate-600 dark:text-slate-300 md:hidden">
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
      </div>
    </header>
  );
}
