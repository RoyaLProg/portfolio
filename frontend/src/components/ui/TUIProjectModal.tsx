import { useProjects } from "../context/projectContext";
import { useCallback, useEffect, useRef, useState } from "react";
import figlet from "figlet";
import big from "figlet/fonts/Big";
import Image from "@/assets/aFoolMoonNight.jpeg";
import { LinkButton } from "./TUILinkButton";

export function ProjectModal() {
	const projectsCtx = useProjects();
	const titleRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState<boolean>(false);

	useEffect(() => {
		ProjectTitle();
	}, [titleRef.current]);

	const onScroll = useCallback((e: React.UIEvent<HTMLDivElement, UIEvent>) => {
		const target = e.currentTarget;

		if (target.scrollTop + target.offsetHeight >= target.scrollHeight - 30)
			setVisible(false);
		else
			setVisible(true);
	}, []);

	if (projectsCtx === null || projectsCtx.active === null) return ;

	function ProjectModalClose() {
		return (
			<button
				className="text-(--dark-red) bg-(--light-red) p-1 cursor-pointer self-end fixed"
				onClick={() => projectsCtx?.setActive(null)}
			>
				x
			</button>
		)
	}

	function ProjectTitle() { 
		if (!titleRef.current)
			return
		figlet.parseFont('Big', big)
		const text = figlet.textSync(
			"That's a title !",
			{font: "Big"},
		);

		const els = text.replaceAll(' ', '&nbsp;').split('\n').map((s) => `<p>${s}</p>`)

		titleRef.current.innerHTML = els.reduce((s1,s2) => s1 += '\n' + s2);
	}

	return (
		<div 
			onClick={() => projectsCtx.setActive(null)}
			className="w-screen h-screen absolute top-0 left-0 flex items-center justify-center fixed"
		>
			<div className="relative w-5/6 flex flex-col max-h-5/6 border-4 p-2 border-(--blue) text-(--white) bg-(--black) z-2" onClick={(e) => {e.stopPropagation()}}>
				<ProjectModalClose />
				<div 
					onScroll={onScroll}
					onLoad={onScroll}
					className="w-full flex flex-col items-center overflow-y-scroll p-10"
				>
					<div ref={titleRef} className="leading-none text-(--cyan)"/>
					<div className="w-180">
						<img src={Image} />
					</div>
					<div className="mt-5 text-justify">
						<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
						</p>
						<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
						</p>
						<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
						</p>
					</div>
					<div className="flex w-full mt-5">
						<div className="flex grow text-center gap-4 flex-col">
							<p className="tui-title">Screenshots</p>
							<div className="grid w-full">
								<img src={Image} />
								<img src={Image} />
								<img src={Image} />
								<img src={Image} />
								<img src={Image} />
								<img src={Image} />
								<img src={Image} />
							</div>
						</div>
						<div className="flex grow text-center gap-4 flex-col">
							<p className="tui-title">Links</p>
							<div className="flex w-full flex-col gap-4">
								<LinkButton><p>test</p></LinkButton>
								<LinkButton variant="github"><p>test</p></LinkButton>
								<LinkButton variant="website"><p>test</p></LinkButton>
							</div>
						</div>
					</div>
				</div>
				<div className={`${visible ? "flex" : "hidden"} absolute bottom-0 w-full justify-center bg-(--black)`}>--- more ---</div>
			</div>
		</div>
	);
}
