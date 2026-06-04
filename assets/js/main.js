$(document).ready(function() {
    $(".menuToggle").click(function () {
        $(".navWrapper").addClass("active");
        $(".overlay").addClass("active");
        $("body").css("overflow", "hidden");
    });

    $(".closeBtn, .overlay").click(function () {
        $(".navWrapper").removeClass("active");
        $(".overlay").removeClass("active");
        $("body").css("overflow", "auto");
        $(".dropdownMenu").slideUp();
        $(".dropdown").removeClass("open");
    });

    if ($(window).width() < 992) { 
        $(".dropdown > a").click(function(e){

            e.preventDefault();

            let dropdown = $(this).next(".dropdownMenu");

            $(".dropdownMenu").not(dropdown).slideUp();

            dropdown.slideToggle();
        });
    }
});

$(document).ready(function () {

    let headerHeight = $("header").outerHeight();

    $(window).scroll(function () {

        if ($(this).scrollTop() > 110) {

            $("header").addClass("fixed");
            $("body").css("padding-top", headerHeight + "px");

        } else {

            $("header").removeClass("fixed");
            $("body").css("padding-top", "0");

        }

    });

});