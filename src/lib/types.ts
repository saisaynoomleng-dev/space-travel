// bounded
export type BoundedProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export type SlideInAnimationProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  offset?: number;
  direction?: 'top' | 'left' | 'bottom' | 'right';
  duration?: number;
};
