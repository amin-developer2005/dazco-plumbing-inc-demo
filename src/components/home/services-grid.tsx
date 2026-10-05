import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { featuredServices } from "@/lib/site";

export function ServicesGrid() {
  return (
    <section className="page-wrap py-20 md:py-28">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="kicker">Featured categories</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Plumbing work, listed as publicly available.
          </h2>
        </div>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-fg"
        >
          All service categories
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <p className="mt-5 max-w-2xl text-muted">
        The categories below come from public listings for this contractor. This
        demo does not add extra services that have not been verified. Full
        details should be confirmed by the owner.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {featuredServices.map((service) => (
          <Link
            key={service.slug}
            to="/services"
            hash={service.slug}
            className="group surface-card overflow-hidden transition-[box-shadow] duration-[length:var(--motion-quick)] hover:shadow-[var(--shadow-border-hover)]"
          >
            <div className="aspect-4/3 overflow-hidden">
              <img
                src={service.image}
                alt={service.alt}
                className="size-full object-cover transition-transform duration-[length:var(--motion-slow)] ease-[var(--ease-out)] group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.summary}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                View category
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
