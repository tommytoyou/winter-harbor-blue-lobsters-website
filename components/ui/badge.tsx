import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2.5 py-0.5 text-[10px] font-sans uppercase tracking-luxury transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-harbor-gold/30 bg-harbor-gold/10 text-harbor-gold",
        secondary:
          "border-harbor-mist/30 bg-harbor-navy text-harbor-mist",
        outline: "border-harbor-gold/50 text-harbor-gold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
