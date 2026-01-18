import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: testimonial.rating }).map((_, index) => (
              <Star key={index} size={16} fill="currentColor" />
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            “{testimonial.quote}”
          </p>
          <div className="mt-4">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {testimonial.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {testimonial.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
