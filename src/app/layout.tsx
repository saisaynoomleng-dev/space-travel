import type { Metadata } from 'next';
import './globals.css';
import { barlow, bellefair, condensed } from '@/lib/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Space Travel',
    default: 'Space Travel',
  },
  description: 'Space Travel is a space travelling agency.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bellefair.variable} ${barlow.variable} ${condensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
