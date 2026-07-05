import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProjectLinks } from "@/components/project-links";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { accentClasses, allProjects, featuredProjects, getProject } from "@/lib/data";

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description
  };
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const isFlagship = featuredProjects.some((item) => item.slug === project.slug);
  const index = allProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = allProjects[(index + 1) % allProjects.length];
  const imageSrc = project.image ? project.image : "/images/projects/placeholder.png";

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-6xl">
        <LinkButton href="/projects" variant="ghost" className="mb-8">
          <ArrowLeft className="h-4 w-4" />
          Projects
        </LinkButton>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge className={accentClasses[project.accent]}>{project.type}</Badge>
              <Badge>{project.category}</Badge>
              {project.status ? <Badge>{project.status}</Badge> : null}
            </div>

            <h1 className="mt-5 text-balance text-4xl font-bold text-primary md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-secondary">
              {project.description}
            </p>

            <ProjectLinks github={project.github} liveDemo={project.liveDemo} className="mt-7" />
          </div>

          {/* Project Image */}
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/12 bg-[#071226]/80 shadow-2xl">
            <Image
              src={imageSrc}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {!isFlagship ? (
          <div className="mt-8 rounded-2xl border border-white/12 bg-[#071226]/78 p-5 text-sm leading-7 text-secondary">
            This is a concise project summary. The flagship projects include deeper case-study treatment, while supporting projects capture the core problem, implementation, stack, and learning outcome.
          </div>
        ) : null}

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            ["Overview", project.overview],
            ["Problem", project.problem],
            ["Solution", project.solution],
            ["Architecture", project.architecture]
          ].map(([title, text]) => (
            <Card key={title}>
              <h2 className="text-xl font-semibold text-primary">{title}</h2>
              <p className="mt-4 leading-8 text-secondary">{text}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <ListPanel title="Tech Stack" items={project.stack} accent={project.accent} />
          <ListPanel title="Features" items={project.features} accent={project.accent} />
          <ListPanel title="Challenges" items={project.challenges} accent={project.accent} />
          <ListPanel title="Engineering Decisions" items={project.decisions} accent={project.accent} />
          <ListPanel title="Key Learnings" items={project.learnings} accent={project.accent} />

          <Card>
            <h2 className="text-xl font-semibold text-primary">Next Project</h2>
            <p className="mt-4 text-secondary">{nextProject.title}</p>

            <LinkButton
              href={`/projects/${nextProject.slug}`}
              className="mt-6"
              variant="outline"
            >
              Open case study
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </Card>
        </div>
      </article>
    </div>
  );
}

function ListPanel({
  title,
  items,
  accent
}: {
  title: string;
  items: string[];
  accent: string;
}) {
  return (
    <Card>
      <h2 className="text-xl font-semibold text-primary">{title}</h2>

      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item} className={accentClasses[accent]}>
            {item}
          </Badge>
        ))}
      </div>
    </Card>
  );
}