import { ArrowRight, Rocket } from "lucide-react";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Hero } from "@/components/hero";
import { MotionSection } from "@/components/motion-section";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeading } from "@/components/section-heading";
import { SkillsPanel } from "@/components/skills-panel";
import { LinkButton } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="px-4 pb-10 sm:px-6 lg:px-8">
        <MotionSection className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Featured Engineering Work" title="Things I've Built" actionHref="/projects" actionLabel="View all projects" />
          <ProjectGrid />
        </MotionSection>

        <MotionSection className="mx-auto mt-8 grid max-w-7xl gap-6 lg:grid-cols-[0.42fr_1fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-normal text-violet">
              <span className="h-1.5 w-1.5 rounded-full bg-violet shadow-[0_0_12px_rgba(168,85,247,0.85)]" />
              My Tech Universe
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-primary md:text-4xl">
              Technologies<br />I Work With
            </h2>
            <LinkButton href="/skills" variant="outline" className="mt-7">
              Explore Skills
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </div>
          <SkillsPanel />
        </MotionSection>

        <MotionSection className="mx-auto mt-8 max-w-7xl">
          <SectionHeading eyebrow="Experience Journey" title="Where I've Grown" actionHref="/experience" actionLabel="View full experience" />
          <ExperienceTimeline />
        </MotionSection>

        <MotionSection className="mx-auto mt-8 max-w-7xl overflow-hidden rounded-3xl border border-violet/30 bg-[radial-gradient(circle_at_88%_40%,rgba(168,85,247,0.33),transparent_18rem),linear-gradient(100deg,rgba(88,28,135,0.48),rgba(7,18,38,0.86))] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.35)]">
          <div className="grid gap-8 md:grid-cols-[0.45fr_0.55fr] md:items-center">
            <div className="flex gap-7">
              <span className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl border border-white/12 bg-gradient-to-br from-blue/25 to-violet/40 shadow-inner shadow-white/10">
                <Rocket className="h-12 w-12 text-amber" />
              </span>
              <div>
                <h2 className="max-w-md text-3xl font-black leading-tight text-primary md:text-4xl">
                  Let&apos;s build <span className="text-blue">something</span> amazing together!
                </h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  <LinkButton href="/contact" className="bg-gradient-to-r from-blue to-violet text-white">
                    Hire Me
                  </LinkButton>
                  <LinkButton href="/contact" variant="outline">
                    Get In Touch
                    <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                </div>
              </div>
            </div>
            <div className="relative min-h-[160px]">
              <div className="absolute right-6 top-2 h-36 w-36 rounded-full bg-gradient-to-br from-blue via-violet to-amber shadow-[0_0_70px_rgba(168,85,247,0.45)]" />
              <div className="absolute right-0 top-12 h-20 w-72 rotate-[-14deg] rounded-[50%] border-[10px] border-violet/70 shadow-[0_0_34px_rgba(168,85,247,0.55)]" />
              <div className="relative z-10 max-w-md">
                <p className="font-semibold text-primary">I&apos;m currently open to</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {["Full Stack Roles", "AI/ML Engineer", "Cloud Engineer", "SDE Internships"].map((item) => (
                    <span key={item} className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-primary/90">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </>
  );
}
