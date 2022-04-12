import React from 'react'
import styles from '../styles/Navibar.module.css'
import Link from 'next/link'

export default function NaviBar() {
  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <button className={styles.button}>
          Home
        </button>
      </Link>
      <Link href="/variable" passHref>
        <button className={styles.button}>
          ตัวแปรในJSX
        </button>
      </Link>
      <Link href="/tailwindcss" passHref>
        <button className={styles.button}>
          tailwind.css
        </button>
      </Link>
      <Link href="/bruh" passHref>
        <button className={styles.button}>
          bruh
        </button>
      </Link>
    </div>
  )
}
