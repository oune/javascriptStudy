const title = document.querySelector("#title");

title.addEventListener("click", handleClick);

function handleClick() {
  if(title.style.color === "black") {
    title.style.color = "blue";
  } else {
    title.style.color = "black";
  }
}
