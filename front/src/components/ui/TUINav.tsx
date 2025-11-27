import { NavItem } from "./TUINavItem";

export function NavBar(): JSX.Element {
	return (
		<nav id='nav' className='mx-auto flex justify-around w-11/12 md:justify-around gap-2 flex-col md:flex-row'>
			<NavItem name='Projects' title="01. Projects" subtext="What did I do ?" />
			<NavItem name='Skills' title="02. Skills" subtext="What can I do ?" />
			<NavItem name='ContactMe' title="03. Contact me" subtext="Where to find me ?" />
		</nav>
	);
}
