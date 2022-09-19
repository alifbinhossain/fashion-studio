import About from '@components/sections/About/About';
import Hero from '@components/sections/Hero/Hero';
import Shop from '@components/sections/Shop/Shop';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Shop />
    </>
  );
};
export default Home;
