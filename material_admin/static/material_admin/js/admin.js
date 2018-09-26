document.addEventListener('DOMContentLoaded', function() {
    var collapsible = document.querySelectorAll('.collapsible');
     M.Collapsible.init(collapsible, {
        accordion: false
    });

    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems);

    $('select').formSelect();
    const messages = $('.messagelist > .success');
    for(let message of messages) {
        M.toast({html: message.innerText, classes: 'rounded success-toast'});
    }
});

$('#side-bar, #mobile-demo').mouseenter(
    function() {
        $('.scroll-pane').jScrollPane();
    }
).mouseleave(
    function() {
        $('.scroll-pane').data('jsp').destroy();
    }
);

$('.collapsible-body > .active').closest('.scrollspy').addClass('active');
