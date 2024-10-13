const timeInput = document.querySelector(".time__input");
const timeButton = document.querySelector(".time__button");
const timeDays = document.querySelector(".time__days");
const timeHours = document.querySelector(".time__hours");
const timeMinutes = document.querySelector(".time__minutes");
const timeSeconds = document.querySelector(".time__secs");

timeButton.addEventListener("click", () => {
  if (!isNaN(parseInt(timeInput.value))) {
    const secs = Math.floor(Number(timeInput.value));
    const minutes = Math.floor(Number(timeInput.value / 60));
    const hours = Math.floor(Number(minutes / 60));
    const days = Math.floor(Number(hours / 24));

    timeSeconds.textContent = Math.abs(secs - minutes * 60);
    timeMinutes.textContent = Math.abs(minutes - hours * 60);
    timeHours.textContent = Math.abs(hours - days * 24);
    timeDays.textContent = Math.abs(days);

    if (timeSeconds.textContent.length === 1) {
      timeSeconds.textContent = `0${Math.abs(secs - minutes * 60)}`;
    }
    if (timeMinutes.textContent.length === 1) {
      timeMinutes.textContent = `0${Math.abs(minutes - hours * 60)}`;
    }
    if (timeHours.textContent.length === 1) {
      timeHours.textContent = `0${Math.abs(hours - days * 24)}`;
    }
  }

  timeInput.value = "";
});
