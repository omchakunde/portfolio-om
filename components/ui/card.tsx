import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-[#071226]/75 p-6 shadow-soft transition hover:-translate-y-1 hover:border-white/18",
        className
      )}
      {...props}
    />
  );
}
