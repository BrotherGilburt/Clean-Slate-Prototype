window.addEventListener('DOMContentLoaded', function() {
  let headerMenu = document.getElementById('header-navigation-menu')
  let headerMenuIcon = document.getElementById('header-navigation-menu-icon')

  /*
   * Toggle header navigation menu visibility.
   */
  headerMenuIcon.addEventListener('click', function() {
    if (headerMenu.style.display === 'block') headerMenu.style.display = 'none'
    else headerMenu.style.display = 'block'
  })
})