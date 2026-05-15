import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-sans uppercase tracking-luxury transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harbor-gold focus-visible:ring-offset-2 focus-visible:ring-offset-harbor-deep disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-harbor-gold text-harbor-deep hover:bg-harbor-gold-light",
        outline:
          "border border-harbor-gold/50 bg-transparent text-harbor-gold hover:bg-harbor-gold/10",
        ghost: "text-harbor-white hover:bg-harbor-navy/80",
        secondary:
          "bg-harbor-navy border border-harbor-gold/20 text-harbor-white hover:border-harbor-gold/50",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-10 px-6 text-xs",
        lg: "h-14 px-10 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
