import { useNav } from "../context/navContext";
import { ContentContainer } from "./TUIContentContainer";

export function ContactMe() {
	const navCtx = useNav()

	if (navCtx === null) return ;
	
	const show = navCtx.active === 'ContactMe';

	return (
		<ContentContainer show={show}>
			<div className="w-full">
				<div className="w-full">
					<p className="text-(--blue-purple) leading-none">
						<span className="blink">▄▄▄</span><br />
						<span className="blink">███</span>&nbsp;&nbsp;&nbsp;▄▖&nbsp;&nbsp;&nbsp;&nbsp;▗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▗&nbsp;&nbsp;&nbsp;▖&nbsp;&nbsp;▖&nbsp;&nbsp;<br />
						<span className="blink">███</span>&nbsp;&nbsp;&nbsp;▌&nbsp;▛▌▛▌▜▘▀▌▛▘▜▘&nbsp;&nbsp;▛▖▞▌█▌<br />
						<span className="blink">███</span>&nbsp;&nbsp;&nbsp;▙▖▙▌▌▌▐▖█▌▙▖▐▖&nbsp;&nbsp;▌▝&nbsp;▌▙▖<br />
						<span className="blink">▀▀▀</span><br />
					</p>
				</div>
			</div>
		</ContentContainer>
	)
}
