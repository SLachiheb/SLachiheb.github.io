const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  /*search the target modal*/
  const target_modal = document.querySelector(
    `.modal-${e.target.dataset.modal}`
  );
  /*Adds hidden to modal elements*/
  const children_modal = [...target_modal.parentElement.children].slice(1);
  children_modal.forEach(child => child.classList.add('hidden'));

  target_modal.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let show_modal of btnsOpenModal) {
  show_modal.addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener(
  'keydown',
  function (e) {
    e.preventDefault();
    if (e.key == ' ' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  },
  false
);
