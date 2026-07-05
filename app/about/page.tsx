import { GraduationCap, MapPin } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { profile } from "@/lib/data";

export const metadata = {
  title: "About",
  description: "About Om Chakunde, full-stack software engineer from Pune, India."
};

export default function AboutPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <MotionSection className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="About" title="An early-career engineer building across web, AI, cloud, FinOps, and embedded systems." />
        <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <h2 className="text-2xl font-semibold text-primary">{profile.name}</h2>
            <p className="mt-5 leading-8 text-secondary">{profile.intro}</p>
            <p className="mt-4 leading-8 text-secondary">{profile.longIntro}</p>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-blue" />
              <p className="font-semibold text-primary">{profile.location}</p>
            </div>
            <div className="mt-7 flex items-start gap-3">
              <GraduationCap className="mt-1 h-5 w-5 text-green" />
              <div>
                <p className="font-semibold text-primary">{profile.education.degree}</p>
                <p className="mt-2 text-secondary">{profile.education.branch}</p>
                <p className="mt-2 text-secondary">{profile.education.school}</p>
                <p className="mt-2 text-muted">{profile.education.graduation}</p>
              </div>
            </div>
          </Card>
        </div>
      </MotionSection>
    </div>
  );
}
