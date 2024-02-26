function getCurrentTime(){
    var date = new Date();
    return date
    // var hours = date.getHours();
    // var minutes = date.getMinutes();
    // var seconds = date.getSeconds();
    // hours = hours < 10 ? "0" + hours : hours;
    // minutes = minutes < 10 ? "0" + minutes : minutes;
    // seconds = seconds < 10 ? "0" + seconds : seconds;
    // return hours + ":" + minutes + ":" + seconds;
}
function displayCurrentTime(){
    var timeElement = document.getElementById("time");
    timeElement.innerHTML = getCurrentTime();
}
setInterval(displayCurrentTime,1000)
