function zeroPad(numberStr) {
  return numberStr.padStart(2, "0");
}

function updateClock() {
  const TWELVE = "12Hour";
  let timeOfDay ="";
  const date = new Date();   // const date = new Date("1995-12-17T23:24:00");
  let [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  
  const timeFormat = document.querySelector('input[name="timeFormat"]:checked').value;
  if (timeFormat === TWELVE) {
    timeOfDay = (hour < 12) ? "AM" : "PM";
    if (hour === 0) {
      hour = 12;
    } else {
      hour = (hour <= 12) ? hour : (hour -= 12);
    }
  }

  minutes = zeroPad(minutes.toString());
  seconds = zeroPad(seconds.toString());

  let clock = `${hour}:${minutes}:${seconds} ${timeOfDay}`;
  document.getElementById("clock").innerHTML = clock;

  const showDate = document.querySelector('input[name="showDate"]:checked');
  if (showDate) {
    document.getElementById("date").innerHTML = date.toDateString();
  } else {
    document.getElementById("date").innerHTML = " ";
  }

}

setInterval('updateClock()', 500)