var min = 0;
var sec = 0;
var msec = 0;

// Gretting elements
var minHead = document.getElementById('min');
var secHead = document.getElementById('sec');
var msecHead = document.getElementById('msec');
var startBtn = document.getElementById('start')

// repeated function
var interval;

function timer() {
    msec++;
    msecHead.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        secHead.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++;
        minHead.innerHTML = min;
        sec = 0;
    }
}
// START STOP AND CLEAR
function start() {
    interval = setInterval(timer, 10);
    // startBtn.disabled = true;
    startBtn.setAttribute("disabled", "");
}

function pause() {
    clearInterval(interval);
    startBtn.disabled = false;
}

function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    msecHead.innerHTML = msec;
    secHead.innerHTML = sec;
    minHead.innerHTML = min;
    clearInterval(interval);
    startBtn.disabled = false;
}