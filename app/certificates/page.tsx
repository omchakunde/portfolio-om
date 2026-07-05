import { Award } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { accentClasses, certifications } from "@/lib/data";

export const metadata = {
  title: "Certificates",
  description: "Certifications and learning credentials listed by Om Chakunde."
};

export default function CertificatesPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <MotionSection className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certificates"
          title="Continuous learning across Python, cloud, MERN, AI, ML, data science, and GreenOps."
          description="These credentials support the project work across programming fundamentals, full-stack development, cloud literacy, AI/ML, sustainability, and data science."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((certificate) => (
            <Card key={certificate.title}>
              <Award className={`h-6 w-6 ${accentClasses[certificate.accent].split(" ").at(-1)}`} />
              <Badge className={`mt-5 ${accentClasses[certificate.accent]}`}>{certificate.domain}</Badge>
              <h2 className="mt-4 text-lg font-black text-primary">{certificate.title}</h2>
              <p className="mt-3 text-sm leading-6 text-secondary">{certificate.issuer}</p>
            </Card>
          ))}
        </div>
      </MotionSection>
    </div>
  );
}
