"use strict";

function windowUp() {
  document.getElementById('car').style.display = "block";
}
setTimeout('windowUp();', 200);
function windowClose() {
  document.getElementById('car').style.display = "none";
}