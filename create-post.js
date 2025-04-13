function updateButtonText() {
  const fileInput = document.getElementById("file-upload");
  const button = document.querySelector(".custom-file-upload");

  if (fileInput.files.length > 0) {
    button.textContent = "Файл выбран: " + fileInput.files[0].name; // Изменяем текст кнопки на имя выбранного файла
    button.classList.add("selected"); // Меняем цвет кнопки после выбора файла
  } else {
    button.textContent = "Выберите файл"; // Возвращаем текст по умолчанию
    button.classList.remove("selected"); // Убираем изменение цвета кнопки
  }
}
