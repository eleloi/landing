type Theme = 'light' | 'dark'

export function getUserStoredTheme(): Theme {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    const localStorageTheme = localStorage.getItem('theme')
    if (
      typeof localStorageTheme === 'string' &&
      ['light', 'dark'].includes(localStorageTheme.toLowerCase())
    ) {
      return localStorageTheme as Theme
    }
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

export function setTheme(theme: Theme) {
  if (!['light', 'dark'].includes(theme.toLowerCase())) {
    console.error('Invalid theme')
    return
  }

  const daisyThemes = {
    dark: 'dracula',
    light: 'lemonade',
  }
  const daisyTheme = daisyThemes[theme]
  document.documentElement.setAttribute('data-theme', daisyTheme)

  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  localStorage.setItem('theme', theme)
}
