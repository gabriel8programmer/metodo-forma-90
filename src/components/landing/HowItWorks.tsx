import { ArrowUpRight, FileSpreadsheet } from "lucide-react";
import { HOW_IT_WORKS_DATA } from "@/data/landing";

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="how-it-works-heading"
      className="relative scroll-mt-20 border-b border-[#F5F5F5]/12 bg-[#15181C] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        {/* Top Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5">
            <span className="h-2 w-2 bg-[#C6FF00]" aria-hidden="true" />
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#C6FF00] uppercase">
              {HOW_IT_WORKS_DATA.eyebrow}
            </span>
          </div>

          <h2
            id="how-it-works-heading"
            className="mt-4 font-display text-4xl leading-[0.96] font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-5xl lg:text-6xl"
          >
            {HOW_IT_WORKS_DATA.title}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[#A1A8B3] sm:text-lg">
            {HOW_IT_WORKS_DATA.subtitle}
          </p>
        </div>

        {/* Vertical Timeline Spine (No standard card grid) */}
        <div className="relative mt-16 lg:mt-20">
          {/* Continuous Vertical Spine Line */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-6 w-[2px] bg-gradient-to-b from-[#C6FF00] via-[#C6FF00]/60 to-[#F5F5F5]/15 sm:left-8 lg:left-[260px]"
          />

          <div className="space-y-12 sm:space-y-16">
            {HOW_IT_WORKS_DATA.steps.map((item) => (
              <div
                key={item.step}
                className="relative grid grid-cols-1 items-start gap-4 pl-16 sm:pl-24 lg:grid-cols-12 lg:gap-12 lg:pl-0"
              >
                {/* Left Column on Desktop: Phase & Giant Step Number */}
                <div className="lg:col-span-3 lg:pr-10 lg:text-right">
                  <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-[#C6FF00] uppercase">
                    {item.phase}
                  </span>
                  <div className="mt-1 font-display text-4xl font-bold text-[#F5F5F5]/25 sm:text-5xl lg:text-6xl">
                    ETAPA {item.step}
                  </div>
                </div>

                {/* Spine Node Indicator */}
                <div
                  aria-hidden="true"
                  className="absolute top-1 left-2.5 flex h-8 w-8 items-center justify-center border-2 border-[#C6FF00] bg-[#0B0D0F] font-mono text-xs font-bold text-[#C6FF00] sm:left-4 lg:left-[245px]"
                >
                  {item.step}
                </div>

                {/* Right Column: Step Content & Deliverable Strip */}
                <div className="lg:col-span-9 lg:pl-8">
                  <div className="border-l-2 border-[#F5F5F5]/15 bg-[#0B0D0F] p-6 transition-colors duration-200 hover:border-[#C6FF00] sm:p-8">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#A1A8B3]">
                      {item.description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#F5F5F5]/10 pt-4">
                      <FileSpreadsheet
                        className="h-4 w-4 text-[#C6FF00]"
                        aria-hidden="true"
                      />
                      <span className="font-mono text-xs font-semibold tracking-wider text-[#F5F5F5] uppercase">
                        ENTREGÁVEL:
                      </span>
                      <span className="font-mono text-xs text-[#C6FF00]">
                        {item.deliverable}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Prompt */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border border-[#F5F5F5]/15 bg-[#0B0D0F] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[#C6FF00] uppercase">
              PRONTO PARA INICIAR A ETAPA 01?
            </p>
            <p className="mt-1 font-display text-2xl font-bold text-[#F5F5F5] uppercase">
              Sua avaliação inicial leva menos de 10 minutos.
            </p>
          </div>
          <a
            href="#planos"
            className="inline-flex shrink-0 items-center gap-2 bg-[#C6FF00] px-6 py-3.5 font-display text-sm font-bold tracking-[0.08em] text-[#0B0D0F] uppercase transition-colors hover:bg-[#D4FF33]"
          >
            <span>Quero começar</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
