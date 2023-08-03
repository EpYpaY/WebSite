// icon nav barre
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('surli');
}
// scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            //active navbar liien
            navLinks.forEach(links => {
                links.classList.remove('surli');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('surli');
            });
            //acitve sec for anim scroll//
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    //st header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove icon&navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('surli');

    // animation footer
    window.addEventListener('scroll', function () {
        let footer = document.querySelector('footer');
        let scrollPosition = window.innerHeight + window.scrollY;
        let pageHeight = document.documentElement.scrollHeight;

        if (scrollPosition >= pageHeight - 10) {
            footer.classList.add('show-animate');
        } else {
            footer.classList.remove('show-animate');
        }
    });
}

// mix it up 
var mixer = mixitup('.portfolio-gallery');