var timeDisplayEL = $("#currentDay");

function displayTime() {
    var rightNow = moment().format('MMMM Do, YYYY [at] h:mm a');
    timeDisplayEL.text(rightNow);
}
displayTime()

var text = $(".text-input")

var textInput = {
    text: text.value 
}

localStorage.setItem("textInput", (textInput));


