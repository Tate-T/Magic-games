const equalsBtnEl = document.querySelector(".calculator__btn--equals");
const radioArr = document.querySelectorAll(".calculator__radio");
let operation;

radioArr.forEach((radio) => {
  radio.addEventListener("click", (e) => {
    operation = e.target.dataset.operation;
  });
});

const calcResult = () => {
  const num1El = document.querySelector(".calculator__input--first");
  const num2El = document.querySelector(".calculator__input--second");
  const outputEl = document.querySelector(".calculator__output");

  if (isNaN(Number(num1El.value)) || isNaN(Number(num2El.value))) {
    outputEl.textContent = "---";
  } else {
    if (operation === "+") {
      outputEl.textContent = Number(num1El.value) + Number(num2El.value);
    } else if (operation === "*") {
      outputEl.textContent = Number(num1El.value) * Number(num2El.value);
    } else if (operation === "-") {
      outputEl.textContent = Number(num1El.value) - Number(num2El.value);
    } else {
      if (Number(num2El.value) === 0) {
        outputEl.textContent = "---";
      } else {
        outputEl.textContent = (Number(num1El.value) / Number(num2El.value)).toFixed(9);
      }
    }
  }

  num1El.value = "";
  num2El.value = "";
};

equalsBtnEl.addEventListener("click", calcResult);
