import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3 text-fg no-underline"
      aria-label="Dazco Plumbing Inc. home"
    >
      <span
        className="flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-elevated shadow-[var(--shadow-border)]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="size-6" fill="none">
          <path
            d="M8 7h9.2c4.4 0 7.8 3.1 7.8 8.2S21.6 23.4 17.2 23.4H8V7Z"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M6 15.2h20"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="square"
          />
        </svg>
      </span>
      <span className={cn("leading-none", compact && "hidden sm:block")}>
        <span className="block font-display text-xl font-semibold tracking-tight">
          DAZCO
        </span>
        <span className="mt-0.5 block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted">
          Plumbing Inc.
        </span>
      </span>
    </Link>
  );
}
