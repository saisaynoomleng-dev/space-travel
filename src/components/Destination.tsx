'use client';

import { DESTINATIONS_QUERYResult } from '@/sanity/types';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import clsx from 'clsx';

const Destination = ({
  destinations,
}: {
  destinations: NonNullable<DESTINATIONS_QUERYResult>;
}) => {
  const [allDestinations, setAllDestinations] = useState(destinations || []);
  const [activeDestination, setActiveDestination] = useState(
    allDestinations[0] || null,
  );

  if (!allDestinations) notFound();

  return (
    <div className="grid items-center justify-center gap-y-5 my-5 md:grid-cols-2 md:max-w-[90%] md:justify-between md:mx-auto">
      {activeDestination.mainImage?.asset?.url && (
        <div>
          <Image
            src={urlFor(activeDestination.mainImage?.asset?.url)
              .width(500)
              .height(500)
              .format('webp')
              .url()}
            width={300}
            height={300}
            alt={activeDestination.mainImage.alt || ''}
            className="mx-auto"
          />
        </div>
      )}

      <div className="flex flex-col gap-y-3 items-center justify-center md:justify-start md:items-start">
        <div className="flex gap-x-4">
          {allDestinations.map((destination) => (
            <Button
              key={destination.slug?.current}
              onClick={() => setActiveDestination(destination)}
              className={clsx(
                activeDestination.name === destination.name && 'border-b',
              )}
            >
              {destination.name}
            </Button>
          ))}
        </div>

        <div className="space-y-3 text-center md:text-left">
          <h2 className="uppercase font-bellefair text-fs-700 md:text-fs-800 lg:text-fs-900">
            {activeDestination.name}
          </h2>
          <p>{activeDestination.desc}</p>

          <hr className="max-w-[80%] mx-auto my-5" />

          <div className="flex justify-around font-condensed md:justify-between">
            <p className="uppercase">
              avg. distance{' '}
              <span className="text-fs-500 block font-normal font-barlow">
                {activeDestination.distance} km
              </span>
            </p>

            <p className="uppercase">
              est. travel time{' '}
              <span className="text-fs-500 block font-normal font-barlow">
                {activeDestination.time}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
