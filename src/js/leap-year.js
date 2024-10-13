const btnEl = document.querySelector(".leap-year__search");
const inputEl = document.querySelector(".leap-year__input");
const leapYearFunction = document
  .querySelector(".leap-year__search")
  .addEventListener("click", function () {
    const year = parseInt(document.querySelector(".leap-year__input").value);
    const resultText = document.querySelector(".leap-year__text");

    resultText.textContent = "";
    resultText.className = "leap-year__text";

    if (isNaN(year)) {
      resultText.textContent = "Будь ласка, введіть дійсний рік!";
      resultText.classList.add("leap-year__text--black");
      return;
    }

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    if (isLeap) {
      resultText.textContent = "Ви народилися у високосний рік!";
      resultText.classList.remove("leap-number__text--uncorrectly");
      resultText.classList.add("leap-number__text--correctly");
    } else {
      resultText.textContent = "Ви народилися не у високосний рік!";
      resultText.classList.add("leap-number__text--uncorrectly");
      resultText.classList.remove("leap-number__text--correctly");
    }

    inputEl.value = "";
  });
