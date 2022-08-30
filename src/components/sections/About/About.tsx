import React from 'react';

const About: React.FC = () => {
  return (
    <div
      className='bg-white relative min-h-screen w-[80vw] overflow-hidden
    flex
    
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

      <div className='sb w-1/2'>Text</div>
      <div className='sb w-1/2'>Images</div>
    </div>
  );
};

export default About;
