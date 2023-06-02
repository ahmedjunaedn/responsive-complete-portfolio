document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    window.addEventListener('scroll', () => {
        let fromTop = window.pageYOffset;

        sections.forEach((section) => {
            let sectionTop = section.offsetTop - 100;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute('id');

            if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                });
                document.querySelector(`header nav a[href="#${sectionId}"]`).classList.add('active');
            }
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', fromTop > 100);
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active')
    });

});
