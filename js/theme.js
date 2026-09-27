(function () {
  var storageKey = 'preferredTheme'
  var toggle = document.querySelector('[data-theme-toggle]')

  function applyTheme(isDark) {
    document.body.classList.toggle('darkmode', isDark)
    toggle.setAttribute('aria-pressed', String(isDark))

    if (isDark) {
      localStorage.setItem(storageKey, 'dark')
    } else {
      localStorage.removeItem(storageKey)
    }
  }

  applyTheme(localStorage.getItem(storageKey) === 'dark')

  toggle.addEventListener('click', function () {
    applyTheme(!document.body.classList.contains('darkmode'))
  })
}())