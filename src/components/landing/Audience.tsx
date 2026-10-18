import { ArrowRight } from "lucide-react";
import { AUDIENCE_DATA } from "@/data/landing";

export function Audience() {
  return (
    <section
      aria-labelledby="audience-heading"
      className="relative border-b border-[#F5F5F5]/12 bg-[#0B0D0F] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        {/* Top Split Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#F5F5F5]/12 pb-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-2 w-2 bg-[#C6FF00]" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#C6FF00] uppercase">
                {AUDIENCE_DATA.eyebrow}
              </span>
            </div>

            <h2
              id="audience-heading"
              className="mt-4 font-display text-4xl leading-[0.96] font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-5xl lg:text-6xl"
            >
              {AUDIENCE_DATA.title}
            </h2>
          </div>

          <p className="max-w-md text-base leading-relaxed text-[#A1A8B3] lg:text-right">
            {AUDIENCE_DATA.subtitle}
          </p>
        </div>

        {/* Light Architectural 2-Column Ledger (Open composition, no boxy cards) */}
        <div className="grid grid-cols-1 divide-y divide-[#F5F5F5]/10 md:grid-cols-2 md:divide-x md:divide-y-0">
          {/* Left Column (Profiles 1-3) */}
          <div className="divide-y divide-[#F5F5F5]/10 md:pr-8 lg:pr-12">
            {AUDIENCE_DATA.profiles.slice(0, 3).map((profile) => (
              <div key={profile.code} className="py-8 first:pt-8 last:pb-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#C6FF00]">
                    {"//"}{profile.code}
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#A1A8B3]" aria-hidden="true" />
                </div>

                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-3xl">
                  {profile.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[#A1A8B3] sm:text-base">
                  {profile.scenario}
                </p>

                <p className="mt-3 border-l-2 border-[#C6FF00]/70 pl-3 font-mono text-xs text-[#F5F5F5]/90">
                  {profile.solution}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column (Profiles 4-6) */}
          <div className="divide-y divide-[#F5F5F5]/10 md:pl-8 lg:pl-12">
            {AUDIENCE_DATA.profiles.slice(3, 6).map((profile) => (
              <div key={profile.code} className="py-8 first:pt-8 last:pb-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#C6FF00]">
                    {"//"}{profile.code}
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#A1A8B3]" aria-hidden="true" />
                </div>

                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-3xl">
                  {profile.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[#A1A8B3] sm:text-base">
                  {profile.scenario}
                </p>

                <p className="mt-3 border-l-2 border-[#C6FF00]/70 pl-3 font-mono text-xs text-[#F5F5F5]/90">
                  {profile.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
