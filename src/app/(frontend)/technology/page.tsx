import Bounded from '@/components/Bounded';
import PageTitle from '@/components/PageTitle';
import Technology from '@/components/Technology';
import { sanityFetch } from '@/sanity/lib/live';
import { TECHNOLOGIES_QUERY } from '@/sanity/lib/queries';

const TechnologyPage = async () => {
  const { data: technology } = await sanityFetch({ query: TECHNOLOGIES_QUERY });
  return (
    <Bounded className="bg-[url(/tech-sm.jpg)] bg-no-repeat bg-cover bg-center md:bg-[url(/tech-md.jpg)] lg:bg-[url(/tech-lg.jpg)]">
      <PageTitle index="03" title="space launch 101" />

      <Technology technology={technology} />
    </Bounded>
  );
};

export default TechnologyPage;
