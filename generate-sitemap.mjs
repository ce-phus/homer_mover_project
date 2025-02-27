// generate-sitemap.js
import { writeFileSync } from 'fs';

const baseUrl = 'https://atlaspathrelocation.com';
const pages = [
  '/',
  '/about',
  '/services',
  '/surrey',
  '/blogs',
  '/contact',
  '/privacypolicy',
  '/cookiepolicy',
];

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

console.log('Sitemap generated successfully!');