import { ContentContainer } from "./TUIContentContainer";
import { useNav } from "../context/navContext";
import { Plus, Trash2 } from "lucide-react";
import { useEffect } from "react";
import figlet from "figlet";
import big from "figlet/fonts/Big";

export function AdminSkills() {
	const navCtx = useNav();

	if (navCtx === null) return ;
	if (navCtx.active !== "Skills") return ;

	useEffect(() => {
		const titleDiv = document.getElementById('skilltitle');

		if (!titleDiv) return ;

		figlet.parseFont('Big', big)
		const text = figlet.textSync(
			"Skills",
			{font: "Big"},
		);

		const els = text.replaceAll(' ', '&nbsp;').split('\n').map((s) => `<p>${s}</p>`)

		titleDiv.innerHTML = els.reduce((s1,s2) => s1 += '\n' + s2);
	}, []);


	return (
		<ContentContainer
			show={navCtx.active === "Skills"}
			className="md:flex-grow md:m-0 text-(--white) md:border-0 w-full md:mr-8"
		>
			<div className="flex gap-8 flex-col items-center w-full">
				<div id="skilltitle" className="text-(--cyan)"></div>
				<div className="w-full flex flex-col gap-8">
					<button className="border-2 border-(--green) text-(--green) justify-center w-full h-16 flex items-center p-2 hover:text-(--black) hover:bg-(--green)">
						<Plus /> Add New Categorie
					</button>
					<div className="border-2 border-(--gutter-fg-grey) p-2">
						<h1 className="text-center text-xl">Category title</h1>
						<div className="flex flex-col items-center gap-2 p-2">
							<div className="border-2 w-full grid grid-cols-4 items-center p-2">
								<p>1. Skill</p>
								<div className="flex">
									<input type="checkbox" />
									<p>percentage</p>
								</div>
								<p>48%</p>
								<div className="justify-self-end w-content h-content">
									<button className="text-(--red) border-(--red) border hover:text-(--black) hover:bg-(--red) p-2"><Trash2 size={16}/></button>
								</div>
							</div>
							<div className="border-2 w-full grid grid-cols-4 items-center p-2">
								<p>2. Skill</p>
								<div className="flex">
									<input type="checkbox" />
									<p>percentage</p>
								</div>
								<p>48%</p>
								<div className="justify-self-end w-content h-content">
									<button className="text-(--red) border-(--red) border hover:text-(--black) hover:bg-(--red) p-2"><Trash2 size={16}/></button>
								</div>
							</div>
							<button className="border-2 border-(--green) text-(--green) justify-center w-full flex items-center p-2 hover:text-(--black) hover:bg-(--green)">
								<Plus /> Add New Skill
							</button>
						</div>
					</div>
					<button className="border-2 border-(--green) text-(--green) justify-center w-full h-16 flex items-center p-2 hover:text-(--black) hover:bg-(--green)">
						<Plus /> Add New Categorie
					</button>
				</div>
			</div>
		</ContentContainer>
	)
}
