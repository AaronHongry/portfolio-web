import NavBar from "@/components/navbar";
import Intro from "@/components/intro";
import AboutMe from "./about";

export default function Home() {
	return (
		<div className="w-screen h-screen py-12 overflow-x-hidden">
			<NavBar />
			{/* <Intro /> */}
			<div className="flex flex-col items-center mb-6">
				<h1 className="text-4xl font-bold">About Me</h1>
			</div>
			<AboutMe />
		</div>
	);
}
