/**
 * site.js - behaviour for the site's navigation.
 *
 * The site is static, so there are only two interactive pieces:
 *   1. The mobile menu button, which opens and closes the navigation bar.
 *   2. The "Publications" dropdown, which can be expanded or collapsed on
 *      small screens. On desktop the dropdown is pure CSS (hover/focus).
 *
 * Loaded with `defer`, so the DOM is ready when this runs.
 */
(function () {
  'use strict';

  var navBar = document.querySelector('.nav-bar');
  var menuButton = document.querySelector('.mobile-toggle');
  var dropdownLinks = document.querySelectorAll('.has-dropdown > a');

  // Mobile menu button: toggle the bar open/closed and tell assistive tech.
  if (menuButton && navBar) {
    menuButton.addEventListener('click', function () {
      var isOpen = navBar.classList.toggle('nav-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Dropdown parents link to "#" and exist only to open their submenu.
  Array.prototype.forEach.call(dropdownLinks, function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      link.parentNode.classList.toggle('toggle-sub');
    });
  });
})();
