document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var header = document.getElementById('header');
        var navbar = document.getElementById('hamburger')
        var scrollPosition = window.scrollY;
    
        if (scrollPosition > 500) {
            header.classList.add('header-background');
            navbar.classList.add('navbar-white')
        } else {
            header.classList.remove('header-background');
            navbar.classList.remove('navbar-white')
        }
    });
});