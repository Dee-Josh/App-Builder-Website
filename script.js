


// FOR MAKING NAV BAR ACTIVE WHEN IN VIEW

// Nav Links

const allNavLinks = document.querySelectorAll(".header ul li:not(:first-of-type)")

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
        theContainer.top >= -(window.innerHeight / 2) && theContainer.left>=0 && theContainer.right<=(window.innerWidth || documentElement.clientWidth)
    );
}

setInterval(() => {
    if (isAtTheTop(home)) {
        allNavLinks.forEach(link=>{
            link.classList.remove("active-link")
        })
    }else if (isAtTheTop(workContainer)) {
        allNavLinks.forEach(link=>{
            link.classList.remove("active-link")
        })
        allNavLinks[0].classList.add("active-link");
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

// setInterval(() => {
//     if(isAtTheTop(home)){
//         allNavLinks.forEach(link=>{
//             link.classList.remove("active-link")
//         })
//     } else if(isAtTheTop(workContainer)){
//         allNavLinks.forEach(link=>{
//             link.classList.remove("active-link")
//         })
//         allNavLinks[0].classList.add("active-link");
//         console.log(true, allNavLinks, allNavLinks[0]);
//     }else if(isAtTheTop(experinece)){
//         allNavLinks.forEach(link=>{
//             link.classList.remove("active-link")
//         })
//         allNavLinks[1].classList.add("active-link");
//         bac2top.style.display = "flex";
//     }else if(isAtTheTop(portfolio)){
//         allNavLinks.forEach(link=>{
//             link.classList.remove("active-link")
//         })
//         allNavLinks[2].classList.add("active-link");
//         bac2top.style.display = "flex";
//     }else if(isAtTheTop(podcast)){
//         allNavLinks.forEach(link=>{
//             link.classList.remove("active-link")
//         })
//         allNavLinks[3].classList.add("active-link");
//         bac2top.style.display = "flex";
//     }else if(isAtTheTop(contact)){
//         allNavLinks.forEach(link=>{
//             link.classList.remove("active-link")
//         })
//         allNavLinks[4].classList.add("active-link");
//         bac2top.style.display = "flex";
//     }

// }, 100);
