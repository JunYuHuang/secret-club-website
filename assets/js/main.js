// auto-closes mobile hamburger menu when links are clicked on
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

// auto-update copyright year
// var currentYears = document.getElementsByClassName("currentYear");
// for (var i = 0; 0 < currentYears.length; i++) {
//    currentYears[i].innerHTML = new Date().getFullYear();
// }
var currentYear = document.getElementById("currentYear");
currentYear.innerHTML = new Date().getFullYear();

// change navbar background color from transparent to black after scrolling past #home-splash-background
var fixedTopNavbar = document.getElementById("fixedTopNavbar");
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 10 ) {
        fixedTopNavbar.classList.add("bg-black");
        fixedTopNavbar.classList.remove("bg-transparent");
    } else {
        fixedTopNavbar.classList.add("bg-transparent");
        fixedTopNavbar.classList.remove("bg-black");
    }
};