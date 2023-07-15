
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

//Animating the nav bar items with scrollReveal()
const sr = ScrollReveal();

sr.reveal(".nav-link-wrapper", {
  delay: 200,
  duration: 1100,
  distance: "50px",
  origin: "top",
  interval: 400,
  mobile: false
});


//Animating the hero-section
sr.reveal(".name-heading", {
    delay: 200,
    duration: 1000,
    distance: "50px",
    interval: 400,
    origin: "left",
    easing: 'ease-in',
    mobile: true
});

sr.reveal(".main-heading", {
    delay: 300,
    duration: 1500,
    distance: "50px",
    interval: 400,
    origin: "right",
    easing: 'ease-in',
    mobile: true
});
sr.reveal(".my-details", {
    delay: 400,
    duration: 1100,
    distance: "50px",
    interval: 400,
    origin: "left",
    easing: 'ease-in',
    mobile: true
});

sr.reveal(".button", {
    delay: 500,
    duration: 1100,
    distance: "50px",
    interval: 400,
    origin: "right",
    easing: 'ease-in',
    mobile: true
});

sr.reveal(".hero-container", {
    delay: 300,
    duration: 2000,
    distance: "50px",
    interval: 400,
    mobile: true,
    easing: 'ease-out',
    desktop: false
});

sr.reveal(".about-me", {
    delay: 600,
    duration: 1000,
    distance: "70px",
    origin: "left",
    interval: 400,
    mobile: true,
    viewFactor: 0.9,
    easing: 'ease-out',
});

sr.reveal(".about-photo", {
    delay: 600,
    duration: 1000,
    distance: "70px",
    interval: 400,
    origin: "right",
    mobile: true,
    easing: 'ease-out',
    viewFactor: 0.4,
 
});

sr.reveal(".project ", {
    delay: 200,
    duration: 1000,
    distance: "70px",
    interval: 400,
    mobile: true,
    easing: 'ease-out',
    viewFactor: 0.4,
 
});



//Showing more/less projects

const showButton = document.getElementById("show-btn");

showButton.addEventListener("click", (e) => {
    e.preventDefault();
    const itemsToShow = document.querySelectorAll(".showMore");
    itemsToShow[0].style.marginTop = "-4rem";
    itemsToShow.forEach((item) => {
        if (item.style.display === "flex") {
            item.style.display = "none";
            item.style.opacity = 0;
            item.style.visibility = "hidden";
        } else {
            item.style.display = "flex";
            item.style.opacity = 1;
            item.style.visibility = "visible";

            //Animating the hidden projects when visible
            sr.reveal(".showMore ", {
                delay: 200,
                duration: 1000,
                distance: "70px",
                interval: 400,
                mobile: true,
                easing: 'ease-out',
                viewFactor: 0.4,
             
            });
        }
        
    })
    if(showButton.innerText === "Show more") {
        
        showButton.parentElement.style.marginBlock = "7rem";
        showButton.innerText = "Show less";
    } else {
        showButton.parentElement.style.marginBlock = "7rem";
        showButton.innerText = "Show more";

    }
})



