import Image from "next/image";
import { Award, Check } from "lucide-react";
import { COACH_DATA } from "@/data/landing";

export function Coach() {
  return (
    <section
      aria-labelledby="coach-heading"
      className="relative border-b border-[#F5F5F5]/12 bg-[#0B0D0F] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Portrait Frame (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Offset Volt Frame Border */}
              <div
                aria-hidden="true"
                className="absolute -right-3 -bottom-3 h-full w-full border-2 border-[#C6FF00]/70"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#F5F5F5]/20 bg-[#15181C]">
                <Image
                  src="/images/coach-lucas.jpg"
                  alt="Lucas Andrade, Personal Trainer responsável pelo Método Forma 90, em ambiente de treino"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top contrast-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent"
                  aria-hidden="true"
                />
                {/* Bottom Overlay Credential Plate */}
                <div className="absolute right-4 bottom-4 left-4 border border-[#F5F5F5]/20 bg-[#0B0D0F]/90 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold tracking-wide text-[#F5F5F5] uppercase">
                      {COACH_DATA.name}
                    </span>
                    <Award className="h-4 w-4 text-[#C6FF00]" aria-hidden="true" />
                  </div>
                  <p className="mt-0.5 font-mono text-xs text-[#C6FF00]">
                    {COACH_DATA.credentials}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Bio & Philosophy (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-2 w-2 bg-[#C6FF00]" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#C6FF00] uppercase">
                {COACH_DATA.eyebrow}
              </span>
            </div>

            <h2
              id="coach-heading"
              className="mt-4 font-display text-4xl leading-[0.96] font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-5xl lg:text-6xl"
            >
              {COACH_DATA.name}
            </h2>

            <p className="mt-2 font-mono text-sm font-semibold tracking-wider text-[#C6FF00] uppercase">
              {COACH_DATA.credentials}
            </p>

            <p className="mt-6 text-base leading-relaxed text-[#F5F5F5]/90 sm:text-lg">
              {COACH_DATA.description}
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#A1A8B3]">
              {COACH_DATA.secondaryBio}
            </p>

            {/* Philosophy Blockquote */}
            <blockquote className="mt-8 border-l-4 border-[#C6FF00] bg-[#15181C] p-6 sm:p-8">
              <p className="font-display text-2xl leading-snug font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-3xl">
                {COACH_DATA.quote}
              </p>
              <footer className="mt-3 font-mono text-xs tracking-[0.16em] text-[#C6FF00] uppercase">
                — FILOSOFIA DE TRABALHO • MÉTODO FORMA 90
              </footer>
            </blockquote>

            {/* Technical Focus List */}
            <ul className="mt-8 space-y-3 border-t border-[#F5F5F5]/12 pt-6">
              {COACH_DATA.pillars.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#A1A8B3] sm:text-base"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#C6FF00]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
