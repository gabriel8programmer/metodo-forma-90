"use client";

import { useState } from "react";
import {
  Timer,
  Flame,
  CheckCircle2,
  PlayCircle,
  Clock,
  TrendingUp,
  SlidersHorizontal,
} from "lucide-react";
import { WORKOUT_SHEETS, type WorkoutExercise } from "@/data/landing";

function getStatusBadge(status: WorkoutExercise["status"]) {
  switch (status) {
    case "Concluído":
      return (
        <span className="inline-flex items-center gap-1.5 border border-[#F5F5F5]/20 bg-[#F5F5F5]/10 px-2.5 py-1 font-mono text-[11px] font-medium text-[#F5F5F5]">
          <CheckCircle2 className="h-3.5 w-3.5 text-[#C6FF00]" aria-hidden="true" />
          Concluído
        </span>
      );
    case "Carga ajustada":
      return (
        <span className="inline-flex items-center gap-1.5 border border-[#C6FF00]/60 bg-[#C6FF00]/15 px-2.5 py-1 font-mono text-[11px] font-bold text-[#C6FF00]">
          <TrendingUp className="h-3.5 w-3.5 text-[#C6FF00]" aria-hidden="true" />
          Carga ajustada
        </span>
      );
    case "Em execução":
      return (
        <span className="inline-flex items-center gap-1.5 bg-[#C6FF00] px-2.5 py-1 font-mono text-[11px] font-bold text-[#0B0D0F]">
          <PlayCircle className="h-3.5 w-3.5 text-[#0B0D0F]" aria-hidden="true" />
          Em execução
        </span>
      );
    case "Próximo":
      return (
        <span className="inline-flex items-center gap-1.5 border border-[#F5F5F5]/15 bg-[#0B0D0F] px-2.5 py-1 font-mono text-[11px] text-[#A1A8B3]">
          <Clock className="h-3.5 w-3.5 text-[#A1A8B3]" aria-hidden="true" />
          Próximo
        </span>
      );
  }
}

export function WorkoutPreview() {
  const [activeSheetId, setActiveSheetId] = useState<string>(WORKOUT_SHEETS[0].id);
  const currentSheet =
    WORKOUT_SHEETS.find((s) => s.id === activeSheetId) ?? WORKOUT_SHEETS[0];

  return (
    <section
      id="treinos"
      aria-labelledby="workout-preview-heading"
      className="relative scroll-mt-20 border-b border-[#F5F5F5]/12 bg-[#0B0D0F] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        {/* Header Bar */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-2 w-2 bg-[#C6FF00]" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#C6FF00] uppercase">
                SIMULAÇÃO DA FICHA DE TREINO
              </span>
            </div>

            <h2
              id="workout-preview-heading"
              className="mt-4 font-display text-4xl leading-[0.96] font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-5xl lg:text-6xl"
            >
              Clareza total antes de tocar na barra.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#A1A8B3] sm:text-lg">
              Veja como seu treino é estruturado: exercícios selecionados para o seu objetivo, séries, faixas de repetições, intervalos exatos, histórico de carga e status da sessão.
            </p>
          </div>

          {/* Interactive Sheet Selector Tabs */}
          <div
            role="tablist"
            aria-label="Selecionar visualização de ficha de treino"
            className="flex flex-wrap gap-2"
          >
            {WORKOUT_SHEETS.map((sheet) => {
              const isSelected = sheet.id === currentSheet.id;
              return (
                <button
                  key={sheet.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${sheet.id}`}
                  id={`tab-${sheet.id}`}
                  onClick={() => setActiveSheetId(sheet.id)}
                  className={`cursor-pointer border px-4 py-2.5 font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-150 ${
                    isSelected
                      ? "border-[#C6FF00] bg-[#C6FF00] text-[#0B0D0F]"
                      : "border-[#F5F5F5]/20 bg-[#15181C] text-[#A1A8B3] hover:border-[#F5F5F5]/40 hover:text-[#F5F5F5]"
                  }`}
                >
                  {sheet.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Simulated Athletic Training Console */}
        <div
          id={`panel-${currentSheet.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentSheet.id}`}
          className="mt-10 border border-[#F5F5F5]/20 bg-[#15181C]"
        >
          {/* Console Top Telemetry Header */}
          <div className="border-b border-[#F5F5F5]/15 bg-[#1D2228] px-5 py-5 sm:px-8 sm:py-6">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-[#C6FF00] px-2.5 py-0.5 font-mono text-xs font-bold text-[#0B0D0F]">
                    {currentSheet.code}
                  </span>
                  <span className="font-mono text-xs text-[#A1A8B3]">
                    {currentSheet.weekCycle}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-4xl">
                  {currentSheet.title}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-4 border-t border-[#F5F5F5]/10 pt-3 md:border-t-0 md:pt-0">
                <div className="flex items-center gap-2 border border-[#F5F5F5]/15 bg-[#0B0D0F] px-3.5 py-2">
                  <Timer className="h-4 w-4 text-[#C6FF00]" aria-hidden="true" />
                  <span className="font-mono text-xs text-[#F5F5F5]">
                    {currentSheet.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2 border border-[#F5F5F5]/15 bg-[#0B0D0F] px-3.5 py-2">
                  <SlidersHorizontal className="h-4 w-4 text-[#C6FF00]" aria-hidden="true" />
                  <span className="font-mono text-xs text-[#F5F5F5]">
                    {currentSheet.environment}
                  </span>
                </div>
                <div className="flex items-center gap-2 border border-[#F5F5F5]/15 bg-[#0B0D0F] px-3.5 py-2">
                  <Flame className="h-4 w-4 text-[#C6FF00]" aria-hidden="true" />
                  <span className="font-mono text-xs text-[#F5F5F5]">
                    {currentSheet.focus}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Column Headers (Hidden on mobile for stacked cards) */}
          <div
            aria-hidden="true"
            className="hidden border-b border-[#F5F5F5]/12 bg-[#0B0D0F]/60 px-8 py-3.5 font-mono text-[11px] font-semibold tracking-[0.18em] text-[#A1A8B3] uppercase lg:grid lg:grid-cols-12 lg:items-center lg:gap-4"
          >
            <div className="col-span-4">EXERCÍCIO & ORIENTAÇÃO TÉCNICA</div>
            <div className="col-span-2 text-center">SÉRIES</div>
            <div className="col-span-2 text-center">REPETIÇÕES</div>
            <div className="col-span-1 text-center">DESCANSO</div>
            <div className="col-span-1 text-center">CARGA</div>
            <div className="col-span-2 text-right">STATUS</div>
          </div>

          {/* Exercise Rows */}
          <div className="divide-y divide-[#F5F5F5]/10">
            {currentSheet.exercises.map((exercise) => {
              const isActive = exercise.status === "Em execução";
              return (
                <div
                  key={exercise.order}
                  className={`p-5 transition-colors sm:px-8 sm:py-5 lg:grid lg:grid-cols-12 lg:items-center lg:gap-4 ${
                    isActive
                      ? "border-l-4 border-l-[#C6FF00] bg-[#1D2228]/90"
                      : "hover:bg-[#1D2228]/40"
                  }`}
                >
                  {/* Exercise Name + Biomechanical Note */}
                  <div className="lg:col-span-4">
                    <div className="flex items-start justify-between gap-3 lg:justify-start">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-sm font-bold text-[#C6FF00]">
                          {exercise.order}
                        </span>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-display text-xl font-bold tracking-wide text-[#F5F5F5] uppercase">
                              {exercise.name}
                            </h4>
                            <span className="font-mono text-[11px] text-[#A1A8B3]">
                              • {exercise.muscleGroup}
                            </span>
                          </div>
                          <p className="mt-1 font-mono text-xs text-[#A1A8B3]">
                            {exercise.note}
                          </p>
                        </div>
                      </div>

                      {/* Mobile Status Badge */}
                      <div className="shrink-0 lg:hidden">
                        {getStatusBadge(exercise.status)}
                      </div>
                    </div>
                  </div>

                  {/* Mobile 4-Metric Grid / Desktop Columns */}
                  <div className="mt-4 grid grid-cols-2 gap-2.5 border-t border-[#F5F5F5]/10 pt-3.5 sm:grid-cols-4 lg:col-span-6 lg:mt-0 lg:grid-cols-6 lg:border-t-0 lg:pt-0">
                    {/* Sets */}
                    <div className="bg-[#0B0D0F]/70 p-2.5 lg:col-span-2 lg:bg-transparent lg:p-0 lg:text-center">
                      <span className="block font-mono text-[10px] text-[#A1A8B3] uppercase lg:hidden">
                        Séries
                      </span>
                      <span className="font-mono text-sm font-semibold text-[#F5F5F5]">
                        {exercise.sets}
                      </span>
                    </div>

                    {/* Reps */}
                    <div className="bg-[#0B0D0F]/70 p-2.5 lg:col-span-2 lg:bg-transparent lg:p-0 lg:text-center">
                      <span className="block font-mono text-[10px] text-[#A1A8B3] uppercase lg:hidden">
                        Repetições
                      </span>
                      <span className="font-mono text-sm font-semibold text-[#F5F5F5]">
                        {exercise.reps}
                      </span>
                    </div>

                    {/* Rest */}
                    <div className="bg-[#0B0D0F]/70 p-2.5 lg:col-span-1 lg:bg-transparent lg:p-0 lg:text-center">
                      <span className="block font-mono text-[10px] text-[#A1A8B3] uppercase lg:hidden">
                        Descanso
                      </span>
                      <span className="font-mono text-sm text-[#A1A8B3]">
                        {exercise.rest}
                      </span>
                    </div>

                    {/* Load */}
                    <div className="bg-[#0B0D0F]/70 p-2.5 lg:col-span-1 lg:bg-transparent lg:p-0 lg:text-center">
                      <span className="block font-mono text-[10px] text-[#A1A8B3] uppercase lg:hidden">
                        Carga
                      </span>
                      <span className="font-mono text-sm font-bold text-[#C6FF00]">
                        {exercise.load}
                      </span>
                    </div>
                  </div>

                  {/* Desktop Status Column */}
                  <div className="hidden lg:col-span-2 lg:flex lg:justify-end">
                    {getStatusBadge(exercise.status)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Console Footer Bar */}
          <div className="flex flex-col items-start justify-between gap-4 border-t border-[#F5F5F5]/15 bg-[#0B0D0F] px-5 py-4 sm:flex-row sm:items-center sm:px-8">
            <p className="font-mono text-xs text-[#A1A8B3]">
              <span className="text-[#C6FF00]">NOTA DO TREINADOR:</span> Registre a carga utilizada na última série de cada exercício para recalibrarmos a Semana 07.
            </p>
            <span className="font-mono text-[11px] tracking-wider text-[#A1A8B3] uppercase">
              INTERFACE DEMONSTRATIVA • MÉTODO FORMA 90
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
