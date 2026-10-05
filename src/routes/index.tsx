import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/home/cta-band";
import { ProjectGallery } from "@/components/home/gallery";
import { Hero } from "@/components/home/hero";
import { HomeIntro } from "@/components/home/intro";
import { ReviewsPlaceholder } from "@/components/home/reviews-placeholder";
import { ServicesGrid } from "@/components/home/services-grid";
import { TrustStrip } from "@/components/home/trust";
import { pageHead, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: site.name,
  image: "/images/hero.jpg",
  telephone: "+19195566650",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wake Forest",
    addressRegion: "NC",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Wake Forest" },
    { "@type": "City", name: "Raleigh" },
  ],
  founder: { "@type": "Person", name: site.principal },
  description:
    "Local plumbing contractor serving Wake Forest and Raleigh, North Carolina. North Carolina Plumbing Class II Contractor License #14872.",
};

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Plumber in Wake Forest, NC | Dazco Plumbing Inc.",
      "Dazco Plumbing Inc. is a licensed plumbing contractor in Wake Forest and Raleigh, NC. Call (919) 556-6650 for plumbing, repairs, water heaters, gas piping, and septic services.",
    ),
  component: Home,
});

function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <HomeIntro />
      <ServicesGrid />
      <ProjectGallery />
      <TrustStrip />
      <ReviewsPlaceholder />
      <CtaBand />
    </main>
  );
}
