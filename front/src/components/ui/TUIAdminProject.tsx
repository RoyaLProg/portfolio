import { ContentContainer } from "./TUIContentContainer";
import { useNav } from "../context/navContext";
import { useEffect } from "react";
import figlet from "figlet";
import big from "figlet/fonts/Big";

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
			className="md:flex-grow md:m-8 md:ml-0 text-(--white)"
		>
			<div className="flex flex-col items-center">
				<div id="title" className="text-(--cyan)"></div>
				<div>
					<p>Here will be procject list with commands</p>
				</div>
			</div>
		</ContentContainer>
	)
}
