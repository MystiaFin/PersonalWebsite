import Image from 'next/image';
import Logo from '../assets/logo.svg';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';

const AboutMe = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current); // Unobserve if you only want to trigger once
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <Element name="about">
        <h3 className="font-bold text-xl md:text-3xl mb-6 text-center" id="about">
          About Me
        </h3>
        <Tilt className="Tilt" tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 m-6 max-w-4xl py-4 px-6 rounded-xl bg-white/30 backdrop-blur-md shadow-xl border mb-72">
            <Image src={Logo} alt="logo" className='w-sm'/>
            <div className="max-w-2xl flex items-center p-4 border-slate-800 text-base md:text-base lg:text-xl">
              I&apos;m a second-year Computer Science student in Indonesia and I&apos;ve been learning programming since 2 years ago. The language I started with was Pascal, then moved on to Python, C++, Java, and also web development utilizing HTML, CSS, and JavaScript.<br/>In addition, I&apos;ve been doing 3D rendering as a hobby for the past three years with software called Blender.
            </div>
          </div>
        </Tilt>
      </Element>
    </motion.div>
  );
}

export default AboutMe;
