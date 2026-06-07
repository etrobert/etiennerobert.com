import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import InstagramIcon from './icons/InstagramIcon';
import IconLink from './IconLink';

const Links = () => (
  <div className="flex justify-center gap-[5vw]">
    <IconLink
      label="Github Profile"
      text="Github"
      href="https://github.com/etrobert"
      icon={<GithubIcon />}
    />
    <IconLink
      label="Linkedin Profile"
      text="LinkedIn"
      href="https://www.linkedin.com/in/etienne-robert-dev/"
      icon={<LinkedinIcon />}
    />
    <IconLink
      label="Instagram Profile"
      text="Instagram"
      href="https://www.instagram.com/thesoft.emperor"
      icon={<InstagramIcon />}
    />
  </div>
);

export default Links;
