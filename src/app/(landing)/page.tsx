import Main from '@/components/global/Main';
import Hero from './Hero';
import Services from './Services';
import Projects from './Projects';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Articles from './Articles';
import Contact from './Contact';
import About from './About';

export default function LandingPage() {
  return (
    <Main>
      <Hero />

      <About />

      <Services />

      <Projects />

      <Testimonials />

      <CTA />

      <Articles />

      <Contact />
    </Main>
  );
}
