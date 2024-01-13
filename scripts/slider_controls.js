let slider_nav_controls = document.querySelectorAll(".slider_nav_control");
let slider = document.querySelector(".slider");

slider.addEventListener("scroll", () => {
  let imageId = window.location.href.split('/').reverse()[0].split('#').reverse()[0]

  slider_nav_controls.forEach(control => {
    control.classList.remove('active')
  });
  document.querySelector(`a[href*='#${imageId}']`).classList.add('active')
});

