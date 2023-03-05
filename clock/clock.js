function zeroPad(numberStr) {
  return numberStr.padStart(2, "0");
}

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

  minutes = zeroPad(minutes.toString());
  seconds = zeroPad(seconds.toString());

  let time = `${hour}:${minutes}:${seconds} ${timeOfDay}`;
  document.getElementById("time").innerHTML = time;
}

setInterval('updateClock()', 500)