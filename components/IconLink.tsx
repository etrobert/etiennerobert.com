import Link from 'next/link';

import type { ReactNode } from 'react';

type Props = {
  href: string;
  icon: ReactNode;
};

const IconLink = ({ href, icon }: Props) => (
  <Link target="_blank" href={href}>
    {icon}
  </Link>
);

export default IconLink;
