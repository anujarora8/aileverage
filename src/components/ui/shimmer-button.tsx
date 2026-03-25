import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export default function ShimmerButton({
  children = "Shimmer",
  className,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-12 animate-[shimmer2_2s_infinite_linear] items-center justify-center rounded-md border border-border bg-[linear-gradient(110deg,hsl(var(--background)),45%,hsl(var(--secondary)),55%,hsl(var(--background)))] bg-[length:200%_100%] px-6 font-medium text-muted-foreground transition-colors focus:outline-none focus-visible:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
