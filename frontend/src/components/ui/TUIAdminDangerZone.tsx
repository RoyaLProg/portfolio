import { ContentContainer } from "./TUIContentContainer";
import { useNav } from "../context/navContext";
import figlet from "figlet";
import big from "figlet/fonts/Big";
import { useEffect, useState } from "react";
import { useAdmin } from "../context/adminContext";

export function AdminDangerZone() {
	const navCtx = useNav();
	const adminCtx = useAdmin();
	const [password, setPassword] = useState<string>("");
	const [oldPassword, setOldPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");

	if (navCtx === null) return ;
	if (adminCtx === null) return ;

	useEffect(() => {
		const titleDiv = document.getElementById('dangertitle');
		const titleDivPhone = document.getElementById('dangertitlemobile');

		if (!titleDiv) return ;
		if (!titleDivPhone) return ;

		figlet.parseFont('Big', big)
		const text = figlet.textSync(
			"Danger Zone",
			{font: "Big"},
		);

		const phoneText1 = figlet.textSync(
			"Danger",
			{font: "Big"},
		);

		const phoneText2 = figlet.textSync(
			"Zone",
			{font: "Big"},
		);

		const els = text.replaceAll(' ', '&nbsp;').split('\n').map((s) => `<p>${s}</p>`);
		const phoneEls1 = phoneText1.replaceAll(' ', '&nbsp').split('\n').map((s) => `<p>${s}</p>`); 
		const phoneEls2 = phoneText2.replaceAll(' ', '&nbsp').split('\n').map((s) => `<p>${s}</p>`); 

		titleDiv.innerHTML = els.reduce((s1,s2) => s1 += '\n' + s2);
		titleDivPhone.innerHTML = phoneEls1.reduce((s1,s2) => s1 += '\n' + s2) + '\n' + phoneEls2.reduce((s1,s2) => s1 += '\n' + s2);
	}, []);

	if (navCtx.active !== "Danger Zone") return ;

	async function updatePassword(event: React.MouseEvent) {
		event.preventDefault();
		if (password !== confirmPassword) return ;

		const init: RequestInit = {body: JSON.stringify({password, oldPassword}), method: "POST", headers: {"Content-Type": "application/json"}}
		const res = await adminCtx?.adminFetch("http://localhost:3000/api/auth/changepassword", init);

		if (res && res.ok) return;

		console.log(res);
	}

	return (
		<ContentContainer
			show={navCtx.active === "Danger Zone"}
			className="md:flex-grow md:m-0 text-(--white) md:border-0 w-full md:mr-8"
		>
			<div className="flex gap-8 flex-col items-center w-full">
				<div id="dangertitle" className="text-(--red) leading-none hidden md:block"></div>
				<div id="dangertitlemobile" className=" text-center text-(--red) leading-none md:hidden"></div>
				<div className="w-full flex flex-col gap-8">
					<div className="border border-(--red) p-2 flex flex-col gap-8">
						<h3 className="text-(--red) font-bold text-center text-2xl">Change password</h3>
						<form className="flex items-center flex-col gap-3">
							<div className="flex flex-col gap-2">
								<label>Old Password</label>
								<input type="password" value={oldPassword} className="text-(--grey) border" onChange={(event) => {setOldPassword(event.target.value)}}/>
							</div>
							<div className="flex flex-col gap-2">
								<label>New Password</label>
								<input type="password" value={password} className="text-(--grey) border" onChange={(event) => {setPassword(event.target.value)}}/>
							</div>
							<div className="flex flex-col gap-2">
								<label>Confirm New Password</label>
								<input type="password" value={confirmPassword} className="text-(--grey) border" onChange={(event) => {setConfirmPassword(event.target.value)}}/>
							</div>
							<input type="submit" onClick={updatePassword} value="Confirm" className="p-2 border border-(--red) hover:bg-(--red) hover:text-(--black) w-50"/>
						</form>
					</div>
					<div className="border border-(--red) p-2 flex flex-col gap-8">
						<h3 className="font-bold text-2xl text-center text-(--red)">Nuclear options</h3>
						<div className="flex gap-8 justify-center">
							<button className="border border-(--red) text-(--red) p-2 hover:bg-(--red) hover:text-(--black) aspect-square">Nuke Projects</button>
							<button className="border border-(--red) text-(--red) p-2 hover:bg-(--red) hover:text-(--black) aspect-square">Nuke Skills</button>
							<button className="border border-(--red) text-(--red) p-2 hover:bg-(--red) hover:text-(--black) aspect-square">Nuke everything</button>
						</div>
					</div>
				</div>
			</div>
		</ContentContainer>
	)
}
