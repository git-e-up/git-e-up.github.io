
/*=============================================================
    Authour URL: www.designbootstrap.com

    http://www.designbootstrap.com/

    License: MIT

    http://opensource.org/licenses/MIT

    100% Free To use For Personal And Commercial Use.

    IN EXCHANGE JUST TELL PEOPLE ABOUT THIS WEBSITE

========================================================  */

$(document).ready(function () {
    // SCROLL SCRIPTS
        $('.scroll-me a').bind('click', function (event) { //just pass scroll-me class and start scrolling
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutQuad');
        event.preventDefault();
        });
    // BACKGROUND VIDEO SCRIPTS
        $(function () {
          var width = $(window).width();
          if (width > 736) {
            $(".player").mb_YTPlayer(); // .player - class to add for playing video ( see the div above to understand)
          }
          else {
            $("body").css('background-image', 'url(assets/img/chicago.gif)');
            $("#video-sec").css('background-image', 'url(assets/img/karate-kid.gif)');
          }

        });

        var texts = ["Before you go...", "Remember", "If anyone ever tells you to", "Sweep the leg", " ", "Don't", " "]
        var count = 0;
        var sweep = function(){
          $('#sweep').text(texts[count]);
          count < 7 ? count++ : count = 0;

        };

        setInterval(sweep, 2000);

        var pic = function() {
          $('.pic').attr('src', 'assets/img/Me.jpg');
        };


        var three = function() {
          var width = $(window).width();
          if (width > 736) {
            $('.pic').attr('alt', '3');
          }
          else {
            $('.pic').attr('alt', "It appears you're on a phone or have your browser on too narrow of a setting to view the video. You get this background gif instead :) ");
          }
        };

        var two = function() {
          var width = $(window).width();
          if (width > 736) {
            $('.pic').attr('alt', '2');
          }
          else {
            $('.pic').attr('alt', "It appears you're on a phone or have your browser on too narrow of a setting to view the video. You get this background gif instead :) ");
          }
        };

        var one = function() {
          var width = $(window).width();
          if (width > 736) {
            $('.pic').attr('alt', "here\'s me");
          }
          else {
            $('.pic').attr('alt', "It appears you're on a phone or have your browser on too narrow of a setting to view the video. You get this background gif instead :) ");
          }
        };


        setInterval(three, 3000);
        setInterval(two, 4000);
        setInterval(one, 5000);

        setInterval(pic, 6000);

        // var resize = function() {
        //   console.log('resize called');
        //   var width = $(window).width();
        //   if(width <= 500){
        //     $('#home').addClass(".player2");
        //   };
        //
        //
        // };
        // resize(); //trigger the resize event on page load.
        /////////////////

        // $( window ).resize(function() {
        //   $( "#video-sec").addClass("player2");
        // });

});
