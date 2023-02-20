$(document).ready(function () {
  const priceButtonEl = document.querySelector('.price__button');
  const buttonSwitcher = document.querySelector('.price__button-switcher');
  priceButtonEl.addEventListener('click', open);

  function open() {
    const items = document.querySelectorAll('.price__item--more');

    for (let i = 0; i < items.length; i++) {
      items[i].classList.toggle('hidden');
    }
    if (items[7].classList.contains('hidden')) {
      buttonSwitcher.textContent = 'Посмотреть все Услуги';
    } else {
      buttonSwitcher.textContent = 'Свернуть услуги';
    }
  }
});
