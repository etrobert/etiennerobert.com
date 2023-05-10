import Link from 'next/link';
import styles from './BusinessCard.module.scss';

const BusinessCard = () => (
  <div className={styles.container}>
    <h1>Étienne Robert</h1>
    <div className={styles.links}>
      <Link
        className={styles['github-link']}
        target="_blank"
        href="https://github.com/etrobert"
      />
      <Link
        className={styles['linkedin-link']}
        target="_blank"
        href="https://www.linkedin.com/in/etienne-robert-0196b6140/"
      />
      <Link
        className={styles['instagram-link']}
        target="_blank"
        href="https://www.instagram.com/etrobert_"
      />
    </div>
  </div>
);

export default BusinessCard;
