import { BadgeCheck, MapPin, Phone, ScrollText } from "lucide-react";
import { site } from "@/lib/site";

const items = [
  {
    icon: ScrollText,
    title: "North Carolina license on file",
    body: `${site.licenseLabel} #${site.licenseNumber}. Recent licensing-directory checks have reported this license as active. Confirm current status with the owner or the state board before relying on it.`,
  },
  {
    icon: MapPin,
    title: "Wake Forest / Raleigh presence",
    body: "Public records associate the company with Wake Forest and Raleigh, North Carolina. This demo uses a service-area location rather than a street address.",
  },
  {
    icon: Phone,
    title: "Direct phone and email",
    body: `Call ${site.phoneDisplay} or email ${site.email}. An additional public number is ${site.phoneAltDisplay}.`,
  },
  {
    icon: BadgeCheck,
    title: "Named principal",
    body: `${site.principal} is listed as the principal / owner and as president on North Carolina business filings.`,
  },
] as const;

export function TrustStrip() {
  return (
    <section className="page-wrap py-20 md:py-28">
      <p className="kicker">Verified public information</p>
      <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold md:text-5xl">
        Facts this demo is willing to put on the page.
      </h2>
      <p className="mt-5 max-w-2xl text-muted">
        This concept does not invent ratings, insurance, hours, or years in
        business. The items below are taken from public business and licensing
        information supplied for this demo.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="surface-card p-6 md:p-7">
            <item.icon className="size-5 text-muted" aria-hidden="true" />
            <h3 className="mt-4 font-display text-2xl font-semibold">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
