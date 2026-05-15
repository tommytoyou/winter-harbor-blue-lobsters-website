import { cn } from "@/lib/utils";
import { FadeIn } from "./fade-in";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && <p className="luxury-label mb-4">{label}</p>}
      <h2 className="luxury-heading text-4xl md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-6 font-serif text-lg leading-relaxed text-harbor-mist">
          {description}
        </p>
      )}
      <div className="luxury-divider mt-8" />
    </FadeIn>
  );
}
