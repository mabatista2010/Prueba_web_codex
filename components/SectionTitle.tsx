import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionTitle({ title, subtitle, align = "left" }: SectionTitleProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
        Sportiva
      </p>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base text-slate-600 dark:text-slate-300 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
