import NextLink from 'next/link';
import { ComponentProps } from 'react';

export const Link = ({
  children,
  className,
  ...props
}: ComponentProps<typeof NextLink>) => (
  <NextLink
    className={
      'opacity-80 transition-opacity duration-300 hover:opacity-100 ' +
      className
    }
    {...props}
  >
    {children}
  </NextLink>
);
