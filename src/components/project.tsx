"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface ProjectProps {
    id: string,
    layoutCardId: string,
    name: string,
    description: string,
    bigText: string,
    langUsed: string[],
    picUrl: string,
    preview: React.ReactNode,
    onClick: () => void;
}

const Project: React.FC<ProjectProps> = ({layoutCardId, name, description, picUrl, onClick}) => {

    return (
        <div className="relative">
            <motion.div
            layoutId={layoutCardId}
            whileHover={{ scale: 1.05, transition: {ease: "backOut"}}}
            transition={{ease: "anticipate", duration: 0.5}}
            className={`relative flex flex-col w-72 h-72 rounded-xl overflow-hidden transition-shadow shadow-md hover:shadow-2xl`}
            onClick={onClick}>
                <motion.div initial={{opacity: 0}} whileHover={{opacity: 0.1}} className="absolute w-full h-full bg-white z-20"/>
                <motion.div className="h-2/3">
                    {/*picUrl.split(".").pop() == "mp4"
                    ? (
                        <video src={`images/${picUrl}`} muted loop autoPlay playsInline className="w-full h-full object-cover"/>
                    ) 
                    : (
                        <Image alt={`${name} Picture`} width={288} height={216} src={`/images/${picUrl}`} />
                    )*/}
                    < Image alt={"name"} width={288} height={216} src={`/images/placeholder.gif`}/>
                </motion.div>
                <motion.div className="flex flex-col h-1/3 background justify-center px-3 gap-2 py-3">
                    <h1 className="text-lg font-semibold">{name}</h1>
                    <p className="text-sm text-gray-700">{description}</p>
                </motion.div>
            </motion.div>
        </div>
        
    );    
} 

export default Project;
