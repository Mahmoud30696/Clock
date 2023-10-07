function updateTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var timezone = "PM";
    var timeString = `${hours}:${minutes}:${seconds} ${timezone}`;
    document.getElementById('time').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();
