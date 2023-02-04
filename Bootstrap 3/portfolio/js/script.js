
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top -50
        },
        1250
      );
    } // End if
  });
});


//* parallax
//* about
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul')
    $(".pKanan").addClass("pMuncul");
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop()

    //* jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4+'%)'
    })

    
    $(".jumbotron h1").css({
      transform: "translate(0px, " + wScroll /2 + "%)",
    });

    
    $(".jumbotron p").css({
      transform: "translate(0px, " + wScroll /1.2 + "%)",
    });

    //* portfolio
    if(wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
              $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        })

       
    }
})