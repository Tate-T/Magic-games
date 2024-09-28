const inputEl = document.querySelector(".computer-number__input");
const btnEl = document.querySelector(".computer-number__search-bg");
const resultTextEl = document.querySelector(".computer-number__text");

const guessNumber = () => {
  const computerNumber = Math.round(Math.random() * (10 - 1) + 1);
  const userNumber = Number(inputEl.value);

  if (!isNaN(userNumber)) {
    if (userNumber === computerNumber) {
      resultTextEl.classList.remove("computer-number__text--uncorrectly");
      resultTextEl.classList.add("computer-number__text--correctly");

      resultTextEl.textContent = `Вітаю, ви вгадали число ${computerNumber}!`;
    } else {
      resultTextEl.classList.remove("computer-number__text--correctly");
      resultTextEl.classList.add("computer-number__text--uncorrectly");

      resultTextEl.textContent = `Ви програли, компютер загадав ${computerNumber}`;
    }
  }
};

btnEl.addEventListener("click", guessNumber);
inputEl.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    guessNumber();
  }
});
