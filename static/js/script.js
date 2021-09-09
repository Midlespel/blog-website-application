$(document).ready(function () {
    $(".toggle").click(function () {
        $(".nav-menubar, .social").slideToggle("slow");
    });


    // Owl Carousel for favorites blog post
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
    });
});
