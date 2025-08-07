'use client';

import { CREWS_QUERYResult } from '@/sanity/types';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { Button } from './ui/button';
import { GoDotFill } from 'react-icons/go';
import clsx from 'clsx';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const Crew = ({ crews }: { crews: NonNullable<CREWS_QUERYResult> }) => {
  const [allCrews, setAllCrews] = useState(crews);
  const [activeCrew, setActiveCrew] = useState(allCrews[0] || null);

  if (!allCrews) notFound();

  return (
    <div className="grid gap-y-5 lg:grid-cols-2 md:gap-x-20 lg:place-items-center">
      <div className="flex flex-col gap-y-5 text-center lg:text-start mt-10 ">
        <h1 className="uppercase tracking-widest text-balance font-bellefair">
          <span>{activeCrew.rank}</span>
          <span className="block text-fs-600 md:text-fs-700 ">
            {activeCrew.name}
          </span>
        </h1>

        <p className="text-center lg:text-left">{activeCrew.desc}</p>

        <div className="flex items-center justify-center">
          {allCrews.map((crew) => (
            <Button
              key={crew.slug?.current}
              onClick={() => setActiveCrew(crew)}
            >
              <GoDotFill
                className={clsx(
                  activeCrew.name === crew.name
                    ? 'text-brand-white/100'
                    : 'text-brand-white/50',
                )}
              />
            </Button>
          ))}
        </div>
      </div>

      {activeCrew.mainImage?.asset?.url && (
        <div>
          <Image
            src={urlFor(activeCrew.mainImage.asset.url).format('webp').url()}
            width={400}
            height={500}
            alt={activeCrew.mainImage.alt || ''}
            className="mx-auto min-w-fit lg:min-w-full"
          />
        </div>
      )}
    </div>
  );
};

export default Crew;
