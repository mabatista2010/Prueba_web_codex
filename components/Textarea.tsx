import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

export function Textarea({
  className,
  ...props
}: ComponentPropsWithoutRef<"textarea">) {
  return (
    <textarea
      className={cn(
        "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus-visible:border-sky-500 focus-visible:ring-2 focus-visible:ring-sky-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white",
        className
      )}
      {...props}
    />
  );
}
