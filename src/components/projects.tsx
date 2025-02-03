"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import Project from "./project";
import ProjectPop from "./projectPopup";
import { useState, useRef } from "react";
import GamifyPreview from "./previews/gamify-preview";

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
    const isInView = useInView(projectRef, {once: true, margin: "-200px"});

    const handleOpen = (project: ProjectType) => {
        setCurrentProject(project);
    }

    const handleOnClose = () => {
        setCurrentProject(null);
    }

    const projects: ProjectType[] = [
        {   
            id: "project-gamify",
            layoutCardId: "project-card-gamify",
            name: "Gamify Productivity",
            description: "Use RPG Elements to Build Better Habits!",
            bigText: `Inspired by Notion Life Gamification by Soft Wagner, this website aims to make users pick up healthy habits by incoperating familiar game elements into every to-do lists.
            Create tasks, gain XP, level up, and spend XP to reward yourself and promote productivity!`,
            langUsed: ["HTML/CSS", "Javascipt", "Typescript", "React", "Next"],
            picUrl: "gamify.mp4",
            preview: <GamifyPreview />
        },
        {   
            id: "project-gamify1",
            layoutCardId: "project-card-gamify1",
            name: "Gamify Produictivity",
            description: "Use RPG Elements to Increase Productivity!",
            bigText: "",
            langUsed: [],
            picUrl: "placeholder.gif",
            preview: <></>
        },
        {   
            id: "project-gamify2",
            layoutCardId: "project-card-gamify2",
            name: "Gamify Produictivity",
            description: "Use RPG Elements to Increase Productivity!",
            bigText: "",
            langUsed: [],
            picUrl: "placeholder.gif",
            preview: <></>
        },
        
    ]

    return (
        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={inContainerView ? {opacity: 1, y: 0} : {}}
        ref={containerRef}>
            <div ref={projectRef} className="flex md:flex-row flex-col w-full card-background justify-center items-center lg:px-56 px-8 flex-wrap py-6 gap-4 z-20">
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