import 'remixicon/fonts/remixicon.css';
import Tilt from 'react-parallax-tilt';
import { Element } from 'react-scroll';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
      <Element name='contact' className="bg-gray-800 text-white p-8 py-20" id='contact'>
        <h1 className="text-center text-3xl font-bold mb-20">Contact Me!</h1>

        <div className="flex flex-wrap justify-center gap-6">
          <Tilt className="flex flex-col items-center gap-4 p-4 rounded-xl bg-white/30 backdrop-blur-md shadow-xl border border-white/20" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
            <a href="https://github.com/MystiaFin" className="flex flex-col items-center">
              <i className="ri-github-fill text-3xl md:text-6xl"></i>
              <p className="text-xl mt-2">MystiaFin</p>
            </a>
          </Tilt>
          <Tilt className="flex flex-col items-center gap-4 p-4 rounded-xl bg-white/30 backdrop-blur-md shadow-xl border border-white/20" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
            <a href="https://www.instagram.com/stvnzey/" className="flex flex-col items-center">
              <i className="ri-instagram-line text-3xl md:text-6xl"></i>
              <p className="text-base md:text-xl mt-2">@stvnzey</p>
            </a>
          </Tilt>
          <Tilt className="flex flex-col items-center gap-4 p-4 rounded-xl bg-white/30 backdrop-blur-md shadow-xl border border-white/20" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
            <a href="#" className="flex flex-col items-center">
              <i className="ri-discord-fill text-3xl md:text-6xl"></i>
              <p className="text-base mt-2">@mxtchayeaz</p>
            </a>
          </Tilt>
          <Tilt className="flex flex-col items-center gap-4 p-4 rounded-xl bg-white/30 backdrop-blur-md shadow-xl border border-white/20" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
            <a href="mailto:cytrsx01@gmail.com" className="flex flex-col items-center">
              <i className="ri-mail-fill text-3xl md:text-6xl"></i>
              <p className="text-base mt-2">Email Me</p>
            </a>
          </Tilt>
        </div>
      <Footer/> 
      </Element>
    </>
  );
};

export default Contact;
