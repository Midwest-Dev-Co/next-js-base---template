import Section from '@/components/containers/Section';

export default function SupportPage() {
  return (
    <Section name="support" className="text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">
        Support
      </h1>
      <p
        className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16
	  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
      >
        For support, please contact us at <a href="mailto:TSKEMAIL">TSKEMAIL</a>
        .
      </p>
    </Section>
  );
}
