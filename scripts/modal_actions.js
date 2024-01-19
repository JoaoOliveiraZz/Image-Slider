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
const newImage = document.querySelector('.image_link')
const newImageTitle = document.querySelector('.image_title')

submitNewImage.addEventListener('click', () => {
    sliderImages.push({url: newImage.value, title: newImageTitle.value})
    newImage.value = ''
    newImageTitle.value = ''
    loadImages()
    changeSliderTitle(getImageOnScreen())
})

function loadImages(){
    const imagesHtml = sliderImages.map((image, index) => {
        return `<img id='image-${index+1}' src='${image.url}' />`
    }).join('')

    slider.innerHTML = imagesHtml
    renderControls();
}

function getImageOnScreen(){
  return window.location.href.split('/').reverse()[0].split('#')[1]
}



