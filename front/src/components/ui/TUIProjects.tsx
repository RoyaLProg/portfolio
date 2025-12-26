import { useNav } from "../context/navContext";
import { SmallScreenProjectCard } from "./TUISmallScreenProjectCard";
import { ContentContainer } from "./TUIContentContainer";
import { ProjectsContextProvider } from "../context/projectContext";
import { ProjectModal } from "./TUIProjectModal";
import { ProjectCard } from "./TUIProjectCard";

export function Projects() {
	const navCtx = useNav()

	if (navCtx === null) return ;
	
	const show = navCtx.active === 'Projects';

	return (
		<ProjectsContextProvider>
			<ContentContainer show={show}>
				<div className="w-full">
					<div className="w-full">
						<p className="text-(--blue-purple) leading-none mb-4">
							<span className="blink">▄▄▄</span><br />
							<span className="blink">███</span>&nbsp;&nbsp;&nbsp;▄▖&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▘&nbsp;&nbsp;&nbsp;&nbsp;▗&nbsp;&nbsp;&nbsp;<br />
							<span className="blink">███</span>&nbsp;&nbsp;&nbsp;▙▌▛▘▛▌&nbsp;▌█▌▛▘▜▘▛▘<br />
							<span className="blink">███</span>&nbsp;&nbsp;&nbsp;▌&nbsp;▌&nbsp;▙▌&nbsp;▌▙▖▙▖▐▖▄▌<br />
							<span className="blink">▀▀▀</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▙▌&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
						</p>
					</div>
					{ /* little screens */ } 
					<div className="md:hidden w-full">
						<SmallScreenProjectCard />
						<SmallScreenProjectCard />
						<SmallScreenProjectCard />
						<SmallScreenProjectCard />
						<SmallScreenProjectCard />
					</div>
					{ /* normal to big screens */ }
					<div className="hidden md:flex flex-wrap w-content mt-12 gap-4 mx-auto">
						<ProjectCard />
						<ProjectCard />
						<ProjectCard />
						<ProjectCard />
						<ProjectCard />
						<ProjectCard />
						<ProjectCard />
						<ProjectCard />
						<ProjectCard />
					</div>
				</div>
			</ContentContainer>
			<ProjectModal />
		</ProjectsContextProvider>
	)
}
