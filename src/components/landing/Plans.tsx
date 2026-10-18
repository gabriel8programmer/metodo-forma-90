import { Check, ArrowUpRight, Zap } from "lucide-react";
import { PLANS_DATA } from "@/data/landing";

export function Plans() {
  return (
    <section
      id="planos"
      aria-labelledby="plans-heading"
      className="relative scroll-mt-20 border-b border-[#F5F5F5]/12 bg-[#15181C] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2.5">
            <span className="h-2 w-2 bg-[#C6FF00]" aria-hidden="true" />
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#C6FF00] uppercase">
              {PLANS_DATA.eyebrow}
            </span>
          </div>

          <h2
            id="plans-heading"
            className="mt-4 font-display text-4xl leading-[0.96] font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-5xl lg:text-6xl"
          >
            {PLANS_DATA.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#A1A8B3] sm:text-lg">
            {PLANS_DATA.subtitle}
          </p>
        </div>

        {/* 2-Column Asymmetric Architectural Plan Comparison */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {PLANS_DATA.plans.map((plan) => {
            const isFeatured = Boolean(plan.featured);
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between p-7 sm:p-10 ${
                  isFeatured
                    ? "border-2 border-[#C6FF00] bg-[#0B0D0F] lg:col-span-7"
                    : "border border-[#F5F5F5]/18 bg-[#0B0D0F]/80 lg:col-span-5"
                }`}
              >
                {plan.badge && (
                  <div className="mb-6 inline-flex items-center gap-2 self-start bg-[#C6FF00] px-3.5 py-1.5 font-mono text-xs font-bold tracking-wider text-[#0B0D0F] uppercase">
                    <Zap className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-baseline justify-between border-b border-[#F5F5F5]/12 pb-5">
                    <div>
                      <span className="font-mono text-xs tracking-[0.16em] text-[#A1A8B3] uppercase">
                        {plan.cycle}
                      </span>
                      <h3 className="mt-1 font-display text-3xl font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-4xl">
                        Plano {plan.name}
                      </h3>
                    </div>

                    <div className="text-right">
                      <span
                        className={`font-display text-4xl font-bold tracking-tight sm:text-5xl ${
                          isFeatured ? "text-[#C6FF00]" : "text-[#F5F5F5]"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span className="block font-mono text-[11px] text-[#A1A8B3]">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-[#A1A8B3] sm:text-base">
                    {plan.tagline}
                  </p>

                  <ul className="mt-7 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-[#F5F5F5] sm:text-base"
                      >
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-[#C6FF00]"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-4">
                  <a
                    href="#contato"
                    className={`group flex w-full items-center justify-center gap-2.5 px-6 py-4 font-display text-base font-bold tracking-[0.08em] uppercase transition-all duration-150 ${
                      isFeatured
                        ? "bg-[#C6FF00] text-[#0B0D0F] hover:bg-[#D4FF33]"
                        : "border border-[#F5F5F5]/30 bg-[#15181C] text-[#F5F5F5] hover:border-[#C6FF00] hover:text-[#C6FF00]"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowUpRight
                      className="h-5 w-5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Required Demonstrative Disclaimer */}
        <div className="mt-10 text-center">
          <p className="inline-block border border-[#F5F5F5]/15 bg-[#0B0D0F] px-5 py-2.5 font-mono text-xs tracking-wider text-[#A1A8B3]">
            {PLANS_DATA.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
