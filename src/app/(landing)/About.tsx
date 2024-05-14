import Section from '@/components/global/Section';
import SectionHeader from '@/components/global/SectionHeader';

export default function About() {
  return (
    <Section name="About">
      {/* Header */}
      <SectionHeader
        title="About Section"
        subtitle="Hey there! I'm a subtitle."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odit error exercitationem ratione dignissimos quia eaque, soluta eligendi harum nemo?"
        color="yellow"
      />

      {/* Content */}
      <div></div>
    </Section>
  );
}
