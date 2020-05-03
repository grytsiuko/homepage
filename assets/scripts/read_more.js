$('.read-more').click(function () {
    var hiddenList = $(this).prev();
    if (hiddenList.css('display') === 'block') {
        $(this).html('Read More');
        hiddenList.slideUp();
    } else {
        $(this).html('Read Less');
        hiddenList.slideDown();
    }
});