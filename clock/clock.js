
function updateClock() {
  const date = new Date();
  // const date = new Date("1995-12-17T23:24:00");
  let [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];

  let timeOfDay = (hour < 12) ? "AM" : "PM";
  if (hour === 0) {
    hour = 12;
  } else {
    hour = (hour <= 12) ? hour : (hour -= 12);
  }

  minutes = (minutes >= 10) ? minutes : `0${minutes}`;
  seconds = (seconds >= 10) ? seconds : `0${seconds}`;

  let time = `${hour}:${minutes}:${seconds} ${timeOfDay}`;
  document.getElementById("time").innerHTML = time;
}

setInterval('updateClock()', 500)