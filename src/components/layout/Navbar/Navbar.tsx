import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Link from 'next/link';

const items = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'About', href: '/' },
  { id: 3, title: 'Shop', href: '/' },
  { id: 4, title: 'New Arrivals', href: '/' },
];

const Navbar: React.FC = () => {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <motion.nav
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 2,
        delay: 2,
        ease: 'backOut',
      }}
      className={clsx(
        ' absolute top-0 flex  justify-center items-center w-screen z-[6] transition-all duration-[300] ease-in ',
        collapse ? 'h-[14rem] lg:h-[5rem]' : 'h-0 '
      )}
    >
      <motion.ul
        drag='y'
        dragConstraints={{
          top: 0,
          bottom: 70,
        }}
        dragElastic={0.05}
        dragTransition={{
          bounceStiffness: 400,
          bounceDamping: 20,
        }}
        dragSnapToOrigin
        className={clsx(
          'relative h-full w-full px-20 lg:px-40  bg-body bg-opacity-75 text-white flex flex-col lg:flex-row justify-around items-center gap-y-4 lg:gap-y-0 transition-[padding] duration-800 ease-in',
          collapse ? 'py-8 lg:py-0' : 'p-0'
        )}
      >
        <button
          onClick={() => setCollapse((current) => !current)}
          className='absolute top-full left-1/2 -translate-x-1/2 btn-navbar'
        >
          Menu
        </button>

        {items.map((item) => (
          <Link key={item.id} href={item.href}>
            <motion.li
              whileHover={{
                scale: 1.1,
                y: -4,
              }}
              whileTap={{
                scale: 0.9,
                y: 0,
              }}
              className={clsx(
                'uppercase text-white transition-opacity duration-1000 ease-in-out',
                collapse ? 'opacity-100' : 'opacity-0'
              )}
            >
              {item.title}
            </motion.li>
          </Link>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
