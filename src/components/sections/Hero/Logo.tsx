import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  const strokeVariants = {
    hidden: {
      strokeWidth: 0,
      strokeOpacity: 0,
    },
    visible: {
      strokeWidth: 5,
      strokeOpacity: 1,
      transition: {
        duration: 0.7,
        delay: 1,
        ease: 'easeInOut',
      },
    },
  };

  const textVariant = {
    hidden: {
      x: -40,
      opacity: 0,
    },
    visible: {
      x: 5,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className='absolute top-4 left-4 w-full z-[5]'>
      <Link href='/'>
        <div className='cursor-pointer flex items-center'>
          <svg width='48' height='48' viewBox='-100 -100 200 200'>
            <defs>
              <motion.path
                variants={strokeVariants}
                initial='hidden'
                animate='visible'
                id='branch'
                d='
        M 0 0 L 0 -90
        M 0 -20 L 20 -34
        M 0 -20 L -20 -34
        M 0 -40 L 20 -54
        M 0 -40 L -20 -54
        M 0 -60 L 20 -74
        M 0 -60 L -20 -74'
                stroke='#fff'
              />
            </defs>

            <use href='#branch' />
            <use href='#branch' transform='rotate(60)' />
            <use href='#branch' transform='rotate(120)' />
            <use href='#branch' transform='rotate(180)' />
            <use href='#branch' transform='rotate(240)' />
            <use href='#branch' transform='rotate(300)' />
          </svg>

          <motion.h4
            variants={textVariant}
            initial='hidden'
            animate='visible'
            className='text-xl'
          >
            BH.
          </motion.h4>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
