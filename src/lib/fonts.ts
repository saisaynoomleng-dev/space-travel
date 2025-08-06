import localFont from 'next/font/local';

export const barlow = localFont({
  src: [
    {
      path: '../app/fonts/Barlow/Barlow-Thin.ttf',
      style: 'normal',
      weight: '100',
    },
    {
      path: '../app/fonts/Barlow/Barlow-ExtraLight.ttf',
      style: 'normal',
      weight: '200',
    },
    {
      path: '../app/fonts/Barlow/Barlow-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../app/fonts/Barlow/Barlow-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../app/fonts/Barlow/Barlow-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../app/fonts/Barlow/Barlow-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../app/fonts/Barlow/Barlow-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../app/fonts/Barlow/Barlow-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
    {
      path: '../app/fonts/Barlow/Barlow-Black.ttf',
      style: 'normal',
      weight: '900',
    },
  ],
  variable: '--font-barlow',
});

export const condensed = localFont({
  src: [
    {
      path: '../app/fonts/Barlow_Condensed/BarlowCondensed-Thin.ttf',
      style: 'normal',
      weight: '100',
    },
    {
      path: '../app/fonts/Barlow_Condensed/BarlowCondensed-ExtraLight.ttf',
      style: 'normal',
      weight: '200',
    },
    {
      path: '../app/fonts/Barlow_Condensed/BarlowCondensed-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../app/fonts/Barlow_Condensed/BarlowCondensed-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../app/fonts/Barlow_Condensed/BarlowCondensed-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../app/fonts/Barlow_Condensed/BarlowCondensed-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../app/fonts/Barlow_Condensed/BarlowCondensed-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../app/fonts/Barlow_Condensed/BarlowCondensed-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
    {
      path: '../app/fonts/Barlow_Condensed/BarlowCondensed-Black.ttf',
      style: 'normal',
      weight: '900',
    },
  ],
  variable: '--font-condensed',
});

export const bellefair = localFont({
  src: '../app/fonts/Bellefair/Bellefair-Regular.ttf',
  variable: '--font-bellefair',
});
