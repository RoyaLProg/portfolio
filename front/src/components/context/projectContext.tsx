import {
	createContext,
	useContext,
	useState,
	type Dispatch,
	type PropsWithChildren,
	type SetStateAction
} from "react";

interface projectContextProps {
	active: number | null,
	setActive: Dispatch<SetStateAction<number | null>>;
}

export const projectsContext = createContext<projectContextProps | null>(null);

export function ProjectsContextProvider(props: PropsWithChildren) {
	const [active, setActive] = useState<number | null>(null);

	return (
		<projectsContext.Provider
			value={{
				active: active,
				setActive: setActive,
			}}
		>
			{props.children}
		</projectsContext.Provider>
	);
}

export function useProjects() { return useContext(projectsContext) };
