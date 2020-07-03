import Footer from 'src/components/layout/footer'
import Navbar from 'src/components/layout/navbar'
import PropTypes from 'prop-types'
import React from 'react'
import { Global, StyleSheet } from 'src/utils/styles'

export default function App({ Component, pageProps }) {
  return (
    <div css={styles.appContainer}>
      <Global styles={styles} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F8F3EA',
    color: '#254E7B',
    fontFamily: 'sans-serif',
    margin: 'auto',
    maxWidth: '50em',
  },
  a: {
    color: '#5584B1',
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
