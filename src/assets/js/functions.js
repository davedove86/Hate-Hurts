// Smmoth Scroll
$(function() {
  smoothScroll(1000);
});

function smoothScroll(duration) {
  $('a[href^="#"]').on('click', function(event) {
    var target = $($(this).attr('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate(
        {
          scrollTop: target.offset().top
        },
        duration
      );
    }
  });
}

// Cookies Banner
window.addEventListener('load', function() {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: '#000000',
        text: '#ffffff'
      },
      button: {
        background: '#ffffff',
        text: '#000000'
      }
    },
    theme: 'classic',
    content: {
      href: 'https://www.hatehurts.co.uk/cookies.html'
    }
  });
});
