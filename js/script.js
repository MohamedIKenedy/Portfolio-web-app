/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=> {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links=> {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY>100);



    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

};


/*==================== scroll reveal ====================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== typed js ====================*/

// JavaScript for smooth scrolling
const links = document.querySelectorAll('.navbar a');

for (const link of links) {
    link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: 'smooth'
    });
}

// new fullpage('body', {
//     sectionSelector: '.section',
//     autoScrolling: true,
//     scrollHorizontally: true
// });



// Get the 'Read More' button in the About section
const readMoreBtn = document.querySelector('.about .btn');

// Get the modal and close button
const modal = document.getElementById('myModal');
const closeModalBtn = document.querySelector('.modal-content .close');

// Function to open the modal
readMoreBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Function to close the modal when clicking the close button
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Get the button that opens the modal
var btn = document.getElementById("aboutBTN");

// When the user clicks the button, open the modal 
btn.onclick = function(event) {
  event.preventDefault();  // Prevent the default action
  modal.style.display = "block";
}
document.getElementById('aboutBTN').addEventListener('click', function() {
    document.getElementById('popup').classList.add('open-popup');
});

document.getElementById('closeBTN').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('open-popup');
});

document.getElementById('closeBTN').addEventListener('click', function() {
    var popup = document.getElementById('popup');
    popup.classList.add('close-popup');

    // Delay the removal of the .close-popup class
    setTimeout(function() {
        popup.classList.remove('close-popup');
    }, 400); // Match the duration of the transition
});


