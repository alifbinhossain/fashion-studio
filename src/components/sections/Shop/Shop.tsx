import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';

const Shop = () => {
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement?.offsetWidth;
    let tl = gsap.timeline();

    setTimeout(() => {
      tl.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App',
          scrub: true,
          pin: true,
          markers: true,
        },

        height: `${scrollingElement?.scrollWidth}px`,
        ease: 'none',
      });

      tl.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App',
          scrub: true,
          markers: true,
        },

        x: -pinWrapWidth,
        ease: 'none',
      });

      ScrollTrigger.refresh();
    }, 1000);
  }, []);

  return (
    <section
      ref={ref}
      className='relative min-h-screen w-screen mx-auto overflow-hidden flex justify-start items-start'
    >
      <h1
        className='absolute top-4 left-[5%] z-[11] text-white '
        data-scroll
        data-scroll-speed='-1'
      >
        New Arrivals
      </h1>

      <div className='sb w-[35%] bg-body min-h-screen fixed left-0 flex justify-center items-center'>
        <p className='sb w-[80%] mx-auto font-light text-lg'>
          The brand new collection is currently being developed in USA. We
          create our products using best quality material, including the use of
          some of the pure fabrics to make our products. All products are made
          using the best materials, from the finest cotton to the finest
          fabrics.
          <br />
          <br />
          We have lots of different clothing options like shoes, jackets and
          dresses. Not only clothes but we also provide unique Jewellery as
          well. It is great for us to carry our new clothes all around the
          country and look different.
        </p>
      </div>

      <div
        ref={horizontalRef}
        className='absolute left-[35%] pl-[30%] min-h-screen bg-gray-50
      flex justify-start items-center
      
      '
      >
        <h1 className='text-[5rem] my-0 mx-8'>img</h1>
        <h1 className='text-[5rem] my-0 mx-8'>img</h1>
        <h1 className='text-[5rem] my-0 mx-8'>img</h1>
        <h1 className='text-[5rem] my-0 mx-8'>img</h1>
        <h1 className='text-[5rem] my-0 mx-8'>img</h1>
        <h1 className='text-[5rem] my-0 mx-8'>img</h1>
        <h1 className='text-[5rem] my-0 mx-8'>img</h1>
        <h1 className='text-[5rem] my-0 mx-8'>img</h1>
      </div>
    </section>
  );
};

export default Shop;
