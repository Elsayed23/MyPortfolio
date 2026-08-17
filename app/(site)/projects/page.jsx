import AllProjects from './AllProjects';
import { absoluteUrl } from '@/lib/siteConfig';

const title = 'Projects | Elsayed Portfolio';
const description =
  'Selected work: marketing sites, interactive web apps, full-stack products, and SaaS—React, Next.js, and modern JavaScript tooling.';

export const metadata = {
  title: 'Projects',
  description,
  alternates: {
    canonical: absoluteUrl('/projects'),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl('/projects'),
  },
  twitter: {
    title,
    description,
    images: ['/opengraph-image'],
  },
};

export default function ProjectsPage() {
  return <AllProjects />;
}
