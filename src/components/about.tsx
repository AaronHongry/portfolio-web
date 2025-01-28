"use client"

import { motion, useSpring, AnimatePresence } from "motion/react";
import { useEffect, useState, } from "react";


const AboutMe = () => {
    const [csIcons, setCsIcons] = useState(false);
    const [tiktokIcon, setTiktokIcon] = useState(false);

    const [tikCount, setTikCount] = useState(0);

    const tikSpring = useSpring(0, {bounce: 0, duration: 3000});

    const imageFade = {
        hidden: {opacity: 0, translateY: 10},
        visible: {opacity: 1, translateY: 0}
    };

    const imageSlide = {
        hidden: {opacity: 0, translateX: -100, transition: {ease: "backOut"}},
        visible: {opacity: 1, translateX: 0, transition: {ease: "backOut", duration: 0.3}}
    }

    useEffect(() => {
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
        cycleIcons();

        return () => {
            isActive = false;
            tikSpring.set(0);
        };
    }, []);

    useEffect(() => {
        
    }, [tiktokIcon]);

    tikSpring.on('change', (value) => {
        setTikCount(Math.round(value));
    });

    return (
        <div className="flex flex-row w-full card-background">
            <div className="flex flex-col pl-56 pr-28 py-12 gap-4 w-7/12">
                <p className="text-lg font-semibold">My name is Aaron Hong and I'm from <span className="p-color font-bold text-xl">Toronto, Ontario!</span></p>
                <p className="text-lg font-semibold">I'm currently a 5th Year <span className="p-color font-bold text-xl">Computer Science</span> Student, and an aspiring <span className="p-color font-bold text-xl">Full-Stack Developer.</span></p>
                <p className="text-lg font-semibold">Proficient in <span className="p-color font-bold text-xl">Typescript, Python</span> and <span className="p-color font-bold text-xl">Java.</span> I love using <span className="p-color font-bold text-xl">React</span> and <span className="p-color font-bold text-xl">NextJS </span>to build web apps!</p>
            
                <div></div>
                <div></div>
                <p className="text-lg font-semibold">I used to be a Content Creator primarily making short-form video content.</p>
                <div></div>
                <div></div>
                <p className="text-lg font-semibold">Feel free to message me on <a href="https://www.linkedin.com/in/aaron-h-hong/" className="text-xl font-bold relative inline-block p-color before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-p before:transition-all before:duration-200 hover:before:w-full">LinkedIn!</a> I love connecting with people!</p>
            </div>
            <div className="flex flex-col text-center w-5/12 h-full pr-56">
                <AnimatePresence>
                    {csIcons &&
                    <motion.div 
                    initial="hidden"
                    animate="visible"
                    exit={{opacity: 0, y: 10, transition: {ease: "backIn", duration: 0.4} }}
                    transition={{staggerChildren: 0.1}}
                    className="flex flex-row gap-16 justify-center items-center h-96">
                        <motion.img
                        variants={imageFade}
                        animate={{y: [-10, 10]}}
                        transition={{y: {repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut"}}}
                        className="w-32 h-32 drop-shadow-xl" src="images/typescript.png"/>
                        <motion.img
                        variants={imageFade}
                        animate={{y: [-10, 10]}}
                        transition={{y: {repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut", delay: 0.1}}}
                        className="w-32 h-32 drop-shadow-xl" src="images/react.png"/>
                        <motion.img
                        variants={imageFade}
                        animate={{y: [-10, 10]}}
                        transition={{y: {repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut", delay: 0.2}}}
                        className="w-32 h-32 drop-shadow-xl" src="images/nextjs.png"/>
                    </motion.div>}
                    {tiktokIcon &&
                    <motion.div
                    initial="hidden"
                    animate="visible"
                    exit={{opacity: 0, y: 10, transition: {ease: "backIn", duration: 0.4} }}
                    className="flex flex-col justify-center items-center gap-8 h-96">
                        <motion.div
                        variants={imageSlide}
                        animate={{y: [-10, 10]}}
                        transition={{y: {repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut", delay: 0.2}}}>
                            <div className="grid grid-cols-8 gap-3 justify-start">
                                <p className="text-7xl font-bold p-color col-span-5 text-right">{tikCount}</p>
                                <p className="text-7xl font-bold p-color col-span-3">K+</p>
                            </div>
                            <p className="text-2xl font-semibold">Followers</p>
                        </motion.div>
                        <motion.div 
                        initial="hidden"
                        animate="visible"
                        transition={{staggerChildren: 0.1}}
                        className="flex flex-row gap-16 justify-center items-center">
                            <motion.img
                            variants={imageFade}
                            animate={{y: [-10, 10]}}
                            transition={{y: {repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut"}}}
                            className="w-24 h-24 drop-shadow-xl" src="images/tiktok.png"/>
                            <motion.img
                            variants={imageFade}
                            animate={{y: [-10, 10]}}
                            transition={{y: {repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut", delay: 0.1}}}
                            className="w-24 h-24  drop-shadow-xl" src="images/youtube.png"/>
                            <motion.img
                            variants={imageFade}
                            animate={{y: [-10, 10]}}
                            transition={{y: {repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut", delay: 0.2}}}
                            className="w-24 h-24  drop-shadow-xl" src="images/twitch.png"/>
                    </motion.div>
                    </motion.div>}
                </AnimatePresence>
            </div>
        </div>
        
    );
}

export default AboutMe;