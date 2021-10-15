var timeDisplayEL = $("#currentDay");

function displayTime() {
var rightNow = moment().format('MMMM Do, YYYY [at] h:mm a');
timeDisplayEL.text(rightNow);
}
displayTime()




$(document).ready(function() {

    $(".saveBtn").click(function() {
        var toDoText=$(this).siblings(".toDo").val();
        var toDoTime=$(this).parent().attr("id");

        console.log(toDoText);
        console.log(toDoTime);

        localStorage.setItem(toDoTime, toDoText);
    });
})

//     $(".row").each(function() {
//         var hour = moment().hours();
//         console.log(hour);

//         var rowHour = parseInt($(this).attr("id"));

//         console.log(localStorage.getItem(rowHour));
//         console.log("this:", $(this).attr("id"));

//         var textArea = document.querySelector(".text" + rowHour)

//         // textArea.value = localStorage.getItem(rowHour)

//         if (rowHour < hour) {
//             $(this).addClass("past");
//         }
//         else if (rowHour === hour) {
//             $(this).removeClass("past");
//             $(this).addClass("present");
//         }
//         else {
//             $(this).removeClass("past");
//             $(this).removeClass("present");
//             $(this).addClass("future");
//         }
//     });
// });