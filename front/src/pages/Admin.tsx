import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { AdminContextProvider, useAdmin } from "@/components/context/adminContext";
import { NavContextProvider } from "@/components/context/navContext";
import { AdminNav } from "@/components/ui/TUIAdminNav";
import { AdminProjects } from "@/components/ui/TUIAdminProject";

function RequestPassword() {
	const [password, setPassword] = useState<string>("");
	const [visible, setVisible] = useState<boolean>(false);
	const [error, setError] = useState<undefined | string>(undefined);
	const adminCtx = useAdmin();

	if (!adminCtx) return null;

	function onSubmit(e: React.FormEvent<HTMLFormElement>): void {
		setError(undefined);
		e.preventDefault();

		const formData = new FormData(e.currentTarget)
		console.log(formData);
		try { 
			adminCtx?.checkPassword(formData.get('password') as string ?? "");
		} catch (error) {
			if (typeof error === "string")
				setError(error);
			else if (error instanceof Error)
				setError(error.message);
			else
				setError("Unknow Error");
		}
	}

	return (
		<div className="w-screen h-screen flex items-center justify-center text-(--light-red) text-center">
			<form
				onSubmit={onSubmit}
				className="w-5/6 h-content relative"
			>
				{ error ? <p className="absolute top-2/1 translate-1/2 right-1/2 md:text-base text-xs">{error}</p> : "" }
				<label htmlFor="password" className="absolute bg-(--black) right-1/2 translate-x-1/2 -translate-y-1/2 md:text-base text-xs">Administrator Password</label>
				<input
					name="password"
					type={visible ? "text" : "password"}
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					className="w-full border-2 border-(--red) carret-(--ligth-red) p-2 text-(--light-red) text-center"
				/>
			</form>
			<div
				onClick={() => setVisible(!visible)}
				className="relative right-10 text-(--red)"
			>
				{ visible ?
					<Eye />
					:
					<EyeClosed />
				}
			</div>
		</div>
	)
}

export function Admin() {
	return (
		<AdminContextProvider>
			<NavContextProvider>
				<AdminPage />
			</NavContextProvider>
		</AdminContextProvider>
	);
}

function AdminPanel() {
	return (
		<div className="w-screen h-screen flex md:flex-row flex-col gap-8">
			<AdminNav />
			<AdminProjects />
		</div>
	);
}

function AdminPage() {
	const adminCtx = useAdmin();

	if (!adminCtx)
		return null;

	return (
		adminCtx.isLoggedIn ? <AdminPanel /> : <RequestPassword />
	);
}
