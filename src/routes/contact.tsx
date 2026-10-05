import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { QuoteForm } from "@/components/contact/quote-form";
import { pageHead, site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact Dazco Plumbing Inc. | Wake Forest / Raleigh, NC",
      "Request a quote from Dazco Plumbing Inc. Call (919) 556-6650 or email dazcoplbg@yahoo.com. Serving Wake Forest and Raleigh, North Carolina.",
    ),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main id="main" className="page-wrap py-16 md:py-24">
      <p className="kicker">Contact</p>
      <h1 className="display mt-4 max-w-3xl text-5xl md:text-7xl">
        Call, email, or send a quote request.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        Use the public phone and email for {site.name} if you need a response
        from the company. The form on this page is part of the website concept
        and does not deliver messages to {site.email}.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <aside className="surface-card p-6 md:p-8">
            <h2 className="font-display text-3xl font-semibold">
              Public contact details
            </h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-muted" />
                <div>
                  <p className="text-subtle">Primary phone</p>
                  <a
                    href={site.phoneHref}
                    className="text-base font-medium text-fg hover:underline"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-muted" />
                <div>
                  <p className="text-subtle">Additional public phone</p>
                  <a
                    href={site.phoneAltHref}
                    className="text-base font-medium text-fg hover:underline"
                  >
                    {site.phoneAltDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-muted" />
                <div>
                  <p className="text-subtle">Email</p>
                  <a
                    href={site.emailHref}
                    className="text-base font-medium text-fg hover:underline"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-muted" />
                <div>
                  <p className="text-subtle">Service area</p>
                  <p className="text-base font-medium text-fg">
                    {site.location}
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-8 h-px bg-border" />
            <p className="mt-6 text-sm text-muted">
              Principal / owner listed on public records: {site.principal}.
            </p>
            <p className="mt-3 text-sm text-muted">
              {site.licenseLabel} #{site.licenseNumber}.
            </p>
            <p className="mt-3 text-sm text-subtle">
              A street address is on some public filings. It is not shown here
              as a customer-facing shop location. If a physical address should
              appear on the final website, the owner should confirm it.
            </p>
            <p className="mt-3 text-sm text-subtle">
              Business hours are not listed. Hours to be confirmed by the
              owner.
            </p>
          </aside>
        </div>
        <div className="lg:col-span-7">
          <QuoteForm />
        </div>
      </div>
    </main>
  );
}
