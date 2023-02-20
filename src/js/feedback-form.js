$(document).ready(function () {
  const refs = {
    modalForm: document.querySelector('.modal__form'),
    signUpForm: document.querySelector('.sign-up__form'),
    modalThanks: document.querySelector('[data-modal-thanks]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeModalThankBtn: document.querySelector('[data-modal-thanks-close]'),
    backdrop: document.querySelector('.backdrop-modal'),
    submit: document.querySelector('.modal__button'),
  };

  refs.signUpForm.addEventListener('submit', formSend);
  refs.openModalBtn.addEventListener('click', onOpenModal);

  async function formSend(e) {
    e.preventDefault();

    let form;
    if (e.target === refs.modalForm) {
      form = refs.modalForm;
    } else if (e.target === refs.signUpForm) {
      form = refs.signUpForm;
    }

    let formData = new FormData(form);
    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      // let result = await response.json();
      // alert(result.message);
      onCloseModal();
      onOpenModalThank();
      form.reset();
    } else {
      alert('Ошибка при отправке данных');
    }
  }
  function onOpenModal() {
    refs.modalForm.addEventListener('submit', formSend);
    refs.backdrop.addEventListener('click', onBackdropClick);
    refs.closeModalBtn.addEventListener('click', onCloseModal);
    window.addEventListener('keydown', onPressEsc);

    refs.modal.classList.remove('is-hidden');
    refs.body.classList.add('no-scroll');
  }
  function onOpenModalThank() {
    refs.backdrop.addEventListener('click', onBackdropClick);
    // ! Не работает клик по бекдропу на закрыти
    refs.closeModalThankBtn.addEventListener('click', onCloseModalThank);
    window.addEventListener('keydown', onPressEsc);

    refs.modalThanks.classList.remove('is-hidden');
    refs.body.classList.add('no-scroll');
  }
  function onCloseModal() {
    window.removeEventListener('keydown', onPressEsc);
    refs.modal.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
  function onCloseModalThank() {
    window.removeEventListener('keydown', onPressEsc);
    refs.modalThanks.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      onCloseModal();
      onCloseModalThank();
    }
  }

  function onPressEsc(event) {
    if (event.keyCode === 27) {
      onCloseModal();
      onCloseModalThank();
    }
  }
});
