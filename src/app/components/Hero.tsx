import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

export default function Hero() {
    const scrollTextRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);
    const h2Ref = useRef(null);
    const h3Ref = useRef(null);
    const h1Ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(h2Ref.current, 
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, duration: 1, opacity: 1, ease: "power1.out" }
        );
        gsap.fromTo(h3Ref.current, 
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, delay: 1, duration: 1, opacity: 1, ease: "power1.out" }
        );
        gsap.to(h1Ref.current, {
            text: "Welcome to my site!",
            delay: 2,
            duration: 2,
            ease: "power1.out",
            opacity: 1 
        });
    }, []);

    return (
        <>
            <div className="flex justify-center m-14 py-24 cursor-default">
                <div className="flex flex-col text-center">
                    <div ref={h2Ref}>
                        <h2 className="text-5xl font-bold mb-4">
                            Hi, I'm Steven
                        </h2>
                    </div>
                    <h3 ref={h3Ref} className="text-4xl mb-4">
                        Better known as <span className="border-b-2 border-black">MystiaFin</span>
                    </h3>
                    <h1 ref={h1Ref} className="text-7xl font-bold">
                    </h1>
                </div>
            </div>
            <div className="px-8 py-20 flex justify-end text-gray-500 scroll-text gap-3">
                <span ref={scrollTextRef}>scroll</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

            </div>
        </>
    )
}