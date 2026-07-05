import { Boxes, BrainCircuit, Code2, Layers3 } from "lucide-react";
import { accentClasses, experiences } from "@/lib/data";

const icons = [BrainCircuit, Layers3, Code2, Boxes];

export function ExperienceTimeline() {
  return (
    <div className="relative pt-7">
      <div className="absolute left-10 right-10 top-5 hidden h-px bg-gradient-to-r from-blue via-violet to-amber md:block" />
      <div className="grid gap-5 md:grid-cols-4">
        {experiences.map((item, index) => {
          const Icon = icons[index] ?? Code2;
          return (
            <article key={item.company} className="relative rounded-2xl border border-white/12 bg-[#071226]/78 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
              <span className={`absolute -top-8 left-9 hidden h-5 w-5 rounded-full border-4 border-background shadow-[0_0_20px_currentColor] md:block ${accentClasses[item.accent]}`} />
              <div className="flex gap-4">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border ${accentClasses[item.accent]}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-black text-primary">{item.company}</h3>
                  <p className={`mt-1 text-sm font-semibold ${accentClasses[item.accent].split(" ").at(-1)}`}>{item.role}</p>
                  <p className="mt-3 text-sm leading-6 text-secondary">{item.stack.slice(0, 4).join(", ")}</p>
                  <p className="mt-2 text-sm text-primary/90">2024</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
