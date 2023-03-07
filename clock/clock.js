function updateClock() {
  const date = new Date();
  const militaryTime = document.getElementById("military");
  const options = (militaryTime.checked) ? { hour12: false } : { hour12: true };

  const clock = date.toLocaleTimeString("en-us", options);
  document.getElementById("clock").innerHTML = clock;

  const showDate = document.getElementById("showDate");
  if (showDate.checked) {
    document.getElementById("date").innerHTML = date.toDateString();
  } else {
    document.getElementById("date").innerHTML = "";
  }
}

setInterval('updateClock()', 500)
