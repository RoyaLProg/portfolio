import { ContentContainer } from "./TUIContentContainer";
import { useNav } from "../context/navContext";

export function AdminProjects() {
	const navCtx = useNav();

	if (navCtx === null) return ;

	return (
		<ContentContainer
			show={navCtx.active === "Danger Zone"}
			className="md:flex-grow md:m-8 md:ml-0 m-0"
		>
		</ContentContainer>
	)
}
