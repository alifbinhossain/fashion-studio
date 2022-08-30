import About from '@components/sections/About/About';
import Hero from '@components/sections/Hero/Hero';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};
export default Home;
