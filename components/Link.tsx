import { Link as RouterLink } from 'react-router';

import { ComponentProps } from 'react';

type Props = Omit<ComponentProps<'a'>, 'href'> & { href: string };

// Single link primitive for the whole app. react-router's Link already renders
// a plain anchor with native browser navigation for absolute/external/mailto
// URLs, so one code path covers internal routes and external links alike.
export const Link = ({ children, className, href, ...props }: Props) => (
  <RouterLink
    to={href}
    className={
      'opacity-80 transition-opacity duration-300 hover:opacity-100 ' +
      (className ?? '')
    }
    {...props}
  >
    {children}
  </RouterLink>
);
