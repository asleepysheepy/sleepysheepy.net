import Footer from 'src/components/layout/footer'
import Head from 'next/head'
import Navbar from 'src/components/layout/navbar'
import PropTypes from 'prop-types'
import React from 'react'
import { Global, StyleSheet } from 'src/utils/styles'
import { themeForSeason } from 'src/utils/theme'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const theme = themeForSeason()

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href={theme.favicon}
          rel={'icon'}
          type={'image/png'}
        />
      </Head>
      <div css={styles.appContainer}>
        <Global styles={styles} />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: theme.colors.background,
    color: theme.colors.foreground,
    fontFamily: 'sans-serif',
    margin: 'auto',
    maxWidth: '50em',
  },
  a: {
    color: theme.colors.primary,
  },
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '.5rem 1em',
    position: 'relative',
    minHeight: '100vh',
  },
})

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object,
}
