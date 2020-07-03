import React from 'react'
import { StyleSheet } from 'src/utils/styles'

export default function Footer() {
  const date = new Date().getFullYear()

  return (
    <footer css={styles.footer}>
      <p css={styles.text}>&copy; {date} Katie Macke</p>
      <p css={styles.text}>Version 1.0.0</p>
    </footer>
  )
}

const styles = StyleSheet.create({
  footer: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    borderTop: '1px solid #85C1E5',
    margin: '0.5rem 0',
    padding: '0.5rem',
  },
  text: {
    fontSize: '0.75rem',
    margin: '0.125rem',
    textAlign: 'center',
  },
})
