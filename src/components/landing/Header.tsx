"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "@/data/landing";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled
          ? "bg-[#0B0D0F]/95 backdrop-blur-md border-b border-[#F5F5F5]/15"
          : "bg-[#0B0D0F]/80 backdrop-blur-sm border-b border-[#F5F5F5]/10"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1380px] items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Brand Identity */}
        <a
          href="#"
          className="group flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-[#C6FF00]"
          aria-label="Método Forma 90 — Voltar ao início"
        >
          <span className="inline-flex h-8 w-2 -skew-x-12 bg-[#C6FF00] transition-transform duration-200 group-hover:scale-y-110" />
          <div className="flex flex-col leading-none">
            <span className="font-mono text-[10px] font-semibold tracking-[0.26em] text-[#A1A8B3] uppercase">
              MÉTODO
            </span>
            <span className="font-display text-2xl font-bold tracking-tight text-[#F5F5F5] uppercase sm:text-[26px]">
              FORMA <span className="text-[#C6FF00]">90</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex md:items-center md:gap-7 lg:gap-9"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 font-mono text-xs font-medium tracking-[0.14em] text-[#A1A8B3] uppercase transition-colors duration-150 hover:text-[#F5F5F5] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#C6FF00] after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <a
            href="#planos"
            className="group relative inline-flex items-center gap-2 bg-[#C6FF00] px-5 py-3 font-display text-sm font-bold tracking-[0.08em] text-[#0B0D0F] uppercase transition-all duration-150 hover:bg-[#D4FF33] active:translate-y-0.5"
          >
            <span>Quero começar</span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          className="inline-flex h-11 w-11 items-center justify-center border border-[#F5F5F5]/20 bg-[#15181C] text-[#F5F5F5] transition-colors hover:border-[#C6FF00] hover:text-[#C6FF00] md:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Menu mobile"
          className="border-b border-[#F5F5F5]/15 bg-[#0B0D0F] px-4 pt-3 pb-6 sm:px-6 md:hidden"
        >
          <div className="flex flex-col divide-y divide-[#F5F5F5]/10">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3.5 font-display text-lg font-semibold tracking-wide text-[#F5F5F5] uppercase transition-colors hover:text-[#C6FF00]"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#C6FF00]">0{idx + 1}</span>
              </a>
            ))}
          </div>
          <div className="mt-5 pt-2">
            <a
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 bg-[#C6FF00] px-6 py-4 font-display text-base font-bold tracking-[0.08em] text-[#0B0D0F] uppercase transition-colors hover:bg-[#D4FF33]"
            >
              <span>Quero começar</span>
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
