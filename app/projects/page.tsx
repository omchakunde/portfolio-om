import Link from "next/link";
import { ArrowRight, FolderKanban } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { ProjectLinks } from "@/components/project-links";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { accentClasses, projectCategories } from "@/lib/data";

export const metadata = {
  title: "Projects",
  description: "Complete engineering project catalog by Om Chakunde across full stack, AI/ML, cloud, FinOps, embedded systems, and research."
};

export default function ProjectsPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <MotionSection className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="A complete engineering portfolio across software, AI, cloud, FinOps, hardware, and research."
          description="The Home page highlights three flagship builds. This page organizes the full journey by technical domain, with detailed case studies for the flagship work and concise summaries for the rest."
        />

        <div className="mt-10 space-y-12">
          {projectCategories.map((category) => (
            <section key={category.title} className="rounded-2xl border border-white/12 bg-[#071226]/70 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-blue">
                      <FolderKanban className="h-5 w-5" />
                    </span>
                    <h2 className="text-2xl font-black text-primary">{category.title}</h2>
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-secondary">{category.description}</p>
                </div>
                <Badge>{category.projects.length} projects</Badge>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {category.projects.map((project) => (
                  <Card key={project.slug} className="flex h-full flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <Badge className={accentClasses[project.accent]}>{project.type}</Badge>
                      {project.status ? <Badge>{project.status}</Badge> : null}
                    </div>
                    <Link href={`/projects/${project.slug}`} className="group block flex-1">
                      <h3 className="mt-5 text-xl font-black leading-tight text-primary transition group-hover:text-blue">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-secondary">{project.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.slice(0, 4).map((item) => (
                          <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-primary/85">
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-blue">
                        Open summary
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </div>
                    </Link>
                    <ProjectLinks github={project.github} liveDemo={project.liveDemo} size="sm" className="mt-5" />
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </MotionSection>
    </div>
  );
}
