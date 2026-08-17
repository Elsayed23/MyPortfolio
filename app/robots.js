import { siteUrl } from '@/lib/siteConfig';

export default function robots() {
  const { host } = new URL(siteUrl);
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host,
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
