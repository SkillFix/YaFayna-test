$(document).ready(function () {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
    menuLink: document.querySelector('.menu__list'),
  };

  refs.openModalBtn.addEventListener('click', onOpenMenu);
  refs.closeModalBtn.addEventListener('click', onCloseMenu);

  refs.menuLink.addEventListener('click', onCloseMenu);

  function onOpenMenu() {
    refs.menu.classList.remove('is-hidden');
    refs.body.classList.add('no-scroll');
  }
  function onCloseMenu() {
    refs.menu.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
});
