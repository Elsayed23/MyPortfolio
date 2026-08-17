import Navbar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/Footer';
import NotFound from '@/components/not-found/NotFound';

export const metadata = {
  title: 'Page not found',
  description: 'The page you requested does not exist.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-portfolio-bg font-sans text-portfolio-text">
      <Navbar />
      <main className="w-full flex-1">
        <NotFound />
      </main>
      <Footer />
    </div>
  );
}
