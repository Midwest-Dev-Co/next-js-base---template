import Section from '@/components/global/Section';
import SectionHeader from '@/components/global/SectionHeader';

export default function Articles() {
  return (
    <Section name="Articles">
      {/* Header */}
      <SectionHeader
        title="Articles Section"
        subtitle="Hey there! I'm a subtitle."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odit error exercitationem ratione dignissimos quia eaque, soluta eligendi harum nemo?"
        color="purple"
      />

      {/* Content */}
      <div></div>
    </Section>
  );
}
