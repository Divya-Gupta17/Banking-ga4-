import Hero from '@/components/Hero';
import Products from '@/components/Products';
import WhyChoose from '@/components/WhyChoose';
import CTASection from '@/components/CTASection';

import FeaturedCards from '@/components/FeaturedCards';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedCards />
      <Products />
      <WhyChoose />
      <CTASection />
    </main>
  );
}
