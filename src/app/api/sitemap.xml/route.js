import { writeFileSync } from 'fs';

export default function handler(req, res) {
  const baseUrl = 'https://atlaspathrelocation.com';
  const pages = ['/', '/about', '/services', '/surrey', '/blogs', '/contact'];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        return `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
      })
      .join('')}
  </urlset>
  `;

  // Save the sitemap to the public directory
  writeFileSync('public/sitemap.xml', sitemap);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}