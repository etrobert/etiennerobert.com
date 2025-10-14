import BusinessCardText from './BusinessCardText';
import Portrait from './Portrait';

const BusinessCard = () => (
  <div
    className={
      'flex h-full flex-col place-content-center place-items-center ' +
      'lg:flex-row-reverse lg:gap-24'
    }
  >
    <Portrait />
    <BusinessCardText />
  </div>
);

export default BusinessCard;
