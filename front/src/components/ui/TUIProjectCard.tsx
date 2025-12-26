import { useProjects } from '../context/projectContext';
import { Badge } from './TUIBadge';

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
				className='w-full relative h-full flex flex-col'
				onClick={() => {projectsCtx.setActive(1)}}
			>
				<p>{project.id > 9 ? project.id : "0"+project.id}. {project.title}</p>
				<div className='absolute right-0 bottom-0 flex gap-1'>{project.badges.split(',').map((b) => { return <Badge>{b}</Badge> })}</div>
			</div>
		</div>
	)
}
