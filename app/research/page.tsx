import { BookOpenText } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { accentClasses, research } from "@/lib/data";

export const metadata = {
  title: "Research",
  description: "Research interests and academic work by Om Chakunde."
};

export default function ResearchPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <MotionSection className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Research"
          title="Research topics connected to energy systems and computer vision."
          description="The research work complements the portfolio's practical projects: battery technology connects to sustainable engineering, and object detection connects directly to AI and drone systems."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {research.map((item) => (
            <Card key={item.title}>
              <BookOpenText className={`h-6 w-6 ${accentClasses[item.accent].split(" ").at(-1)}`} />
              <div className="mt-5 flex flex-wrap gap-2">
                <Badge className={accentClasses[item.accent]}>{item.area}</Badge>
                <Badge>Research Paper</Badge>
              </div>
              <h2 className="mt-5 text-2xl font-black text-primary">{item.title}</h2>
              <p className="mt-4 leading-8 text-secondary">{item.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.topics.map((topic) => (
                  <Badge key={topic}>{topic}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </MotionSection>
    </div>
  );
}
