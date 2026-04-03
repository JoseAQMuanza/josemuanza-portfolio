import type { MetadataRoute } from "next";

function resolveSiteUrl(raw?: string) {
  if (!raw || raw.trim().length === 0) {
    return "http://localhost:3000";
  }

  const value = raw.trim();

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  if (value.startsWith("localhost")) {
    return `http://${value}`;
  }

  return `https://${value}`;
}

const siteUrl = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
