import { Cloud } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { SkillsPanel } from "@/components/skills-panel";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { accentClasses, cloudFinOpsCapabilities, currentLearning, skillGroups } from "@/lib/data";

export const metadata = {
  title: "Skills",
  description: "Technical skills across frontend, backend, cloud, FinOps, AI, embedded systems, and tools."
};

export default function SkillsPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <MotionSection className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Breadth across full-stack products, cloud cost thinking, AI, and hardware."
          description="The skill map keeps the premium visual summary, then expands into detailed domains so every technical area from the engineering journey is represented."
        />
        <SkillsPanel />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <Card key={group.title}>
                <div className="flex items-center gap-3">
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border ${accentClasses[group.accent]}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-lg font-black text-primary">{group.title}</h2>
                    <p className="mt-1 text-sm text-secondary">{group.summary}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} className={accentClasses[group.accent]}>{item}</Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <Card>
            <div className="flex items-center gap-3">
              <Cloud className="h-6 w-6 text-green" />
              <h2 className="text-xl font-black text-primary">Cloud & FinOps Focus</h2>
            </div>
            <p className="mt-4 leading-7 text-secondary">
              My cloud and FinOps learning connects platform engineering with cost visibility, governance, optimization, and sustainable cloud practices.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {cloudFinOpsCapabilities.map((item) => (
                <Badge key={item} className={accentClasses.green}>{item}</Badge>
              ))}
            </div>
          </Card>
          <Card>
            <h2 className="text-xl font-black text-primary">Current Learning</h2>
            <p className="mt-4 leading-7 text-secondary">
              Areas I am actively strengthening to move from project execution toward deeper engineering judgment.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {currentLearning.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </Card>
        </div>
      </MotionSection>
    </div>
  );
}
