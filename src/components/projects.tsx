"use client";

import { AnimatePresence } from "motion/react";
import Project from "./project";
import ProjectPop from "./projectPopup";
import { useState } from "react";

interface ProjectType {
    id: string,
    layoutCardId: string,
    name: string,
    description: string,
    bigText: string,
    langUsed: string[],
    picUrl: string
}

const Projects = () => {

    const [currentProject, setCurrentProject] = useState<ProjectType | null>(null);
 
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
            picUrl: "gamify.mp4"
        },
        {   
            id: "project-gamify1",
            layoutCardId: "project-card-gamify1",
            name: "Gamify Produictivity",
            description: "Use RPG Elements to Increase Productivity!",
            bigText: "",
            langUsed: [],
            picUrl: "placeholder.gif"
        },
        {   
            id: "project-gamify2",
            layoutCardId: "project-card-gamify2",
            name: "Gamify Produictivity",
            description: "Use RPG Elements to Increase Productivity!",
            bigText: "",
            langUsed: [],
            picUrl: "placeholder.gif"
        },
        {   
            id: "project-gamify3",
            layoutCardId: "project-card-gamify3",
            name: "Gamify Produictivity",
            description: "Use RPG Elements to Increase Productivity!",
            bigText: "",
            langUsed: [],
            picUrl: "placeholder.gif"
        },
        {   
            id: "project-gamify4",
            layoutCardId: "project-card-gamify4",
            name: "Gamify Produictivity",
            description: "Use RPG Elements to Increase Productivity!",
            bigText: "",
            langUsed: [],
            picUrl: "placeholder.gif"
        },
    ]

    return (
        <div className="">
            <div className="flex flex-row w-full card-background justify-center items-center px-56 flex-wrap py-6 gap-4 z-20">
                {projects.map((project) => (
                    <Project key={project.id} id={project.id} layoutCardId={project.layoutCardId} name={project.name} description={project.description} bigText={project.bigText} langUsed={project.langUsed} picUrl={project.picUrl} onClick={() => handleOpen(project)}/>
                ))}
            </div>
            <AnimatePresence>
                {currentProject && <ProjectPop layoutCardId={currentProject.layoutCardId} name={currentProject.name} description={currentProject.description} langUsed={currentProject.langUsed} bigText={currentProject.bigText} onClose={handleOnClose}/>}
            </AnimatePresence>
        </div>
        
    );
}

export default Projects;