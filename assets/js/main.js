// auto-closes mobile hamburger menu when links are clicked on
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

var currentYear = document.getElementById("currentYear");
currentYear.innerHTML = new Date().getFullYear();

// change navbar background color from transparent to black after scrolling past #home-splash-background
// var fixedTopNavbar = document.getElementById("fixedTopNavbar");
// window.onscroll = function() {
//     "use strict";
//     if (document.body.scrollTop >= 1000 ) {
//         fixedTopNavbar.classList.add("bg-black");
//         fixedTopNavbar.classList.remove("bg-transparent");
//     } else {
//         fixedTopNavbar.classList.add("bg-transparent");
//         fixedTopNavbar.classList.remove("bg-black");
//     }
// };

// lazy loading sourced from https://www.youtube.com/watch?v=aUjBvuUdkhg
const targets = document.querySelectorAll('img');
const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-lazy');
                img.setAttribute('src', src);
                img.classList.add('img-fade');
                observer.disconnect();
            }
        });
    });
    io.observe(target);
}
targets.forEach(lazyLoad);