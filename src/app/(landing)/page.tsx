import Main from '@/components/global/Main';
import Hero from './Hero';
import Services from './Services';
import Projects from './Projects';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Articles from './Articles';
import Contact from './Contact';
import About from './About';
import FAQ from './FAQ';
import BrandCloud from './BrandCloud';

export default function LandingPage() {
  return (
    <Main>
      <Hero />

      <BrandCloud />

      <About />

      <Services />

      <Projects />

      <Testimonials />

      <Articles />

      <CTA />

      <FAQ />

      <Contact />
    </Main>
  );
}
