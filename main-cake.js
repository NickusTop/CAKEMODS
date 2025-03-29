const aChoose = document.getElementById("a-choose");
const divChoose = document.querySelector(".div-choose");
const overflowChoose = document.querySelector(".overflow-ch");

aChoose.addEventListener("click", aChooseClick);
overflowChoose.addEventListener("click", overflowChooseClick);
function aChooseClick() {
  divChoose.style.display = "block";
  overflowChoose.style.display = "block";
}

function overflowChooseClick() {
  divChoose.style.display = "none";
  overflowChoose.style.display = "none";
}
