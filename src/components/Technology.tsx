'use client';

import { urlFor } from '@/sanity/lib/image';
import { TECHNOLOGIES_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { Button } from './ui/button';
import clsx from 'clsx';

const Technology = ({
  technology,
}: {
  technology: NonNullable<TECHNOLOGIES_QUERYResult>;
}) => {
  const [allTech, setAllTech] = useState(technology || null);
  const [activeTech, setActiveTech] = useState(allTech[0] || null);

  if (!allTech) notFound();

  return (
    <div className="grid gap-y-10 lg:grid-cols-2 lg:gap-x-10 mt-10 py-10">
      {activeTech.mainImage?.asset?.url && (
        <div className="lg:order-1">
          <Image
            src={urlFor(activeTech.mainImage.asset.url).format('webp').url()}
            width={500}
            height={500}
            alt={activeTech.mainImage.alt || ''}
            className="mx-auto min-w-fit"
          />
        </div>
      )}

      <div className="flex flex-col lg:flex-row justify-center items-center gap-y-5 text-center lg:text-left lg:gap-x-5">
        <div className="flex gap-x-5 lg:flex-col">
          {allTech.map((tech, i) => (
            <Button
              key={tech.slug?.current}
              className={clsx(
                'border w-[1rem] aspect-square rounded-full',
                allTech[i] === activeTech
                  ? 'bg-brand-white text-brand-black'
                  : '',
              )}
              onClick={() => setActiveTech(tech)}
            >
              {i + 1}
            </Button>
          ))}
        </div>

        <div className="flex flex-col gap-y-5">
          <h2 className="uppercase font-bellefair">
            <span> the terminology...</span>
            <span className="text-fs-600 md:text-fs-700 block">
              {activeTech.name}
            </span>
          </h2>
          <p className="md:max-w-[80%] md:mx-auto lg:mx-0">{activeTech.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
