import Head from 'next/head'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyleSheet } from 'src/utils/styles'
import { faGithub, faKeybase, faReddit, faSteam, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { themeForSeason } from 'src/utils/theme'

const socialMedias = [
  {
    icon: faGithub,
    name: 'Github',
    url: 'https://github.com/asleepysheepy',
  },
  {
    icon: faTwitter,
    name: 'Twitter',
    url: 'https://twitter.com/a_sleepy_sheepy',
  },
  {
    icon: faKeybase,
    name: 'Keybase',
    url: 'https://keybase.io/a_sleepy_sheepy',
  },
  {
    icon: faReddit,
    name: 'Reddit',
    url: 'https://www.reddit.com/user/a_sleepy_sheepy',
  },
  {
    icon: faSteam,
    name: 'Steam',
    url: 'https://steamcommunity.com/id/a_sleepy_sheepy/',
  },
]

const theme = themeForSeason()

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Sleepy Sheepy</title>
      </Head>
      <main css={styles.container}>
        <section css={styles.column}>
          <img
            alt={'Avatar of Katie'}
            css={styles.avatarImg}
            src={theme.avatar}
          />
          <h1 css={styles.title}>Katie Macke</h1>
          <h2 css={styles.subtitle}> A sleepy sheepy</h2>
          <h3 css={styles.subSubtitle}>Software Engineer</h3>
          <div css={styles.socialIcons}>
            {socialMedias.map(({icon, name, url}) => (
              <a
                css={styles.socialIcon}
                href={url}
                key={name}
              >
                <span aria-hidden><FontAwesomeIcon icon={icon} /></span>
                <span css={styles.srOnly}>{`A link to my ${name} account`}</span>
              </a>
            ))}
          </div>
        </section>
        <section css={styles.column}>
          <p>
            Good morning, I&apos;m Katie and I&apos;m a software engineer at <a href={'https://joinroot.com'}>Root Insurance.</a> I also enjoy making websites and <a href={'https://discord.com'}>Discord</a> bots in my free time.
          </p>
          <p>
            I enjoy working with Ruby/Rails, React and React Native quite a bit and as a result I end up making websites and mobile apps.
          </p>
          <p>
            Some of my hobbies outside of programming include cooking, making cocktails, and playing the drums.
          </p>
          <p>
            Black Lives Matter!
          </p>
        </section>
      </main>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: '.5rem',
    width: '100%',
    position: 'relative',
    maxWidth: '50rem',
    flex: 2,
    '@media(max-width: 820px)': {
      flexDirection: 'column',
    },
  },
  column: {
    margin: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  avatarImg: {
    border: `5px solid ${theme.colors.primary}`,
    width: '13rem',
  },
  title: {
    fontSize: '2rem',
    margin: '.75rem 0 .5rem',
  },
  subtitle: {
    fontSize: '1.5rem',
    margin: '.25rem 0',
  },
  subSubtitle: {
    fontSize: '1.125rem',
    margin: '.25rem 0',
  },
  socialIcons: {
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
    marginTop: '.5rem',
  },
  socialIcon: {
    margin: '.25rem',
    fontSize: '1.5rem',
  },
  srOnly: {
    border: 0,
    clip: 'rect(0, 0, 0, 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
  },
})
