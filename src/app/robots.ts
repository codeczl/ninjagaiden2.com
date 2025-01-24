import type { MetadataRoute } from "next";

const BASE_URL = 'https://ninjagaiden2.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/characters/*",
          "/game/*", 
          "/article/*", 
          "/changelog",
          "/privacy", 
          "/terms"
        ],
        disallow: [
          "/api/*", 
          "/admin/*",
          "/_next/*",
          "/socket.io/*",
          "/draft/*",
          "/preview/*"
        ]
      }
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
