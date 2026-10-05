import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

export function HomeIntro() {
  return (
    <section className="page-wrap grid gap-10 py-16 md:grid-cols-12 md:py-24">
      <div className="md:col-span-5">
        <p className="kicker">Local contractor</p>
        <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
          A Wake Forest plumbing company, described without extra claims.
        </h2>
      </div>
      <div className="space-y-5 text-muted md:col-span-7 md:pt-8">
        <p>
          {site.name} is a plumbing contractor associated with Wake Forest and
          Raleigh, North Carolina. Public records list {site.principal} as the
          principal and president. The company holds {site.licenseLabel} #
          {site.licenseNumber}.
        </p>
        <p>
          Homeowners searching for a plumber in Wake Forest, NC, or a plumbing
          contractor in Raleigh, NC, can use this site to find the published
          phone number, email, license class, and service categories. It is a
          website concept, not an official final site.
        </p>
        <p>
          If you are calling about plumbing repair, water heater services, gas
          and piping services, or septic system services, have the property
          address, a short description of the problem, and a callback number
          ready. Service details beyond the listed categories have not been
          independently verified and should be confirmed with the owner.
        </p>
        <p>
          Read more on the{" "}
          <Link to="/about" className="text-fg underline underline-offset-4">
            About Us
          </Link>{" "}
          and{" "}
          <Link to="/services" className="text-fg underline underline-offset-4">
            Services
          </Link>{" "}
          pages, or go to{" "}
          <Link to="/contact" className="text-fg underline underline-offset-4">
            Contact
          </Link>{" "}
          to request a quote.
        </p>
      </div>
    </section>
  );
}
