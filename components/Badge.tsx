import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

export function Badge({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200",
        className
      )}
      {...props}
    />
  );
}
