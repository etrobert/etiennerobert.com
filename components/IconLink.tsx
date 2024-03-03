import Link from 'next/link';

import type { ReactNode } from 'react';

type Props = {
  href: string;
  icon: ReactNode;
};

const IconLink = ({ href, icon }: Props) => (
  <Link
    target="_blank"
    href={href}
    className="w-[2em] opacity-80 hover:opacity-100 transition-opacity duration-300"
  >
    {icon}
  </Link>
);

export default IconLink;
