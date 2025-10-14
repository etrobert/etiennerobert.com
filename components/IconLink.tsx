import { Link } from './Link';

import type { ReactNode } from 'react';

type Props = {
  href: string;
  icon: ReactNode;
  label: string;
};

const IconLink = ({ href, icon, label }: Props) => (
  <Link target="_blank" href={href} className="w-[2em]" aria-label={label}>
    {icon}
  </Link>
);

export default IconLink;
