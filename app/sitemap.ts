import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://fesoria.xyz",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://fesoria.xyz/worlds/tokyo-2147",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://fesoria.xyz/worlds/atlantia",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
