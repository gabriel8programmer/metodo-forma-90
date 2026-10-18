"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_DATA } from "@/data/landing";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative scroll-mt-20 border-b border-[#F5F5F5]/12 bg-[#0B0D0F] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Sticky Header (4 cols) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-2 w-2 bg-[#C6FF00]" aria-hidden="true" />
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#C6FF00] uppercase">
                  DÚVIDAS FREQUENTES
                </span>
              </div>

              <h2
                id="faq-heading"
                className="mt-4 font-display text-4xl leading-[0.96] font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-5xl"
              >
                Perguntas diretas, respostas claras.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#A1A8B3]">
                Entenda como o Método Forma 90 se adapta ao seu nível, ao seu tempo e aos equipamentos que você tem disponíveis.
              </p>
            </div>
          </div>

          {/* Right Accessible Accordion List (8 cols) */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-[#F5F5F5]/12 border-t border-b border-[#F5F5F5]/12">
              {FAQ_DATA.map((item, idx) => {
                const isOpen = openIndex === idx;
                const buttonId = `faq-trigger-${idx}`;
                const panelId = `faq-panel-${idx}`;

                return (
                  <div key={item.question} className="py-1">
                    <h3>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleItem(idx)}
                        className="group flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left transition-colors"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-mono text-xs font-bold text-[#C6FF00]">
                            0{idx + 1}
                          </span>
                          <span
                            className={`font-display text-xl font-bold tracking-wide uppercase transition-colors sm:text-2xl ${
                              isOpen
                                ? "text-[#C6FF00]"
                                : "text-[#F5F5F5] group-hover:text-[#C6FF00]"
                            }`}
                          >
                            {item.question}
                          </span>
                        </div>

                        <span
                          aria-hidden="true"
                          className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-colors ${
                            isOpen
                              ? "border-[#C6FF00] bg-[#C6FF00] text-[#0B0D0F]"
                              : "border-[#F5F5F5]/20 bg-[#15181C] text-[#F5F5F5] group-hover:border-[#C6FF00]"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                        </span>
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className={isOpen ? "pb-6 pl-8 sm:pl-9" : "hidden"}
                    >
                      <p className="max-w-2xl text-base leading-relaxed text-[#A1A8B3]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
