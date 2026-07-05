import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://replace-with-portfolio-domain.example"),
  title: {
    default: `${profile.name} | Full-Stack Software Engineer`,
    template: `%s | ${profile.name}`
  },
  description: profile.secondary,
  keywords: ["Full-Stack Software Engineer", "Next.js", "AI", "Cloud", "FinOps", "Embedded Systems", "Pune"],
  openGraph: {
    title: `${profile.name} | Full-Stack Software Engineer`,
    description: profile.secondary,
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
