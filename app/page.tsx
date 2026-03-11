import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Publications from "@/components/Publications";

export default function Home() {
	return (
		<PageTransition>
			{/* Noise overlay */}
			<div
				className="fixed inset-0 pointer-events-none z-999 opacity-[0.25]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
				}}
			/>
			<Navbar />
			<main>
				<Hero />
				<Skills />
				<Experience />
				<Projects />
				<Certifications />
				<Publications />
			</main>
			<Footer />
		</PageTransition>
	);
}
