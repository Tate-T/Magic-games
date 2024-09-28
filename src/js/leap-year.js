document.querySelector('.leap-year__search').addEventListener('click', function () {
    const year = parseInt(document.querySelector('.leap-year__input').value);
    const resultText = document.querySelector('.leap-year__text');

    if (isNaN(year)) {
      resultText.textContent = "Будь ласка, введіть дійсний рік!";
      resultText.style.color = "black"; // Колір тексту чорний, якщо не цифри
      return;
    }

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    if (isLeap) {
      resultText.textContent = "Ви народилися у високосний рік!";
      resultText.style.color = "green"; // Зелений колір для високосного року
    } else {
      resultText.textContent = "Ви народилися не у високосний рік!";
      resultText.style.color = "red"; // Червоний колір для не високосного року
    }
  });