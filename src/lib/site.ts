export const site = {
  name: "Dazco Plumbing Inc.",
  shortName: "Dazco Plumbing",
  principal: "David A. Zielinski",
  phoneDisplay: "(919) 556-6650",
  phoneHref: "tel:+19195566650",
  phoneAltDisplay: "(919) 787-8256",
  phoneAltHref: "tel:+19197878256",
  email: "dazcoplbg@yahoo.com",
  emailHref: "mailto:dazcoplbg@yahoo.com",
  location: "Wake Forest / Raleigh, NC",
  licenseLabel: "North Carolina Plumbing Class II Contractor License",
  licenseNumber: "14872",
  corporationStatus: "Current-Active North Carolina business corporation",
  formedYearPublic: "1997",
  formedNote:
    "North Carolina business filings list Dazco Plumbing Inc. as formed in 1997. Some public directories list 1990 as an establishment year. The owner should confirm the business start date before a final website is published.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const featuredServices = [
  {
    slug: "plumbing-services",
    title: "Plumbing Services",
    href: "/services#plumbing-services",
    image: "/images/gallery-pipes.jpg",
    alt: "Placeholder photo of copper and PEX piping in a residential basement. Final project photos to be supplied by the owner.",
    summary:
      "General plumbing work for homes in the Wake Forest and Raleigh area. Exact service details to be confirmed by the owner.",
  },
  {
    slug: "plumbing-repairs",
    title: "Plumbing Repairs",
    href: "/services#plumbing-repairs",
    image: "/images/gallery-kitchen.jpg",
    alt: "Placeholder photo of a kitchen faucet being installed. Final project photos to be supplied by the owner.",
    summary:
      "Repair work on existing plumbing. The specific repairs Dazco currently accepts should be confirmed by the owner.",
  },
  {
    slug: "water-heater-services",
    title: "Water Heater Services",
    href: "/services#water-heater-services",
    image: "/images/gallery-water-heater.jpg",
    alt: "Placeholder photo of a residential water heater in a utility closet. Final project photos to be supplied by the owner.",
    summary:
      "Water heater work for residential properties. Equipment brands, warranties, and typical timelines to be confirmed by the owner.",
  },
  {
    slug: "gas-piping-services",
    title: "Gas & Piping Services",
    href: "/services#gas-piping-services",
    image: "/images/gallery-gas.jpg",
    alt: "Placeholder photo of black iron gas piping and shutoff valves. Final project photos to be supplied by the owner.",
    summary:
      "Gas and piping services as listed for this contractor. Scope, permitting, and current availability to be confirmed by the owner.",
  },
] as const;

export const allServices = [
  ...featuredServices,
  {
    slug: "septic-services",
    title: "Septic Tank / Septic System Services",
    href: "/services#septic-services",
    image: "/images/gallery-septic.jpg",
    alt: "Placeholder photo of a residential septic tank lid in a backyard. Final project photos to be supplied by the owner.",
    summary:
      "Septic tank and septic system services as listed for this contractor. Specific septic work currently offered to be confirmed by the owner.",
  },
] as const;

export const gallery = [
  {
    src: "/images/gallery-kitchen.jpg",
    alt: "Placeholder photograph of a kitchen faucet installation for this website concept.",
    caption: "Kitchen plumbing",
  },
  {
    src: "/images/gallery-bathroom.jpg",
    alt: "Placeholder photograph of bathroom vanity supply lines and a trap for this website concept.",
    caption: "Bathroom plumbing",
  },
  {
    src: "/images/gallery-water-heater.jpg",
    alt: "Placeholder photograph of a residential water heater for this website concept.",
    caption: "Water heaters",
  },
  {
    src: "/images/gallery-gas.jpg",
    alt: "Placeholder photograph of gas piping and valves for this website concept.",
    caption: "Gas & piping",
  },
  {
    src: "/images/gallery-pipes.jpg",
    alt: "Placeholder photograph of copper and PEX piping for this website concept.",
    caption: "Residential piping",
  },
  {
    src: "/images/gallery-septic.jpg",
    alt: "Placeholder photograph of a septic tank lid in a backyard for this website concept.",
    caption: "Septic systems",
  },
] as const;

export const serviceOptions = [
  "Plumbing Services",
  "Plumbing Repairs",
  "Water Heater Services",
  "Gas and Piping Services",
  "Septic Tank / Septic System Services",
  "Other / not sure",
] as const;

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
    ],
  };
}
