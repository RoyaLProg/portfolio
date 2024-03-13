'use client'

import Down from '../../public/down.svg'
import styles from './page.module.css'
import Image from 'next/image'

export default function SkillsAndProjects() {
	return (
		<main className={styles.main} id={styles.mainAboutMe}>
			<div className={`${styles.title} ${styles.titleAboutMe}`}>
				<h1>Skills & Projects</h1>
			</div>

			<div className={`${styles.next} ${styles.aboutMeNext}`}>
				<p>Contact-me</p>
				<Image src={Down} alt="v" className={styles.nextDown} id={styles.nextAboutMe}/>
			</div>
		</main>
	);
}

