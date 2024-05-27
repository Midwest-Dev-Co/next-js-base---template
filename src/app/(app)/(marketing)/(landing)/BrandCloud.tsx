import Section from '@/components/containers/Section';
import SectionHeader from '@/components/containers/SectionHeader';

export default function BrandCloud() {
    return (
        <Section name="BrandCloud">
            {/* Header */}
            <SectionHeader
                title="Brand Section"
                subtitle="Hey there! I'm a subtitle."
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odit error exercitationem ratione dignissimos quia eaque, soluta eligendi harum nemo?"
                color="orange"
            />

            {/* Content */}
            <div></div>
        </Section>
    );
}
