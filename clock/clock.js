// eslint-disable-next-line no-unused-vars
function updateClock() {
  const date = new Date();
  const timeOption = $("#military").prop("checked")
    ? { hour12: false }
    : { hour12: true };
  const dateOption = { dateStyle: "full" };
  $("#clock").text(date.toLocaleTimeString("en-us", timeOption));
  $("#date").text(date.toLocaleDateString("en-us", dateOption));
  if ($("#showDate").prop("checked")) {
    $("#date").css({ visibility: "visible" });
  } else {
    $("#date").css({ visibility: "hidden" });
  }
}

setInterval("updateClock()", 1000);
