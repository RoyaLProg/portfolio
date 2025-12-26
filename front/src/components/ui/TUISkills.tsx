import { useNav } from "../context/navContext";
import { ContentContainer } from "./TUIContentContainer";

export function Skills() {
	const navCtx = useNav()

	if (navCtx === null) return ;
	
	const show = navCtx.active === 'Skills';

	return (
		<ContentContainer show={show}>
			<div className="w-full flex flex-col gap-4">
				<div className="w-full">
					<p className="text-(--blue-purple) leading-none">
						<span className="blink">▄▄▄</span><br />
						<span className="blink">███</span>&nbsp;&nbsp;&nbsp;▄▖▌&nbsp;▘▜&nbsp;▜&nbsp;&nbsp;&nbsp;<br />
						<span className="blink">███</span>&nbsp;&nbsp;&nbsp;▚&nbsp;▙▘▌▐&nbsp;▐&nbsp;▛▘<br />
						<span className="blink">███</span>&nbsp;&nbsp;&nbsp;▄▌▛▖▌▐▖▐▖▄▌<br />
						<span className="blink">▀▀▀</span><br />
					</p>
				</div>
				<div className="w-full gap-8 p-4 grid grid-cols-2 justify-around md:text-xl md:flex md:flex-col md:flex-row">
					<div className="text-(--green) text-center w-full">
						<h1 text-center>TEST</h1>
						<ul className="p-4 border-l-1 border-(--green) list-inside list-disc text-left">
							<li> test </li>
							<li> test </li>
							<li> test </li>
							<li> test </li>
							<li> test </li>
							<li> test </li>
						</ul>
					</div>
					<div className="text-(--blue) w-full text-center">
						<h1>TEST</h1>
						<ul className="border-l-1 border-(--blue) p-4 list-inside list-disc text-left">
							<li> test </li>
							<li> test </li>
							<li> test </li>
							<li> test </li>
							<li> test </li>
							<li> test </li>
						</ul>
					</div>
					<div className="text-(--yellow) w-full text-center">
						<h1 text-center>TEST</h1>
						<ul className="list-inside p-4 list-disc border-(--yellow) border-l-1 text-left">
							<li> test </li>
							<li> test </li>
							<li> test </li>
							<li> test </li>
							<li> test </li>
							<li> test </li>
						</ul>
					</div>
					<div className="w-full text-(--red) text-center">
						<h1 text-center>TEST</h1>
						<ul className="border-l-1 border-(--red) p-4 list-inside list-disc text-left">
							<li> test </li>
							<li> test </li>
							<li> test </li>
							<li> test </li>
							<li> test </li>
							<li> test </li>
						</ul>
					</div>
				</div>
			</div>
		</ContentContainer>
	)
}
