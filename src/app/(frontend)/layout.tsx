import Header from '@/components/Header';
import { SanityLive } from '@/sanity/lib/live';

const FrontendLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <Header />
      {children}

      <SanityLive />
    </main>
  );
};

export default FrontendLayout;
