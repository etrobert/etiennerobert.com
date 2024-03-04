import BusinessCardText from './BusinessCardText';
import Portrait from './Portrait';

const BusinessCard = () => (
  <div
    className={
      'flex flex-col place-content-center place-items-center h-full ' +
      'lg:flex-row-reverse lg:gap-24'
    }
  >
    <Portrait />
    <BusinessCardText />
  </div>
);

export default BusinessCard;
