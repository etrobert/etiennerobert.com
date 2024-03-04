import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import InstagramIcon from './icons/InstagramIcon';
import { title } from '../app/fonts';
import JustifiedText from './JustifiedText';
import IconLink from './IconLink';
import Portrait from './Portrait';

const BusinessCard = () => (
  <div
    className={
      'flex flex-col place-content-center place-items-center h-full ' +
      'text-[1.5rem] lg:text-[2rem] lg:flex-row-reverse lg:gap-24'
    }
  >
    <Portrait />
    <div>
      <h1
        className={`text-[2.1em] tracking-tight leading-none ${title.className}`}
      >
        Étienne Robert
      </h1>
      <JustifiedText className={'text-[0.83em]'}>
        Software Developer & Queer Creative
      </JustifiedText>
      <div className={'flex justify-center gap-[5vw]'}>
        <IconLink href="https://github.com/etrobert" icon={<GithubIcon />} />
        <IconLink
          href="https://www.linkedin.com/in/etienne-robert-dev/"
          icon={<LinkedinIcon />}
        />
        <IconLink
          href="https://www.instagram.com/etrobert_"
          icon={<InstagramIcon />}
        />
      </div>
    </div>
  </div>
);

export default BusinessCard;
