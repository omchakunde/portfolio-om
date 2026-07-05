import { ExternalLink, GitBranch } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectLinksProps = {
  github?: string;
  liveDemo?: string;
  size?: "default" | "sm";
  className?: string;
};

export function ProjectLinks({
  github,
  liveDemo,
  size = "default",
  className
}: ProjectLinksProps) {
  if (!github && !liveDemo) return null;

  const buttonSize = size === "sm" ? "sm" : "default";

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {github ? (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "outline", size: buttonSize })}
        >
          <GitBranch className="h-4 w-4" />
          GitHub
        </a>
      ) : null}

      {liveDemo ? (
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "outline", size: buttonSize })}
        >
          <ExternalLink className="h-4 w-4" />
          Live Demo
        </a>
      ) : null}
    </div>
  );
}
