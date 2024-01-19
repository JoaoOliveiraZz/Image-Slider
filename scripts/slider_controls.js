const slider_nav = document.querySelector('.slider_nav')
const slider = document.querySelector(".slider");
const imageTitle = document.querySelector('.header_title')
let sliderImages = [];

window.addEventListener('load', resetToFirstImageOnReload())

slider.addEventListener("scroll", () => {
  let slider_nav_controls = document.querySelectorAll(".slider_nav_control");
  let imageId = window.location.href.split('/').reverse()[0].split('#')[1]
  slider_nav_controls.forEach(control => {
    control.classList.remove('active')
  });
  document.querySelector(`a[href*='#${imageId}']`).classList.add('active')
  changeSliderTitle(imageId)

});

function renderControls (){
    let activeId = getImageOnScreen();
    const slider_nav_controls = sliderImages.map((item, index) => {
      return `<a href="#image-${index+1}" class="slider_nav_control ${(`image-${index+1}` === activeId || (sliderImages.length === 1 && index+1 === 1)) ? 'active' : ''}"></a>`
    }).join('')

    if(sliderImages.length === 1) resetToFirstImageOnReload

    slider_nav.innerHTML = slider_nav_controls
}

function changeSliderTitle(imageId){
  imageTitle.textContent = sliderImages[parseInt(imageId.split('-')[1]) - 1].title
}

function resetToFirstImageOnReload(){
  window.location.href = 'index.html#image-1'
}

