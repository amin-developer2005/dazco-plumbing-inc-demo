import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Placeholder photograph of a plumber working under a kitchen sink. Final photos to be supplied by the owner."
        className="absolute inset-0 size-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="page-wrap relative flex min-h-[calc(100svh-9.5rem)] flex-col justify-end pb-28 pt-16 md:min-h-[calc(100svh-8rem)] md:pb-16 md:pt-20">
        <p className="kicker">Wake Forest / Raleigh plumbing contractor</p>
        <h1 className="display mt-3 max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Licensed plumbing
          <br />
          for Wake Forest homes.
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted md:text-lg">
          {site.name} is a local plumbing contractor serving Wake Forest and
          Raleigh, North Carolina. Call to discuss a project or request a quote.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <Link to="/contact">Request a Quote</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={site.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              Call {site.phoneDisplay}
            </a>
          </Button>
        </div>
        <p className="mt-4 text-sm text-subtle">
          {site.licenseLabel} #{site.licenseNumber}
        </p>
      </div>
    </section>
  );
}
