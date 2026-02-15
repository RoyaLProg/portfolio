import { useNav } from "../context/navContext"

interface AdminNavItemProps {
	name: string;
}

function AdminNavItem(props: AdminNavItemProps) {
	const navCtx = useNav()

	if (navCtx === null)
		return ;

	const isActive: boolean = navCtx.active === props.name;

	return (
		<div
			onClick={() => navCtx.setActive(props.name)}
			className={`p-4 w-full ${isActive ? (props.name === "Danger Zone" ? "bg-(--red) text-(--black)" : "bg-(--purple) text-(--black)") : ""}
				${props.name === "Danger Zone" ? "hover:bg-(--red)" : "hover:bg-(--purple)"} hover:text-(--black)`}
		>
			{props.name}
		</div>	
	);
}

function ComputerNav() {
	return (
		<div className="h-screen hidden md:flex w-78 border-(--gutter-fg-grey) flex-col border-r-2 text-(--white)" >
			<AdminNavItem name="Projects"/>
			<AdminNavItem name="Skills"/>
			<AdminNavItem name="Danger Zone"/>
		</div>
	);
}

function PhoneNav() {
	const navCtx = useNav();

	if (navCtx === null) return ;

	return (
		<div className="md:hidden w-screen p-4 relative flex justify-center">
			<select 
				onChange={(e) => navCtx.setActive(e.target.value)}
				className="w-5/6 border-2 border-(--purple) text-(--white) p-4 absolute"
			>
				<option value="Projects">Projects</option>
				<option value="Skills">Skills</option>
				<option value="Danger Zone">Danger Zone</option>
			</select>
		</div>
	);
}

export function AdminNav() {
	return (
		<div>
			<ComputerNav />
			<PhoneNav />
		</div>
	)
}
