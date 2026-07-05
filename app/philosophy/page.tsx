import { MotionSection } from "@/components/motion-section";
import { PhilosophyGrid } from "@/components/philosophy-grid";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Engineering Philosophy",
  description: "Om Chakunde's engineering philosophy."
};

export default function PhilosophyPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <MotionSection className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Engineering Philosophy" title="A practical approach to learning, building, and improving systems." />
        <PhilosophyGrid />
      </MotionSection>
    </div>
  );
}
