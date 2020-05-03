$('.read-more').click(function () {
    var hiddenList = $(this).prev();
    if (hiddenList.attr('display') === 'block') {
        $(this).html('Read More');
        hiddenList.slideUp();
        hiddenList.css({'display': 'block'});
    } else {
        $(this).html('Read Less');
        hiddenList.slideDown();
        hiddenList.css({'display': 'block'});
    }
});