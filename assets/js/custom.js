
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
            $(".player").mb_YTPlayer(); // .player - class to add for playing video ( see the div above to understand)
        });

        var texts = ["Before you go...", "Remember", "If anyone ever tells you to", "Sweep the leg", " ", "Don't", " "]
        var count = 0;
        var sweep = function(){
          $('#sweep').text(texts[count]);
          count < 7 ? count++ : count = 0;

        };

        setInterval(sweep, 2000);

        var pic = function() {
          $('.pic').attr('src', 'assets/img/Me.jpg')
        }

        setInterval(pic, 6000);

        // var resize = function(){
        //   console.log('resize called');
        //   var width = $(window).width();
        //   if(width <= 500){
        //     $('#video-sec').removeID('#video-sec')add;
        //   }
        //
        //
        // };
        // resize //trigger the resize event on page load.

});
