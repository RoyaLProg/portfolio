'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Logo from '../../public/Logo.svg'
import Down from '../../public/down.svg'

export default function Welcome() {

  return (
    <main className={styles.main}>
		<Image priority src={Logo} alt='Logo' className={styles.HeroLogo}/>
		<div className={styles.next}>
			<p>welcome</p>
			<Image src={Down} alt="v" className={styles.nextDown}/>
		</div>
    </main>
  )
}
