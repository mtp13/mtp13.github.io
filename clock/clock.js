
function updateClock() {
  const date = new Date();
  let [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];

  let timeOfDay = (hour >= 12) ? "PM" : "AM";
  if (hour === 0) {
    hour = 12;
  } else {
    hour = (hour > 12) ? (hour -= 12) : hour;
  } 

  minutes = (minutes > 9) ? minutes : `0${minutes}`;
  seconds = (seconds > 9) ? seconds : `0${seconds}`;

  let time = `${hour}:${minutes}:${seconds} ${timeOfDay}`;
  document.getElementById("time").innerHTML = time;

}