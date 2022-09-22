const counter = document.querySelector(".counter");
const loadBar = document.querySelector(".loading-bar-front");

let index = 0;

updateNum();

function updateNum() {
  counter.innerHTML = index + "%";
  loadBar.style.width = index + "%";
  index++;
  if(index < 101){
    setTimeout(updateNum, 20);
  }
}