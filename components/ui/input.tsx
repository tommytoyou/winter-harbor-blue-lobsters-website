import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full border border-harbor-gold/20 bg-harbor-navy/50 px-4 py-2 text-sm text-harbor-white placeholder:text-harbor-mist/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harbor-gold focus-visible:ring-offset-2 focus-visible:ring-offset-harbor-deep disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
