$(function(){
  new WOW().init(); 
});

// jQuery.fn.center = function () {
//     this.css("position","absolute");
//     this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
//                                                 $(window).scrollLeft()) + "px");
//     return this;
// }

// $(document).ready(function() {
//     $('#travel-title').width($('#travel-title').width()/1.4);
//     $('#travel-title').center();
// });

function resizeCaptions() {
    var newWidth = parseInt($(".travel-image img").css('width'));
    var newHeight = parseInt($(".travel-image img").css('height'));
    $(".photo-grid figcaption").height(newHeight + 1 + "px").width(newWidth + 1 + "px");
    $(".photo-grid figcaption p").css("font-size", newWidth/15 + newHeight/15 + "px")
}

// function resizeLines() {
//     var windowWidth = $(window).width();
//     var workTitlePosition = $("#work-title").position();
//     var travelTitlePosition = $("#travel-title").position();

//     console.log(travelTitlePosition.left);

//     if (windowWidth > 960) {
//         $('#travel-title span:before').css("right", "500px");
//     }

// }

$(window).resize(function(){
    resizeCaptions();
    resizeLines();
});

$(document).ready(function() {
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
        responsiveWidth: 1100,
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

    resizeCaptions();
});