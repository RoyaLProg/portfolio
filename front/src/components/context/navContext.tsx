import { createContext, useContext, useEffect, useState, type Dispatch, type PropsWithChildren, type SetStateAction } from "react";

interface navContextProps {
	active: string,
	setActive: Dispatch<SetStateAction<string>>;
}

export const navContext = createContext<navContextProps | null>(null);

export function NavContextProvider(props: PropsWithChildren) {
	const [active, setActive] = useState('');

	useEffect(() => {
		setActive('Projects');
	}, []);

	return (
		<navContext.Provider
			value={{
				active: active,
				setActive: setActive,
			}}
		>
			{props.children}
		</navContext.Provider>
	)
}

export function useNav() { return useContext(navContext) };
