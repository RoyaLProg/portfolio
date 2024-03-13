'use client'

import Down from '../../public/down.svg'
import Face from '../../public/ccambium.jpg'
import styles from './page.module.css'
import Image from 'next/image'

export default function AboutMe() {
	return (
		<main className={styles.main} id={styles.mainAboutMe}>
			<div className={styles.title} id={styles.titleAboutMe}>
				<h1>About-me</h1>
			</div>
			<div id={styles.myLife}>
				<div id={styles.myLifeText}>
					<p>
					Depuis que j'ai eu mon premier ordinateur, j'ai toujours été curieux de savoir comment fonctionnaient les programmes sur mon ordinateur, ou même comment construire un site web. Je me suis spécialisé dans ce domaine et maintenant j'ai une meilleure compréhension de la programmation et je cherche de nouveaux projets !
					</p>
				</div>
				<div id={styles.myLifeImg}>
					<Image src={Face} alt="IMG" />
				</div>
			</div>
			<div className={`${styles.next} ${styles.aboutMeNext}`}>
				<p>Skills & Projects</p>
				<Image src={Down} alt="v" className={styles.nextDown} id={styles.nextAboutMe}/>
			</div>
		</main>
	);
}

