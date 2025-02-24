import { motion } from "motion/react";

const ValentinePreview = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full">
            <motion.img initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1}} src="images/valentine-1.png" className="absolute"/>
            <motion.img initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1.1}} src="images/valentine-2.png" className="absolute"/> 
            <motion.img initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1.2}} src="images/valentine-3.png" className="absolute"/>     
        </div>
    );
}

export default ValentinePreview;