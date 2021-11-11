var showHide = document.getElementById("showHide");
var demo = document.getElementById("demo");
showHide.onclick = function() {
  if (demo.style.display == "block") {
    demo.style.display = "none";
  } else {
    demo.style.display = "block";
  }
}