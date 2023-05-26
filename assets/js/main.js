const SIDEBAR = document.getElementById("sidebar");
const RIGHT_ARROW = document.getElementById("right_arrow_holder");
const LEFT_ARROW = document.getElementById("left_arrow_holder");

function activeSide() {
  if (!SIDEBAR.classList.contains("activeSide")) {
    RIGHT_ARROW.classList.add("hidden");
    LEFT_ARROW.classList.remove("hidden");
    SIDEBAR.classList.add("activeSide");
  }
}

function deactiveSide() {
  if (SIDEBAR.classList.contains("activeSide")) {
    LEFT_ARROW.classList.add("hidden");
    RIGHT_ARROW.classList.remove("hidden");
    SIDEBAR.classList.remove("activeSide");
  }
}
