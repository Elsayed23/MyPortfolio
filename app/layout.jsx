import { Providers } from './providers';
import './globals.css';
import { absoluteUrl, siteUrl } from '@/lib/siteConfig';

const siteName = 'Elsayed Portfolio';
const defaultTitle = 'Home | Elsayed Portfolio';
const defaultDescription =
  'Portfolio of Elsayed Kewan — full stack developer building fast web products with Next.js, Node.js, and AI workflow automation.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: 'Elsayed Kewan', url: siteUrl }],
  creator: 'Elsayed Kewan',
  keywords: [
    'Elsayed Kewan',
    'full stack developer',
    'Next.js',
    'React',
    'Node.js',
    'portfolio',
    'web developer',
    'TypeScript',
    'JavaScript',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en',
    siteName,
    url: absoluteUrl('/'),
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Elsayed Kewan — Full stack developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/opengraph-image'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
