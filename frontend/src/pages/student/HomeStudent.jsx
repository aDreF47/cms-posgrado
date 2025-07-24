import React from 'react';
import HeroSection from './../../components/student/HeroComponent';
import ProgramCarousel from '../../components/student/ProgramCarousel';
import FeaturesSection from '../../components/student/FeaturesSection';
import ProcessSection from '../../components/student/ProcessSection';
import TestimonialsSection from '../../components/student/TestimonialsSection';
import CTASection from '../../components/student/CTASection';
const HomeStudent = () => {

  return (
    <>
      {/* Hero Section */}
      <HeroSection/>
      {/* Sección de Programas */}
      <ProgramCarousel />

      {/* Sección de Funcionalidades del Sistema */}
      <FeaturesSection />

      {/* Sección de Proceso de Matrícula */}
      <ProcessSection />

      {/* Sección de Testimonios */}
      <TestimonialsSection />

      {/* Sección CTA */}
      <CTASection />

    </>
  );
};

export default HomeStudent;