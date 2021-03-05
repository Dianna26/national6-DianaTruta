console.log("Homework 5");

let seconds = 0;
const secondsParagraphs = document.querySelectorAll(".seconds p");
console.log(secondsParagraphs);

let minutes = 0;
const minutesParagraphs = document.querySelectorAll(".minutes p");
console.log(minutesParagraphs);

let hours = 0;
const hoursParagraphs = document.querySelectorAll(".hours p");
console.log(hoursParagraphs);

let stopWatch = false;
let runningWatch;

document.getElementById("start-button").addEventListener("click", function () {
    if (stopWatch == false) {
        stopWatch = true;

        runningWatch = setInterval(function () {
            const secondsString = seconds + "";
            const secondsStringArray = secondsString.split("");
            //console.log(secondsStringArray);

            if (secondsStringArray.length === 2) {
                secondsParagraphs[0].innerText = secondsStringArray[0];
                secondsParagraphs[1].innerText = secondsStringArray[1];
            } else {
                secondsParagraphs[0].innerText = 0;
                secondsParagraphs[1].innerText = secondsStringArray[0];
            }

            const minutesString = minutes + "";
            const minutesStringArray = minutesString.split("");
            //console.log(minutesStringArray);

            if (minutesStringArray.length === 2) {
                minutesParagraphs[0].innerText = minutesStringArray[0];
                minutesParagraphs[1].innerText = minutesStringArray[1];
            } else {
                minutesParagraphs[0].innerText = 0;
                minutesParagraphs[1].innerText = minutesStringArray[0];
            }

            const hoursString = hours + "";
            const hoursStringArray = hoursString.split("");
            //console.log(hoursStringArray);

            if (hoursStringArray.length === 2) {
                hoursParagraphs[0].innerText = hoursStringArray[0];
                hoursParagraphs[1].innerText = hoursStringArray[1];
            } else {
                hoursParagraphs[0].innerText = 0;
                hoursParagraphs[1].innerText = hoursStringArray[0];
            }


            if (seconds === 59) {
                seconds = 0;
                minutes++;
            } else {
                seconds++
            }

            if (minutes === 59) {
                minutes = 0;
                hours++;
            }
        }, 10);
    }

})

document.getElementById("stop-button").addEventListener("click", function () {
    if (stopWatch == true) {
        stopWatch = false;
        clearInterval(runningWatch);
    }
})

document.getElementById("reset-button").addEventListener("click", function () {
    hours = 0;
    minutes = 0;
    seconds = 0;
    secondsParagraphs[0].innerText = 0;
    secondsParagraphs[1].innerText = 0;
    minutesParagraphs[0].innerText = 0;
    minutesParagraphs[1].innerText = 0;
    hoursParagraphs[0].innerText = 0;
    hoursParagraphs[1].innerText = 0;
    clearInterval(runningWatch);
    if (stopWatch = true) {
        stopWatch = false;
    } else {
        stopWatch = true;
    }

})

document.getElementById("save-button").addEventListener("click", function() {

    document.getElementById("digital-clock-saves").innerHTML = document.getElementById("digital-clock-saves").innerHTML +
    '<div class="digital-clock">' + 
     '<div class="hours">' +
     '<p>'+ hoursParagraphs[0].innerText  +'</p>' +
     '<p>'+ hoursParagraphs[1].innerText  +'</p>' +   
     '</div>' +
     '<p>:</p>' + 
     '<div class="minutes">' +
     '<p>'+ minutesParagraphs[0].innerText  +'</p>' +
     '<p>'+ minutesParagraphs[1].innerText  +'</p>' +
     '</div>' +
     '<p>:</p>' + 
     '<div class="seconds">' +
     '<p>'+ secondsParagraphs[0].innerText +'</p>' +   
    '<p>'+ secondsParagraphs[1].innerText +'</p>' + 
     '</div>' +
     '</div>';

})