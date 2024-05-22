import Section from '@/components/Containers/Section';
import SectionHeader from '@/components/Containers/SectionHeader';

export default function Hero() {
  return (
    <Section name="Hero">
      {/* Header */}
      <SectionHeader
        title="Hero Section"
        subtitle="Hey there! I'm a subtitle."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odit error exercitationem ratione dignissimos quia eaque, soluta eligendi harum nemo?"
        color="red"
      />

      {/* Content */}
      <div></div>
    </Section>
  );
}
