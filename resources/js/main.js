$(document).ready(function () {

    //SLIDE (BLOG SECTION)
    $('#slide2 .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                margin: 0,
                items: 1
            },
            600: {
                margin: 0,
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    //STICKY MENU
    $(".js-service-section").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });

    //SLIDE (ABOUT SECTION)
    const nextIcon = '<i class="fas fa-laptop-code"></i>';

    $('#about .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1,
                loop: true,
            },
            1000: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true
            }
        }
    })

    // MIXITUP (PORTFOLIO SECTION)
    var mixer = mixitup(".portfolio-img");
    
  

});

$(document).ready(function () {
    $(".rimon .owl-carousel").owlCarousel({
        items: 3,
        nav: true,
        loop: true,

    });

});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//SKILL BAR
$(document).ready(function(){
    $('#bar1').barfiller({
        barColor: "#314584"
    });
    $('#bar2').barfiller({
        barColor: "#ff3946"
    });
    $('#bar3').barfiller({
        barColor: "#314584"
    });
    $('#bar4').barfiller({
        barColor: "#ff3946"
    });
});
