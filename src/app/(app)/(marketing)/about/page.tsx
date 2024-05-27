import Main from '@/components/containers/Main';
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
