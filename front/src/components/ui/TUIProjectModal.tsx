import { useProjects } from "../context/projectContext";

export function ProjectModal() {
	const projectsCtx = useProjects();

	if (projectsCtx === null)
		return ;

	if (projectsCtx.active === null)
		return ;

	return (
		<div className="w-screen h-screen absolute top-0 left-0 flex items-center justify-center" onClick={() => projectsCtx.setActive(null)}>
			<div className="w-5/6 max-h-5/6 min-h-3/6 border-4 p-2 border-(--blue-purple) text-(--white) bg-(--black)">
			</div>
		</div>
	);
}
