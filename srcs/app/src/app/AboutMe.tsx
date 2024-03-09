'use client'

import Down from '../../public/down.svg'
import Logo from '../../public/Logo.svg'
import styles from './page.module.css'
import Image from 'next/image'

export default function AboutMe() {
	return (
		<main className={styles.mainAboutMe}>
			<div className={`${styles.title} ${styles.titleAboutMe}`}>
				<h1>About-me</h1>
			</div>
			<div id={styles.myLife}>
				<div id={styles.myLifeText}>
					'LOREM IPSUM DOLOR'
				</div>
				<div id={styles.myLifeImg}>
					<Image src={Logo} alt="IMG" />
				</div>
			</div>
			<div className={`${styles.next} ${styles.aboutMeNext}`}>
				<p>Projects and skill</p>
				<Image src={Down} alt="v" className={styles.nextDown}/>
			</div>
		</main>
	);
}
