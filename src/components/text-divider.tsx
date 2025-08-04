import { cn } from "@/lib/utils";

export function TextDivider({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t text-muted-foreground",
        className
      )}
    >
      <span className="bg-background relative z-10 px-2">{children}</span>
    </div>
  );
}
