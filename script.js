


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
const appIcons = document.querySelector(".app-icons");
const workDisplay = document.querySelector(".work-display");

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

            // Animation when the work container comes into view
            worksH1.style.top = 0;
            setTimeout(() => {
                appIcons.style.right = 0;
            }, 3000);
            setTimeout(() => {
                workDisplay.style.visibility = "visible";
            }, 7000);
        }else if (isAtTheTop(servicesContainer)) {
            console.log(3);
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


// FOR MANUAL CHOUCE BAR

const bar = document.querySelector(".outer");
const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");
let trackChoice = true; // True represents monthly

bar.addEventListener("click", ()=>{
    bar.classList.toggle('move');
    monthly.classList.toggle('bold');
    yearly.classList.toggle('bold');
    if (trackChoice) {
        activateChange(yearlyChoice)
    }else{
        activateChange(monthlyChoice)
    }
    trackChoice = !(trackChoice);
})

const priceDisplayContainer = document.querySelector(".prices-display");

function activateChange(current) {
    priceDisplayContainer.innerHTML=`
        <div class="price">
            <p>${current[0].type}</p>
            <h1>${current[0].price}</h1>
            <p>per ${current[0].choice}</p>
            
            <ul>
                <li><i class="fa-solid fa-circle-check"></i>${current[0].details[0]}</li>
                <li><i class="fa-solid fa-circle-check"></i> ${current[0].details[1]}</li>
                <li><i class="fa-solid fa-circle-check"></i> ${current[0].details[2]}</li>
                <li><i class="fa-solid fa-circle-check"></i>${current[0].details[3]}</li>
            </ul>
            <button class="get-btn">Get in touch</button>
        </div>
        <div class="price">
            <p>${current[1].type}</p>
            <h1>${current[1].price}</h1>
            <p>per ${current[0].choice}</p>

            <ul>
                <li><i class="fa-solid fa-circle-check"></i>${current[1].details[0]}</li>
                <li><i class="fa-solid fa-circle-check"></i>${current[1].details[1]}</li>
                <li><i class="fa-solid fa-circle-check"></i>${current[1].details[2]}</li>
                <li><i class="fa-solid fa-circle-check"></i>${current[1].details[3]}</li>
                </ul>
            <button class="get-btn">Get in touch</button>
        </div>
        <div class="price">
            <p>${current[2].type}</p>
            <h1>${current[2].price}</h1>
            <p>per ${current[0].choice}</p>
            
            <ul>
            <li><i class="fa-solid fa-circle-check"></i>${current[2].details[0]}</li>
            <li><i class="fa-solid fa-circle-check"></i>${current[2].details[1]}</li>
            <li><i class="fa-solid fa-circle-check"></i>${current[2].details[2]}</li>
            <li><i class="fa-solid fa-circle-check"></i>${current[2].details[3]}</li>
            </ul>
            <button class="get-btn">Get in touch</button>
        </div>
    `
}
                
                
// Changing Choice Options from the Choice Bar


const monthlyChoice = [
    {
        choice: "month",
        type: 'Standard',
        price: '$500',
        details: [
            "1 Project",
            "Analytics",
            "Insight Panel",
            "Share Features"
        ]
    },
    {
        type: 'Professional',
        price: '$1000',
        details: [
            "2 Project",
            "Analytics",
            "Insight Panel",
            "Share Features"
        ]
    },
    {
        type: 'Business',
        price: '$2000',
        noOfProject: 1,
        details: [
            "Unlimited Project",
            "Analytics",
            "Insight Panel",
            "Share Features"
        ]
    },
]

const yearlyChoice = [
    {
        choice: "year",
        type: 'Standard',
        price: '$3000',
        details: [
            "12 Project",
            "Analytics",
            "Insight Panel",
            "Share Features"
        ]
    },
    {
        type: 'Professional',
        price: '$6000',
        details: [
            "24 Project",
            "Analytics",
            "Insight Panel",
            "Share Features"
        ]
    },
    {
        type: 'Business',
        price: '$12000',
        details: [
            "Unlimited Project",
            "Analytics",
            "Insight Panel",
            "Share Features"
        ]
    },
]

