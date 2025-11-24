// import { HeroSection } from "@/components/hero-section";

import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Stats } from "@/components/stats";
import { Technologies } from "@/components/technologies";

export default function Home() {
	return (
		<div className="flex flex-col items-center min-h-screen py-2">
			{/* <HeroSection /> */}
			<Hero />
			<Stats />
			<Services />
			<Technologies />
			{/* <Projects /> */}
			<CTA />
			<Footer />
		</div>
	);
}
