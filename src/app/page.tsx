"use client"

import { motion, useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";
import NavBar from "@/components/navbar";
import Intro from "@/components/intro";
import AboutMe from "@/components/about";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export default function Home() {

	const [show, setShow] = useState(false);
	
	const projectRef = useRef(null);
	const inProjectView = useInView(projectRef, {once: true, margin: "-150px"});

	useEffect(() => {
		const waitToShow = setTimeout(() => {
			setShow(true);
		}, 1600);

		return () => {
			clearTimeout(waitToShow);
		}
	}, []);

	return (
		<div className={`${show ? "" : "overflow-y-hidden"} w-screen h-screen pt-12 overflow-x-hidden`}>
			<NavBar />
			<Intro />
			<motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 1.6}} className="flex flex-col items-center mb-6">
				<h1 className="max-lg:text-3xl text-4xl font-bold">About Me</h1>
			</motion.div>
			<AboutMe />
			<motion.div
			initial={{ opacity: 0, y: 20}}
			animate={inProjectView ? { opacity: 1, y: 0} : {}}
			ref={projectRef} className="flex flex-col items-center my-6 mt-16">
				<h1 className="max-lg:text-3xl text-4xl font-bold">Projects</h1>
			</motion.div>
			<Projects />
			<Footer />
		</div>
	);
}
