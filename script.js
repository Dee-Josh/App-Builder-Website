


// FOR MAKING NAV BAR ACTIVE WHEN IN VIEW

// Nav Links

const allNavLinks = document.querySelectorAll(".nav-link:not(:first-of-type)")

// Containers
const home = document.querySelector(".hero-section");
const workContainer = document.querySelector(".works");
const servicesContainer = document.querySelector(".services");
const pricesContainer = document.querySelector(".prices");
const blogContainer = document.querySelector(".blog");
const contactContainer = document.querySelector(".contact");


// Function to determine if the container is in view

function isAtTheTop(element){
    const theContainer = element.getBoundingClientRect();
    // console.log(theContainer.top);
    return(
        // theContainer.top >= -(window.innerHeight * (2 / 3)) && theContainer.left>=0 && theContainer.right<=(window.innerWidth || documentElement.clientWidth)
        theContainer.top >= -(window.innerHeight * (2 / 3))
    );
}

const worksH1 = document.querySelector(".works-h1");

document.addEventListener("DOMContentLoaded", function() {
    console.log("working");
    setInterval(() => {
        if (isAtTheTop(home)) {
            console.log(1);
            allNavLinks.forEach(link=>{
                link.classList.remove("active-link")
            })
        }else if (isAtTheTop(workContainer)) {
            console.log(2);
            allNavLinks.forEach(link=>{
                link.classList.remove("active-link")
            })
            allNavLinks[0].classList.add("active-link");
            
            worksH1.style.top = 0;
        }else if (isAtTheTop(servicesContainer)) {
            allNavLinks.forEach(link=>{
                link.classList.remove("active-link")
            })
            allNavLinks[1].classList.add("active-link");
        }else if (isAtTheTop(pricesContainer)) {
            allNavLinks.forEach(link=>{
                link.classList.remove("active-link")
            })
            allNavLinks[2].classList.add("active-link");
        }else if (isAtTheTop(blogContainer)) {
            allNavLinks.forEach(link=>{
                link.classList.remove("active-link")
            })
            allNavLinks[3].classList.add("active-link");
        }else if (isAtTheTop(contactContainer)) {
            allNavLinks.forEach(link=>{
                link.classList.remove("active-link")
            })
            allNavLinks[4].classList.add("active-link");
        }
    }, 100);
})

// SWIPER

var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 1000,

    // Auto scroll

    autoplay: {
    delay: 5000, // Adjust the delay in milliseconds (5 seconds in this example)
    disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
    },

    // If you need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
   
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
        }
    },
});