window.addEventListener('DOMContentLoaded', function() {
  let headerMenu = document.getElementById('header-navigation-menu')
  let headerMenuLink = document.getElementById('header-navigation-menu-link')
  let headerMenuLabel = document.getElementById('header-menu-label')

  /*
   * Toggle header navigation menu visibility.
   */
  headerMenuLink.addEventListener('click', function() {
    if (headerMenu.style.display === 'block') {
      headerMenu.style.display = 'none'
      headerMenuLabel.innerHTML = 'Open'
    } else {
      headerMenu.style.display = 'block'
      headerMenuLabel.innerHTML = 'Close'
    }
  })

  let desktop = window.matchMedia('(max-width: 400px)')
  desktop.onchange = function(e) {
    if (e.matches) {
      //Set menu for mobile screen sizes.
      headerMenuLabel.innerHTML = 'Open'
      headerMenu.style.display = 'none'
      headerMenuLink.style.display = 'flex';
    } else {
      //Set menu for tablet/desktop screensizes.
      headerMenu.style.display = 'block'
      headerMenuLink.style.display = 'none';
    }
  }
})