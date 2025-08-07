import Bounded from '@/components/Bounded';
import Crew from '@/components/Crew';
import PageTitle from '@/components/PageTitle';
import { sanityFetch } from '@/sanity/lib/live';
import { CREWS_QUERY } from '@/sanity/lib/queries';

const CrewPage = async () => {
  const { data: crews } = await sanityFetch({ query: CREWS_QUERY });

  return (
    <Bounded className="bg-[url(/destination-sm.jpg)] bg-no-repeat bg-cover bg-center md:bg-[url(/destination-md.jpg)] lg:bg-[url(/destination-lg.jpg)]">
      <PageTitle index="02" title="meet your crew" />

      <Crew crews={crews} />
    </Bounded>
  );
};

export default CrewPage;
