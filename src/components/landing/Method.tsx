import Image from "next/image";
import { Sliders, Check } from "lucide-react";
import { METHOD_DATA, NUMBERS_DATA } from "@/data/landing";

export function Method() {
  return (
    <section
      id="metodo"
      aria-labelledby="method-heading"
      className="relative scroll-mt-20 border-b border-[#F5F5F5]/12 bg-[#15181C] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        {/* Top Editorial Grid: Headline + High-Contrast Equipment Photo */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-2 w-2 bg-[#C6FF00]" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#C6FF00] uppercase">
                {METHOD_DATA.eyebrow}
              </span>
            </div>

            <h2
              id="method-heading"
              className="mt-4 font-display text-4xl leading-[0.96] font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-5xl lg:text-6xl"
            >
              {METHOD_DATA.title}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#A1A8B3] sm:text-lg">
              {METHOD_DATA.description}
            </p>
          </div>

          {/* Editorial Photographic Cutout */}
          <div className="lg:col-span-5">
            <div className="relative h-64 w-full overflow-hidden border border-[#F5F5F5]/15 bg-[#0B0D0F] sm:h-72">
              <Image
                src="/images/method-training.jpg"
                alt="Detalhe de barra olímpica e anilhas em preparação para treinamento de força"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center contrast-125 grayscale"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-[#0B0D0F]/30 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between border-t border-[#C6FF00]/50 pt-3">
                <span className="font-mono text-xs font-semibold tracking-[0.16em] text-[#F5F5F5] uppercase">
                  PRESCRIÇÃO SOB MEDIDA
                </span>
                <span className="bg-[#C6FF00] px-2 py-0.5 font-mono text-[11px] font-bold text-[#0B0D0F] uppercase">
                  FORMA 90
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Individual Variables Matrix */}
        <div className="mt-14 border border-[#F5F5F5]/12 bg-[#0B0D0F] p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col justify-between gap-4 border-b border-[#F5F5F5]/12 pb-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <Sliders className="h-5 w-5 text-[#C6FF00]" aria-hidden="true" />
              <h3 className="font-display text-xl font-bold tracking-wide text-[#F5F5F5] uppercase sm:text-2xl">
                Cada pessoa treina em uma realidade diferente
              </h3>
            </div>
            <span className="font-mono text-xs tracking-[0.16em] text-[#C6FF00] uppercase">
              6 VARIÁVEIS DE ADAPTAÇÃO INDIVIDUAL
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-px bg-[#F5F5F5]/10 sm:grid-cols-2 lg:grid-cols-3">
            {METHOD_DATA.variables.map((v) => (
              <div
                key={v.code}
                className="bg-[#0B0D0F] p-5 transition-colors duration-150 hover:bg-[#15181C]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-[#C6FF00]">
                    {v.code}
                  </span>
                  <span className="h-1.5 w-1.5 bg-[#C6FF00]" aria-hidden="true" />
                </div>
                <h4 className="mt-2 font-display text-xl font-bold tracking-tight text-[#F5F5F5] uppercase">
                  {v.label}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-[#A1A8B3]">
                  {v.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Core Pillars of Método Forma 90 */}
        <div className="mt-16">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#A1A8B3] uppercase">
              OS 3 PILARES DO MÉTODO FORMA 90
            </span>
            <span className="h-[1px] flex-1 bg-[#F5F5F5]/12" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {METHOD_DATA.pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="relative flex flex-col justify-between border border-[#F5F5F5]/15 bg-[#0B0D0F] p-7 sm:p-8"
              >
                {/* Top Volt Accent Bar */}
                <div
                  className="absolute top-0 left-0 h-1 w-20 bg-[#C6FF00]"
                  aria-hidden="true"
                />

                <div>
                  <div className="flex items-baseline justify-between border-b border-[#F5F5F5]/10 pb-4">
                    <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#A1A8B3] uppercase">
                      PILAR {"//"} {pillar.number}
                    </span>
                    <span className="font-display text-4xl font-bold text-[#C6FF00]">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-3xl font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-4xl">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 font-mono text-xs font-semibold tracking-wider text-[#C6FF00] uppercase">
                    {pillar.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#A1A8B3] sm:text-base">
                    {pillar.description}
                  </p>
                </div>

                <ul className="mt-7 space-y-2.5 border-t border-[#F5F5F5]/10 pt-5">
                  {pillar.metrics.map((metric) => (
                    <li
                      key={metric}
                      className="flex items-center gap-2.5 font-mono text-xs text-[#F5F5F5]"
                    >
                      <Check
                        className="h-3.5 w-3.5 shrink-0 text-[#C6FF00]"
                        aria-hidden="true"
                      />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Section 20: Giant Conceptual Numbers Impact Block */}
        <div
          aria-label="Conceitos em números do Método Forma 90"
          className="mt-20 border-t-2 border-[#C6FF00] bg-[#0B0D0F] p-8 sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 divide-y divide-[#F5F5F5]/12 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {NUMBERS_DATA.map((stat, idx) => (
              <div
                key={stat.value}
                className={`py-6 first:pt-0 last:pb-0 lg:py-0 ${
                  idx === 0
                    ? "lg:pr-10"
                    : idx === 1
                    ? "lg:px-10"
                    : "lg:pl-10"
                }`}
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-[#A1A8B3] uppercase">
                  CONCEITO 0{idx + 1}
                </span>
                <p className="mt-2 font-display text-6xl leading-none font-bold tracking-tight text-[#C6FF00] uppercase sm:text-7xl">
                  {stat.value}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold tracking-wide text-[#F5F5F5] uppercase">
                  {stat.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A1A8B3]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
