// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
    }

    Notification.requestPermission().then(function(result) {
        // result可能是是granted, denied, 或default.
        console.log(result)
      });
});


function sentNotification() {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
        console.log("not granted")
    }
    else {
        var notification = new Notification('Notification title', {
            icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
            body: 'Hey there! You\'ve been notified!',
        });
        notification.onclick = function () {
            window.open('http://stackoverflow.com/a/13328397/1269037');
        };
    }
}