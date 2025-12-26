import { useState } from 'react'
import { Badge } from './TUIBadge';

export function SmallScreenProjectCard() {
	const [open, setOpen] = useState(false);
	
	const project = {
		id: 1,
		title: 'Test Name',
		badges: 'web,typescript',
		description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
		links: {web: "https://royalprog.fr", gihub: "https://github.com/RoyaLProg/portfolio"}
	}
	
	return (
		<div className={`mx-auto w-11/12 mt-4 border-4 p-2 ${open ? "border-(--purple)" : "border-(--blue-purple)"} text-(--white)`}>
			<div className={`${open ? 'h-content' : 'h-8'} flex flex-col overflow-y-hidden color-gray`} onClick={() => setOpen(!open)} >
				<div className='h-8 flex justify-between items-center shrink-0'>	
					<p>{ project.id > 10 ? project.id : '0'+project.id }. {project.title}</p>
					<div className='flex gap-2 self-end'>
						{ 
							project.badges.split(',').map((b) => {
								return (<Badge>{b}</Badge>);
							})
						}
					</div>
				</div>
				<div className='w-full break-all'>
					{project.description}
					{Object.values(project.links)}
				</div>
			</div>
		</div>
	);
}
