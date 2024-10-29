const inputEl = document.querySelector(".computer-number__input");
const btnEl = document.querySelector(".computer-number__search-bg");
const resultTextEl = document.querySelector(".computer-number__text");

const guessNumber = () => {
  const computerNumber = Math.round(Math.random() * (10 - 1) + 1);
  const inputVal = inputEl.value;

  if (!isNaN(Number(inputVal))) {
    if (Number(inputVal) === computerNumber) {
      resultTextEl.classList.remove("computer-number__text--uncorrectly");
      resultTextEl.classList.add("computer-number__text--correctly");

      resultTextEl.textContent = `Вітаю, ви вгадали число ${computerNumber}!`;
    } else if (Number(inputVal) > 10) {
      resultTextEl.classList.remove("computer-number__text--correctly");
      resultTextEl.classList.add("computer-number__text--uncorrectly");

      resultTextEl.textContent = "Введіть число <10";
    } else if (Number(inputVal) < 1) {
      resultTextEl.classList.remove("computer-number__text--correctly");
      resultTextEl.classList.add("computer-number__text--uncorrectly");

      resultTextEl.textContent = "Введіть число >1";
    } else {
      resultTextEl.classList.remove("computer-number__text--correctly");
      resultTextEl.classList.add("computer-number__text--uncorrectly");

      resultTextEl.textContent = `Ви програли, компютер загадав ${computerNumber}`;
    }
  } else {
    resultTextEl.classList.remove("computer-number__text--correctly");
    resultTextEl.classList.add("computer-number__text--uncorrectly");

    resultTextEl.textContent = "Введіть число";
  }

  inputEl.value = "";
};
btnEl.addEventListener("click", guessNumber);
inputEl.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    guessNumber();
  }
});
