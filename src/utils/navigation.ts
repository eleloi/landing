function isNavigationSupported() {
  return Boolean(document.startViewTransition)
}

async function fetchPage(url: string) {
  const response = await fetch(url)
  const text = await response.text()
  const [, data] = text.match(/<body>([\s\S]*)<\/body>/i)
  return data
}

export function startViewTransition() {
  if (!isNavigationSupported()) return
}
window.navigation.addEventListener('navigate', (event) => {
  const toUrl = new URL(event.destination.url)

  // es una página externa? si es así, lo ignoramos
  if (location.origin !== toUrl.origin) return

  event.intercept({
    async handler() {
      console.log(toUrl.href)
      const body = await fetchPage(toUrl.href)
      document.startViewTransition(() => {
        document.body.innerHTML = body
        if (toUrl.hash) {
          const element = document.querySelector(toUrl.hash)
          if (element) element.scrollIntoView()
        }
      })
    },
  })
})
