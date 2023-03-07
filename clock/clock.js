function updateClock() {
  const date = new Date();
  const militaryTimeChecked = document.getElementById("military").checked;
  const timeOption = militaryTimeChecked ? { hour12: false } : { hour12: true };
  const dateOption = { dateStyle: "full" };

  const clock = date.toLocaleTimeString("en-us", timeOption);
  document.getElementById("clock").innerHTML = clock;

  const showDateChecked = document.getElementById("showDate").checked;
  const dateElement = document.getElementById("date");
  dateElement.innerHTML = "";
  if (showDateChecked) {
    dateElement.innerHTML = date.toLocaleDateString("en-us", dateOption);
  }
}

setInterval('updateClock()', 500)
