const colors = {
  autumn: {},
  spring: {
    background: '#ECFFDF',
    primary: '#51C575',
  },
  summer: {
    background: '#FFF5AD',
    primary: '#E7B500',
  },
  winter: {},
  base: {
    foreground: '#000',
    secondary: '#DCD7C9',
  },
}

export function themeForSeason() {
  switch (new Date().getMonth()) {
  case 11:
  case 0:
  case 1:
    // return buildSeasonTheme('winter')
    return buildSeasonTheme('spring')
  case 2:
  case 3:
  case 4:
    return buildSeasonTheme('spring')
  case 5:
  case 6:
  case 7:
    return buildSeasonTheme('summer')
  case 8:
  case 9:
  case 10:
    // return buildSeasonTheme('autumn')
    return buildSeasonTheme('spring')
  }
}

function buildSeasonTheme(season) {
  return {
    favicon: `/favicons/${season}.png`,
    avatar: `/avatars/${season}.png`,
    colors: {
      ...colors.base,
      ...colors[season],
    },
  }
}

