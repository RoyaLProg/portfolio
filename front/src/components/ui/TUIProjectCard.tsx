import { useProjects } from '../context/projectContext';

export function ProjectCard() {
	const projectsCtx = useProjects();

	if (!projectsCtx) return ;

	const project = {
		id: 1,
		title: 'Test Name',
		badges: 'web,typescript',
		description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
		links: {web: "https://royalprog.fr", gihub: "https://github.com/RoyaLProg/portfolio"}
	}

	return (
		<div className="w-64 shrink-0 h-64 border-4 p-2 border-(--blue-purple) text-(--white)">
			<div
				className='w-full h-full flex flex-col'
				onClick={() => {projectsCtx.setActive(1)}}
			>
				<p>{project.id > 9 ? project.id : "0"+project.id}. {project.title}</p>
			</div>
		</div>
	)
}
