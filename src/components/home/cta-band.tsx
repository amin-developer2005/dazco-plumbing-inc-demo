import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="page-wrap py-16 md:py-24">
      <div className="overflow-hidden rounded-[var(--radius-xl)] bg-elevated p-8 shadow-[var(--shadow-border)] md:p-14">
        <p className="kicker">Wake Forest / Raleigh, NC</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold md:text-6xl">
          Request a quote from a local plumbing contractor.
        </h2>
        <p className="mt-5 max-w-xl text-muted">
          Call {site.shortName} at {site.phoneDisplay} or send a message through
          the quote form. The form on this concept site does not email the
          company; the phone and email listed here are the public contacts.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
      </div>
    </section>
  );
}
