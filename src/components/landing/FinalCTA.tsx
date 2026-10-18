import { MessageCircle, ArrowUpRight, CheckCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="contato"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden border-b border-[#F5F5F5]/12 bg-[#15181C] py-20 sm:py-28 lg:py-32"
    >
      {/* Subtle Telemetry Background & Diagonal Accent */}
      <div
        className="bg-telemetry-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="bg-diagonal-stripes pointer-events-none absolute top-0 right-0 left-0 h-3"
      />

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="relative border-2 border-[#C6FF00] bg-[#0B0D0F] p-8 sm:p-12 lg:p-16">
          {/* Corner Volt Indicator */}
          <div
            className="absolute top-0 right-0 bg-[#C6FF00] px-3.5 py-1 font-mono text-[11px] font-bold tracking-widest text-[#0B0D0F] uppercase"
            aria-hidden="true"
          >
            CICLO FORMA 90
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#C6FF00] uppercase">
                DECISÃO & MOVIMENTO
              </span>

              <h2
                id="final-cta-heading"
                className="mt-4 font-display text-4xl leading-[0.95] font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-5xl md:text-6xl lg:text-[4.2rem]"
              >
                Seu próximo treino pode ter uma{" "}
                <span className="text-[#C6FF00]">estratégia.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed font-medium text-[#F5F5F5]/90 sm:text-lg md:text-xl">
                Conte seu objetivo e descubra como o acompanhamento pode se encaixar na sua rotina.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[#A1A8B3]">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#C6FF00]" aria-hidden="true" />
                  Academia ou casa
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#C6FF00]" aria-hidden="true" />
                  Planejamento individual
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#C6FF00]" aria-hidden="true" />
                  Acompanhamento com Lucas Andrade
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-4 lg:items-end">
              <a
                href="#planos"
                className="group inline-flex w-full items-center justify-center gap-3 bg-[#C6FF00] px-8 py-5 font-display text-lg font-bold tracking-[0.08em] text-[#0B0D0F] uppercase transition-all duration-150 hover:bg-[#D4FF33] sm:w-auto lg:w-full"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                <span>Quero começar</span>
                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>

              <p className="text-center font-mono text-[11px] text-[#A1A8B3] lg:text-right">
                Atendimento demonstrativo • Consultoria Método Forma 90
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
