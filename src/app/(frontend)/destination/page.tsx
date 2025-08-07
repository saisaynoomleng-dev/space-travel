import Bounded from '@/components/Bounded';
import Destination from '@/components/Destination';
import { Button } from '@/components/ui/button';
import { sanityFetch } from '@/sanity/lib/live';
import { DESTINATIONS_QUERY } from '@/sanity/lib/queries';

const DestinationPage = async () => {
  const { data: destinations } = await sanityFetch({
    query: DESTINATIONS_QUERY,
  });

  return (
    <Bounded className="bg-[url(/destination-sm.jpg)] bg-no-repeat bg-cover bg-center md:bg-[url(/destination-md.jpg)] lg:bg-[url(/destination-lg.jpg)]">
      <h1 className="text-center md:text-left space-x-4 tracking-widest">
        <span className="text-brand-white/50">01</span>
        <span className="uppercase">Pick your destination</span>
      </h1>

      <Destination destinations={destinations} />
    </Bounded>
  );
};

export default DestinationPage;
