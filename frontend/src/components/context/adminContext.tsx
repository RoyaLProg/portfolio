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

		try {
			fetch("http://localhost:3000/api/auth", {
				body: JSON.stringify({password}),
				headers: { 'Content-Type': 'application/json' },
				method: "POST"
			}).then( (response) => {
				return response.json();
			}).then( (data) => {
				if (!data['token']) {
					console.log(data);
					return ;
				}
				localStorage.setItem('token', data['token']);
				setIsLoggedIn(true);
			});
		} catch (e) {
			console.error(e);
		}

		// NOTE: testing block
		// if (password !== "iamanadmintrustme") {
		// 	throw new Error("wrong password");
		// }

		// setIsLoggedIn(true);
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
