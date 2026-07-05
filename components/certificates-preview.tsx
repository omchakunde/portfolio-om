import { accentClasses, certifications, research } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";

export function CertificatesPreview() {
  return (
    <div>
      <SectionHeading eyebrow="Research & Certificates" title="Academic curiosity backed by continuous learning." />
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-surface/70 p-6">
          <h3 className="text-lg font-semibold text-primary">Research</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {research.map((item) => <Badge key={item.title} className={accentClasses[item.accent]}>{item.title}</Badge>)}
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-surface/70 p-6">
          <h3 className="text-lg font-semibold text-primary">Certifications</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {certifications.map((item) => <Badge key={item.title} className={accentClasses[item.accent]}>{item.title}</Badge>)}
          </div>
        </div>
      </div>
    </div>
  );
}
