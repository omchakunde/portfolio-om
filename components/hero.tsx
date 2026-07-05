import { ArrowRight, BarChart3, Braces, BriefcaseBusiness, Cloud, Code2, FileText, GitBranch, Mail, Network, Rocket, Sparkles, UsersRound } from "lucide-react";
import { metrics, profile } from "@/lib/data";
import { LinkButton } from "@/components/ui/button";

const socialLinks = [
  { href: profile.links.github, icon: GitBranch, label: "GitHub" },
  { href: profile.links.linkedin, icon: Network, label: "LinkedIn" },
  { href: profile.links.email, icon: Mail, label: "Email" },
  { href: profile.links.resume, icon: FileText, label: "Resume" }
];

const metricIcons = [Rocket, Sparkles, BriefcaseBusiness, Braces, Cloud];

function HeroVisual() {
  return (
    <div className="relative mx-auto min-h-[430px] w-full max-w-[680px] lg:min-h-[560px]">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue/40 opacity-80 shadow-[0_0_90px_rgba(59,130,246,0.35)]" />
      <div className="absolute left-[7%] top-[45%] h-[260px] w-[570px] -rotate-[18deg] rounded-[50%] border border-violet/80 shadow-[0_0_36px_rgba(168,85,247,0.55)]" />
      <div className="absolute left-[12%] top-[53%] h-[210px] w-[500px] rotate-[11deg] rounded-[50%] border border-blue/70 shadow-[0_0_28px_rgba(14,165,233,0.55)]" />
      <div className="absolute left-[18%] top-[61%] h-[170px] w-[420px] -rotate-[8deg] rounded-[50%] border border-amber/45 shadow-[0_0_28px_rgba(251,146,60,0.4)]" />

      <div className="absolute bottom-10 left-1/2 h-24 w-[430px] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-blue/35 via-violet/25 to-transparent blur-2xl" />
      <div className="absolute bottom-16 left-1/2 h-20 w-[390px] -translate-x-1/2 rounded-[50%] border border-white/10 bg-[#11162a] shadow-[0_28px_90px_rgba(0,0,0,0.65),inset_0_8px_22px_rgba(255,255,255,0.08)]" />

      <div className="absolute left-1/2 top-[42%] h-[265px] w-[430px] -translate-x-1/2 -translate-y-1/2 -rotate-[-12deg] rounded-xl border border-white/10 bg-[#121827] p-3 shadow-[0_35px_120px_rgba(0,0,0,0.75)]">
        <div className="h-full rounded-lg border border-white/10 bg-[#060a14] p-4">
          <div className="mb-4 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green/80" />
          </div>
          <div className="space-y-2 font-mono text-[10px] leading-none">
            {["const portfolio = build({", "  stack: ['Next', 'Node', 'AI'],", "  cloud: deploy('production'),", "  ux: refine(realUsers),", "  result: scalableSoftware", "});"].map((line, index) => (
              <p key={line} className={index % 2 ? "text-blue/80" : "text-violet/80"}>{line}</p>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2">
            {[72, 48, 86, 64, 38, 76].map((height, index) => (
              <span key={height + index} className="rounded-sm bg-gradient-to-t from-blue to-violet/80" style={{ height }} />
            ))}
          </div>
        </div>
        <div className="absolute -bottom-12 left-8 h-20 w-[390px] skew-x-[-18deg] rounded-b-2xl border border-white/10 bg-[#0b1020] shadow-[0_28px_70px_rgba(0,0,0,0.72)]" />
      </div>

      <div className="absolute left-[15%] top-[13%] grid h-20 w-20 rotate-12 place-items-center rounded-2xl border border-violet/40 bg-gradient-to-br from-violet/80 to-blue/35 shadow-[0_0_36px_rgba(168,85,247,0.45)]">
        <Code2 className="h-10 w-10 text-white" />
      </div>
      <div className="absolute right-[8%] top-[22%] grid h-24 w-24 rotate-12 place-items-center rounded-2xl border border-blue/40 bg-gradient-to-br from-blue/80 to-white/10 shadow-[0_0_40px_rgba(56,189,248,0.42)]">
        <Cloud className="h-12 w-12 text-sky-100" />
      </div>
      <div className="absolute bottom-[28%] right-[16%] grid h-20 w-20 rotate-12 place-items-center rounded-2xl border border-green/35 bg-gradient-to-br from-green/70 to-blue/20 shadow-[0_0_38px_rgba(52,211,153,0.35)]">
        <Braces className="h-10 w-10 text-green-100" />
      </div>
      <div className="absolute left-[4%] top-[36%] grid h-24 w-28 -rotate-12 place-items-center rounded-2xl border border-blue/25 bg-[#101a32]/90 p-4 shadow-[0_0_38px_rgba(59,130,246,0.25)]">
        <BarChart3 className="h-12 w-12 text-blue" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(72,43,198,0.42),transparent_34rem),radial-gradient(circle_at_12%_16%,rgba(16,185,129,0.1),transparent_22rem)]" />
      <div className="absolute inset-0 bg-grid bg-[length:54px_54px] opacity-[0.11]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="max-w-[560px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-primary shadow-inner shadow-white/5">
            <span className="h-2 w-2 rounded-full bg-green shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
            Full-Stack Engineer
          </span>
          <h1 className="mt-5 text-balance text-[42px] font-black leading-[1.05] text-primary sm:text-6xl lg:text-[64px]">
            Building scalable <span className="text-blue">software</span> that solves <span className="text-violet">real-world</span> problems.
          </h1>
          <p className="mt-5 max-w-[520px] text-base leading-7 text-secondary sm:text-lg">
            I design and build production-ready web platforms, AI solutions, cloud applications, and embedded systems with a focus on clean architecture and great user experiences.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <LinkButton href="/projects" className="bg-gradient-to-r from-blue to-violet text-white shadow-[0_0_32px_rgba(59,130,246,0.36)]">
              View My Work
              <ArrowRight className="h-4 w-4 rounded-full bg-white/20 p-0.5" />
            </LinkButton>
            <LinkButton href="/contact" variant="ghost" className="text-primary">
              <Sparkles className="h-4 w-4 text-violet" />
              Let&apos;s Connect
              <UsersRound className="h-4 w-4" />
            </LinkButton>
          </div>
          <div className="mt-6 flex gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <LinkButton key={label} href={href} variant="outline" size="icon" aria-label={label} className="h-9 w-9 rounded-md">
                <Icon className="h-4 w-4" />
              </LinkButton>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <HeroVisual />
          <div className="absolute right-0 top-1/2 flex flex-col items-center gap-3 text-xs text-secondary">
            <span className="h-16 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            Scroll
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-8 max-w-7xl rounded-2xl border border-white/12 bg-[#071226]/80 px-6 py-6 shadow-[0_18px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((metric, index) => {
            const Icon = metricIcons[index] ?? Sparkles;
            return (
              <div key={metric.label} className="flex items-center gap-4 border-white/10 lg:border-r lg:last:border-r-0">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-blue/35 to-violet/25 text-blue shadow-inner shadow-white/10">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-2xl font-black text-primary">{metric.value}</p>
                  <p className="mt-1 text-sm leading-5 text-secondary">{metric.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
