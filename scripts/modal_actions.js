const modal = document.querySelector(".configuration_modal");
const openModalButton = document.querySelector(".open_modal_button");
const closeModalButton = document.querySelector(".close_modal_button");

openModalButton.addEventListener("click", () => {
  modal.showModal();
});

closeModalButton.addEventListener("click", () => {
  modal.setAttribute("closing", "");
  modal.addEventListener("animationend", () => {
    modal.removeAttribute("closing");
  });
  modal.close();
});
