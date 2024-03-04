import Image from 'next/image';
import styles from './Portrait.module.scss';

const Portrait = () => (
  <Image
    src="/portrait.jpeg"
    className={[
      styles.portrait,
      'border-2 border-stone-900 dark:border-stone-50',
    ].join(' ')}
    width={1365 / 5}
    height={2048 / 5}
    alt="Portrait of the author"
  />
);

export default Portrait;
