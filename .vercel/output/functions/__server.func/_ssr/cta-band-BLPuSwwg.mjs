import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Phone } from "../_libs/lucide-react.mjs";
import { c as site, n as Button } from "./router-Cfd90iNd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cta-band-BLPuSwwg.js
var import_jsx_runtime = require_jsx_runtime();
function CtaBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "page-wrap py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-[var(--radius-xl)] bg-elevated p-8 shadow-[var(--shadow-border)] md:p-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Wake Forest / Raleigh, NC"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-4xl font-semibold md:text-6xl",
					children: "Request a quote from a local plumbing contractor."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 max-w-xl text-muted",
					children: [
						"Call ",
						site.shortName,
						" at ",
						site.phoneDisplay,
						" or send a message through the quote form. The form on this concept site does not email the company; the phone and email listed here are the public contacts."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
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
				})
			]
		})
	});
}
//#endregion
export { CtaBand as t };
