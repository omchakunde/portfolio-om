import Link from "next/link";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-secondary md:flex-row md:items-center md:justify-between">
        <p>(c) 2026 {profile.name}. Built as a production-ready portfolio.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/research" className="hover:text-primary">Research</Link>
          <Link href="/certificates" className="hover:text-primary">Certificates</Link>
          <Link href="/philosophy" className="hover:text-primary">Engineering Philosophy</Link>
        </div>
      </div>
    </footer>
  );
}
