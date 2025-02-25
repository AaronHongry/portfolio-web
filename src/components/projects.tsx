"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import Project from "./project";
import ProjectPop from "./projectPopup";
import { useState, useRef } from "react";
import GamifyPreview from "./previews/gamify-preview";
import ValentinePreview from "./previews/valentine-preview";
import HSRChatroomPreview from "./previews/hsrchatroom-preview";

interface ProjectType {
    id: string,
    layoutCardId: string,
    name: string,
    description: string,
    bigText: string,
    langUsed: string[],
    picUrl: string,
    preview: React.ReactNode
}

const Projects = () => {

    const [currentProject, setCurrentProject] = useState<ProjectType | null>(null);

    const containerRef = useRef(null);
    const inContainerView = useInView(containerRef, {once: true, margin: "-100px"});
 
    const projectRef = useRef(null);
    const isInView = useInView(projectRef, {once: true, margin: "-10px"});

    const handleOpen = (project: ProjectType) => {
        setCurrentProject(project);
    }

    const handleOnClose = () => {
        setCurrentProject(null);
    }

    const projects: ProjectType[] = [
        {   
            id: "project-hsrchatroom",
            layoutCardId: "project-card-hsrchatroom",
            name: "HSR: Interactive Chat Room",
            description: "Honkai: Star Rail Interactive Real-Time Messenger!",
            bigText: `A Honkai: Star Rail themed messenger! Allows for the creation of chatrooms with real-time chatting between characters.
            Messages are kept in real-time with Express and Socket.IO and chat rooms are maintained using PostgreSQL backend and cached locally.`,
            langUsed: ["HTML/CSS", "Javascipt", "Typescript", "React", "Next", "Express", "Socket.IO", "PostgreSQL"],
            picUrl: "hsrchatroom.mp4",
            preview: <HSRChatroomPreview />
        },
        {   
            id: "project-valentine",
            layoutCardId: "project-card-valentine",
            name: "Pocket TCG - Valentine's Day",
            description: "Open a Booster Pack for Valentine's Day!",
            bigText: `Valentine's Day card but made to be opened like a Pokemon Booster Pack! Heavily inspired by Pokemon - Pocket TCG.
            Created entirely using CSS and Motion for animation and to practice building mnobile games with React states.`,
            langUsed: ["HTML/CSS", "Javascipt", "Typescript", "React", "Next", "Motion"],
            picUrl: "valentine.mp4",
            preview: <ValentinePreview/>
        },
        {   
            id: "project-gamify",
            layoutCardId: "project-card-gamify",
            name: "Gamify Productivity",
            description: "Use RPG Elements to Build Better Habits!",
            bigText: `Inspired by Notion Life Gamification by Soft Wagner, this full-stack application aims to help users pick up healthy habits by incoperating familiar game elements into every to-do lists.
            Create tasks, gain XP, level up, and spend XP to reward yourself and promote productivity!`,
            langUsed: ["HTML/CSS", "Javascipt", "Typescript", "React", "Next"],
            picUrl: "gamify.mp4",
            preview: <GamifyPreview />
        },        
    ]

    return (
        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={inContainerView ? {opacity: 1, y: 0} : {}}
        ref={containerRef}>
            <div ref={projectRef} className="flex lg:flex-row flex-col w-full card-background justify-center items-center lg:px-56 px-8 flex-wrap py-6 gap-4 z-20">
                {projects.map((project, index) => (
                    <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={isInView ? {opacity: 1, x: 0} : {}}
                    transition={{delay: 0.1 * index}}
                    key={project.id}>
                        <Project key={project.id} id={project.id} layoutCardId={project.layoutCardId} name={project.name} description={project.description} bigText={project.bigText} langUsed={project.langUsed} picUrl={project.picUrl} preview={project.preview} onClick={() => handleOpen(project)}/>
                    </motion.div>
                ))}
            </div>
            <AnimatePresence>
                {currentProject && <ProjectPop layoutCardId={currentProject.layoutCardId} name={currentProject.name} description={currentProject.description} langUsed={currentProject.langUsed} bigText={currentProject.bigText} preview={currentProject.preview} picUrl={currentProject.picUrl} onClose={handleOnClose}/>}
            </AnimatePresence>
        </motion.div>
        
    );
}

export default Projects;