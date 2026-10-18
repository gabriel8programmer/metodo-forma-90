// Dados fictícios utilizados apenas para apresentação visual do projeto.
import { TrendingUp, CalendarCheck, BarChart3, Info } from "lucide-react";
import { PROGRESS_DATA } from "@/data/landing";

export function Progress() {
  return (
    <section
      id="resultados"
      aria-labelledby="progress-heading"
      className="relative scroll-mt-20 border-b border-[#F5F5F5]/12 bg-[#15181C] py-20 sm:py-28 lg:py-32"
    >
      {/* Dados fictícios utilizados apenas para apresentação visual do projeto. */}
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-2 w-2 bg-[#C6FF00]" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#C6FF00] uppercase">
                {PROGRESS_DATA.eyebrow}
              </span>
            </div>

            <h2
              id="progress-heading"
              className="mt-4 font-display text-4xl leading-[0.96] font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-5xl lg:text-6xl"
            >
              {PROGRESS_DATA.title}
            </h2>
          </div>

          <div className="inline-flex items-center gap-2.5 self-start border border-[#C6FF00]/50 bg-[#0B0D0F] px-4 py-2.5 lg:self-auto">
            <CalendarCheck className="h-4 w-4 text-[#C6FF00]" aria-hidden="true" />
            <span className="font-mono text-xs font-bold tracking-wider text-[#F5F5F5] uppercase">
              12 semanas de acompanhamento
            </span>
          </div>
        </div>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A1A8B3] sm:text-lg">
          {PROGRESS_DATA.subtitle}
        </p>

        {/* Top 3 Telemetry Summary Indicators */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PROGRESS_DATA.summaryCards.map((card) => (
            <div
              key={card.label}
              className="border border-[#F5F5F5]/15 bg-[#0B0D0F] p-6"
            >
              <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-[#A1A8B3] uppercase">
                {card.label}
              </span>
              <div className="mt-3 flex items-baseline gap-2.5">
                <span className="font-display text-4xl font-bold text-[#C6FF00] sm:text-5xl">
                  {card.value}
                </span>
                <span className="font-mono text-xs text-[#F5F5F5] uppercase">
                  {card.unit}
                </span>
              </div>
              <p className="mt-3 border-t border-[#F5F5F5]/10 pt-3 font-mono text-xs text-[#A1A8B3]">
                {card.delta}
              </p>
            </div>
          ))}
        </div>

        {/* Main 12-Week Demonstrative Progression Chart & Load Records */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left 7 Cols: 12-Week Bar Chart Simulation */}
          <div className="border border-[#F5F5F5]/15 bg-[#0B0D0F] p-6 sm:p-8 lg:col-span-7">
            <div className="flex flex-col justify-between gap-3 border-b border-[#F5F5F5]/10 pb-5 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-[#C6FF00]" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-bold tracking-wide text-[#F5F5F5] uppercase">
                    Curva de Progressão — 12 Semanas de Acompanhamento
                  </h3>
                </div>
                <p className="mt-1 font-mono text-xs text-[#A1A8B3]">
                  Índice relativo de carga e volume semanal acumulado (Semanas 01 a 12)
                </p>
              </div>
              <span className="self-start bg-[#15181C] px-3 py-1 font-mono text-[11px] text-[#C6FF00] uppercase sm:self-auto">
                CICLO 90 DIAS
              </span>
            </div>

            {/* Responsive 12-Bar Telemetry Chart */}
            <div
              role="img"
              aria-label="Gráfico demonstrativo de evolução de carga e volume ao longo de 12 semanas de acompanhamento"
              className="mt-8"
            >
              <div className="grid h-56 grid-cols-12 items-end gap-1.5 border-b border-[#F5F5F5]/20 pb-3 sm:gap-2.5">
                {PROGRESS_DATA.weeklyData.map((point, index) => {
                  const isDeload = index === 7; // SEM 08 regenerative week
                  const isPeak = index >= 9;
                  return (
                    <div
                      key={point.week}
                      className="group flex h-full flex-col items-center justify-end"
                    >
                      <span className="mb-1.5 font-mono text-[10px] font-bold text-[#F5F5F5]/80">
                        {point.loadIndex}%
                      </span>
                      <div
                        style={{ height: `${point.loadIndex}%` }}
                        className={`w-full transition-all duration-200 ${
                          isPeak
                            ? "bg-[#C6FF00]"
                            : isDeload
                            ? "border border-[#C6FF00]/60 bg-[#C6FF00]/25"
                            : "bg-[#F5F5F5]/30 group-hover:bg-[#C6FF00]/80"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Week Labels Row */}
              <div className="mt-2.5 grid grid-cols-12 gap-1 text-center">
                {PROGRESS_DATA.weeklyData.map((point, idx) => (
                  <div key={point.week} className="flex flex-col items-center">
                    <span className="font-mono text-[10px] text-[#A1A8B3]">
                      S{String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="mt-1 font-mono text-[9px] text-[#C6FF00]"
                      title={`${point.sessionsCompleted} treinos na semana`}
                    >
                      {point.sessionsCompleted}x
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Legend */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#F5F5F5]/10 pt-4 font-mono text-xs text-[#A1A8B3]">
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 bg-[#F5F5F5]/35" aria-hidden="true" />
                  Adaptação & Base
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 border border-[#C6FF00] bg-[#C6FF00]/25" aria-hidden="true" />
                  Semana 08 (Ajuste Regenerativo)
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 bg-[#C6FF00]" aria-hidden="true" />
                  Pico de Consolidação
                </span>
              </div>
              <span>Frequência semanal: 3x a 4x</span>
            </div>
          </div>

          {/* Right 5 Cols: Load Records Progression Table */}
          <div className="flex flex-col justify-between border border-[#F5F5F5]/15 bg-[#0B0D0F] p-6 sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between border-b border-[#F5F5F5]/10 pb-5">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-[#C6FF00]" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-bold tracking-wide text-[#F5F5F5] uppercase">
                    Registros de Carga
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#C6FF00]">EXEMPLO PRÁTICO</span>
              </div>

              <div className="mt-6 space-y-5">
                {PROGRESS_DATA.exerciseBenchmarks.map((item) => (
                  <div
                    key={item.exercise}
                    className="border border-[#F5F5F5]/10 bg-[#15181C] p-4"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-display text-lg font-bold tracking-wide text-[#F5F5F5] uppercase">
                        {item.exercise}
                      </h4>
                      <span className="bg-[#C6FF00] px-2 py-0.5 font-mono text-xs font-bold text-[#0B0D0F]">
                        {item.progression}
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2 border-t border-[#F5F5F5]/10 pt-3 font-mono text-xs">
                      <div>
                        <span className="block text-[10px] text-[#A1A8B3] uppercase">
                          Semana 01
                        </span>
                        <span className="text-[#F5F5F5]">{item.start}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-[#A1A8B3] uppercase">
                          Semana 06
                        </span>
                        <span className="text-[#F5F5F5]">{item.week6}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-[#C6FF00] uppercase">
                          Semana 12
                        </span>
                        <span className="font-bold text-[#C6FF00]">{item.week12}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Explicit Disclaimer inside the Component */}
            <div className="mt-6 flex items-start gap-2.5 border-t border-[#F5F5F5]/10 pt-4 font-mono text-[11px] leading-relaxed text-[#A1A8B3]">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C6FF00]" aria-hidden="true" />
              <p>{PROGRESS_DATA.disclaimer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
