'use client';

import { SlideInAnimationProps } from '@/lib/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export const SlideInAnimation = ({
  children,
  className,
  delay = 0,
  duration = 1,
  offset = 100,
  direction,
}: SlideInAnimationProps) => {
  const container = useRef(null);

  useGSAP(
    () => {
      const vars: gsap.TweenVars = {
        opacity: 0,
        duration,
        delay,
        ease: 'power3.inOut',
      };

      if (direction === 'left') vars.x = -offset;
      if (direction === 'right') vars.x = offset;
      if (direction === 'top') vars.y = -offset;
      if (direction === 'bottom') vars.y = offset;

      gsap.from(container.current, vars);
    },
    { scope: container },
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};

export const SlideInAnimationGroup = ({
  children,
  className,
  delay = 0,
  duration = 1,
  offset = 100,
  direction,
}: SlideInAnimationProps) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const vars: gsap.TweenVars = {
        opacity: 0,
        delay,
        duration,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.5,
          from: 'start',
        },
      };

      if (direction === 'top') vars.y = -offset;
      if (direction === 'bottom') vars.y = offset;
      if (direction === 'left') vars.x = -offset;
      if (direction === 'right') vars.x = offset;

      if (container.current?.children) {
        gsap.from(container.current.children, vars);
      }
    },

    { scope: container },
  );

  return (
    <div className={className} ref={container}>
      {children}
    </div>
  );
};
