import type { ReactNode } from "react";
import { DemoBanner } from "@/components/layout/demo-banner";
import { HashScroll } from "@/components/layout/hash-scroll";
import { MobileCta } from "@/components/layout/mobile-cta";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <DemoBanner />
      <SiteHeader />
      <HashScroll />
      <div className="flex flex-1 flex-col pb-24 md:pb-0">{children}</div>
      <SiteFooter />
      <MobileCta />
    </div>
  );
}
