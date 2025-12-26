import { useNav } from "../context/navContext";
export function Projects() {
	const navCtx = useNav()

	if (navCtx === null) return ;
	
	const show = navCtx.active === 'Projects';

	return (
		<ProjectsContextProvider>
		</ProjectsContextProvider>
	)
}
