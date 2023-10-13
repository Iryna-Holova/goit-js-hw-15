const controller = document.getElementById("font-size-control");
const text = document.getElementById("text");
text.style.fontSize = controller.value + "px";

controller.addEventListener("input", (e) => onRangeChange(e, text));

function onRangeChange(e, element) {
  element.style.fontSize = e.currentTarget.value + "px";
}
