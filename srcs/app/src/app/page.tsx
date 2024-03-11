'use client'

import Welcome from './Welcome'
import AboutMe from './AboutMe'
import SkillsAndProjects from './SkillsAndProjects'
import styles from './page.module.css'
/* 
 * Peut etre PACIFICO pour les titres ! -> c'est oui
 *
 */

export default function Home() {

  return (
	<div id={styles.container}>
		<Welcome />
		<AboutMe />
		<SkillsAndProjects />
	</div>
  )
}
