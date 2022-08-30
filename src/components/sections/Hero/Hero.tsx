import React from 'react';
import HeroVideo from './HeroVideo';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className='relative min-h-screen overflow-hidden'>
      <HeroVideo />
      <Logo />
    </section>
  );
};

export default Hero;
