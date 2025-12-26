import { useNav } from "../context/navContext";

interface NavItemProps {
	title: string,
	subtext: string,
	name: string,
}

export function NavItem(props: NavItemProps) {
	const navCtx = useNav();

	if (navCtx === null) return ;
	
	const { active, setActive } = navCtx;

	return (
		<div 
			className={`${active === props.name ? "bg-(--purple) text-(--black) border-(--purple)" : "text-(--blue) border-(--gutter-fg-grey)"} flex border-4 p-2 justify-between md:justify-left md:p-4 w-full md:block md:w-84 text-left hover:bg-(--purple) hover:text-(--black) hover:border-(--purple)`}
			onClick={() => setActive(props.name)}
		>
			<p className="inline md:block">{props.title}</p>
			<p className="inline md:block text-(--comment-grey)">{props.subtext}</p>
		</div>
	);
}
