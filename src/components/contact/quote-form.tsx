import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { serviceOptions, site } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid email."),
  phone: z.string().trim().min(7, "Enter a phone number."),
  service: z.string().min(1, "Select a service."),
  message: z.string().trim().min(8, "Describe what you need."),
});

type FormValues = z.infer<typeof schema>;
type FormErrors = Partial<Record<keyof FormValues, string>>;

const empty: FormValues = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function QuoteForm() {
  const [values, setValues] = useState<FormValues>(empty);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: FormErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && !next[field as keyof FormValues]) {
          next[field as keyof FormValues] = issue.message;
        }
      }
      setErrors(next);
      return;
    }
    setErrors({});
    try {
      sessionStorage.setItem(
        "dazco-demo-quote",
        JSON.stringify({ ...parsed.data, savedAt: new Date().toISOString() }),
      );
    } catch {
      // Demo-only persistence; ignore quota / private-mode failures.
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="surface-card p-6 md:p-8">
        <p className="kicker">Demo form received locally</p>
        <h2 className="mt-3 font-display text-3xl font-semibold">
          This quote request was not emailed.
        </h2>
        <p className="mt-4 text-muted">
          The form on this website concept stores a copy in your browser only.
          It does not send a message to {site.name}. To reach the company
          during this demo, call{" "}
          <a href={site.phoneHref} className="text-fg underline">
            {site.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a href={site.emailHref} className="text-fg underline">
            {site.email}
          </a>
          .
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setSubmitted(false);
            setValues(empty);
          }}
        >
          Fill out another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="surface-card p-6 md:p-8" noValidate>
      <p className="kicker">Quote request</p>
      <h2 className="mt-3 font-display text-3xl font-semibold">
        Tell us what you need
      </h2>
      <p className="mt-3 text-sm text-muted">
        This is a working demo form. Submissions are not delivered to the
        business email. Use the phone number or email on this page to contact
        Dazco Plumbing Inc. directly.
      </p>

      <div className="mt-8 grid gap-5">
        <Field id="name" label="Name" error={errors.name}>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>
        <Field id="service" label="Service needed" error={errors.service}>
          <select
            id="service"
            name="service"
            className="h-12 w-full rounded-sm bg-elevated px-4 text-base text-fg shadow-border focus-visible:outline-none focus-visible:shadow-border-hover"
            value={values.service}
            onChange={(event) => update("service", event.target.value)}
            aria-invalid={Boolean(errors.service)}
          >
            <option value="">Select a category</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field id="message" label="Message" error={errors.message}>
          <Textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            placeholder="Describe the property, the plumbing issue, and a good time to call."
          />
        </Field>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Submit quote request
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p className="text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
