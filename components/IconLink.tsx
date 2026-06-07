import { Link as RouterLink } from 'react-router';

import { Link } from './Link';

import type { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  label: string;
} & ({ href: string; to?: never } | { to: string; href?: never });

const className = 'flex flex-col items-center gap-0.5';

const IconLink = ({ icon, label, href, to }: Props) => {
  const content = (
    <>
      <span className="w-[2em]">{icon}</span>
      <span className="text-base tracking-wide">{label}</span>
    </>
  );

  // Internal routes navigate with react-router; external links open in a new tab.
  return to !== undefined ? (
    <RouterLink
      to={to}
      className={
        'opacity-80 transition-opacity duration-300 hover:opacity-100 ' +
        className
      }
    >
      {content}
    </RouterLink>
  ) : (
    <Link target="_blank" href={href} className={className}>
      {content}
    </Link>
  );
};

export default IconLink;
