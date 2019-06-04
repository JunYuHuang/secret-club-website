// auto-closes mobile hamburger menu when links are clicked on
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

// auto-update copyright year
var currentYears = document.getElementsByClassName("currentYear");
for (var i = 0; 0 < currentYears.length; i++) {
   currentYears[i].innerHTML = new Date().getFullYear();
}