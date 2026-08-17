import JsonLd from '@/components/seo/JsonLd';
import Navbar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransitionShell from '@/components/other/PageTransitionShell';

export default function SiteLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-portfolio-bg font-sans text-portfolio-text">
      <JsonLd />
      <Navbar />
      <main className="w-full flex-1">
        <PageTransitionShell>{children}</PageTransitionShell>
      </main>
      <Footer />
    </div>
  );
}
