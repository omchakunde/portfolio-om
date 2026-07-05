import { BriefcaseBusiness } from "lucide-react";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { accentClasses, experiences } from "@/lib/data";

export const metadata = {
  title: "Experience",
  description: "Internship experience across full-stack development, data science, AI, and drone technology."
};

export default function ExperiencePage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <MotionSection className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on internships across product engineering, data science, AI, and robotics."
          description="Each internship added a different engineering lens: web product delivery, data workflows, computer vision on hardware, and practical full-stack software development."
        />
        <ExperienceTimeline />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {experiences.map((experience) => (
            <Card key={experience.company}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex gap-4">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border ${accentClasses[experience.accent]}`}>
                    <BriefcaseBusiness className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-xl font-black text-primary">{experience.company}</h2>
                    <p className="mt-1 font-semibold text-secondary">{experience.role}</p>
                  </div>
                </div>
                <Badge>{experience.period}</Badge>
              </div>
              <p className="mt-5 leading-7 text-secondary">{experience.summary}</p>
              <List title="Contributions" items={experience.contributions} />
              <List title="Outcomes" items={experience.outcomes} />
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.stack.map((item) => (
                  <Badge key={item} className={accentClasses[experience.accent]}>{item}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </MotionSection>
    </div>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-5">
      <h3 className="text-sm font-semibold uppercase text-muted">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-secondary">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
