import { cn } from "@/lib/utils";

type ToastProps = {
  message: string;
  variant?: "success" | "error" | "info";
};

const variantStyles = {
  success: "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-200",
  error: "border-rose-200 bg-rose-50 text-rose-900 dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-200",
  info: "border-sky-200 bg-sky-50 text-sky-900 dark:border-sky-500/40 dark:bg-sky-500/10 dark:text-sky-200",
};

export function Toast({ message, variant = "info" }: ToastProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border px-4 py-3 text-sm shadow-sm",
        variantStyles[variant]
      )}
      role="status"
    >
      {message}
    </div>
  );
}
