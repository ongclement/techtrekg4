$(document).ready(function() {
    $('.next-question-1').on('click', function() {
        $('.question-1').hide();
        $('.question-2').show();
    });

    $('.next-question-2').on('click',function() {
        $('.question-2').hide();
        $('.question-3').show();
    });

    $('.prev-question-2').on('click',function() {
        $('.question-2').hide();
        $('.question-1').show();
    });

    $('.prev-question-3').on('click',function() {
        $('.question-3').hide();
        $('.question-2').show();
    });

    $('.form-submit-btn').click();
});
