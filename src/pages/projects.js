import Head from 'next/head'
import Project from 'src/components/projects/project'
import PropTypes from 'prop-types'
import React from 'react'
import Recase from 'better-recase'
import fetch from 'isomorphic-unfetch'
import { StyleSheet } from 'src/utils/styles'
import { themeForSeason } from 'src/utils/theme'

const projectsUrl = 'https://api.github.com/users/asleepysheepy/repos?sort=pushed&type=all'

export async function getServerSideProps() {
  const response = await fetch(projectsUrl)

  if (!response.ok) {
    return {
      props: {},
    }
  }

  const data = await response.json()
  return {
    props: { projects: Recase.camelCopy(data) },
  }
}

export default function ProjectsPage({ projects }) {
  if (!projects) { return <div>loading</div> }

  return (
    <>
      <Head>
        <title>Projects - Sleepy Sheepy</title>
      </Head>
      <main css={styles.container}>
        <h2>These are some of my projects.</h2>
        <ul css={styles.projectsList}>
          {projects.map((project, index) => (
            <Project
              key={index}
              project={project}
            />
          ))}
        </ul>
      </main>
    </>
  )
}

ProjectsPage.propTypes = {
  projects: PropTypes.array,
}

const theme = themeForSeason()
const styles = StyleSheet.create({
  container: {
    margin: '1.5rem 2.5rem',
  },
  projectsList: {
    listStyle: 'none',
    padding: 0,
    'li': {
      borderBottom: `1px solid ${theme.colors.primary}`,
    },
    'li:last-of-type': {
      border: 'none',
    },
  },
})
