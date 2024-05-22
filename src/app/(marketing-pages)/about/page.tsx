import Main from '@/components/Containers/Main';
import Team from './Team';
import Content from './Content';
import Stats from './Stats';
import FeaturedArticles from '../articles/FeaturedArticles';
import Timeline from './Timeline';

export default function AboutPage() {
  return (
    <Main>
      <Content />

      <Team />

      <Stats />

      <Timeline />

      <FeaturedArticles />
    </Main>
  );
}
