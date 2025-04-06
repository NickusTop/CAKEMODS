const aChoose = document.getElementById("a-choose");
const btnSign = document.querySelector(".button-sig");
const divChoose = document.querySelector(".div-choose");
const menuSign = document.querySelector(".menu-sign");
const overflowChoose = document.querySelector(".overflow-ch");
const overflowAu = document.querySelector(".overflow-au");
const pWrong = document.querySelector(".p-wrong-name");
const iEye = document.querySelector(".i-eye");
const iEyeClosed = document.querySelector(".i-eye-closed");

aChoose.addEventListener("click", aChooseClick);
overflowChoose.addEventListener("click", overflowChooseClick);
overflowAu.addEventListener("click", overflowAuClick);
iEye.addEventListener("click", iEyeClick);
iEyeClosed.addEventListener("click", iEyeClosedClick);
// btnSign.addEventListener("click", btnSignClick);

function aChooseClick() {
  divChoose.style.display = "block";
  overflowChoose.style.display = "block";
}

function overflowChooseClick() {
  divChoose.style.display = "none";
  overflowChoose.style.display = "none";
  menuSign.style.display = "none";
  document.getElementById("authMenu").style.display = "none";
}
function overflowAuClick() {
  document.getElementById("authMenu").style.display = "none";
  overflowAu.style.display = "none";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

function iEyeClick() {
  iEye.style.display = "none";
  iEyeClosed.classList.remove("hidden");
  document.getElementById("password").setAttribute("type", "text");
}
function iEyeClosedClick() {
  iEyeClosed.classList.add("hidden");
  iEye.style.display = "flex";
  document.getElementById("password").setAttribute("type", "password");
}
// Открытие/закрытие меню авторизации
document.getElementById("authButton").addEventListener("click", function () {
  document.getElementById("authMenu").style.display = "flex";
  overflowAu.style.display = "block";
});

// Проверка данных и сохранение в LocalStorage
document
  .getElementById("continueButton")
  .addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const usernameRegex = /^[a-zA-Z0-9_]{6,12}$/; // Разрешены только буквы, цифры и _
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9_]{8,32}$/; // То же самое для пароля

    if (usernameRegex.test(username) && passwordRegex.test(password)) {
      // Получаем сохраненные данные, если они есть
      const storedData = JSON.parse(localStorage.getItem("users")) || {};

      // Если пользователь уже существует, выводим ошибку
      if (storedData[username]) {
        return;
      }

      // Сохраняем данные пользователя
      storedData[username] = password;
      localStorage.setItem("users", JSON.stringify(storedData));

      // Закрытие меню и отображение кнопки с именем
      document.getElementById("authMenu").style.display = "none";
      overflowAu.style.display = "none";
      document.getElementById("authButton").style.display = "none";
      document.getElementById("userButton").style.display = "flex";
      document.getElementById("buttonExit").style.display = "flex";
      document.getElementById("userName").textContent = username;
    }
  });

// Загрузка данных при перезагрузке страницы
window.addEventListener("load", function () {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    document.getElementById("authButton").style.display = "none";
    document.getElementById("userButton").style.display = "flex";
    document.getElementById("buttonExit").style.display = "flex";
    document.getElementById("userName").textContent = savedUsername;
    document.getElementById("a-create").style.display = "flex";
    document.getElementById("mrt").style.marginRight = "20px";
  } else {
    document.getElementById("a-create").style.display = "none";
    document.getElementById("mrt").style.marginRight = "0px";
  }
});

// Обработчик для входа
document
  .getElementById("continueButton")
  .addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedData = JSON.parse(localStorage.getItem("users")) || {};

    // Проверяем, существует ли пользователь и правильный ли пароль
    if (storedData[username] && storedData[username] === password) {
      // Сохранение имени пользователя в LocalStorage
      localStorage.setItem("username", username);

      // Закрытие меню и отображение кнопки с именем
      document.getElementById("authMenu").style.display = "none";
      overflowAu.style.display = "none";
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      document.getElementById("authButton").style.display = "none";
      document.getElementById("userButton").style.display = "flex";
      document.getElementById("buttonExit").style.display = "flex";
      document.getElementById("userName").textContent = username;
      location.reload();
    } else {
      pWrong.style.display = "block";
      setTimeout(() => {
        pWrong.style.display = "none";
      }, 8000);
      pHelp.style.display = "block";
      setTimeout(() => {
        pHelp.style.display = "none";
      }, 4000);
    }
  });

// Обработчик для выхода из аккаунта
document.getElementById("buttonExit").addEventListener("click", function () {
  // Скрытие кнопки пользователя и отображение кнопки входа
  document.getElementById("userButton").style.display = "none";
  document.getElementById("authButton").style.display = "flex";
  document.getElementById("buttonExit").style.display = "none";
  document.getElementById("userName").textContent = "";

  // Убираем отображение меню авторизации
  document.getElementById("authMenu").style.display = "none";
  overflowAu.style.display = "none";

  // Опционально, если нужно очистить сохраненные данные о пользователе из интерфейса
  localStorage.removeItem("username");
  location.reload();
});
document.getElementById("username").addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-Z0-9_]/g, "");
});

document.getElementById("password").addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-Z0-9_]/g, "");
});

const aInst = document.querySelector(".a-inst");
const iCh = document.querySelector(".i-chevron");
const divNS = document.querySelector(".div-ns");

aInst.addEventListener("click", aInstClick);

function aInstClick() {
  if (iCh.classList.contains("down")) {
    divNS.style.display = "block";
    iCh.classList.remove("down");
    iCh.classList.add("up");
  } else if (iCh.classList.contains("up")) {
    divNS.style.display = "none";
    iCh.classList.remove("up");
    iCh.classList.add("down");
  }
}
