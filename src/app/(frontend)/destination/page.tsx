import Bounded from '@/components/Bounded';
import Destination from '@/components/Destination';
import PageTitle from '@/components/PageTitle';
import { sanityFetch } from '@/sanity/lib/live';
import { DESTINATIONS_QUERY } from '@/sanity/lib/queries';

const DestinationPage = async () => {
  const { data: destinations } = await sanityFetch({
    query: DESTINATIONS_QUERY,
  });

  return (
    <Bounded className="bg-[url(/destination-sm.jpg)] bg-no-repeat bg-cover bg-center md:bg-[url(/destination-md.jpg)] lg:bg-[url(/destination-lg.jpg)]">
      <PageTitle index="01" title="pick your destination" />

      <Destination destinations={destinations} />
    </Bounded>
  );
};

export default DestinationPage;
