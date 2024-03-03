import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Hack to display a paragraph with the words spaced out.
 *
 * Source: https://stackoverflow.com/a/22950810
 */
const JustifiedText = ({ children, className }: Props) => (
  <p className={['text-justify', className].join(' ')}>
    {children}
    <span className={'w-full inline-block'}> </span>
  </p>
);

export default JustifiedText;
