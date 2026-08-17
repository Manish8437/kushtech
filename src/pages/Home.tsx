import React from 'react';
import { SEO } from '@/components/layout/SEO';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { BrandsCarousel } from '@/components/home/BrandsCarousel';
import { TestimonialsSlider } from '@/components/home/TestimonialsSlider';
import { CTABanner } from '@/components/home/CTABanner';
import { Newsletter } from '@/components/home/Newsletter';

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUs />
      <ProjectsSection />
      <BrandsCarousel />
      <TestimonialsSlider />
      <CTABanner />
      <Newsletter />
    </>
  );
}
