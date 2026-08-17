import Contact from './Contact';
import { absoluteUrl } from '@/lib/siteConfig';

const title = 'Contact | Elsayed Portfolio';
const description =
  'Get in touch with Elsayed Kewan for freelance work, collaborations, or full-time opportunities—email, social profiles, and contact options.';

export const metadata = {
  title: 'Contact',
  description,
  alternates: {
    canonical: absoluteUrl('/contact'),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl('/contact'),
  },
  twitter: {
    title,
    description,
    images: ['/opengraph-image'],
  },
};

export default function ContactPage() {
  return <Contact />;
}
