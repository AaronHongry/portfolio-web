"use client";

import { motion } from "motion/react";

const NavBar = () => {

    const linksAppear = {
        hidden: { opacity: 0, y: -5},
        visible: { opacity: 1, y: 0}
    };

    return (
        <motion.div
        initial="hidden"
        animate="visible"
        transition={{staggerChildren: 0.3}}
        className="flex flex-row gap-4 px-56 items-center">
            <motion.img variants={linksAppear} className="w-10 h-10 mb-2" src="images/logo.gif"/>
            <div className="flex flex-row gap-4">
                <motion.a
                variants={linksAppear}
                href="https://www.linkedin.com/in/aaron-h-hong/" className="relative inline-block text-color before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-text before:transition-all before:duration-200 hover:before:w-full">LinkedIn</motion.a>
                <motion.a
                variants={linksAppear}
                href="https://github.com/AaronHongry" className="relative inline-block text-color before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-text before:transition-all before:duration-200 hover:before:w-full">Github</motion.a>    
            </div>
        </motion.div>
    );
}

export default NavBar;