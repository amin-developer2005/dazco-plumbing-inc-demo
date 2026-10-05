import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-[var(--radius-md)] bg-elevated px-4 py-3 text-base text-fg shadow-[var(--shadow-border)] transition-[box-shadow] duration-[length:var(--motion-quick)] placeholder:text-subtle",
        "focus-visible:outline-none focus-visible:shadow-[var(--shadow-border-hover)]",
        "disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
