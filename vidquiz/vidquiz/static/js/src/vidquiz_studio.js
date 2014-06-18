/* Javascript for VideoQuiz. */
function VideoQuizStudio(runtime, element) {

    /* Update fields of the form to the current values */
    function formUpdate(data) {

        $(".text_area").val(data.text_area);
        $(".quiz_file").val(data.quiz_file);
        $(".href").val(data.href);
        $(".width").val(data.width);
        $(".height").val(data.height);

    }

    /* Page is loaded. Do something. */
    $(function($) {

        // Grab current values and update the fields
        $.ajax({
            type: "POST",
            url: runtime.handlerUrl(element, 'studio_submit'),
            data: JSON.stringify({}),
            success: formUpdate
        });

        // Clicked Submit
        $('.btn_submit').click(function(eventObject) {

            $.ajax({
                type: "POST",
                url: runtime.handlerUrl(element, 'studio_submit'),
                data: JSON.stringify({
                    "text_area": $('.text_area').val(),
                    "quiz_file": $('.quiz_file').val(),
                    "href": $('.href').val(),
                    "width": $('.width').val(),
                    "height": $('.height').val()
                }),
                success: formUpdate
            });

        });

    });

}