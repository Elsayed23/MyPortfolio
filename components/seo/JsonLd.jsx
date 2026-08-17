import { socialProfileUrls } from '@/constants/socialUrls';
import { absoluteUrl, siteUrl } from '@/lib/siteConfig';

const personName = 'Elsayed Kewan';
const siteDescription =
  'Portfolio of Elsayed Kewan — full stack developer building web products with Next.js, Node.js, and AI workflow automation.';

export default function JsonLd() {
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Elsayed Portfolio',
    url: siteUrl,
    description: siteDescription,
  };

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personName,
    url: absoluteUrl('/'),
    sameAs: socialProfileUrls,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
}
