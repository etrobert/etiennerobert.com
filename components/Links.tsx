import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import InstagramIcon from './icons/InstagramIcon';
import IconLink from './IconLink';

const Links = () => (
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
);

export default Links;
