'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

const LINKS = [
  { name: 'home', url: '/' },
  { name: 'destination', url: '/destination' },
  { name: 'crew', url: '/crew' },
  { name: 'technology', url: '/technology' },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const pathname = usePathname();

  console.log(navOpen);

  const toggleNav = () => {
    setNavOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  return (
    <header className="flex justify-between items-center px-5 py-8 font-condensed tracking-widest font-medium h-36 fixed z-50 inset-0">
      <Link href="/">
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt=""
          className="max-w-[40px] md:max-w-[50px]"
        />
      </Link>

      <button
        aria-controls="main-nav"
        aria-label="Menu Toggle"
        className="relative z-100 md:hidden"
        onClick={toggleNav}
        tabIndex={0}
      >
        {navOpen ? <IoClose /> : <RxHamburgerMenu />}
      </button>

      <nav
        role="navigation"
        id="main-nav"
        aria-label="Main Navigation"
        className={clsx(
          'flex max-md:flex-col max-md:fixed max-md:inset-0 max-md:left-[30%] max-md:px-8 max-md:py-26 md:px-10 md:py-5 bg-brand-white/5 backdrop-blur-sm max-md:z-50 max-md:gap-y-5 gap-x-8 transition-transform duration-200 ease-in-out',
          navOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full',
        )}
        aria-expanded={navOpen}
      >
        {LINKS.map((link, i) => (
          <Link
            key={link.url}
            href={link.url}
            className={clsx(
              'uppercase flex items-center gap-x-2  tracking-widest',
              pathname === link.url && 'border-b',
            )}
            onClick={toggleNav}
          >
            <span className="font-bold">0{i}</span>
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
