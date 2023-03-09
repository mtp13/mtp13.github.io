function updateClock() {
  const date = new Date();
  const timeOption = $("#military").prop("checked")
    ? { hour12: false }
    : { hour12: true };
  const dateOption = { dateStyle: "full" };

  $("#clock").text(date.toLocaleTimeString("en-us", timeOption));

  $("#date").hide();
  if ($("#showDate").prop("checked")) {
    $("#date").show().text(date.toLocaleDateString("en-us", dateOption));
  }
}

setInterval("updateClock()", 500);
