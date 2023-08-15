import React from 'react';
import Banner from '../components/pages/Home/Banner';
import Cards from '../components/pages/Home/Cards';
import GymInfo from '../components/pages/Home/GymInfo';
import GymClasses from '../components/pages/Home/GymClasses';
import ChooseUs from '../components/pages/Home/ChooseUs';
import Testimonials from '../components/pages/Home/Testimonials';
import BMI from '../components/pages/Home/BMI';
import Pricing from '../components/pages/Home/Pricing';

const Home = ({ classes }) => {
  return (
    <>
      <Banner />
      <Cards />
      <GymInfo />
      <GymClasses gymClasses={classes} />
      <ChooseUs />
      <Testimonials />
      <BMI />
      <Pricing />
    </>
  );
};

export default Home;
