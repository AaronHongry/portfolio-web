import { motion } from "motion/react";

const HSRChatroomPreview = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full">
            <motion.img initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1}} src="images/hsrchatroom-1.png" className="absolute"/>     
        </div>
    );
}

export default HSRChatroomPreview;