import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/home/cta-band";
import { Button } from "@/components/ui/button";
import { allServices, pageHead, site } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead(
      "Plumbing Services in Wake Forest, NC | Dazco Plumbing Inc.",
      "Plumbing services, plumbing repairs, water heater services, gas and piping services, and septic system services from Dazco Plumbing Inc. in Wake Forest and Raleigh, NC.",
    ),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main id="main">
      <section className="page-wrap py-16 md:py-24">
        <p className="kicker">Services</p>
        <h1 className="display mt-4 max-w-3xl text-5xl md:text-7xl">
          Plumbing categories for Wake Forest and Raleigh.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          The list on this page is the public service set provided for this
          website concept. It has not been expanded with extra specialties.
          Service details, pricing, and current availability are to be confirmed
          by the owner.
        </p>
        <p className="mt-4 max-w-2xl text-sm text-subtle">
          Because the published license is North Carolina Plumbing Class II,
          state rules limit that license class to single-family detached
          dwellings. Confirm whether a specific property and job fall within
          the work Dazco currently accepts.
        </p>
      </section>

      <section className="page-wrap grid gap-8 pb-8">
        {allServices.map((service) => (
          <article
            key={service.slug}
            id={service.slug}
            className="surface-card grid scroll-mt-28 overflow-hidden md:grid-cols-2"
          >
            <img
              src={service.image}
              alt={service.alt}
              className="aspect-4/3 h-full w-full object-cover"
            />
            <div className="flex flex-col justify-center p-6 md:p-10">
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 text-muted">{service.summary}</p>
              <p className="mt-4 text-sm text-subtle">
                Service details to be confirmed by the owner.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="page-wrap grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="kicker">Before you call</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              What helps a plumbing contractor quote a job.
            </h2>
          </div>
          <div className="space-y-5 text-muted md:col-span-7">
            <p>
              A plumbing contractor in Raleigh, NC or Wake Forest can give a
              clearer answer when you describe the system, not just the
              symptom. Note whether the issue is at a sink, water heater, gas
              line, or septic system. Say if the home is a single-family house.
              Mention any recent work on the same system.
            </p>
            <p>
              If you can do so safely, know where the water shutoff is and
              whether the problem is isolated to one fixture. Do not operate
              gas valves unless you know how. For septic questions, it helps to
              know the age of the system if you have it, and whether the tank
              has been serviced. Those notes are for the homeowner; they are
              not a claim that Dazco offers every related specialty.
            </p>
            <p>
              Ask the contractor to confirm license class, whether the job is
              in their service area, and whether a permit is required. This
              demo does not publish prices, guarantees, or warranties. Those
              would be written by the owner if they belong on a final site.
            </p>
            <p>
              Call{" "}
              <a href={site.phoneHref} className="text-fg underline">
                {site.phoneDisplay}
              </a>{" "}
              or use the{" "}
              <Link to="/contact" className="text-fg underline">
                contact form
              </Link>
              . The form is a demo and does not email the company.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
