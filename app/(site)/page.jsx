import Home from './home/Home';
import { absoluteUrl } from '@/lib/siteConfig';

const title = 'Home | Elsayed Portfolio';
const description =
  'Portfolio of Elsayed Kewan — full stack developer building fast, accessible web products with Next.js, Node.js, and AI workflow automation.';

export const metadata = {
  title: 'Home',
  description,
  alternates: {
    canonical: absoluteUrl('/'),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl('/'),
  },
  twitter: {
    title,
    description,
    images: ['/opengraph-image'],
  },
};

export default function HomePage() {
  return <Home />;
}
