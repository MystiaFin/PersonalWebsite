import { Element } from "react-scroll";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);


export default function Hero() {
    const scrollTextRef = useRef<HTMLSpanElement>(null);
    const h2Ref = useRef<HTMLDivElement>(null);
    const h3Ref = useRef<HTMLHeadingElement>(null);
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const svgIconRef = useRef<SVGSVGElement>(null);
    const mystiaFinRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(h2Ref.current, 
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, duration: 1, opacity: 1, ease: "power1.out" }
        )
        .fromTo(h3Ref.current, 
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, duration: 1, opacity: 1, ease: "power1.out" }
        )
        .fromTo(mystiaFinRef.current?.lastElementChild as HTMLElement,
            { width: 0 },
            { width: '100%', duration: 0.5, ease: "power1.out" }
        )
        .to(h1Ref.current, {
            text: "Welcome to my site!",
            duration: 2,
            ease: "power1.out",
            opacity: 1 
        })
        .fromTo(svgIconRef.current, 
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
        );

        // Typing loop animation for scroll text
        const scrollTextTimeline = gsap.timeline({repeat: -1, repeatDelay: 1});
        scrollTextTimeline.to(scrollTextRef.current, {
            duration: 2,
            text: "scroll",
            ease: "none",
        }).to(scrollTextRef.current, {
            duration: 1,
            text: "",
            ease: "none",
        });

        tl.add(scrollTextTimeline);

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                gsap.to([scrollTextRef.current, svgIconRef.current], { opacity: 0, duration: 0.5 });
            } else {
                gsap.to([scrollTextRef.current, svgIconRef.current], { opacity: 1, duration: 0.5 });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Element name="home" className="flex justify-center m-14 py-24 cursor-default" id='home'>
                <div className="flex flex-col text-center">
                    <div ref={h2Ref}>
                        <h2 className="text-5xl font-bold mb-4">
                            Hi, I&apos;m Steven
                        </h2>
                    </div>
                    <h3 ref={h3Ref} className="text-4xl mb-4">
                        Better known as <span ref={mystiaFinRef} className="relative inline-block">
                            <span className="mystia-fin">MystiaFin</span>
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black"></span>
                        </span>
                    </h3>
                    <h1 ref={h1Ref} className="text-7xl font-bold">
                    </h1>
                </div>
            </Element>
            <div className="px-8 py-20 flex justify-end text-gray-500 scroll-text gap-3">
                <span ref={scrollTextRef} className="font-source-code"></span>
                <svg ref={svgIconRef} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </>
    );
}