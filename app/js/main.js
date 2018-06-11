
$(document).ready(function () {
    //Slider for section Works
    $('.works__slider').slick({
        dots: true,
        infinite: true,
        arrows: true,

        nextArrow: '<svg class="next" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="38" viewBox="0 0 22 38" xml:space="preserve"><path id="next" transform="translate(-1410 -3161)" fill="#e6e6e6" d="M1411.46 3161.14l20.06 17.87c.33.2.5.6.49.99.02.39-.16.78-.5.99l-20.05 17.87c-.47.3-1.07.12-1.34-.4-.27-.5-.1-1.16.36-1.45l19.1-17.01-19.1-17.01c-.47-.3-.63-.95-.36-1.46.27-.5.87-.68 1.34-.39z"/></svg>',
        prevArrow: '<svg class="prev" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="38" viewBox="0 0 22 38" xml:space="preserve"><path id="prev" transform="translate(-162 -3161)" fill="#e6e6e6" d="M183.88 3161.53c.27.51.1 1.16-.36 1.46l-19.1 17 19.1 17.02c.47.3.63.95.36 1.46-.27.5-.87.68-1.34.39l-20.06-17.87a1.1 1.1 0 0 1-.49-1c-.02-.38.16-.77.5-.98l20.05-17.87c.47-.3 1.07-.12 1.34.4z"/></svg>',
    });
    //Slider for section our-team
    $('.our-team__slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ],

        nextArrow: '<svg class="next" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="38" viewBox="0 0 22 38" xml:space="preserve"><path id="next" transform="translate(-1410 -3161)" fill="#665f60" d="M1411.46 3161.14l20.06 17.87c.33.2.5.6.49.99.02.39-.16.78-.5.99l-20.05 17.87c-.47.3-1.07.12-1.34-.4-.27-.5-.1-1.16.36-1.45l19.1-17.01-19.1-17.01c-.47-.3-.63-.95-.36-1.46.27-.5.87-.68 1.34-.39z"/></svg>',
        prevArrow: '<svg class="prev" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="38" viewBox="0 0 22 38" xml:space="preserve"><path id="prev" transform="translate(-162 -3161)" fill="#665f60" d="M183.88 3161.53c.27.51.1 1.16-.36 1.46l-19.1 17 19.1 17.02c.47.3.63.95.36 1.46-.27.5-.87.68-1.34.39l-20.06-17.87a1.1 1.1 0 0 1-.49-1c-.02-.38.16-.77.5-.98l20.05-17.87c.47-.3 1.07-.12 1.34.4z"/></svg>',
    });

});
//For map background in section Contact
function initMap() {
    var uluru = {lat: 48.964814, lng: 24.67531};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
};
//Hamburger menu
var menu_mob = document.getElementById("menu-mob");
function hamburger(x) {
    x.classList.toggle("change");
    menu_mob.classList.toggle("menu-mob-onclick");
};
//For button "button to top"
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
