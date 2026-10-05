import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Phone, o as MapPin, s as Mail } from "../_libs/lucide-react.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
import { c as site, n as Button, r as cn, s as serviceOptions } from "./router-Cfd90iNd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-QaVMPuOs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-12 w-full rounded-[var(--radius-sm)] bg-elevated px-4 text-base text-fg shadow-[var(--shadow-border)] transition-[box-shadow] duration-[length:var(--motion-quick)] placeholder:text-subtle", "focus-visible:outline-none focus-visible:shadow-[var(--shadow-border-hover)]", "disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-fg", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-32 w-full rounded-[var(--radius-md)] bg-elevated px-4 py-3 text-base text-fg shadow-[var(--shadow-border)] transition-[box-shadow] duration-[length:var(--motion-quick)] placeholder:text-subtle", "focus-visible:outline-none focus-visible:shadow-[var(--shadow-border-hover)]", "disabled:opacity-50", className),
		...props
	});
}
var schema = object({
	name: string().trim().min(2, "Enter your name."),
	email: string().trim().email("Enter a valid email."),
	phone: string().trim().min(7, "Enter a phone number."),
	service: string().min(1, "Select a service."),
	message: string().trim().min(8, "Describe what you need.")
});
var empty = {
	name: "",
	email: "",
	phone: "",
	service: "",
	message: ""
};
function QuoteForm() {
	const [values, setValues] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	function update(key, value) {
		setValues((current) => ({
			...current,
			[key]: value
		}));
	}
	function onSubmit(event) {
		event.preventDefault();
		const parsed = schema.safeParse(values);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const field = issue.path[0];
				if (typeof field === "string" && !next[field]) next[field] = issue.message;
			}
			setErrors(next);
			return;
		}
		setErrors({});
		try {
			sessionStorage.setItem("dazco-demo-quote", JSON.stringify({
				...parsed.data,
				savedAt: (/* @__PURE__ */ new Date()).toISOString()
			}));
		} catch {}
		setSubmitted(true);
	}
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-card p-6 md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Demo form received locally"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-semibold",
				children: "This quote request was not emailed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-muted",
				children: [
					"The form on this website concept stores a copy in your browser only. It does not send a message to ",
					site.name,
					". To reach the company during this demo, call",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.phoneHref,
						className: "text-fg underline",
						children: site.phoneDisplay
					}),
					" ",
					"or email",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.emailHref,
						className: "text-fg underline",
						children: site.email
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "secondary",
				className: "mt-6",
				onClick: () => {
					setSubmitted(false);
					setValues(empty);
				},
				children: "Fill out another request"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "surface-card p-6 md:p-8",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Quote request"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-semibold",
				children: "Tell us what you need"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "This is a working demo form. Submissions are not delivered to the business email. Use the phone number or email on this page to contact Dazco Plumbing Inc. directly."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "name",
						label: "Name",
						error: errors.name,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							name: "name",
							autoComplete: "name",
							value: values.name,
							onChange: (event) => update("name", event.target.value),
							"aria-invalid": Boolean(errors.name)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "email",
						label: "Email",
						error: errors.email,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							name: "email",
							type: "email",
							autoComplete: "email",
							value: values.email,
							onChange: (event) => update("email", event.target.value),
							"aria-invalid": Boolean(errors.email)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "phone",
						label: "Phone",
						error: errors.phone,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "phone",
							name: "phone",
							type: "tel",
							autoComplete: "tel",
							value: values.phone,
							onChange: (event) => update("phone", event.target.value),
							"aria-invalid": Boolean(errors.phone)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "service",
						label: "Service needed",
						error: errors.service,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "service",
							name: "service",
							className: "h-12 w-full rounded-sm bg-elevated px-4 text-base text-fg shadow-border focus-visible:outline-none focus-visible:shadow-border-hover",
							value: values.service,
							onChange: (event) => update("service", event.target.value),
							"aria-invalid": Boolean(errors.service),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select a category"
							}), serviceOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: option,
								children: option
							}, option))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "message",
						label: "Message",
						error: errors.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "message",
							name: "message",
							rows: 5,
							value: values.message,
							onChange: (event) => update("message", event.target.value),
							"aria-invalid": Boolean(errors.message),
							placeholder: "Describe the property, the plumbing issue, and a good time to call."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						className: "w-full sm:w-auto",
						children: "Submit quote request"
					})
				]
			})
		]
	});
}
function Field({ id, label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: id,
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-danger",
				role: "alert",
				children: error
			}) : null
		]
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "page-wrap py-16 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display mt-4 max-w-3xl text-5xl md:text-7xl",
				children: "Call, email, or send a quote request."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 max-w-2xl text-lg text-muted",
				children: [
					"Use the public phone and email for ",
					site.name,
					" if you need a response from the company. The form on this page is part of the website concept and does not deliver messages to ",
					site.email,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-8 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "surface-card p-6 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-semibold",
								children: "Public contact details"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-6 space-y-5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-subtle",
											children: "Primary phone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: site.phoneHref,
											className: "text-base font-medium text-fg hover:underline",
											children: site.phoneDisplay
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-subtle",
											children: "Additional public phone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: site.phoneAltHref,
											className: "text-base font-medium text-fg hover:underline",
											children: site.phoneAltDisplay
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-subtle",
											children: "Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: site.emailHref,
											className: "text-base font-medium text-fg hover:underline",
											children: site.email
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-subtle",
											children: "Service area"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-base font-medium text-fg",
											children: site.location
										})] })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-px bg-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 text-sm text-muted",
								children: [
									"Principal / owner listed on public records: ",
									site.principal,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-muted",
								children: [
									site.licenseLabel,
									" #",
									site.licenseNumber,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-subtle",
								children: "A street address is on some public filings. It is not shown here as a customer-facing shop location. If a physical address should appear on the final website, the owner should confirm it."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-subtle",
								children: "Business hours are not listed. Hours to be confirmed by the owner."
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})
				})]
			})
		]
	});
}
//#endregion
export { ContactPage as component };
