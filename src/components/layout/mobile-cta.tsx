import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={site.phoneHref}
          className="pressable inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-elevated text-sm font-medium text-fg shadow-[var(--shadow-border)]"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call now
        </a>
        <Link
          to="/contact"
          className="pressable inline-flex h-12 items-center justify-center rounded-[var(--radius-sm)] bg-accent text-sm font-medium text-accent-fg"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  );
}
