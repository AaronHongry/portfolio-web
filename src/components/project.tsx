"use client";

import { motion } from "motion/react";
import { useState } from "react";

interface ProjectProps {
    id: string,
    layoutCardId: string,
    name: string,
    description: string,
    bigText: string,
    langUsed: string[],
    picUrl: string,
    onClick: () => void;
}

const Project: React.FC<ProjectProps> = ({layoutCardId, name, description, picUrl, onClick}) => {

    return (
        <div className="relative">
            <motion.div
            layoutId={layoutCardId}
            initial={{filter:"brightness(1)"}}
            whileHover={{ scale: 1.05, filter:"brightness(1.2)", transition: {ease: "backOut"}}}
            transition={{ease: "anticipate", duration: 0.5}}
            className={`flex flex-col w-72 h-72 rounded-sm overflow-hidden transition-shadow shadow-md hover:shadow-2xl`}
            onClick={onClick}>
                <motion.div className="h-2/3">
                    {picUrl.split(".").pop() == "mp4"
                    ? (
                        <video src={`images/${picUrl}`} muted loop autoPlay className="w-full h-full object-cover"/>
                    ) 
                    : (
                        <img src={`images/${picUrl}`} />
                    )}
                    
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
