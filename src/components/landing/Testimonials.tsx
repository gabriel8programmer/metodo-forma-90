import { Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/landing";

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative border-b border-[#F5F5F5]/12 bg-[#0B0D0F] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#F5F5F5]/12 pb-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-2 w-2 bg-[#C6FF00]" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#C6FF00] uppercase">
                RELATOS DE ALUNOS
              </span>
            </div>

            <h2
              id="testimonials-heading"
              className="mt-4 font-display text-4xl leading-[0.96] font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-5xl lg:text-6xl"
            >
              Quando o treino faz sentido, a constância acompanha.
            </h2>
          </div>

          <p className="font-mono text-xs tracking-wider text-[#A1A8B3] uppercase">
            DEPOIMENTOS FICTÍCIOS DEMONSTRATIVOS
          </p>
        </div>

        {/* 3 Editorial Quote Columns */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <figure
              key={item.name}
              className={`flex flex-col justify-between border border-[#F5F5F5]/15 bg-[#15181C] p-7 sm:p-9 ${
                idx === 1 ? "lg:-translate-y-3 border-t-4 border-t-[#C6FF00]" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <Quote
                    className="h-7 w-7 text-[#C6FF00]"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs text-[#A1A8B3]">
                    {item.cycleDuration}
                  </span>
                </div>

                <blockquote className="mt-6 text-base leading-relaxed font-normal text-[#F5F5F5] sm:text-lg">
                  “{item.quote}”
                </blockquote>
              </div>

              <figcaption className="mt-8 border-t border-[#F5F5F5]/12 pt-5">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-xl font-bold tracking-wide text-[#F5F5F5] uppercase">
                    — {item.name}, {item.age} anos
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs text-[#A1A8B3]">
                  {item.profile}
                </p>
                <p className="mt-2 font-mono text-xs font-semibold text-[#C6FF00]">
                  • {item.highlightMetric}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
