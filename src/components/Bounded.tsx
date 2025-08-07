import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  children,
  className,
  as: Comp = 'section',
}: BoundedProps) => {
  return (
    <Comp className={clsx('min-h-dvh relative pt-36 px-5 md:px-10', className)}>
      {children}
    </Comp>
  );
};

export default Bounded;
