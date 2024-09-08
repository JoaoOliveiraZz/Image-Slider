const modal = document.querySelector(".configuration_modal");
const openModalButton = document.querySelector(".open_modal_button");
const closeModalButton = document.querySelector(".close_modal_button");
const editSliderContainer = document.querySelector(".edit_slider");

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

const submitNewImage = document.querySelector(".submit_new_image");
const newImage = document.querySelector(".image_link");
const newImageTitle = document.querySelector(".image_title");

submitNewImage.addEventListener("click", () => {
  if(sliderImages[0].title === 'ImageSlider') sliderImages.splice(0, 1);
  sliderImages.push({ url: newImage.value, title: newImageTitle.value });
  newImage.value = "";
  newImageTitle.value = "";
  loadImages();
});

function getImageOnScreen() {
  return window.location.href.split("/").reverse()[0].split("#")[1];
}

function loadImages() {
  const imagesHtml = sliderImages
    .map((image, index) => {
      return `<img id='image-${index + 1}' src='${image.url}' />`;
    })
    .join("");

  slider.innerHTML = imagesHtml;
  renderImageRegisterOnSliderEdit();
  renderControls();
  changeSliderTitle(getImageOnScreen());
}

function renderImageRegisterOnSliderEdit() {
  const registers = sliderImages
    .map((line, index) => {
      return `
        <div class='image image-${index + 1}'>
            <h2>${line.title}</h2>
            <button onClick={deleteImage(${index})}><i class="fa fa-trash fa-lg"></i></button> 
        </div>
      `;
    })
    .join("");

  editSliderContainer.innerHTML = registers;
}

function deleteImage(imageIndex) {
  sliderImages.splice(imageIndex, 1);
  console.log(imageIndex)

  if(imageIndex >= 1){
    window.location.href = `index.html#image-${imageIndex - 1}`
     loadImages();

     return
  }

  resetSlider();

}


