$(document).ready(function(){

    $(".rslides").responsiveSlides({
        nav: true,   
        pager: true, 
    });

    $("#banner .next").html("<i class='fas fa-chevron-right'></i>")
    $("#banner .prev").html("<i class='fas fa-chevron-left'></i>")
    $("#banner .rslides_tabs li a").html("")
    

})