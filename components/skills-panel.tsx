import { Cloud, Code2, Cpu, Database, Layers3 } from "lucide-react";

const groups = [
  { title: "Frontend", icon: Code2, color: "text-blue", text: "React, Next.js, Tailwind CSS, Svelte, JavaScript, HTML, CSS" },
  { title: "Backend", icon: Database, color: "text-green", text: "Node.js, Express.js, REST APIs, JWT, OAuth, MongoDB, SQL" },
  { title: "Cloud & DevOps", icon: Cloud, color: "text-amber", text: "AWS, Vercel, Firebase, Docker, SharePoint, S3" },
  { title: "AI / Machine Learning", icon: Layers3, color: "text-violet", text: "Python, YOLOv8/10, OpenCV, Scikit-learn, Deep Learning" },
  { title: "Embedded Systems", icon: Cpu, color: "text-amber", text: "Arduino, STM32, Raspberry Pi, C, Embedded C, Sensors" }
];

export function SkillsPanel() {
  return (
    <div className="grid overflow-hidden rounded-2xl border border-white/12 bg-[#071226]/80 shadow-[0_22px_70px_rgba(0,0,0,0.36)] lg:grid-cols-[0.9fr_1.55fr]">
      <div className="relative min-h-[280px] border-b border-white/10 bg-[radial-gradient(circle_at_45%_55%,rgba(56,189,248,0.24),transparent_14rem)] p-8 lg:border-b-0 lg:border-r">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border-[34px] border-blue/80 shadow-[0_0_48px_rgba(56,189,248,0.45)]" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border-[34px] border-transparent border-r-amber border-t-violet rotate-45" />
        <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-[#111833] shadow-inner shadow-white/10">
          <span className="text-5xl font-black tracking-[-0.08em] text-transparent bg-gradient-to-r from-blue to-violet bg-clip-text">OC</span>
        </div>
      </div>
      <div className="grid gap-x-7 gap-y-6 p-6 md:grid-cols-2">
        {groups.map(({ title, icon: Icon, color, text }) => (
          <div key={title} className="flex gap-4 border-b border-white/10 pb-5 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0">
            <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.05] ${color}`}>
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className={`text-base font-bold ${color}`}>{title}</h3>
              <p className="mt-2 text-sm leading-6 text-secondary">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
