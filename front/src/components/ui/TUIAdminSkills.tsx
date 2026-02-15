import { ContentContainer } from "./TUIContentContainer";
import { useNav } from "../context/navContext";

export function AdminProjects() {
	const navCtx = useNav();

	if (navCtx === null) return ;

	return (
		<ContentContainer
			show={navCtx.active === "Skills"}
			className="md:flex-grow md:m-0 text-(--white) md:border-0 w-full md:mr-8"
		>
		</ContentContainer>
	)
}
