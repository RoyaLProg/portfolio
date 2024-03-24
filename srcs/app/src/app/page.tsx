'use client'

import Welcome from './Welcome'
import AboutMe from './AboutMe'
import SkillsAndProjects from './SkillsAndProjects'
import ContactMe from './ContactMe'
import styles from './page.module.css'

export default function Home() {

  return (
	<div id={styles.container}>
		<Welcome />
		<AboutMe />
		<SkillsAndProjects />
		<ContactMe />
	</div>
  )
}
