var sec = 0;
var min = 0;
var hours = 0;

var secVal = document.getElementById("Sec");
var minVal = document.getElementById("Min");
var hourVal = document.getElementById("hour");
var startbtn = document.getElementById("Startbtn");

var interval;

function renderVal() {
    secVal.innerHTML = sec;
    minVal.innerHTML = min;
    hourVal.innerHTML = hours;
}
function timeStart() {
    startbtn.disabled = true;
    stopbtn.disabled = false;

    sec++;
    if (sec == 60) {
        min++;
        sec = 0;
        if (min == 60) {
            hour++;
            min = 0;
        }
    }
    renderVal();
    console.log(sec);
}
function timer() {
    interval = setInterval(function () {
        timeStart()
    }, 1000);
}
function Stoptimer() {
    stopbtn.disabled = true;
    startbtn.disabled = false;
    clearInterval(interval);
}

function ResetTimer() {
    sec = 0;
    min = 0;
    hours = 0;

    Stoptimer();
    renderVal();

}