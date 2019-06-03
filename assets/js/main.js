// auto-closes mobile hamburger menu when links are clicked on
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

// auto-update copyright year
document.getElementById("currentYear").innerHTML = new Date().getFullYear();