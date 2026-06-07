import { Link } from './Link';

import type { ReactNode } from 'react';

type Props = {
  href: string;
  icon: ReactNode;
  label: string;
  text: string;
};

const IconLink = ({ href, icon, label, text }: Props) => (
  <Link
    target="_blank"
    href={href}
    className="flex flex-col items-center gap-[0.4em]"
    aria-label={label}
  >
    <span className="w-[2em]">{icon}</span>
    <span className="text-[0.5em] tracking-wide uppercase">{text}</span>
  </Link>
);

export default IconLink;
