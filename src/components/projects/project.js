import PropTypes from 'prop-types'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyleSheet } from 'src/utils/styles'
import { faCodeBranch, faEye, faStar } from '@fortawesome/free-solid-svg-icons'
import { themeForSeason } from 'src/utils/theme'

function classNameForLanguage(language) {
  switch (language) {
  case 'Vim script':
    return 'vim'
  default:
    return language.toLowerCase()
  }
}

export default function Project({ project}) {
  return (
    <li css={styles.project}>
      <div>
        <span css={styles.projectName}><a href={project.htmlUrl}>{project.name}</a></span>
        <span>
          {project.language} <span css={[styles.language, languageStyles[classNameForLanguage(project.language)]]} />
        </span>
      </div>
      <div>
        {project.description}
      </div>
      <div>
        <span css={styles.githubStats}>
          <span><FontAwesomeIcon icon={faStar} /> {project.stargazersCount}  </span>
          <span><FontAwesomeIcon icon={faEye} /> {project.watchersCount}  </span>
          <span><FontAwesomeIcon icon={faCodeBranch} /> {project.forksCount}  </span>
        </span>
        <span>{project.license?.spdxId ?? ''}</span>
      </div>
    </li>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string,
    forksCount: PropTypes.number,
    htmlUrl: PropTypes.string,
    language: PropTypes.string,
    license: PropTypes.string,
    name: PropTypes.string,
    stargazersCount: PropTypes.number,
    watchersCount: PropTypes.number,
  }).isRequired,
}

const theme = themeForSeason()
const styles = StyleSheet.create({
  githubStyles: {
    'span': {
      margin: '0 .25em',
    },
  },
  language: {
    height: '.75em',
    width: '.75em',
    borderRadius: '50%',
    border: `.1em solid ${theme.colors.secondary}`,
    display: 'inline-block',
    marginLeft: '.25em',
  },
  project: {
    padding: '.125em 0',
    margin: '.5em 0',
    'div': {
      margin: '.25em 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
    },
  },
  projectName: {
    fonstSize: '1.2em',
  },
})

const languageStyles = StyleSheet.create({
  java: {
    backgroundColor: '#b07219',
  },
  javascript: {
    backgroundColor: '#F1E05A',
  },
  ruby: {
    backgroundColor: '#701516',
  },
  typescript: {
    backgroundColor: '#2b7489',
  },
  vim: {
    backgroundColor: '#199f4b',
  },
})
