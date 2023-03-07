function updateClock() {
  const date = new Date();
  const militaryTime = document.getElementById("military");
  let clock;

  if (militaryTime.checked) {
    clock = date.toTimeString().replace(/ GMT.*/, "");
  } else {
    clock = date.toLocaleTimeString();
  }
  document.getElementById("clock").innerHTML = clock;

  const showDate = document.getElementById("showDate");
  if (showDate.checked) {
    document.getElementById("date").innerHTML = date.toDateString();
  } else {
    document.getElementById("date").innerHTML = "";
  }
}

setInterval('updateClock()', 500)