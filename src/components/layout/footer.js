import React from 'react'
import { StyleSheet } from 'src/utils/styles'
import { themeForSeason } from 'src/utils/theme'

export default function Footer() {
  const date = new Date().getFullYear()

  return (
    <footer css={styles.footer}>
      <p css={styles.text}>&copy; {date} Katie Macke</p>
      <p css={styles.text}>Version 1.0.0</p>
    </footer>
  )
}

const theme = themeForSeason()
const styles = StyleSheet.create({
  footer: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    borderTop: `1px solid ${theme.colors.primary}`,
    margin: '0.5rem 0',
    padding: '0.5rem',
  },
  text: {
    fontSize: '0.75rem',
    margin: '0.125rem',
    textAlign: 'center',
  },
})
