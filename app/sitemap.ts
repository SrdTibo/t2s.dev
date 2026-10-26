import type { MetadataRoute } from "next";
import { SITE_URL } from "@/components/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, priority: 1 },
    { url: `${SITE_URL}/developpeur-web-belfort`, lastModified, priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified, priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified, priority: 0.8 },
  ];
}
