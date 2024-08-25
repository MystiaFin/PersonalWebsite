import React, { useEffect, useRef, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

const Projects: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
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
            <Tilt className="Tilt" tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1}>
                <Element name='projects' className='flex justify-center mb-80' id='projects'>
                    <div className="gap-12 flex flex-row justify-center items-center p-4 px-8 rounded-2xl bg-gradient-to-r from-white/30 to-gray-100/30 backdrop-blur-md shadow-2xl border border-gray-300 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                        <div className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 lg:w-40">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                            </svg>
                            <div className="text-3xl font-bold text-gray-800">
                                Projects
                            </div>
                        </div>
                        <div className='text-xs lg:text-3xl flex flex-col gap-8'>
                            <ul className='list-none'>
                                <li className='py-4'>
                                    <a 
                                        href="https://github.com/MystiaFin/redpost" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className='border-slate-800 border-b-2 selection:none text-left block'
                                    >
                                        2024 - RedPost
                                    </a>
                                </li>
                                <li className='py-4'>
                                    <a 
                                        href="https://github.com/MystiaFin/redpost" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className='border-slate-800 border-b-2 selection:none text-left block'
                                    >
                                        2024 - Portfolio Website
                                    </a>
                                </li>
                                <li className='py-4'>
                                    <a 
                                        href="https://www.instagram.com/p/C2ox06trJRv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className='border-slate-800 border-b-2 selection:none text-left block'
                                    >
                                        2024 - 3D Cyberpunk Alleyway
                                    </a>
                                </li>
                                <li className='py-4'>
                                    <a 
                                        href="https://www.instagram.com/p/CtOaudCBdqm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className='border-slate-800 border-b-2 selection:none text-left block'
                                    >
                                        2023 - 3D Office Interior
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Element>
            </Tilt>
        </motion.div>
    );
};

export default Projects;
