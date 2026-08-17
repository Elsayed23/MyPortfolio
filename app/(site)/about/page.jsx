import About from './About';
import { absoluteUrl } from '@/lib/siteConfig';

const title = 'About | Elsayed Portfolio';
const description =
  'About Elsayed Kewan: full stack developer with experience in Next.js, Node.js, MySQL, and Prisma—background, skills, and professional timeline.';

export const metadata = {
  title: 'About',
  description,
  alternates: {
    canonical: absoluteUrl('/about'),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl('/about'),
  },
  twitter: {
    title,
    description,
    images: ['/opengraph-image'],
  },
};

export default function AboutPage() {
  return <About />;
}
