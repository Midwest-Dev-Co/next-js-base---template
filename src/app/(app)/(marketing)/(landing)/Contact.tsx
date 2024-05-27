import Section from '@/components/containers/Section';
import SectionHeader from '@/components/containers/SectionHeader';

export default function Contact() {
    return (
        <Section name="Contact">
            {/* Header */}
            <SectionHeader
                title="Contact Section"
                subtitle="Hey there! I'm a subtitle."
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odit error exercitationem ratione dignissimos quia eaque, soluta eligendi harum nemo?"
                color="emerald"
            />

            {/* Content */}
            <div></div>
        </Section>
    );
}
