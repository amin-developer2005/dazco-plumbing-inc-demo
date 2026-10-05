import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-surface text-fg">
      <div className="page-wrap grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Local plumbing contractor serving Wake Forest and Raleigh, North
            Carolina. This page is a website concept. Final service details and
            business information should be confirmed by the owner.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="kicker">Pages</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="kicker">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-muted" />
              <a href={site.phoneHref} className="text-fg hover:underline">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-muted" />
              <a href={site.emailHref} className="text-fg hover:underline">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-muted" />
              <span>{site.location}</span>
            </li>
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-subtle">
            {site.licenseLabel} #{site.licenseNumber}
          </p>
        </div>
      </div>
      <div className="hairline" />
      <div className="page-wrap flex flex-col gap-2 py-5 text-xs text-subtle md:flex-row md:items-center md:justify-between">
        <p>
          Website concept for {site.name}. Not the company’s officially approved
          final website.
        </p>
        <p>Principal: {site.principal}</p>
      </div>
    </footer>
  );
}
