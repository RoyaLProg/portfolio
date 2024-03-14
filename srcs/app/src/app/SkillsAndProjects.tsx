'use client'

import Down from '../../public/down.svg'
import styles from './page.module.css'
import Image from 'next/image'

export default function SkillsAndProjects() {
	return (
		<main className={styles.main} id={styles.mainSkillsAndProjects}>
			<div className={`${styles.title}`}>
				<h1>Skills</h1>
			</div>
			<div className={styles.box} id={styles.skills}>
			</div>
			
			<div className={`${styles.title}`} id={styles.projectTitle}>
				<h1>Projects</h1>
			</div>

			<div className={styles.box} id={styles.projects}>
			</div>

		{/*<div className={`${styles.next}`}>
				<p>Contact-me</p>
				<Image src={Down} alt="v" className={styles.nextDown}/>
			</div> */}
		</main>
	);
}

