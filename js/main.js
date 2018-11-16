$(document).ready(function() {
    $('.next-question-1').on('click', function() {
        $('.question-1').hide();
        $('.question-2').show();
    });

    $('.next-question-2').on('click',function() {
        $('.question-2').hide();
        $('.question-3').show();
        $('.submit-btn').show();
    });

    $('.prev-question-2').on('click',function() {
        $('.question-2').hide();
        $('.question-1').show();
    });

    $('.prev-question-3').on('click',function() {
        $('.question-3').hide();
        $('.submit-btn').hide();
        $('.question-2').show();
    });

    $('.data-form-submit').on('click', function() {
        const goal = $('#goal').val();
        const salary = $('#salary').val();
        const familySize = $('#myRange').val();

        const data = {
            goal: goal,
            salary: salary,
            familySize : familySize,
        }

        $.ajax({
            url: '/submit_net',
            dataType: 'json',
            data: JSON.stringify({data}),
            type: 'POST',
            success: function (response) {
                console.log(response);
                window.location.href('/result.html');
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});
