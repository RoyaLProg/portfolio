import { useNav } from "../context/navContext";
import { ContentContainer } from "./TUIContentContainer";

export function ContactMe() {
	const navCtx = useNav()

	if (navCtx === null) return ;

	const show = navCtx.active === 'ContactMe';

	return (
		<ContentContainer show={show}>
			<div className="w-full flex flex-col gap-10">
				<div className="w-full">
					<p className="text-(--blue-purple) leading-none">
						<span className="blink">▄▄▄</span><br />
						<span className="blink">███</span>&nbsp;&nbsp;&nbsp;▄▖&nbsp;&nbsp;&nbsp;&nbsp;▗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▗&nbsp;&nbsp;&nbsp;▖&nbsp;&nbsp;▖&nbsp;&nbsp;<br />
						<span className="blink">███</span>&nbsp;&nbsp;&nbsp;▌&nbsp;▛▌▛▌▜▘▀▌▛▘▜▘&nbsp;&nbsp;▛▖▞▌█▌<br />
						<span className="blink">███</span>&nbsp;&nbsp;&nbsp;▙▖▙▌▌▌▐▖█▌▙▖▐▖&nbsp;&nbsp;▌▝&nbsp;▌▙▖<br />
						<span className="blink">▀▀▀</span><br />
					</p>
				</div>
				<div className="text-(--white) w-full flex items-center flex-col gap-8">
					<div className="w-5/6 text-(--comment-grey) text-center">
						<h1 className="text-(--white) text-xl text-bold"> Send me an email </h1>
						<p className="text-xs">LOREM IPSUM fasdf GA fjdsal fdjaluq jfdaousdfj fjasdlfeja fjdal;dufa fjdakl;sdfja fjdakl;dsfauoewqjr faupejfaksjgahepfujasdjf</p>
					</div>
					<div className="w-2/3 flex">
						<form className="w-full">
							<div>
								<label htmlFor="subject" className="bg-(--black) relative md:top-3 top-2 left-4">Subject</label>
								<input name="subject" className="w-full border-2 border(--gutter-grey) p-2 caret-(--purple) caret-block"/>
							</div>
							<div>
								<label htmlFor="email" className="bg-(--black) relative md:top-3 top-2 left-4">Your email</label>
								<input name="email" className="w-full border-2 border(--gutter-grey) p-2 caret-(--purple) caret-block"/>
							</div>
							<div>
								<label htmlFor="message" className="bg-(--black) relative md:top-3 top-2 left-4">Message</label>
								<textarea name="message" className="w-full border-2 border(--gutter-grey) p-2 caret-(--purple) caret-block" rows={20} cols={40}/>
							</div>
							<div className="w-full flex items-center my-2">
								<input type="submit" className="w-24 border-2 border-(--green) p-2 hover:bg-(--green) mx-auto hover:text-(--black)" value="Submit"/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</ContentContainer>
	)
}
