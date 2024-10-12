// var span = document.getElementById("span");

// function time() {
//   var d = new Date();
//   var s = d.getSeconds();
//   var m = d.getMinutes();
//   var h = d.getHours();
//   span.textContent =
//     ("0" + h).substr(-2) +
//     ":" +
//     ("0" + m).substr(-2) +
//     ":" +
//     ("0" + s).substr(-2);
// }

// setInterval(time, 1000);

function getDateTime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  if (month.toString().length == 1) {
    month = "0" + month;
  }
  if (day.toString().length == 1) {
    day = "0" + day;
  }
  if (hour.toString().length == 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length == 1) {
    minute = "0" + minute;
  }
  if (second.toString().length == 1) {
    second = "0" + second;
  }
  var dateTime =
    hour + ":" + minute + ":" + second + " | " + year + "-" + month + "-" + day;
  return dateTime;
}

// example usage: realtime clock
setInterval(function () {
  currentTime = getDateTime();
  document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);
