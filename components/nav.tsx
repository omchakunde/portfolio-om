import Link from "next/link";
import { Download, Moon } from "lucide-react";
import { profile } from "@/lib/data";
import { LinkButton } from "@/components/ui/button";

const navItems = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Experience", "/experience"],
  ["Research", "/research"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.04] bg-background/35 backdrop-blur-2xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 font-semibold text-primary">
          <span className="text-3xl font-black tracking-[-0.08em] text-transparent bg-gradient-to-r from-blue via-violet to-blue bg-clip-text">
            OC
          </span>
          <span className="hidden text-base sm:block">{profile.name}</span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map(([label, href], index) => (
            <Link
              key={href}
              href={href}
              className={`relative text-sm font-semibold transition hover:text-primary ${
                index === 0 ? "text-blue" : "text-primary/85"
              }`}
            >
              {label}
              {index === 0 ? (
                <span className="absolute -bottom-3 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet shadow-[0_0_16px_rgba(168,85,247,0.9)]" />
              ) : null}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden h-1 w-1 rounded-full bg-violet shadow-[0_0_18px_rgba(168,85,247,0.95)] lg:block" />
          <LinkButton href={profile.links.resume} size="sm" className="bg-gradient-to-r from-blue to-violet text-white shadow-[0_0_30px_rgba(59,130,246,0.35)]">
            Resume
            <Download className="h-4 w-4" />
          </LinkButton>
          <button
            aria-label="Toggle theme"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-primary shadow-inner shadow-white/5 transition hover:bg-white/[0.08] sm:flex"
          >
            <Moon className="h-4 w-4" />
          </button>
        </div>
      </nav>
    </header>
  );
}
