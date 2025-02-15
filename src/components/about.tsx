"use client"

import { motion, useSpring, AnimatePresence, useInView} from "motion/react";
import { useEffect, useState, useRef } from "react";


const AboutMe = () => {
    const [csIcons, setCsIcons] = useState(false);
    const [tiktokIcon, setTiktokIcon] = useState(false);

    const [tikCount, setTikCount] = useState(0);

    const tikSpring = useSpring(0, {bounce: 0, duration: 3000});

    const [isMobile, setIsMobile] = useState(false);
    
        

    const textRef = useRef(null);
    const isInView = useInView(textRef, {once: true, margin: "-80px"});

    const imageFade = {
        hidden: {opacity: 0, translateY: 10},
        visible: {opacity: 1, translateY: 0}
    };

    const imageSlide = {
        hidden: {opacity: 0, translateX: -100, transition: {ease: "backOut"}},
        visible: {opacity: 1, translateX: 0, transition: {ease: "backOut", duration: 0.3}}
    }

    useEffect(() => {
        if (isInView) {
            let isActive = true;

            const cycleIcons = async () => {
                while (isActive) {
                    setCsIcons(true);
                    await new Promise((resolve) => setTimeout(resolve, 4000));
                    setCsIcons(false);
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    setTiktokIcon(true);
                    tikSpring.set(200);
                    await new Promise((resolve) => setTimeout(resolve, 4000));
                    setTiktokIcon(false);
                    tikSpring.set(0);
                    await new Promise((resolve) => setTimeout(resolve, 500));
                }
            }  

            const fadeUp = setTimeout(() => {
                cycleIcons();
            }, 200);
            return () => {
                clearTimeout(fadeUp);
                isActive = false;
                tikSpring.set(0);
            };
        }
        
    }, [isInView]);

    useEffect(() => {
        const isClient = typeof window !== undefined;
        if (isClient) {
            setIsMobile(window.innerWidth < 1024);
        }
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    tikSpring.on('change', (value) => {
        setTikCount(Math.round(value));
    });

    return (
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 1.6}} className="flex lg:flex-row flex-col-reverse w-full card-background max-lg:px-12">
            <motion.div className="flex flex-col lg:pl-56 lg:pr-28 py-12 gap-4 lg:w-7/12 w-full">
                <div className="relative overflow-hidden w-fit">
                    <motion.div initial={{left: 0}} animate={isInView ? {left: "100%"} : {}} transition={{duration: 0.5, ease: "easeOut", delay: 0.1}} className="absolute z-30 a-bg top-1 bottom-1 right-0 left-0"/>
                    <p className="text-lg font-semibold">{`My name is Aaron Hong and I'm from `}<span className="p-color font-bold text-xl">Toronto, Ontario!</span></p>
                </div>
                
                <div className="relative overflow-hidden w-fit">
                    <motion.div initial={{left: 0}} animate={isInView ? {left: "100%"} : {}} transition={{duration: 0.5, ease: "easeOut", delay: 0.2}} className="absolute z-30 a-bg top-1 bottom-1 right-0 left-0"/>
                    <p className="text-lg font-semibold">{`I'm currently a 5th Year `}<span className="p-color font-bold text-xl">Computer Science</span> Student, and an aspiring <span className="p-color font-bold text-xl">Full-Stack Developer.</span></p>
                </div>
                <div className="relative overflow-hidden w-fit">
                    <motion.div initial={{left: 0}} animate={isInView ? {left: "100%"} : {}} transition={{duration: 0.5, ease: "easeOut", delay: 0.3}} className="absolute z-30 a-bg top-1 bottom-1 right-0 left-0"/>
                    <p className="text-lg font-semibold">Proficient in <span className="p-color font-bold text-xl">Typescript, Python</span> and <span className="p-color font-bold text-xl">Java.</span> I love using <span className="p-color font-bold text-xl">React</span> and <span className="p-color font-bold text-xl">NextJS </span>to build web apps!</p>
                </div>
                <div></div>
                <div></div>
                <div className="relative overflow-hidden w-fit">
                    <motion.div ref={textRef} initial={{left: 0}} animate={isInView ? {left: "100%"} : {}} transition={{duration: 0.5, ease: "easeOut", delay: 0.4}} className="absolute z-30 a-bg top-1 bottom-1 right-0 left-0"/>
                    <p className="text-lg font-semibold">I used to be a Content Creator primarily making short-form video content.</p>
                </div>
                <div></div>
                <div></div>
                <div className="relative overflow-hidden w-fit">
                    <motion.div initial={{left: 0}} animate={isInView ? {left: "100%"} : {}} transition={{duration: 0.5, ease: "easeOut", delay: 0.5}} className="absolute z-30 a-bg top-1 bottom-1 right-0 left-0"/>
                    <p className="text-lg font-semibold">Feel free to message me on <a href="https://www.linkedin.com/in/aaron-h-hong/" target="_blank" className="text-xl font-bold relative inline-block p-color before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-p before:transition-all before:duration-200 hover:before:w-full">LinkedIn!</a> I love connecting with people!</p>
                </div>
            </motion.div>
            
            <motion.div className="flex flex-col text-center lg:w-5/12 w-full lg:pr-56">
                <AnimatePresence>
                    {csIcons && !isMobile &&
                    <motion.div 
                    initial="hidden"
                    animate="visible"
                    exit={{opacity: 0, y: 10, transition: {ease: "backIn", duration: 0.4} }}
                    transition={{staggerChildren: 0.1}}
                    className="flex flex-row lg:gap-16 gap-8 justify-center items-center lg:h-96 h-56">
                        <motion.img
                        variants={imageFade}
                        animate={{y: [-10, 10]}}
                        transition={{y: {repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut"}}}
                        className="lg:w-32 lg:h-32 w-16 h-16 drop-shadow-xl" src="images/typescript.png"/>
                        <motion.img
                        variants={imageFade}
                        animate={{y: [-10, 10]}}
                        transition={{y: {repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut", delay: 0.1}}}
                        className="lg:w-32 lg:h-32 w-16 h-16 drop-shadow-xl" src="images/react.png"/>
                        <motion.img
                        variants={imageFade}
                        animate={{y: [-10, 10]}}
                        transition={{y: {repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut", delay: 0.2}}}
                        className="lg:w-32 lg:h-32 w-16 h-16 drop-shadow-xl" src="images/nextjs.png"/>
                    </motion.div>}
                    {tiktokIcon && !isMobile &&
                    <motion.div
                    initial="hidden"
                    animate="visible"
                    exit={{opacity: 0, y: 10, transition: {ease: "backIn", duration: 0.4} }}
                    className="flex flex-col justify-center items-center gap-8 lg:h-96 h-56">
                        <motion.div
                        variants={imageSlide}
                        animate={{y: [-10, 10]}}
                        transition={{y: {repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut", delay: 0.2}}}>
                            <div className="grid grid-cols-8 gap-3 justify-start">
                                <p className="lg:text-7xl text-6xl font-bold p-color col-span-5 text-right">{tikCount}</p>
                                <p className="lg:text-7xl text-6xl font-bold p-color col-span-3">K+</p>
                            </div>
                            <p className="text-2xl font-semibold">Followers</p>
                        </motion.div>
                        <motion.div 
                        initial="hidden"
                        animate="visible"
                        transition={{staggerChildren: 0.1}}
                        className="flex flex-row lg:gap-16 gap-8 justify-center items-center">
                            <motion.img
                            variants={imageFade}
                            animate={{y: [-10, 10]}}
                            transition={{y: {repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut"}}}
                            className="lg:w-24 lg:h-24 w-12 h-12 drop-shadow-xl" src="images/tiktok.png"/>
                            <motion.img
                            variants={imageFade}
                            animate={{y: [-10, 10]}}
                            transition={{y: {repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut", delay: 0.1}}}
                            className="lg:w-24 lg:h-24 w-12 h-12 drop-shadow-xl" src="images/youtube.png"/>
                            <motion.img
                            variants={imageFade}
                            animate={{y: [-10, 10]}}
                            transition={{y: {repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut", delay: 0.2}}}
                            className="lg:w-24 lg:h-24 w-12 h-12 drop-shadow-xl" src="images/twitch.png"/>
                    </motion.div>
                    </motion.div>}
                </AnimatePresence>
            </motion.div>
        </motion.div>
        
    );
}

export default AboutMe;