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

// Add new Images

const submitNewImage = document.querySelector('.submit_new_image')
const newImage = document.querySelector('.add_new_image_input')

submitNewImage.addEventListener('click', () => {
    sliderImages.push(newImage.value)
    newImage.value = ''
    loadImages()
})

function loadImages(){
    const imagesHtml = sliderImages.map((image, index) => {
        return `<img id='image-${index+1}' src='${image}' />`
    }).join('')

    slider.innerHTML = imagesHtml
    renderControls();
}



