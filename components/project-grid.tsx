import Link from "next/link";
import { ArrowRight, Bot, ChartNoAxesCombined, Plane, Sparkles } from "lucide-react";
import { accentClasses, featuredProjects } from "@/lib/data";
import { ProjectLinks } from "@/components/project-links";
import { Badge } from "@/components/ui/badge";

const visualClasses = [
  "from-emerald-500/25 via-blue-500/10 to-violet-500/20",
  "from-blue-500/30 via-violet-500/25 to-fuchsia-500/15",
  "from-amber-500/35 via-slate-900 to-blue-500/20"
];

const visualIcons = [ChartNoAxesCombined, Sparkles, Plane];

export function ProjectGrid() {
  return (
    <div className="relative">
      <button aria-label="Previous project" className="absolute -left-6 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-primary backdrop-blur lg:flex">
        <ArrowRight className="h-5 w-5 rotate-180" />
      </button>
      <button aria-label="Next project" className="absolute -right-6 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-primary backdrop-blur lg:flex">
        <ArrowRight className="h-5 w-5" />
      </button>
      <div className="grid gap-5 lg:grid-cols-3">
        {featuredProjects.map((project, index) => {
          const Icon = visualIcons[index] ?? Bot;
          return (
            <article
              key={project.slug}
              className="group relative flex min-h-[296px] overflow-hidden rounded-2xl border border-white/12 bg-[#071226]/88 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.34)] transition hover:-translate-y-1 hover:border-blue/40"
            >
              <div className={`absolute inset-2 rounded-xl bg-gradient-to-br ${visualClasses[index]} opacity-80`} />
              <div className="absolute inset-2 rounded-xl bg-[radial-gradient(circle_at_78%_22%,rgba(255,255,255,0.28),transparent_16rem),linear-gradient(180deg,transparent,rgba(3,7,18,0.88))]" />
              <div className="absolute right-6 top-7 h-28 w-40 rounded-xl border border-white/10 bg-black/35 p-3 shadow-2xl backdrop-blur">
                <div className="mb-2 h-2 w-16 rounded-full bg-white/20" />
                <div className="grid h-16 grid-cols-4 items-end gap-2">
                  {[42, 62, 36, 72].map((height, barIndex) => (
                    <span key={barIndex} className="rounded-sm bg-gradient-to-t from-blue to-violet" style={{ height }} />
                  ))}
                </div>
              </div>
              <Icon className="absolute right-8 top-20 h-28 w-28 text-white/25 drop-shadow-[0_0_24px_rgba(255,255,255,0.18)]" />
              <div className="relative z-10 mt-auto max-w-[88%]">
                <Badge className={`${accentClasses[project.accent]} rounded-full border-0 text-white`}>Featured</Badge>
                <Link href={`/projects/${project.slug}`} className="block">
                  <h3 className="mt-7 text-xl font-black leading-tight text-primary transition group-hover:text-blue">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-200/90">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((item) => (
                      <span key={item} className="rounded-md border border-white/10 bg-black/25 px-3 py-1 text-xs text-primary/90">
                        {item}
                      </span>
                    ))}
                    <span className="rounded-md border border-white/10 bg-black/25 px-3 py-1 text-xs text-primary/90">...</span>
                  </div>
                </Link>
                <ProjectLinks github={project.github} liveDemo={project.liveDemo} size="sm" className="mt-4" />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
