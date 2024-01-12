const modal = document.querySelector(".configuration_modal");
const openModalButton = document.querySelector(".open_modal_button");
const closeModalButton = document.querySelector(".close_modal_button");
let sliderImages = ['https://images.unsplash.com/photo-1606166325695-ce4d64e3195f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'];

window.addEventListener('load', () => {
    loadImages()
})

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
    loadImages()
})

function loadImages(){
    const imagesHtml = sliderImages.map((image, index) => {
        return `<img id='image-${index+1}' src='${image}' />`
    })

    console.log(imagesHtml)

    slider.innerHTML = imagesHtml
}



