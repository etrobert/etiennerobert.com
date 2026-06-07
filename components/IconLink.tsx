import { Link } from './Link';

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
    className="flex flex-col items-center gap-0.5"
  >
    <span className="w-[2em]">{icon}</span>
    <span className="text-base tracking-wide">{label}</span>
  </Link>
);

export default IconLink;
