'use client'

import styles from './page.module.css'
import left from '../../public/left-arrow-svgrepo-com.svg'
import Image from 'next/image'

export default function SkillsAndProjects() {
	return (
		<main className={styles.main} id={styles.mainSkillsAndProjects}>
			<div className={`${styles.title}`}>
				<h1>Skills</h1>
			</div>

			<div className={styles.box} id={styles.skills}>
				<div id={styles.left} className={styles.nextSP}>
					<Image src={left} alt="<" />
				</div>
				<div className={styles.list} id={styles.skillsList}>
					<p> I'm a skill </p>
				</div>
			</div>
			
			<div className={`${styles.title}`} id={styles.projectTitle}>
				<h1>Projects</h1>
			</div>

			<div className={styles.box} id={styles.projects}>
				<div className={styles.list} id={styles.skillsList}>
					<p> I'm a project </p>
				</div>

				<div id={styles.right} className={styles.nextSP} >
					<Image src={left} alt='>' />
				</div>
			</div>

		{/*<div className={`${styles.next}`}>
				<p>Contact-me</p>
				<Image src={Down} alt="v" className={styles.nextDown}/>
			</div> */}
		</main>
	);
}

