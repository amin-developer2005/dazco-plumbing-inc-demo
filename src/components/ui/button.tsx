import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "pressable inline-flex items-center justify-center gap-2 font-medium transition-[background-color,color,box-shadow,transform,opacity] duration-[length:var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-fg shadow-[var(--shadow-border)] hover:opacity-90",
        secondary:
          "bg-transparent text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] hover:bg-elevated",
        ghost: "bg-transparent text-fg hover:bg-elevated",
        inverted: "bg-fg text-bg hover:bg-accent",
      },
      size: {
        sm: "h-10 rounded-[var(--radius-sm)] px-4 text-sm",
        md: "h-12 rounded-[var(--radius-sm)] px-5 text-sm",
        lg: "h-14 rounded-[var(--radius-md)] px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
