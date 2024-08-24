"use client"
import React, { useEffect } from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import './globals.css';
import AboutMe from './components/AboutMe';

export default function Home() {
    useEffect(() => {


        const handleMouseMove = (e: MouseEvent) => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className='sticky top-0 z-20'>
                <Navbar />
            </div>
            <div className='relative z-10'>
                <Hero/>
                <AboutMe/>
            </div>
        </>
    );
}