import Section from '@/components/containers/Section';

export default function SupportPage() {
    return (
        <Section name="support" className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                Support
            </h1>
            <p
                className="mt-6 text-lg sm:mt-8 sm:text-xl md:mt-10 md:text-2xl
	  lg:mt-12 lg:text-3xl xl:mt-14 xl:text-4xl 2xl:mt-16 2xl:text-5xl"
            >
                For support, please contact us at{' '}
                <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}>
                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                </a>
                .
            </p>
        </Section>
    );
}
