import LoadingScreen from '@/components/ui/LoadingScreen';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import FeaturedProperties from '@/components/sections/FeaturedProperties';
import Amenities from '@/components/sections/Amenities';
import VirtualTours from '@/components/sections/VirtualTours';
import NeighborhoodMap from '@/components/sections/NeighborhoodMap';
import MortgageCalculator from '@/components/sections/MortgageCalculator';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import LeadCapture from '@/components/sections/LeadCapture';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <LoadingScreen />
      <Header />
      <Hero />
      <FeaturedProperties />
      <VirtualTours />
      <NeighborhoodMap />
      <MortgageCalculator />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
