import { PROBLEMS_DATA } from "@/data/landing";

export function Problems() {
  return (
    <section
      aria-labelledby="problems-heading"
      className="relative border-b border-[#F5F5F5]/12 bg-[#0B0D0F] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        {/* Asymmetric Editorial Split: Left Sticky Manifesto Header + Right Typographic Rows */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column (4 cols) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-2 w-2 bg-[#C6FF00]" aria-hidden="true" />
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#C6FF00] uppercase">
                  {PROBLEMS_DATA.eyebrow}
                </span>
              </div>

              <h2
                id="problems-heading"
                className="mt-4 font-display text-4xl leading-[0.98] font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-5xl lg:text-[3.4rem]"
              >
                {PROBLEMS_DATA.title}
              </h2>

              <p className="mt-6 text-base leading-relaxed text-[#A1A8B3] sm:text-lg">
                {PROBLEMS_DATA.subtitle}
              </p>

              {/* Editorial Callout Bar */}
              <div className="mt-8 border-l-2 border-[#C6FF00] bg-[#15181C] p-5">
                <p className="font-mono text-xs tracking-wider text-[#C6FF00] uppercase">
                  O CUSTO DO IMPROVISO
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#F5F5F5]/90">
                  Suar na academia sem saber por que está fazendo cada série mantém você ocupado, mas não necessariamente em evolução.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Large Typographic Statements Interleaved with Explanations */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#F5F5F5]/12 border-t border-b border-[#F5F5F5]/12">
              {PROBLEMS_DATA.items.map((item) => (
                <article
                  key={item.number}
                  className="group py-8 transition-colors duration-200 first:pt-8 last:pb-8 sm:py-10"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                    {/* Large Monospace Number */}
                    <div className="flex items-center justify-between sm:block">
                      <span className="font-display text-3xl font-bold text-[#C6FF00] sm:text-4xl">
                        /{item.number}
                      </span>
                      <span className="border border-[#F5F5F5]/15 bg-[#15181C] px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] text-[#A1A8B3] uppercase sm:hidden">
                        {item.tag}
                      </span>
                    </div>

                    {/* Large Editorial Statement + Interleaved Smaller Explanation */}
                    <div className="flex-1">
                      <div className="mb-2 hidden items-center gap-3 sm:flex">
                        <span className="font-mono text-[11px] tracking-[0.18em] text-[#A1A8B3] uppercase">
                          FALHA COMUM {"//"} {item.tag}
                        </span>
                        <span className="h-[1px] flex-1 bg-[#F5F5F5]/10" aria-hidden="true" />
                      </div>

                      <h3 className="font-display text-2xl leading-[1.08] font-bold tracking-tight text-[#F5F5F5] uppercase transition-colors duration-150 group-hover:text-[#C6FF00] sm:text-3xl">
                        {item.statement}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#A1A8B3] sm:text-base">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
