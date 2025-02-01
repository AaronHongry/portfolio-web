import { motion } from "motion/react";

const GamifyPreview = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full">
            <motion.img initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1}} src="images/gamify-laptop.png" className="absolute"/>
            <motion.img initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1.1}} src="images/gamify-mobile.png" className="absolute z-10"/>      
        </div>
    );
}

export default GamifyPreview;