"use client";

import { useState, useEffect } from "react"
import { motion } from "motion/react";

interface ProjectPopPros {
    layoutCardId: string,
    name: string,
    description: string,
    bigText: string,
    langUsed: string[],
    preview: React.ReactNode,
    onClose: () => void;
}

const ProjectPop: React.FC<ProjectPopPros> = ({layoutCardId, name, description, bigText, langUsed, preview, onClose}) => {

    const currentBigText = bigText.split("\n");

    const handleOnClose = () => {
        onClose();
    }

    return (
        <motion.div 
        initial={{backgroundColor: "#00000000", backdropFilter: "blur(0px)", boxShadow: "0 10px 30px rgba(0, 0, 0, 0)"}}
        animate={{backgroundColor: "#00000011", backdropFilter: "blur(3px)", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"}}
        exit={{backgroundColor: "#00000000", backdropFilter: "blur(0px)", boxShadow: "0 10px 30px rgba(0, 0, 0, 0)"}}
        className="fixed inset-0 flex items-center justify-center z-50" onClick={handleOnClose}>
            <motion.div
            layoutId={layoutCardId} 
            className="flex flex-row w-5/6 h-2/3 background py-8 px-8 overflow-hidden rounded-sm shadow-xl" 
            onClick={(e) => e.stopPropagation()}>
                <motion.div className="flex flex-col w-1/3 gap-12 pr-12 text-wrap">
                    <div className="flex flex-col gap-2">
                        <motion.h1 initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3}} className="text-3xl font-bold">{name}</motion.h1>
                        <motion.h2 initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.4}} className="text-xl font-semibold text-slate-500">{description}</motion.h2>  
                    </div>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}} className="flex flex-col gap-6">
                        {currentBigText.map((line, index) => (
                            <p key={`line.${Date.now()}.${index}`} className="text-md font-semibold text">{line}</p>
                        ))}
                    </motion.div>
                    
                    <motion.p initial={{x: -10, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 0.6}} className="text-sm font-semibold p-color"><i>Check out the website by clicking on the video!</i></motion.p>

                    <div className="flex flex-col gap-2">
                        <motion.h1 initial={{y: -5, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.7}} className="text-md font-bold">Frameworks / Languages Used:</motion.h1>
                        <div className="grid grid-cols-3 gap-2 justify-items-center">
                            {langUsed.map((lang, index) => (
                                <motion.p initial={{x: -5, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 0.8 + (0.1 * index)}} key={`lang.${Date.now()}.${index}`} className={`${index % 3 < 2 ? "border-r-2" : ""} col-span-1 w-full text-center`}>{lang}</motion.p>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div className="flex flex-col w-2/3 items-center justify-center">
                    {preview}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default ProjectPop;