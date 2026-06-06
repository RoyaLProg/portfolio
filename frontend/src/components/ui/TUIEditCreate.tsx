import { useState, useEffect } from "react"
import { type Project } from "@/libs/interfaces";

interface TUIEditCreateProps { 
	project?: Project
}

const defautProject: Project = {
	title: "",
	description: "",
	links: [],
	images: [],
}


export function TUIEditCreate(props: TUIEditCreateProps) {
	const [project, _setProject] = useState<Project>(props.project ?? {...defautProject})

	useEffect(() => {
		const project = localStorage.getItem('project');
		if (props.project) {
			if (project) return // send prompt saying that continuing will delete previously openend project
			setProject(props.project);
			return ;
		}
		if (project) return // send prompt asking if they'd like to load the project yes -> load / no -> discard localstorage
	}, []);

	function setProject(data: Project) {
		localStorage.setItem('project', JSON.stringify(data));

		_setProject(data);
	}

	function save() {
		// call api...
	
		localStorage.removeItem("project");
	}
	

	return (
		<div className="flex grow flex-col">
			<div>
				<p> Title </p>
				<input type="text" className="border-(--gutter-grey) border-1 w-full"/>
			</div>
			<div>
				<p> Description </p>
				{ /* TODO: add markdown support */ }
				<textarea className="border-(--gutter-grey) border-1" cols={80} rows={20}/>
			</div>
			{/* <p> {JSON.stringify(project)} </p> */}
		</div>
	);
}

