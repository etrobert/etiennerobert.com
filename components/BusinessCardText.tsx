import { title } from '../app/fonts';
import JustifiedText from './JustifiedText';
import Links from './Links';

const BusinessCardText = () => (
  <div className="text-[1.5rem] lg:text-[2rem]">
    <h1 className={`text-[2em] tracking-tight leading-none ${title.className}`}>
      Étienne Robert
    </h1>
    <JustifiedText className={'text-[0.79em] leading-tight'}>
      Software Developer & Queer Creative
    </JustifiedText>
    <Links />
  </div>
);

export default BusinessCardText;
