// src/pages/sitemap.xml.ts
// Production dynamic sitemap complying strictly with modern search engine standards
// Uses only <loc> and <lastmod> (NO <changefreq> or <priority>)
import type { APIRoute } from 'astro';
import { allRoadmaps } from '../data/roadmaps';
import { allResources } from '../data/resources';
import { projectCategories } from '../data/projects';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://engineerguide.com';
  const lastmod = new Date().toISOString().split('T')[0];

  // High-value, authoritative canonical URLs to be indexed
  const urls: { loc: string; lastmod: string }[] = [
    // Core hub pages
    { loc: `${siteUrl}/`, lastmod },
    { loc: `${siteUrl}/roadmaps`, lastmod },
    { loc: `${siteUrl}/resources`, lastmod },
    { loc: `${siteUrl}/projects`, lastmod },

    // The 4 deep-dive, high-quality interactive engineering roadmaps
    ...allRoadmaps.map((r) => ({
      loc: `${siteUrl}/roadmaps/${r.slug}`,
      lastmod,
    })),

    // Curated, comprehensive technology resource topic pages
    ...allResources.map((r) => ({
      loc: `${siteUrl}/resources/${r.slug}`,
      lastmod,
    })),

    // Curated portfolio project category pages
    ...projectCategories.map((p) => ({
      loc: `${siteUrl}/projects/${p.slug}`,
      lastmod,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
