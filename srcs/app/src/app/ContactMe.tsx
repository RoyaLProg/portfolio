'use client'

import styles from './page.module.css'

export default function ContactMe() {
	return (
		<main className={styles.main}>
			<div id={styles.contactMe}>
				<div className={styles.title} id={styles.contactMeTitle}>
					<h1>Contact Me</h1>
				</div>
				<div id={styles.contactMeContainer}>
					<div id={styles.sendMail}>
						<h1> send a mail </h1>
						<form>
						</form>
					</div>
					<div id={styles.links}>
						<h1> links </h1>
						<a href="https://github.com/RoyaLProg">Github</a>
						<a href="#">Linkedin</a>
					</div>
				</div>
			</div>
		</main>
	);
}
