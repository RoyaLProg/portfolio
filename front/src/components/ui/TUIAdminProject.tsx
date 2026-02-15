import { ContentContainer } from "./TUIContentContainer";
import { useNav } from "../context/navContext";
import { useEffect } from "react";
import figlet from "figlet";
import big from "figlet/fonts/Big";
import { Trash2, Edit, View, Plus} from "lucide-react";

export function AdminProjects() {
	const navCtx = useNav();

	useEffect(() => {
		const titleDiv = document.getElementById('title');

		if (!titleDiv) return ;

		figlet.parseFont('Big', big)
		const text = figlet.textSync(
			"Projects",
			{font: "Big"},
		);

		const els = text.replaceAll(' ', '&nbsp;').split('\n').map((s) => `<p>${s}</p>`)

		titleDiv.innerHTML = els.reduce((s1,s2) => s1 += '\n' + s2);
	}, []);

	if (navCtx === null) return ;

	return (
		<ContentContainer
			show={navCtx.active === "Projects"}
			className="md:flex-grow md:m-0 text-(--white) md:border-0 w-full md:mr-8"
		>
			<div className="flex gap-8 flex-col items-center w-full">
				<div id="title" className="text-(--cyan)"></div>
				<div className="w-full flex flex-col gap-8">
					<button className="border-2 border-(--green) text-(--green) justify-center w-full h-16 flex items-center p-2 hover:text-(--black) hover:bg-(--green)">
						<Plus /> Add New Project
					</button>
					<div className="border-2 border-(--gutter-fg-grey) w-full h-16 flex justify-between items-center p-2">
						<p> 1. Project Title </p>
						<div className="flex gap-2">
							<button><View /></button>
							<button><Edit /></button>
							<button className="text-(--red)"><Trash2 /></button>
						</div>
					</div>
					<div className="border-2 border-(--gutter-fg-grey) w-full h-16 flex justify-between items-center p-2">
						<p> 2. Project Title </p>
						<div className="flex gap-2">
							<button><View /></button>
							<button><Edit /></button>
							<button className="text-(--red)"><Trash2 /></button>
						</div>
					</div>
					<div className="border-2 border-(--gutter-fg-grey) w-full h-16 flex justify-between items-center p-2">
						<p> 3. Project Title </p>
						<div className="flex gap-2">
							<button><View /></button>
							<button><Edit /></button>
							<button className="text-(--red)"><Trash2 /></button>
						</div>
					</div>
					<button className="border-2 border-(--green) text-(--green) justify-center w-full h-16 flex items-center p-2 hover:text-(--black) hover:bg-(--green)">
						<Plus /> Add New Project
					</button>
				</div>
			</div>
		</ContentContainer>
	)
}
