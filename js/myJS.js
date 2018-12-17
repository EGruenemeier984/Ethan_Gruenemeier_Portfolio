// This function is for the nav when the button is clicked the width is set to 250 pixels and the margin.
// The nav button is also hidden when its pressed. 
// If the nav is opened on mobile then it makes the whole screen the nav.
function openNav() {
    document.getElementById("Mobilenav").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("navButton").style.visibility = "hidden";
    if (mobileNav.matches) {
        document.getElementById("Mobilenav").style.width = "100%";
        // document.getElementById("main").style.marginLeft = "100%";
    } else {
        document.getElementById("Mobilenav").style.width = "250px";
        // document.getElementById("main").style.marginLeft = "250px";
    }
}
// This closes nav makes the width and margins 0 and the button visible
function closeNav() {
    document.getElementById("Mobilenav").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
    document.getElementById("navButton").style.visibility = "visible";
}
// variable for the mobile nav when the users on mobile then creates listener to the open nav function.
var mobileNav = window.matchMedia("(max-width: 600px)");
mobileNav.addListener(openNav);

// New Function for sticky navigation 
// cache the element
var $navBar = $('#topnav');

// find original navigation bar position
var navPos = $navBar.offset().top;

// on scroll
$(window).scroll(function () {

    // get scroll position from top of the page
    var scrollPos = $(this).scrollTop();

    // check if scroll position is >= the nav position
    if (scrollPos >= navPos) {
        $navBar.addClass('sticky');
    } else {
        $navBar.removeClass('sticky');
    }

});

// ====================================================================================================
//                                    Old Sticky Navigation Function 
// These are the variables for the topnav and the offset of the top nav bar as it relates to the screen
// var navbar = document.getElementById("topnav");
// var sticky = document.body.scrollTop;
// This is the function for the sticky nav bar that removes or adds the sticky class based on its y axis offset.
// function stickyFunction() {
// if (window.sticky > 90 || document.documentElement.scrollTop > 90) {
// navbar.classList.add("sticky");
//   } else if (window.sticky < 90 || document.documentElement.scrollTop > 90) {
//       navbar.classList.remove("sticky")
//   }
// }
// ====================================================================================================
// Top Button Function
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Google Maps API

// Initialize and add the map
function initMap() {
    // The location of home
    var home = {
        lat: 33.677990,
        lng: -112.288630
    };
    // The map, centered at home
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: home
        });
    // The marker, positioned at home
    var marker = new google.maps.Marker({
        position: home,
        map: map
    });
}

// Code for the pre-loader

var loader;

function loadFunction() {
    loader = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("contentdiv").style.display = "block";

}