import { Link } from './Link';

import type { ReactNode } from 'react';

type Props = {
  href: string;
  icon: ReactNode;
  label: string;
  target?: string;
};

const IconLink = ({ href, icon, label, target }: Props) => (
  <Link
    href={href}
    target={target}
    className="flex flex-col items-center gap-0.5"
  >
    <span className="w-[2em]">{icon}</span>
    <span className="text-base tracking-wide">{label}</span>
  </Link>
);

export default IconLink;
