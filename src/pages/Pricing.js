import React from 'react';
import Banner from '../components/pages/Banner';
import PricingBody from '../components/pages/Pricing/PricingBody';

const Pricing = () => {
  return (
    <div>
      <Banner title={`Pricing`} />
      <PricingBody />
    </div>
  );
};

export default Pricing;
