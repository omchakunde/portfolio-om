import { GitBranch, Mail, MapPin, Network } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile } from "@/lib/data";

export const metadata = {
  title: "Contact",
  description: "Contact Om Chakunde."
};

export default function ContactPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <MotionSection className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Contact" title="Available for engineering opportunities and thoughtful conversations." />
        <Card className="text-center">
          <MapPin className="mx-auto h-6 w-6 text-green" />
          <p className="mt-4 text-lg font-semibold text-primary">{profile.location}</p>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-secondary">
            Profile links are clearly marked placeholders until the real GitHub, LinkedIn, resume, and email are added.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <LinkButton href={`mailto:${profile.links.email}`}>
              <Mail className="h-4 w-4" />
              chakundeo@gmail.com
            </LinkButton>
            <LinkButton href={profile.links.github} variant="outline">
              <GitBranch className="h-4 w-4" />
              GitHub
            </LinkButton>
            <LinkButton href={profile.links.linkedin} variant="outline">
              <Network className="h-4 w-4" />
              LinkedIn
            </LinkButton>
          </div>
        </Card>
      </MotionSection>
    </div>
  );
}
