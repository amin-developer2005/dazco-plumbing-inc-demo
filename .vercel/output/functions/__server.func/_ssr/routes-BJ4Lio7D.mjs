import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as BadgeCheck, i as Phone, l as ArrowRight, o as MapPin, r as ScrollText } from "../_libs/lucide-react.mjs";
import { a as featuredServices, c as site, n as Button, o as gallery } from "./router-Cfd90iNd.mjs";
import { t as CtaBand } from "./cta-band-BLPuSwwg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BJ4Lio7D.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectGallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-surface py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Project photography"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-4xl font-semibold md:text-5xl",
					children: "Placeholder gallery until job photos are provided."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-muted",
					children: "These images are high-quality stand-ins for a finished site. They are not photographs of Dazco Plumbing Inc. jobs. The owner can replace them with real project photos, van branding, and completed work."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: gallery.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "overflow-hidden rounded-[var(--radius-lg)] bg-elevated",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.src,
							alt: item.alt,
							className: "aspect-3/2 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "px-4 py-3 text-sm text-muted",
							children: [item.caption, " — placeholder image"]
						})]
					}, item.src))
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero.jpg",
				alt: "Placeholder photograph of a plumber working under a kitchen sink. Final photos to be supplied by the owner.",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-overlay absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap relative flex min-h-[calc(100svh-9.5rem)] flex-col justify-end pb-28 pt-16 md:min-h-[calc(100svh-8rem)] md:pb-16 md:pt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Wake Forest / Raleigh plumbing contractor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display mt-3 max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
						children: [
							"Licensed plumbing",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"for Wake Forest homes."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-xl text-base text-muted md:text-lg",
						children: [site.name, " is a local plumbing contractor serving Wake Forest and Raleigh, North Carolina. Call to discuss a project or request a quote."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Request a Quote"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.phoneHref,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "size-4",
										"aria-hidden": "true"
									}),
									"Call ",
									site.phoneDisplay
								]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-subtle",
						children: [
							site.licenseLabel,
							" #",
							site.licenseNumber
						]
					})
				]
			})
		]
	});
}
function HomeIntro() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "page-wrap grid gap-10 py-16 md:grid-cols-12 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Local contractor"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl font-semibold md:text-5xl",
				children: "A Wake Forest plumbing company, described without extra claims."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5 text-muted md:col-span-7 md:pt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					site.name,
					" is a plumbing contractor associated with Wake Forest and Raleigh, North Carolina. Public records list ",
					site.principal,
					" as the principal and president. The company holds ",
					site.licenseLabel,
					" #",
					site.licenseNumber,
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Homeowners searching for a plumber in Wake Forest, NC, or a plumbing contractor in Raleigh, NC, can use this site to find the published phone number, email, license class, and service categories. It is a website concept, not an official final site." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you are calling about plumbing repair, water heater services, gas and piping services, or septic system services, have the property address, a short description of the problem, and a callback number ready. Service details beyond the listed categories have not been independently verified and should be confirmed with the owner." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Read more on the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "text-fg underline underline-offset-4",
						children: "About Us"
					}),
					" ",
					"and",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						className: "text-fg underline underline-offset-4",
						children: "Services"
					}),
					" ",
					"pages, or go to",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "text-fg underline underline-offset-4",
						children: "Contact"
					}),
					" ",
					"to request a quote."
				] })
			]
		})]
	});
}
function ReviewsPlaceholder() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "page-wrap pb-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "surface-card p-6 md:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Customer reviews"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-semibold md:text-5xl",
					children: "Reviews are not shown on this demo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-3xl text-muted",
					children: "Public listings checked for this concept did not provide reliably attributable customer reviews. The Better Business Bureau profile currently shows Dazco Plumbing, Inc. as not BBB accredited and “Not Rated.” This page does not invent Google reviews, star ratings, or customer names. When the owner supplies a public profile they want quoted, reviews can be added with source attribution."
				})
			]
		})
	});
}
function ServicesGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "page-wrap py-20 md:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Featured categories"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-semibold md:text-5xl",
						children: "Plumbing work, listed as publicly available."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services",
					className: "inline-flex items-center gap-2 text-sm font-medium text-fg",
					children: ["All service categories", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "size-4",
						"aria-hidden": "true"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-muted",
				children: "The categories below come from public listings for this contractor. This demo does not add extra services that have not been verified. Full details should be confirmed by the owner."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2",
				children: featuredServices.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services",
					hash: service.slug,
					className: "group surface-card overflow-hidden transition-[box-shadow] duration-[length:var(--motion-quick)] hover:shadow-[var(--shadow-border-hover)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-4/3 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: service.image,
							alt: service.alt,
							className: "size-full object-cover transition-transform duration-[length:var(--motion-slow)] ease-[var(--ease-out)] group-hover:scale-105"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-semibold",
								children: service.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: service.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-4 inline-flex items-center gap-2 text-sm font-medium",
								children: ["View category", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4",
									"aria-hidden": "true"
								})]
							})
						]
					})]
				}, service.slug))
			})
		]
	});
}
var items = [
	{
		icon: ScrollText,
		title: "North Carolina license on file",
		body: `${site.licenseLabel} #${site.licenseNumber}. Recent licensing-directory checks have reported this license as active. Confirm current status with the owner or the state board before relying on it.`
	},
	{
		icon: MapPin,
		title: "Wake Forest / Raleigh presence",
		body: "Public records associate the company with Wake Forest and Raleigh, North Carolina. This demo uses a service-area location rather than a street address."
	},
	{
		icon: Phone,
		title: "Direct phone and email",
		body: `Call ${site.phoneDisplay} or email ${site.email}. An additional public number is ${site.phoneAltDisplay}.`
	},
	{
		icon: BadgeCheck,
		title: "Named principal",
		body: `${site.principal} is listed as the principal / owner and as president on North Carolina business filings.`
	}
];
function TrustStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "page-wrap py-20 md:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Verified public information"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 max-w-2xl font-display text-4xl font-semibold md:text-5xl",
				children: "Facts this demo is willing to put on the page."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-muted",
				children: "This concept does not invent ratings, insurance, hours, or years in business. The items below are taken from public business and licensing information supplied for this demo."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-2",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "surface-card p-6 md:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
							className: "size-5 text-muted",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-2xl font-semibold",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: item.body
						})
					]
				}, item.title))
			})
		]
	});
}
var jsonLd = {
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
		addressCountry: "US"
	},
	areaServed: [{
		"@type": "City",
		name: "Wake Forest"
	}, {
		"@type": "City",
		name: "Raleigh"
	}],
	founder: {
		"@type": "Person",
		name: site.principal
	},
	description: "Local plumbing contractor serving Wake Forest and Raleigh, North Carolina. North Carolina Plumbing Class II Contractor License #14872."
};
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeIntro, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectGallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsPlaceholder, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
		]
	});
}
//#endregion
export { Home as component };
