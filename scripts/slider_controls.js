const slider_nav = document.querySelector('.slider_nav')
const slider = document.querySelector(".slider");
let sliderImages = [];

window.addEventListener('load', resetToFirstImageOnReload())

slider.addEventListener("scroll", () => {
  let slider_nav_controls = document.querySelectorAll(".slider_nav_control");
  let imageId = window.location.href.split('/').reverse()[0].split('#')[1]
  slider_nav_controls.forEach(control => {
    control.classList.remove('active')
  });
  document.querySelector(`a[href*='#${imageId}']`).classList.add('active')
});

function renderControls (){
    let activeId = window.location.href.split('/').reverse()[0].split('#')[1]
    const slider_nav_controls = sliderImages.map((item, index) => {
      return `<a href="#image-${index+1}" class="slider_nav_control ${(`image-${index+1}` === activeId || (sliderImages.length === 1 && index+1 === 1)) ? 'active' : ''}"></a>`
    }).join('')

    if(sliderImages.length === 1) resetToFirstImageOnReload

    slider_nav.innerHTML = slider_nav_controls
}

function resetToFirstImageOnReload(){
  window.location.href = 'index.html#image-1'
}

