function activeSide(arrow) {
  arrow.classList.add("hidden");
  document.getElementById("left_arrow_holder").classList.remove("hidden");
  document.getElementById("sidebar").classList.add("activeSide");
}

function deactiveSide(arrow) {
  arrow.classList.add("hidden");
  document.getElementById("right_arrow_holder").classList.remove("hidden");
  document.getElementById("sidebar").classList.remove("activeSide");
}
