import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-[var(--radius-sm)] bg-elevated px-4 text-base text-fg shadow-[var(--shadow-border)] transition-[box-shadow] duration-[length:var(--motion-quick)] placeholder:text-subtle",
        "focus-visible:outline-none focus-visible:shadow-[var(--shadow-border-hover)]",
        "disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
