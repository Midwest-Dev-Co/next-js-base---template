import Section from '@/components/Containers/Section';
import SectionHeader from '@/components/Containers/SectionHeader';

export default function Services() {
  return (
    <Section name="Services">
      {/* Header */}
      <SectionHeader
        title="Services Section"
        subtitle="Hey there! I'm a subtitle."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odit error exercitationem ratione dignissimos quia eaque, soluta eligendi harum nemo?"
        color="green"
      />

      {/* Content */}
      <div></div>
    </Section>
  );
}
