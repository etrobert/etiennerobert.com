import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import InstagramIcon from './icons/InstagramIcon';
import { title } from '../app/fonts';
import JustifiedText from './JustifiedText';
import IconLink from './IconLink';

const BusinessCardText = () => (
  <div className="text-[1.5rem] lg:text-[2rem]">
    <h1 className={`text-[2em] tracking-tight leading-none ${title.className}`}>
      Étienne Robert
    </h1>
    <JustifiedText className={'text-[0.79em] leading-tight'}>
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
);

export default BusinessCardText;
