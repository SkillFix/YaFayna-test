$(document).ready(function () {
  const refs = {
    about: document.querySelector('.site-nav__about-link'),
    services: document.querySelector('.site-nav__services-link'),
    price: document.querySelector('.site-nav__price-link'),
    priceAccorionScroll: document.querySelector('.price__accordion-scroll'),
    priceButton: document.querySelector('.price__button'),
    beforeAfter: document.querySelector('.site-nav__before-after-link'),
    contact: document.querySelector('.site-nav__contact-link'),

    openModalBtn: document.querySelector('[data-menu-open]'),
    aboutMobile: document.querySelector('.menu-nav__link-about'),
    servicesMobile: document.querySelector('.menu-nav__link-services'),
    priceMobile: document.querySelector('.menu-nav__link-price'),
    beforeAfterMobile: document.querySelector('.menu-nav__link-before-after'),
    contactMobile: document.querySelector('.menu-nav__link-contact'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
  };
  // refs.priceButton.addEventListener('click', onClosePanelAccardion);

  // function onClosePanelAccardion() {
  //   if (refs.priceButton.textContent.includes('Свернуть')) {
  //     onAnchorScroll.call(refs.priceAccorionScroll);
  //   }
  // }

  const mql = window.matchMedia('(min-width: 1200px)');
  function handleMediaChange(mql) {
    if (mql.matches) {
      refs.about.addEventListener('click', onAnchorScroll);
      refs.services.addEventListener('click', onAnchorScroll);
      refs.price.addEventListener('click', onAnchorScroll);
      refs.beforeAfter.addEventListener('click', onAnchorScroll);
      refs.contact.addEventListener('click', onAnchorScroll);
    } else {
      refs.openModalBtn.addEventListener('click', onOpenMenu);
    }
  }

  refs.closeModalBtn.addEventListener('click', onCloseMenu);

  handleMediaChange(mql);
  mql.addListener(handleMediaChange);

  function onAnchorScroll(event) {
    event.preventDefault();
    let targetId = event.target.getAttribute('href').slice(1);
    let target = document.getElementById(targetId);
    let targetPos;
    // console.log(targetId, target);
    if (targetId !== 'contact') {
      targetPos = target.offsetTop - 70;
    } else {
      targetPos = target.offsetTop + 1000;
    }
    window.scrollTo({
      top: targetPos,
      behavior: 'smooth',
    });
  }

  function onOpenMenu() {
    refs.aboutMobile.addEventListener('click', onAnchorScroll);
    refs.servicesMobile.addEventListener('click', onAnchorScroll);
    refs.priceMobile.addEventListener('click', onAnchorScroll);
    refs.beforeAfterMobile.addEventListener('click', onAnchorScroll);
    refs.contactMobile.addEventListener('click', onAnchorScroll);
  }
  function onCloseMenu() {
    refs.aboutMobile.removeEventListener('click', onAnchorScroll);
    refs.servicesMobile.removeEventListener('click', onAnchorScroll);
    refs.priceMobile.removeEventListener('click', onAnchorScroll);
    refs.beforeAfterMobile.removeEventListener('click', onAnchorScroll);
    refs.contactMobile.addEventListener('click', onAnchorScroll);
  }
});
