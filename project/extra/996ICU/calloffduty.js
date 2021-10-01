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
        Notification.requestPermission().then(function(result) {
            // result可能是是granted, denied, 或default.
            console.log(result)
          });;
        console.log("not granted")
    }
    else {
        var notification = new Notification('Notification title', {
            icon: 'https://evenzhanglll.github.io/project/extra/996ICU/ExitSign.png',
            body: 'Get off work! Go home!',
        });
        notification.onclick = function () {
            window.open('https://evenzhanglll.github.io/project/extra/996ICU/Index.html');
        };
    }
}