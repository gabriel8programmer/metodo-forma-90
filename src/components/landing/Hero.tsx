import Image from "next/image";
import { ArrowUpRight, ArrowDownRight, Dumbbell, Activity, ShieldCheck } from "lucide-react";
import { HERO_DATA } from "@/data/landing";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100vh-5rem)] w-full overflow-hidden border-b border-[#F5F5F5]/12 bg-[#0B0D0F]"
    >
      {/* Background Editorial Photography Canvas */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full lg:ml-auto lg:w-[74%]">
          <Image
            src="/images/hero-athlete.jpg"
            alt="Atleta realizando levantamento terra com barra em academia de alto contraste"
            fill
            preload={true}
            sizes="(max-width: 1024px) 100vw, 75vw"
            className="object-cover object-center brightness-90 contrast-115 saturate-90"
          />
          {/* Multi-layered editorial directional gradients for contrast and asymmetric cutout feel */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#0B0D0F] via-[#0B0D0F]/80 to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-[#0B0D0F]/35 to-[#0B0D0F]/60"
            aria-hidden="true"
          />
        </div>
        {/* Subtle Telemetry Grid Overlay */}
        <div className="bg-telemetry-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      </div>

      {/* Diagonal Kinetic Slash Element */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[18%] z-10 hidden h-[135%] w-[2px] rotate-[16deg] bg-gradient-to-b from-transparent via-[#C6FF00]/50 to-transparent lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[17.4%] z-10 hidden h-[135%] w-[1px] rotate-[16deg] bg-gradient-to-b from-transparent via-[#F5F5F5]/15 to-transparent lg:block"
      />

      {/* Giant Watermark Number in Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 bottom-12 z-0 select-none font-display text-[11rem] leading-none font-bold tracking-tighter text-[#F5F5F5]/[0.03] sm:text-[16rem] lg:right-10 lg:bottom-16 lg:text-[22rem]"
      >
        90D
      </div>

      {/* Foreground Editorial Container */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1380px] flex-col justify-between px-4 pt-10 pb-12 sm:px-6 lg:px-10 lg:pt-16 lg:pb-14">
        {/* Top Row: Eyebrow + Location Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F5F5F5]/12 pb-5">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2.5 w-2.5 bg-[#C6FF00]" aria-hidden="true" />
            <span className="font-mono text-xs font-medium tracking-[0.2em] text-[#C6FF00] uppercase">
              {HERO_DATA.eyebrow}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 border border-[#F5F5F5]/20 bg-[#15181C]/90 px-3.5 py-1.5 backdrop-blur-sm">
            <Dumbbell className="h-3.5 w-3.5 text-[#C6FF00]" aria-hidden="true" />
            <span className="font-mono text-xs font-medium tracking-wider text-[#F5F5F5] uppercase">
              {HERO_DATA.badge}
            </span>
          </div>
        </div>

        {/* Center Asymmetric Editorial Composition */}
        <div className="my-auto grid grid-cols-1 items-end gap-10 py-10 lg:grid-cols-12 lg:py-14">
          {/* Left / Overlapping Giant Display Typography (Cols 1-8) */}
          <div className="lg:col-span-8">
            <p className="mb-4 inline-flex items-center gap-2 border-l-2 border-[#C6FF00] pl-3 font-mono text-xs tracking-[0.14em] text-[#A1A8B3] uppercase sm:text-sm">
              {HERO_DATA.alternativeTag}
            </p>

            <h1
              id="hero-heading"
              className="font-display text-[2.85rem] leading-[0.94] font-bold tracking-[-0.02em] text-[#F5F5F5] uppercase sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[6.1rem]"
            >
              <span className="block">Pare de apenas treinar.</span>
              <span className="mt-1.5 block text-[#C6FF00]">
                Comece a evoluir.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed font-normal text-[#F5F5F5]/90 sm:text-lg md:text-xl">
              {HERO_DATA.subheadline}
            </p>

            {/* CTAs + Small Info Pill */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#planos"
                className="group inline-flex items-center justify-center gap-3 bg-[#C6FF00] px-7 py-4 font-display text-base font-bold tracking-[0.08em] text-[#0B0D0F] uppercase transition-all duration-150 hover:bg-[#D4FF33] sm:px-8 sm:py-4.5 sm:text-lg"
              >
                <span>{HERO_DATA.primaryCta}</span>
                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>

              <a
                href="#metodo"
                className="group inline-flex items-center justify-center gap-2.5 border border-[#F5F5F5]/30 bg-[#15181C]/80 px-7 py-4 font-display text-base font-semibold tracking-[0.08em] text-[#F5F5F5] uppercase backdrop-blur-sm transition-colors duration-150 hover:border-[#C6FF00] hover:text-[#C6FF00] sm:px-8 sm:py-4.5 sm:text-lg"
              >
                <span>{HERO_DATA.secondaryCta}</span>
                <ArrowDownRight
                  className="h-5 w-5 text-[#C6FF00] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Micro Context Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#A1A8B3] sm:text-sm">
              <span className="inline-flex items-center gap-2 font-medium text-[#F5F5F5]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6FF00]" aria-hidden="true" />
                Treinos para academia ou casa
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#C6FF00]" aria-hidden="true" />
                Prescrição individual por Profissional de Educação Física
              </span>
            </div>
          </div>

          {/* Right Offset Telemetry Cutout Card (Cols 9-12) */}
          <div className="lg:col-span-4">
            <div className="relative border border-[#F5F5F5]/18 bg-[#15181C]/90 p-5 backdrop-blur-md sm:p-6">
              {/* Top Corner Accent */}
              <div
                className="absolute -top-[1px] -left-[1px] h-3 w-12 bg-[#C6FF00]"
                aria-hidden="true"
              />
              <div className="flex items-center justify-between border-b border-[#F5F5F5]/10 pb-3.5">
                <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-[#C6FF00] uppercase">
                  PARÂMETROS DO CICLO
                </span>
                <Activity className="h-4 w-4 text-[#C6FF00]" aria-hidden="true" />
              </div>

              <div className="mt-4 space-y-3.5">
                <div className="flex items-baseline justify-between border-b border-[#F5F5F5]/10 pb-3">
                  <span className="font-mono text-xs text-[#A1A8B3]">BLOCO INICIAL</span>
                  <span className="font-display text-2xl font-bold tracking-tight text-[#F5F5F5]">
                    90 DIAS <span className="text-xs font-mono text-[#C6FF00]">/ 12 SEM</span>
                  </span>
                </div>
                <div className="flex items-baseline justify-between border-b border-[#F5F5F5]/10 pb-3">
                  <span className="font-mono text-xs text-[#A1A8B3]">ADAPTAÇÃO</span>
                  <span className="font-mono text-xs font-semibold text-[#F5F5F5] uppercase">
                    ACADEMIA • CONDOMÍNIO • CASA
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs text-[#A1A8B3]">CONTROLE</span>
                  <span className="font-mono text-xs font-semibold text-[#C6FF00] uppercase">
                    CARGA + CADÊNCIA + CONSTÂNCIA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Architectural Strip */}
        <div className="grid grid-cols-1 gap-4 border-t border-[#F5F5F5]/15 pt-6 sm:grid-cols-3">
          {HERO_DATA.telemetry.map((item, index) => (
            <div
              key={item.label}
              className="flex items-center justify-between border-l-2 border-[#C6FF00]/60 bg-[#15181C]/60 px-4 py-2.5 backdrop-blur-xs"
            >
              <span className="font-mono text-[11px] tracking-[0.18em] text-[#A1A8B3] uppercase">
                0{index + 1} {"//"} {item.label}
              </span>
              <span
                className={`font-display text-lg font-bold tracking-wider uppercase ${
                  item.accent ? "text-[#C6FF00]" : "text-[#F5F5F5]"
                }`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
