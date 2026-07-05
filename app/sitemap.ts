import type { MetadataRoute } from "next";
import { allProjects } from "@/lib/data";

const baseUrl = "https://replace-with-portfolio-domain.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/experience", "/projects", "/research", "/certificates", "/skills", "/philosophy", "/contact"];
  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date()
    })),
    ...allProjects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date()
    }))
  ];
}
