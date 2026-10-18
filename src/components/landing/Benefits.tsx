import { CheckCircle2 } from "lucide-react";
import { BENEFITS_DATA } from "@/data/landing";

export function Benefits() {
  return (
    <section
      aria-labelledby="benefits-heading"
      className="relative border-b border-[#F5F5F5]/12 bg-[#15181C] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Asymmetric Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-2 w-2 bg-[#C6FF00]" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#C6FF00] uppercase">
                {BENEFITS_DATA.eyebrow}
              </span>
            </div>

            <h2
              id="benefits-heading"
              className="mt-4 font-display text-4xl leading-[0.96] font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-5xl"
            >
              {BENEFITS_DATA.title}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#A1A8B3] sm:text-lg">
              {BENEFITS_DATA.subtitle}
            </p>

            {/* Responsible Coaching Note */}
            <div className="mt-8 border border-[#F5F5F5]/15 bg-[#0B0D0F] p-6">
              <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-[#C6FF00] uppercase">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                <span>COMPROMISSO REALISTA</span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-[#A1A8B3]">
                Não trabalhamos com promessas milagrosas ou prazos irreais. A evolução física depende da combinação entre prescrição adequada, constância nos treinos, alimentação e descanso individual.
              </p>
            </div>
          </div>

          {/* Right Architectural Specification Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px border border-[#F5F5F5]/15 bg-[#F5F5F5]/15 sm:grid-cols-2">
              {BENEFITS_DATA.items.map((benefit, idx) => (
                <div
                  key={benefit.title}
                  className="flex flex-col justify-between bg-[#0B0D0F] p-6 transition-colors duration-150 hover:bg-[#1D2228] sm:p-8"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#C6FF00]">
                        0{idx + 1}
                      </span>
                      <span className="border border-[#F5F5F5]/15 px-2.5 py-0.5 font-mono text-[10px] tracking-[0.16em] text-[#A1A8B3] uppercase">
                        {benefit.tag}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-[#F5F5F5] uppercase">
                      {benefit.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#A1A8B3]">
                      {benefit.description}
                    </p>
                  </div>

                  <div
                    className="mt-6 h-[2px] w-10 bg-[#C6FF00]/60"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
