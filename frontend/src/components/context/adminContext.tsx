import {
	createContext,
	useContext,
	useState,
	type PropsWithChildren,
} from "react";

interface adminContextProps {
	isLoggedIn: boolean,
	checkPassword: (password: string) => void;
}

export const adminContext = createContext<adminContextProps | null>(null);

export function AdminContextProvider(props: PropsWithChildren) {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	function checkPassword(password: string) {
		if (password !== "iamanadmintrustme") {
			throw new Error("wrong password");
		}

		setIsLoggedIn(true);
	}

	return (
		<adminContext.Provider
			value={{
				isLoggedIn,
				checkPassword,
			}}
		>
			{props.children}
		</adminContext.Provider>
	);
}

export function useAdmin() { return useContext(adminContext) };
