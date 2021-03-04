/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const navbar = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const addNavbar = () => {
    for (let item of sections){
    const archor = document.createElement("a");
    archor.href = item.id;
    archor.id = item.id;
    archor.textContent = item.dataset.nav;
    archor.classList.add("menu__link");     
    const section = document.createElement("li");
    section.appendChild(archor);
    navbar.appendChild(section);  
    } 
};
addNavbar();


// Add class 'active' to section when near top of viewport
const makeActive = ()=> {
    for (const section of sections) {
      const box = section.getBoundingClientRect();
      if (box.top <= 200 && box.bottom >= 200) {
        section.classList.add('your-active-class');
        document.querySelector(`#${section.id}`).classList.add("your-active-class");
      } else {
        section.classList.remove('your-active-class');
        document.querySelector(`#${section.id}`).classList.remove("your-active-class");
      } 
    }
  }

  // Make sections active
document.addEventListener("scroll", () =>{
    makeActive();
  });

// Scroll to anchor ID using scrollTO event
navbar.addEventListener('click', (event) => {
    event.preventDefault()
    const targetSection = document.querySelector(`section#${event.target.getAttribute("href")}`);
    targetSection.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 




