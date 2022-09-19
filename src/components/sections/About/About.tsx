import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id='fixed-target'
      className='bg-white relative min-h-screen w-[80vw] 
    flex flex-col lg:flex-row  gap-x-4
    mx-auto 
    '
    >
      <h1
        className=' text-black font-light absolute top-4 left-[5%] z-[5]'
        data-scroll
        data-scroll-speed='-2'
        data-scroll-direction='horizontal'
      >
        About Us
      </h1>

      <div
        className='w-full  lg:w-1/2 relative z-[5] mt-24 md:mt-36 lg:mt-48 mb-8  lg:mb-0'
        data-scroll
        data-scroll-sticky
        data-scroll-target='#fixed-target'
      >
        <p className='text-body text-base lg:text-lg'>
          We're fashion studio based in california. We create unique designs
          that will blow your mind. We also design unique jewellary pieces.
          Fashion is an ART that can not be grasped by everyone.
          <br />
          <br />
          We are very dedicated to making our products. We offer unique and
          creative products to a wide range of people. We have a variety of
          styles, but for most people, all of the options are in the box. We
          specialize in making things that make you happy.
          <br />
          <br />
          We strive to build on our vision. As a fashion label, we do our best
          to create amazing experiences for all people. We are always looking to
          make something that is easy for everyone.
        </p>
      </div>
      <div className=' w-[60%] mx-auto lg:mx-0 lg:w-1/2 relative'>
        <img
          className='w-full h-auto'
          src='/assets/images/about-1.webp'
          alt=''
        />
        <img
          data-scroll
          data-scroll-speed='5'
          className='w-[40%] h-auto absolute right-[80%] lg:right-[95%] bottom-[40%] lg:bottom-[10%]'
          src='/assets/images/about-2.webp'
          alt=''
        />
        <img
          data-scroll
          data-scroll-speed='-2'
          className='w-[40%] h-auto absolute left-[80%] bottom-[10%]'
          src='/assets/images/about-3.webp'
          alt=''
        />
      </div>
    </section>
  );
};

export default About;
