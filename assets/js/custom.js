
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

        var texts = ["If anyone ever tells you to", "sweep the leg", "...", " ", " ", "Don't", " ", " ",]
        var count = 0;
        var sweep = function(){
          $('#sweep').text(texts[count]);
          count < 8 ? count++ : count = 0;

        };

        setInterval(sweep, 2000);

        var pic = function() {
          $('.pic').attr('src', 'assets/img/Me.jpg')
        }

        setInterval(pic, 6000);



});
