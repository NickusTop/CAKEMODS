const aChoose = document.getElementById("a-choose");
const btnSign = document.querySelector(".button-sig");
const divChoose = document.querySelector(".div-choose");
const menuSign = document.querySelector(".menu-sign");
const overflowChoose = document.querySelector(".overflow-ch");

aChoose.addEventListener("click", aChooseClick);
overflowChoose.addEventListener("click", overflowChooseClick);
btnSign.addEventListener("click", btnSignClick);
function aChooseClick() {
  divChoose.style.display = "block";
  overflowChoose.style.display = "block";
}

function overflowChooseClick() {
  divChoose.style.display = "none";
  overflowChoose.style.display = "none";
  menuSign.style.display = "none";
}

function btnSignClick() {
  menuSign.style.display = "block";
  overflowChoose.style.display = "block";
}
