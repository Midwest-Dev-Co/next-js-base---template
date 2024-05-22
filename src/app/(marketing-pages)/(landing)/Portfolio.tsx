import Section from '@/components/Containers/Section';
import SectionHeader from '@/components/Containers/SectionHeader';

export default function Portfolio() {
  return (
    <Section name="Portfolio">
      {/* Header */}
      <SectionHeader
        title="Portfolio Section"
        subtitle="Hey there! I'm a subtitle."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odit error exercitationem ratione dignissimos quia eaque, soluta eligendi harum nemo?"
      />

      {/* Content */}
      <div></div>
    </Section>
  );
}
