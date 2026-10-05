import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-bg/92 shadow-[var(--shadow-border)] backdrop-blur-md">
      <div className="page-wrap flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-[length:var(--motion-quick)]",
                  active ? "text-fg" : "text-muted hover:text-fg",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex h-12 items-center gap-2 px-2 text-sm font-medium text-fg"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <Button asChild>
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
        <button
          type="button"
          className="relative flex size-11 items-center justify-center rounded-[var(--radius-sm)] text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-bg md:hidden"
        >
          <nav className="page-wrap flex flex-col gap-1 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex min-h-11 items-center text-base font-medium text-fg"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="flex min-h-11 items-center gap-2 text-base font-medium text-fg"
            >
              <Phone className="size-4" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <Button asChild className="mt-2 w-full">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
