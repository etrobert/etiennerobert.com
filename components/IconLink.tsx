import Link from 'next/link';

import type { ReactNode } from 'react';

type Props = {
  href: string;
  icon: ReactNode;
  label: string;
};

const IconLink = ({ href, icon, label }: Props) => (
  <Link
    target="_blank"
    href={href}
    className="w-[2em] opacity-80 transition-opacity duration-300 hover:opacity-100"
    aria-label={label}
  >
    {icon}
  </Link>
);

export default IconLink;
