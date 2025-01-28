"use client"

import { motion, useAnimate } from "motion/react";
import { useEffect, useState } from "react";


const Intro = () => {

    const [tagMessage, setTagMessage] = useState("");
    const [tagScope, animateTag] = useAnimate();
    const [pfpScope, animatePfp] = useAnimate();

    useEffect(() => {
        let isActive = true;

        animatePfp(pfpScope.current, {
            translateX: [-10, 10, 10, -10, -10],
            translateY: [10, -10, 10, -10, 10],
            rotate: [-2, 2, -2, 2, -2]
        }, {
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
        });
        

        const messages = [
            {text: "Full-Stack Web Developer", delay: 2500},
            {text: "Software Engineer", delay: 2500},
            {text: "Content Creator", delay: 2500},
            {text: "Connect with Me!", delay: 2500},
        ];

        const cycleMessages = async () => {
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
        };
    }, []);

    return (
        <div className="flex flex-row gap-2 h-4/5 px-56">
            <div className="flex flex-col py-32 w-1/2">
                <div className="flex flex-col gap-3 pt-8">
                    <h1 className="text-5xl font-bold">Hi there!</h1>
                    <div className="flex flex-row gap-3">
                        <h1 className="text-7xl font-bold">I'm</h1>
                        <h1 className="text-7xl font-bold p-color">Aaron Hong</h1>
                    </div>
                </div>
                
                <motion.div ref={tagScope} className="flex flex-row gap-3 items-baseline pt-32 w-full">
                    <h1 className={`${tagMessage == "Connect with Me!" && 'animate-bounce p-color'} text-5xl font-bold`}>{tagMessage}</h1>{tagMessage == "Content Creator" && <h1 className="text-2xl font-bold s-color">{`(On break !!)`}</h1>}
                </motion.div>
            </div>

            <div className="flex flex-col gap-3 pt-8 w-1/2 justify-start items-center">
                <motion.img whileHover={{scale: 1.1}} whileTap={{scale: 1.05}} ref={pfpScope} src="images/pfp.png" className="w-3/4"/>
            </div>
        </div>
        
    );
}

export default Intro;