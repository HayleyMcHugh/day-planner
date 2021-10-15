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

        localStorage.setItem(toDoTime, toDoText);
    });

    $(".row").each(function() {
        var hour = moment().hours();

        var rowHour = parseInt($(this).attr("id"));

        $("#9 .toDo").val(localStorage.getItem("9"))
        $("#10 .toDo").val(localStorage.getItem("10"))
        $("#11 .toDo").val(localStorage.getItem("11"))
        $("#12 .toDo").val(localStorage.getItem("12"))
        $("#13 .toDo").val(localStorage.getItem("13"))
        $("#14 .toDo").val(localStorage.getItem("14"))
        $("#15 .toDo").val(localStorage.getItem("15"))
        $("#16 .toDo").val(localStorage.getItem("16"))
        $("#17 .toDo").val(localStorage.getItem("17"))

        if (rowHour < hour) {
            $(this).addClass("past");
        }
        else if (rowHour === hour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });

    $(".deleteBtn").click(function() {
        localStorage.clear();
    });
});