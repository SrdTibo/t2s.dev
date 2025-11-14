export const dynamic = "force-static";

const baseUrl = "https://t2s-france.com";

export default function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/developpeur-web-belfort`,
      lastModified: new Date(),
    },
  ];
}
  