
//Animating the nav bar items with scrollReveal()
const sr = ScrollReveal();

sr.reveal(".nav-link-wrapper", {
  delay: 200,
  duration: 1500,
  distance: "50px",
  origin: "top",
  interval: 400,
  mobile: false
});

//Making the Nav Bar Responsive

const navContainer = document.getElementById("nav-container");
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navContainer.classList.toggle("active");

})

document.querySelectorAll(".nav-link-wrapper").forEach((link) => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navContainer.classList.remove("active");
    })

})

