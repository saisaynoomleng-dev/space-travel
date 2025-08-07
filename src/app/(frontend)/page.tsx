import {
  SlideInAnimation,
  SlideInAnimationGroup,
} from '@/components/Animations';
import Bounded from '@/components/Bounded';
import Link from 'next/link';

export default function Home() {
  return (
    <Bounded className="bg-[url(/home-sm.jpg)] bg-cover bg-no-repeat md:bg-[url(/home-md.jpg)] lg:bg-[url(/home-lg.jpg)] bg-center grid text-center ">
      <SlideInAnimationGroup
        direction="top"
        className="md:max-w-[70%] md:mx-auto"
      >
        <h1 className="uppercase leading-[1.5] font-condensed tracking-widest">
          so, you want to travel to{' '}
          <span className="block text-fs-800 font-bellefair">space</span>
        </h1>
        <p>
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          We sit back, and relax becuase we'll give you a truly out of this
          world experience.
        </p>
      </SlideInAnimationGroup>

      <SlideInAnimation
        direction="bottom"
        className="place-self-center group relative flex justify-center items-center"
      >
        <Link href="/destination">
          <button className="w-[10rem] aspect-square bg-brand-white text-brand-black rounded-full cursor-pointer relative z-20">
            <span>Explore</span>
          </button>
          <span className="group-hover:scale-150 w-[10rem] aspect-square rounded-full bg-brand-white/20 absolute z-10 top-0 left-0 transition-transform duration-300" />
        </Link>
      </SlideInAnimation>
    </Bounded>
  );
}
