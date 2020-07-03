import Link from 'next/link'
import React from 'react'
import { StyleSheet } from 'src/utils/styles'

export default function Navbar() {
  return (
    <nav css={styles.navbar}>
      <Link href={'/'}><a css={styles.link}>Home</a></Link>
      <Link href={'/projects'}><a css={styles.link}>Projects</a></Link>
    </nav>
  )
}

const styles = StyleSheet.create({
  navbar: {
    margin: '2rem 2rem 0',
    display: 'flex',
    listStyle: 'none',
  },
  link: {
    textDecoration: 'none',
    margin: '0 0.5rem',
    fontSize: '1.125rem',
    color: '#5584B1',
  },
})
