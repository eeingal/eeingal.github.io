$(function(){
  new WOW().init(); 
});

function resizeCaptions() {
    var newWidth = parseInt($(".travel-image figure").css('width'));
    console.log(newWidth);
    console.log($(".photo-grid li").css('width'));
    console.log($(".travel-image img").css('width'));
    var newHeight = parseInt($(".travel-image figure").css('height'));
    $(".photo-grid figcaption").height(newHeight + 1 + "px").width(newWidth + 1 + "px");
    $(".photo-grid figcaption p").css("font-size", newWidth/15 + newHeight/15 + "px");
}

$(window).resize(resizeCaptions);

$(document).ready(function() {

    setTimeout(function(){
        resizeCaptions();
    }, 500);

    if (screen.width > 768) {
        $('#fullpage').fullpage({
            //Navigation
            menu: '#menu',
            lockAnchors: false,
            anchors:['home', 'work', 'travel', 'contact'],
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['Home', 'Work', 'Travel', 'Contact'],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',

            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: false,
            fitToSectionDelay: 1000,
            scrollBar: true,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: '#element1, .element2',
            scrollOverflow: true,
            scrollOverflowReset: false,
            scrollOverflowOptions: null,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //Design
            controlArrows: true,
            verticalCentered: true,
            sectionsColor : ['#fff', '#fff', '#fff', '#fff'],
            paddingTop: '1em',
            paddingBottom: '10px',
            fixedElements: '#header, .footer',
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,
            parallax: false,
            parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',

            lazyLoading: false,

            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
            afterResize: function(){},
            afterResponsive: function(isResponsive){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        });
    } else {
        $("#intro-subtitle").css("padding-top", "25vh");
        $("#contact-blurb-text").css("padding-top", "20vh");
        $("#travel-section").css("margin-top", "-10vh");

        // var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
        // if (isSafari) {
        //     $(".photo-grid li").click(function () {
        //         $(".photo-grid li figcaption").css("opacity", "0");
        //         setTimeout(function(){
        //             $(this).find("figcaption").css("opacity", "1");
        //         }, 200);
        //     });
        // }

    }
});

// $(document).ready(resizeCaptions);
// $(window).bind('page:change', resizeCaptions);

// $(".photo-grid").load(function() {
//     resizeCaptions();
// });

// $(".travel-image img").load(function() {
//     resizeCaptions();
// });