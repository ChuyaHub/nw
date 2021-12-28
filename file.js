jQuery(document).ready(function ($) {
  $(".smoothscroll").on("click", function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top
        },
        800,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });
});

function StickyNav() {
  var x = document.getElementById("NavToggle");
  if (x.classList.contains("show")) {
    x.classList.remove("show");
  } else {
    x.classList.add("show");
  }
}

scrollingElement = document.scrollingElement || document.body;
function scrollToBottom() {
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
}

function scrollToTop(id) {
  scrollingElement.scrollTop = 0;
}

//Require jQuery
function scrollSmoothToBottom(id) {
  $(scrollingElement).animate(
    {
      scrollTop: document.body.scrollHeight
    },
    500
  );
}

//Require jQuery
function scrollSmoothToTop(id) {
  $(scrollingElement).animate(
    {
      scrollTop: 0
    },
    500
  );
}



 $(window).scroll(function(){
      if ($(this).scrollTop() > 300) {
          $('#ScrollNav').addClass('appear');
      } else {
          $('#ScrollNav').removeClass('appear');
      }
  });

  var main = function() {
    $('.cookie').click(function() {
      $.ajax({
        dataType: "jsonp",
        jsonpCallback: "parseQuote",
        url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote",
        success: function(results) {
          $('.box').text(results.quoteText);
          //   $('#author').text(results.quoteAuthor);
        }
      });
    })
  }
  
  $(document).ready(main);


  