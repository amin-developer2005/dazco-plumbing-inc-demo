import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as site, i as allServices, n as Button } from "./router-Cfd90iNd.mjs";
import { t as CtaBand } from "./cta-band-BLPuSwwg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-laFFwlKU.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "page-wrap py-16 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display mt-4 max-w-3xl text-5xl md:text-7xl",
						children: "Plumbing categories for Wake Forest and Raleigh."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-lg text-muted",
						children: "The list on this page is the public service set provided for this website concept. It has not been expanded with extra specialties. Service details, pricing, and current availability are to be confirmed by the owner."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-sm text-subtle",
						children: "Because the published license is North Carolina Plumbing Class II, state rules limit that license class to single-family detached dwellings. Confirm whether a specific property and job fall within the work Dazco currently accepts."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "page-wrap grid gap-8 pb-8",
				children: allServices.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					id: service.slug,
					className: "surface-card grid scroll-mt-28 overflow-hidden md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: service.image,
						alt: service.alt,
						className: "aspect-4/3 h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center p-6 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-semibold md:text-4xl",
								children: service.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted",
								children: service.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-subtle",
								children: "Service details to be confirmed by the owner."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										children: "Request a Quote"
									})
								})
							})
						]
					})]
				}, service.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-surface py-16 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-wrap grid gap-10 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "Before you call"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl font-semibold",
							children: "What helps a plumbing contractor quote a job."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5 text-muted md:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A plumbing contractor in Raleigh, NC or Wake Forest can give a clearer answer when you describe the system, not just the symptom. Note whether the issue is at a sink, water heater, gas line, or septic system. Say if the home is a single-family house. Mention any recent work on the same system." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you can do so safely, know where the water shutoff is and whether the problem is isolated to one fixture. Do not operate gas valves unless you know how. For septic questions, it helps to know the age of the system if you have it, and whether the tank has been serviced. Those notes are for the homeowner; they are not a claim that Dazco offers every related specialty." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ask the contractor to confirm license class, whether the job is in their service area, and whether a permit is required. This demo does not publish prices, guarantees, or warranties. Those would be written by the owner if they belong on a final site." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Call",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: site.phoneHref,
									className: "text-fg underline",
									children: site.phoneDisplay
								}),
								" ",
								"or use the",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "text-fg underline",
									children: "contact form"
								}),
								". The form is a demo and does not email the company."
							] })
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
		]
	});
}
//#endregion
export { ServicesPage as component };
