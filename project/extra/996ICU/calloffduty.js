//https://evenzhanglll.github.io/project/extra/996ICU

function sentNotification() {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(function (result) {
        });;
    }
    else {
        var notification = new Notification('Get off work!', {
            icon: 'https://evenzhanglll.github.io/project/extra/996ICU/ExitSign.png',
            badge: 'https://evenzhanglll.github.io/project/extra/996ICU/ExitSign.png',
            body: 'Go home!',
            requireInteraction: true
        });
        notification.onclick = function () {
            window.open('https://evenzhanglll.github.io/project/extra/996ICU');
        };
    }
}

window.onbeforeunload = function () {
    return "Did you save your stuff?"
}

function updateTimer() {
    future = new Date();
    future.setHours(targetHour);
    future.setMinutes(targetMinute);
    future.setSeconds(0);
    now = new Date();
    diff = future - now;


    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);


    h = hours
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div class="timer">' +
        h + '<span>:</span>' +
        m + '<span>:</span>' +
        s + '</div>';

    if (secs <= 0) {
        sentNotification()
        clearInterval(countDownTimer)
        document.getElementById("title").innerHTML = "Hurray!";
        document.getElementById("timer")
        .innerHTML ="<img src='./ExitSign.png' style='width:300px'/>"
    }
}

var countDownTimer


function StartCD() {

    Notification.requestPermission().then(function (result) {
        // result可能是是granted, denied, 或default.
        console.log("request Permission:",result)
    });;


    targetHour = document.getElementById("timePicker-hour").value;
    targetMinute = document.getElementById("timePicker-minute").value;
    console.log("Set target time",targetHour, ":", targetMinute )
    updateTimer();
    countDownTimer = setInterval('updateTimer()', 1000);
    document.getElementById("TimerStarter").style.visibility = "hidden";
    document.getElementById("title").innerHTML = "Keep working hard for";
}