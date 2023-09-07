import Link from 'next/link';
import styles from './BusinessCard.module.scss';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import InstagramIcon from './icons/InstagramIcon';

const BusinessCard = () => (
  <div className={styles.container}>
    <h1 className={styles.heading}>Étienne Robert</h1>
    <div className={styles.links}>
      <Link target="_blank" href="https://github.com/etrobert">
        <GithubIcon />
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/etienne-robert-dev/"
      >
        <LinkedinIcon />
      </Link>
      <Link target="_blank" href="https://www.instagram.com/etrobert_">
        <InstagramIcon />
      </Link>
    </div>
  </div>
);

export default BusinessCard;
