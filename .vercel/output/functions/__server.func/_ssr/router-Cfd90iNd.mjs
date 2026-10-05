import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as Phone, n as TriangleAlert, o as MapPin, s as Mail, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cfd90iNd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function DemoBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-elevated text-center text-xs text-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "page-wrap py-2 leading-snug",
			children: "Website concept for Dazco Plumbing Inc. Details to be confirmed by the owner."
		})
	});
}
function HashScroll() {
	const hash = useRouterState({ select: (s) => s.location.hash });
	(0, import_react.useEffect)(() => {
		const id = hash.replace(/^#/, "");
		if (!id) return;
		const frame = window.requestAnimationFrame(() => {
			document.getElementById(id)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		});
		return () => window.cancelAnimationFrame(frame);
	}, [hash]);
	return null;
}
var site = {
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
	formedNote: "North Carolina business filings list Dazco Plumbing Inc. as formed in 1997. Some public directories list 1990 as an establishment year. The owner should confirm the business start date before a final website is published."
};
var nav = [
	{
		href: "/",
		label: "Home"
	},
	{
		href: "/about",
		label: "About Us"
	},
	{
		href: "/services",
		label: "Services"
	},
	{
		href: "/contact",
		label: "Contact"
	}
];
var featuredServices = [
	{
		slug: "plumbing-services",
		title: "Plumbing Services",
		href: "/services#plumbing-services",
		image: "/images/gallery-pipes.jpg",
		alt: "Placeholder photo of copper and PEX piping in a residential basement. Final project photos to be supplied by the owner.",
		summary: "General plumbing work for homes in the Wake Forest and Raleigh area. Exact service details to be confirmed by the owner."
	},
	{
		slug: "plumbing-repairs",
		title: "Plumbing Repairs",
		href: "/services#plumbing-repairs",
		image: "/images/gallery-kitchen.jpg",
		alt: "Placeholder photo of a kitchen faucet being installed. Final project photos to be supplied by the owner.",
		summary: "Repair work on existing plumbing. The specific repairs Dazco currently accepts should be confirmed by the owner."
	},
	{
		slug: "water-heater-services",
		title: "Water Heater Services",
		href: "/services#water-heater-services",
		image: "/images/gallery-water-heater.jpg",
		alt: "Placeholder photo of a residential water heater in a utility closet. Final project photos to be supplied by the owner.",
		summary: "Water heater work for residential properties. Equipment brands, warranties, and typical timelines to be confirmed by the owner."
	},
	{
		slug: "gas-piping-services",
		title: "Gas & Piping Services",
		href: "/services#gas-piping-services",
		image: "/images/gallery-gas.jpg",
		alt: "Placeholder photo of black iron gas piping and shutoff valves. Final project photos to be supplied by the owner.",
		summary: "Gas and piping services as listed for this contractor. Scope, permitting, and current availability to be confirmed by the owner."
	}
];
var allServices = [...featuredServices, {
	slug: "septic-services",
	title: "Septic Tank / Septic System Services",
	href: "/services#septic-services",
	image: "/images/gallery-septic.jpg",
	alt: "Placeholder photo of a residential septic tank lid in a backyard. Final project photos to be supplied by the owner.",
	summary: "Septic tank and septic system services as listed for this contractor. Specific septic work currently offered to be confirmed by the owner."
}];
var gallery = [
	{
		src: "/images/gallery-kitchen.jpg",
		alt: "Placeholder photograph of a kitchen faucet installation for this website concept.",
		caption: "Kitchen plumbing"
	},
	{
		src: "/images/gallery-bathroom.jpg",
		alt: "Placeholder photograph of bathroom vanity supply lines and a trap for this website concept.",
		caption: "Bathroom plumbing"
	},
	{
		src: "/images/gallery-water-heater.jpg",
		alt: "Placeholder photograph of a residential water heater for this website concept.",
		caption: "Water heaters"
	},
	{
		src: "/images/gallery-gas.jpg",
		alt: "Placeholder photograph of gas piping and valves for this website concept.",
		caption: "Gas & piping"
	},
	{
		src: "/images/gallery-pipes.jpg",
		alt: "Placeholder photograph of copper and PEX piping for this website concept.",
		caption: "Residential piping"
	},
	{
		src: "/images/gallery-septic.jpg",
		alt: "Placeholder photograph of a septic tank lid in a backyard for this website concept.",
		caption: "Septic systems"
	}
];
var serviceOptions = [
	"Plumbing Services",
	"Plumbing Repairs",
	"Water Heater Services",
	"Gas and Piping Services",
	"Septic Tank / Septic System Services",
	"Other / not sure"
];
function pageHead(title, description) {
	return { meta: [{ title }, {
		name: "description",
		content: description
	}] };
}
function MobileCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: site.phoneHref,
				className: "pressable inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-elevated text-sm font-medium text-fg shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
					className: "size-4",
					"aria-hidden": "true"
				}), "Call now"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "pressable inline-flex h-12 items-center justify-center rounded-[var(--radius-sm)] bg-accent text-sm font-medium text-accent-fg",
				children: "Request a Quote"
			})]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Logo({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "group flex items-center gap-3 text-fg no-underline",
		"aria-label": "Dazco Plumbing Inc. home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-elevated shadow-[var(--shadow-border)]",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 32 32",
				className: "size-6",
				fill: "none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M8 7h9.2c4.4 0 7.8 3.1 7.8 8.2S21.6 23.4 17.2 23.4H8V7Z",
					stroke: "currentColor",
					strokeWidth: "2.2"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M6 15.2h20",
					stroke: "currentColor",
					strokeWidth: "2.2",
					strokeLinecap: "square"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("leading-none", compact && "hidden sm:block"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-display text-xl font-semibold tracking-tight",
				children: "DAZCO"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted",
				children: "Plumbing Inc."
			})]
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-auto bg-surface text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap grid gap-10 py-14 md:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-sm text-sm leading-relaxed text-muted",
							children: "Local plumbing contractor serving Wake Forest and Raleigh, North Carolina. This page is a website concept. Final service details and business information should be confirmed by the owner."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "Pages"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.href,
								className: "text-sm text-muted transition-colors hover:text-fg",
								children: item.label
							}) }, item.href))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: site.phoneHref,
											className: "text-fg hover:underline",
											children: site.phoneDisplay
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: site.emailHref,
											className: "text-fg hover:underline",
											children: site.email
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.location })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 text-xs leading-relaxed text-subtle",
								children: [
									site.licenseLabel,
									" #",
									site.licenseNumber
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap flex flex-col gap-2 py-5 text-xs text-subtle md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Website concept for ",
					site.name,
					". Not the company’s officially approved final website."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Principal: ", site.principal] })]
			})
		]
	});
}
var buttonVariants = cva("pressable inline-flex items-center justify-center gap-2 font-medium transition-[background-color,color,box-shadow,transform,opacity] duration-[length:var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg shadow-[var(--shadow-border)] hover:opacity-90",
			secondary: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] hover:bg-elevated",
			ghost: "bg-transparent text-fg hover:bg-elevated",
			inverted: "bg-fg text-bg hover:bg-accent"
		},
		size: {
			sm: "h-10 rounded-[var(--radius-sm)] px-4 text-sm",
			md: "h-12 rounded-[var(--radius-sm)] px-5 text-sm",
			lg: "h-14 rounded-[var(--radius-md)] px-7 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 bg-bg/92 shadow-[var(--shadow-border)] backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap flex h-16 items-center justify-between gap-4 md:h-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Primary",
					children: nav.map((item) => {
						const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							className: cn("text-sm font-medium transition-colors duration-[length:var(--motion-quick)]", active ? "text-fg" : "text-muted hover:text-fg"),
							"aria-current": active ? "page" : void 0,
							children: item.label
						}, item.href);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-3 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.phoneHref,
						className: "inline-flex h-12 items-center gap-2 px-2 text-sm font-medium text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "size-4",
							"aria-hidden": "true"
						}), site.phoneDisplay]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Request a Quote"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "relative flex size-11 items-center justify-center rounded-[var(--radius-sm)] text-fg md:hidden",
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			className: "border-t border-border bg-bg md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "page-wrap flex flex-col gap-1 py-4",
				"aria-label": "Mobile",
				children: [
					nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.href,
						className: "flex min-h-11 items-center text-base font-medium text-fg",
						children: item.label
					}, item.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.phoneHref,
						className: "flex min-h-11 items-center gap-2 text-base font-medium text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "size-4",
							"aria-hidden": "true"
						}), site.phoneDisplay]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-2 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Request a Quote"
						})
					})
				]
			})
		}) : null]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-1 flex-col pb-24 md:pb-0",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileCta, {})
		]
	});
}
var styles_default = "/assets/styles-C89NNGT7.css";
var APP_NAME = site.name;
var Route$4 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Dazco Plumbing Inc. is a licensed plumbing contractor serving Wake Forest and Raleigh, NC. Call (919) 556-6650 to request a quote."
			},
			{
				name: "theme-color",
				content: "#090b0e"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "author",
				content: site.name
			},
			{
				name: "geo.region",
				content: "US-NC"
			},
			{
				name: "geo.placename",
				content: "Wake Forest"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400&display=swap"
			}
		]
	}),
	component: RootDocument,
	notFoundComponent: NotFound
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "page-wrap flex flex-1 flex-col justify-center py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl font-semibold",
				children: "That page is not on this site."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-lg text-muted",
				children: "The page you asked for is not part of this website concept. Use the navigation to return to Home, About Us, Services, or Contact."
			})
		]
	});
}
var $$splitComponentImporter$3 = () => import("./routes-BJ4Lio7D.mjs");
var Route$3 = createFileRoute("/")({
	head: () => pageHead("Plumber in Wake Forest, NC | Dazco Plumbing Inc.", "Dazco Plumbing Inc. is a licensed plumbing contractor in Wake Forest and Raleigh, NC. Call (919) 556-6650 for plumbing, repairs, water heaters, gas piping, and septic services."),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./about-BVqLFx0i.mjs");
var Route$2 = createFileRoute("/about")({
	head: () => pageHead("About Dazco Plumbing Inc. | Wake Forest / Raleigh, NC", "Learn what public records show about Dazco Plumbing Inc., principal David A. Zielinski, and North Carolina Plumbing Class II Contractor License #14872."),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./contact-QaVMPuOs.mjs");
var Route$1 = createFileRoute("/contact")({
	head: () => pageHead("Contact Dazco Plumbing Inc. | Wake Forest / Raleigh, NC", "Request a quote from Dazco Plumbing Inc. Call (919) 556-6650 or email dazcoplbg@yahoo.com. Serving Wake Forest and Raleigh, North Carolina."),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services-laFFwlKU.mjs");
var Route = createFileRoute("/services")({
	head: () => pageHead("Plumbing Services in Wake Forest, NC | Dazco Plumbing Inc.", "Plumbing services, plumbing repairs, water heater services, gas and piping services, and septic system services from Dazco Plumbing Inc. in Wake Forest and Raleigh, NC."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	AboutRoute: Route$2.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$4
	}),
	ContactRoute: Route$1.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$4
	}),
	ServicesRoute: Route.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { featuredServices as a, site as c, allServices as i, Button as n, gallery as o, cn as r, serviceOptions as s, router_exports as t };
