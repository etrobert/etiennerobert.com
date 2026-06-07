import { Link as RouterLink } from 'react-router';

import { ComponentProps } from 'react';

// Single link primitive for the whole app: internal paths route through
// react-router, everything else is a plain anchor. Callers always pass `href`.
export const Link = ({
  children,
  className,
  href,
  ...props
}: ComponentProps<'a'>) => {
  const classes =
    'opacity-80 transition-opacity duration-300 hover:opacity-100 ' +
    (className ?? '');

  if (href?.startsWith('/'))
    return (
      <RouterLink to={href} className={classes} {...props}>
        {children}
      </RouterLink>
    );

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
};
