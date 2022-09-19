import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const ScrollTriggerProxy = () => {
  const { scroll } = useLocomotiveScroll();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el;

      scroll.on('scroll', ScrollTrigger.update);

      ScrollTrigger.scrollerProxy('.smooth-scroll', {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: element.style.transform ? 'transform' : 'fixed',
      });
    }

    return () => {
      ScrollTrigger.addEventListener('refresh', () => scroll?.update());
      ScrollTrigger.refresh();
    };
  }, [scroll]);

  return null;
};

export default ScrollTriggerProxy;
