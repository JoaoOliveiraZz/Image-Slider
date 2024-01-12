let images = document.querySelectorAll("img");
let slider_nav_controls = document.querySelectorAll(".slider_nav_control");
let slider = document.querySelector(".slider");

slider.addEventListener("scroll", () => {
  images.forEach((img) => {
    let left = slider.scrollLeft;
    let offset = img.offsetLeft;
    let width = img.offsetWidth;
    let id = img.getAttribute("id");

    if (Math.round(left) >= offset && left <= offset + width) {
      slider_nav_controls.forEach((control) => {
        control.classList.remove("active");
        document.querySelector("a[href*=" + id + "]").classList.add("active");
      });
    }
  });
});

