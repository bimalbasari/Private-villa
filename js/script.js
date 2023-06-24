/**
 * Function for  when document is redy then run the code 
 */
$(document).ready(function () {
    /**
 * Function for  fast carousel
 */
    var owl = $('#carousel1');
    owl.owlCarousel({
        loop: true,
        margin: 100,
        nav: true,
        dots: true,
        navText: [
            ("<span> <i class='fa fa-arrow-left'></i></span>"),
            ('<span> <i class="fa fa-arrow-right"></i></span>')
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
    //  carousel dots enable
    $(".owl-dots").removeClass("disabled");
    /**
     * Function for  second carousel
     */
    var owls = $('#carousel2');
    owls.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        navText: [
            ("<span> <i class='fa fa-arrow-left'></i></span>"),
            ('<span> <i class="fa fa-arrow-right"></i></span>')
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })

    // carousel nav enable
    $(".owl-nav").removeClass("disabled");


})
// function for open card when click map area
function showCard(cardNumber) {
    // Hide all cards
    $(".mapCard").hide();

    // Show the selected card
    $("#card" + cardNumber).show();
}