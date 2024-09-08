const slider_nav = document.querySelector('.slider_nav')
const slider = document.querySelector(".slider");
const imageTitle = document.querySelector('.header_title')
let sliderImages = [];

window.addEventListener('load', resetSlider())


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
    let activeId = window.location.href.split("/").reverse()[0].split("#")[1];
    console.log(activeId)
    const slider_nav_controls = sliderImages.map((item, index) => {
      return `<a href="#image-${index+1}" class="slider_nav_control ${(`image-${index+1}` === activeId || (sliderImages.length === 1 && index+1 === 1)) ? 'active' : ''}"></a>`
    }).join('')

    if(sliderImages.length === 1) resetSlider

    slider_nav.innerHTML = slider_nav_controls
}

function changeSliderTitle(imageId){
  const index = parseInt(imageId.split('-')[1]) === 0
      ?
      parseInt(imageId.split('-')[1])
      :
      parseInt(imageId.split('-')[1]) - 1

  console.log(sliderImages, index, imageId)
  imageTitle.textContent = sliderImages[
      index
  ].title
}

function resetSlider(){
  sliderImages.push({url: './assets/AddNew.png', title: 'ImageSlider'})
  
  const imagesHtml = sliderImages
    .map((image, index) => {
      return `<img id='image-${index + 1}' src='${image.url}' />`;
    })
    .join("");

  slider.innerHTML = imagesHtml;
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

  document.querySelector(".edit_slider").innerHTML = registers;
  renderControls();
  changeSliderTitle( window.location.href.split("/").reverse()[0].split("#")[1]);
  window.href = 'index.html#image-0'
}

