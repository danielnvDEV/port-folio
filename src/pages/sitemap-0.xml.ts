export async function GET() {
    const today = new Date().toISOString().split('T')[0];
    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://navacerradavaron.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="es" href="https://navacerradavaron.com/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://navacerradavaron.com/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://navacerradavaron.com/"/>
  </url>
  <url>
    <loc>https://navacerradavaron.com/en/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="es" href="https://navacerradavaron.com/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://navacerradavaron.com/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://navacerradavaron.com/"/>
  </url>
</urlset>`;
    return new Response(body, {
        headers: { 'Content-Type': 'application/xml' },
    });
}
