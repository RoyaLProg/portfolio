import { useNav } from "../context/navContext";
import { ContentContainer } from "./TUIContentContainer";
export function Skills() {
	const navCtx = useNav()

	if (navCtx === null) return ;
	
	const show = navCtx.active === 'Skills';

	return (
		<ContentContainer show={show}>
		</ContentContainer>
	)
}
