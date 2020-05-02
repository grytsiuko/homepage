$('.read-more').click(function () {
    var hiddenList = $(this).prev();
    if (hiddenList.attr('display') === 'block') {
        $(this).html('Read More');
        hiddenList.slideUp();
        hiddenList.attr('display', 'none');
    } else {
        $(this).html('Read Less');
        hiddenList.slideDown();
        hiddenList.attr('display', 'block');
    }
});