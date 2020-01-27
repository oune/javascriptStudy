const title = document.querySelector("#title");

console.log(title);
title.addEventListener("click", handleClick);

function handleClick() {
  if(title.style.color === "black") {
    title.style.color = "blue";
  } else {
    title.style.color = "black";
  }
}

function init() {
  title.style.color = black;
}
