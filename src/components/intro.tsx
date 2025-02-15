"use client"

import { motion, useAnimate } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";


const Intro = () => {

    const [tagMessage, setTagMessage] = useState("");
    const [tagScope, animateTag] = useAnimate();
    const [pfpScope, animatePfp] = useAnimate();
    const [startHand, setStartHand] = useState(false);


    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const isClient = typeof window !== undefined;
        if (isClient) {
            setIsMobile(window.innerWidth < 1024);
        }

        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener("resize", handleResize);

        let isActive = true;
        let picDelay = 1.8;
        if (isMobile) {
            picDelay = 0.3;
        }

        const hand = setTimeout(() => {
            setStartHand(true);
        }, 900);
        animatePfp(pfpScope.current, {
            translateX: [-10, 10, 10, -10, -10],
            translateY: [10, -10, 10, -10, 10],
            rotate: [-2, 2, -2, 2, -2]
        }, {
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: picDelay
        });
        
        const messages = [
            {text: "Full-Stack Web Developer", delay: 2500},
            {text: "Software Engineer", delay: 2500},
            {text: "Content Creator", delay: 2500},
            {text: "Connect with Me!", delay: 2500},
        ];

        const cycleMessages = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1600));
            while (isActive) {
                for (const i of messages) {
                    if (!isActive) break;
                    setTagMessage(i.text);
                    await animateTag(tagScope.current, {opacity: [0, 1], translateY: [20, 0]} );
                    await new Promise((resolve) => setTimeout(resolve, i.delay));
                    await animateTag(tagScope.current, {translateY: [0, 20], opacity: [1, 0]}, {duration: 0.1});   
                }
            }
        };

        cycleMessages();

        return () => {
            isActive = false;
            clearTimeout(hand);
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <div className="flex flex-col-reverse lg:flex-row lg:gap-2 gap-1 lg:h-4/5 lg:px-56 px-5">
            <div className="flex flex-col lg:py-32 py-12 lg:w-1/2 w-full">
                <div className="flex flex-col lg:gap-3 lg:pt-8 max-lg:items-center">
                    <div className="flex flex-row items-baseline gap-3">
                        <motion.h1 initial={{opacity: 0, x: -10}} animate={{opacity: 1, x: 0}} transition={{ease: "easeOut", delay: 0.5}} className="lg:text-5xl text-3xl font-bold ">Hi there!</motion.h1>
                        <motion.h1 initial={{scale: 0}} animate={{scale: 1, y: -12}} transition={{ease: "backOut", duration: 0.3, delay: 0.6}} className={`${startHand ? "animate-bounce" : ""} lg:text-5xl text-4xl font-bold drop-shadow-md`}>👋</motion.h1>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row lg:gap-3">
                        <motion.h1 initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} transition={{ease: "easeOut", duration: 0.5, delay: 0.9}} className="lg:text-7xl text-4xl font-bold max-lg:hidden">{`I'm`}</motion.h1>
                        <motion.h1 initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} transition={{ease: "easeOut", delay: 1.2}} className="lg:text-7xl text-5xl font-bold p-color max-lg:pt-8">Aaron Hong</motion.h1>
                    </div>
                </div>
                
                <motion.div ref={tagScope} className="flex flex-row max-lg:justify-center max-lg:min-h-28 gap-3 items-baseline lg:pt-32 pt-3 w-full">
                    <h1 className={`${tagMessage == "Connect with Me!" && 'animate-bounce p-color'} lg:text-5xl text-2xl font-bold`}>{tagMessage}</h1>{tagMessage == "Content Creator" && <h1 className="lg:text-2xl text-md font-bold s-color">{`(On break !!)`}</h1>}
                </motion.div>
            </div>

            <motion.div initial={{scale: 0.3, opacity: 0}} animate={isMobile ? {scale: 1, opacity: 1, transition: {opacity: {delay: 0.8}, scale: {delay: 0.65}}} : {scale: 1, opacity: 1, transition: {opacity: {delay: 1.8}, scale: {delay: 1.7}}}} transition={{ease:"backOut"}} className="flex flex-col lg:pt-8 lg:w-1/2 max-lg:h-1/6 lg:justify-center items-center">
                <motion.div transition={{ease: "backOut"}} whileHover={{scale: 1.1}} whileTap={{scale: 1.05}} ref={pfpScope} className="h-full w-full flex justify-center"><Image width={365} height={346} alt="Me" src="/images/pfp.webp" className="lg:w-3/4 lg:h-3/4 max-lg:h-1/2 max-lg:max-w-96 object-contain"/></motion.div>
            </motion.div>
        </div>
        
    );  
}

export default Intro;