$(function () {    
// Navigation 
    $('.site-navigation').affix({
      offset: {
        top: $('.body').height()
            }
    });

    var $window = $(window);
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 768) {
            $('.nav a').on('click', function(){
                $('.navbar-toggle').click() //bootstrap 3.x by Richard
            });
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

// Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.site-header',
        offset: 60
    });


//jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 155
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });
}());


function copyToClipboard(text, btnId) {
    navigator.clipboard.writeText(text);

        const copyMsg = document.querySelector('#copy-btn-' + btnId);
        const copyMsg1 = copyMsg.querySelector('.copy-msg-1');
        const copyMsg2 = copyMsg.querySelector('.copy-msg-2');

    copyMsg1.style.display = 'none'; // Oculta "Copy to clipboard"
    copyMsg2.style.display = 'inline'; // Muestra "Copied!"
}

function resetCopyMsg(btnId) {

    const copyMsg = document.querySelector('#copy-btn-' + btnId);
    const copyMsg1 = copyMsg.querySelector('.copy-msg-1');
    const copyMsg2 = copyMsg.querySelector('.copy-msg-2');

    copyMsg1.style.display = 'inline';
    copyMsg2.style.display = 'none';
}

const cards = document.querySelectorAll('.badge-card');

for (const card of cards) {
  card.addEventListener('click', () => {
    // Vuelve a su estado original todas las tarjetas excepto la que se hizo clic
    for (const otherCard of cards) {
      if (otherCard !== card) {
        otherCard.classList.remove('flipped');
      }
    }

    // Voltea la tarjeta actual
    card.classList.toggle('flipped');
  });
}
