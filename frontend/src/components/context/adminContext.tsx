import {
	createContext,
	useContext,
	useState,
	type PropsWithChildren,
} from "react";

interface adminContextProps {
	isLoggedIn: boolean,
	checkPassword: (password: string) => void,
	adminFetch: (url: RequestInfo | URL, option?: RequestInit) => Promise<Response | null>
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

	async function adminFetch(url: RequestInfo | URL, option?: RequestInit): Promise<Response | null> {
		const defaultOption: RequestInit = { headers: {"Authorization": "bearer " + localStorage.getItem('token')}}; 

		if (option) {
			option.headers = {...option?.headers, "Authorization": "Bearer " + localStorage.getItem('token')};
		}

		const res = await fetch(url, option ?? defaultOption)

		if (res.ok || res.status >= 500) return res; // server error OR status = ok
		else if (res.status > 400) {
			setIsLoggedIn(false);
			localStorage.removeItem('token');
			return null;
		} else {
			return res;
		}
	}

	return (
		<adminContext.Provider
			value={{
				isLoggedIn,
				checkPassword,
				adminFetch
			}}
		>
			{props.children}
		</adminContext.Provider>
	);
}

export function useAdmin() { return useContext(adminContext) };
