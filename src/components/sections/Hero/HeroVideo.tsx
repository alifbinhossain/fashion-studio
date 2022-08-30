import React from 'react';
import { motion, Variants } from 'framer-motion';

const HeroVideo: React.FC = () => {
  const brandTitle = 'Blossom House.';

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
    },

    show: (i) => ({
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeInOut',
        delay: i * 0.3,
      },
    }),
  };

  return (
    <div className='w-full h-screen relative '>
      <div className='absolute top-0 bottom-0 left-0 right-0 z-[1] bg-bodyRgb bg-opacity-60'></div>

      <motion.div className='absolute top-0 bottom-0 left-0 right-0 z-[5] flex flex-col items-center justify-center'>
        <div className='text-center flex'>
          {brandTitle.split('').map((el, i) => {
            return (
              <motion.h1
                variants={itemVariants}
                initial='hidden'
                animate='show'
                custom={i}
                className='mr-1'
                key={i}
                data-scroll
                data-scroll-delay={(brandTitle.length - i + 1) / 9}
                data-scroll-speed='4'
              >
                {el}
              </motion.h1>
            );
          })}
        </div>

        <h2 data-scroll data-scroll-delay='0.04' data-scroll-speed='2'>
          Inspire. Create. Believe
        </h2>
      </motion.div>
      <video
        className='w-full h-screen object-cover'
        src='/assets/videos/hero-video.mp4'
        typeof='video/mp4'
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default HeroVideo;
