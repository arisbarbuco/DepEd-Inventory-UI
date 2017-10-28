$('.btn-next').click(function(){
    $('.pagination-circle > .pagination-active').next('li').find('a').trigger('click');
});

$('.btn-previous').click(function(){
    $('.pagination-circle > .pagination-active').prev('li').find('a').trigger('click');
});

$('.add-quantity').click(function(){
    var sel = document.getElementById("item-quantity-list");
    var i = sel.option[sel.selectedIndex]
});

$('.minus-quantity').click(function(){
    $('.pagination-circle > .pagination-active').prev('li').find('a').trigger('click');
});

$(document).ready(function() {
    $(".limit-char-45").on('keydown', function(e) {
        var words = $(this).val().length;
        if (words <= 10) {
            $('.word-count').text(words);
            $('.word-left').text(10-words);
        }else{
            if (e.which !== 8) e.preventDefault();
        }
    });
});