const footerButton = document.querySelector(".footer__button");
const footerInput = document.querySelector(".footer__input");
const footerBackdrop = document.querySelector(".f__modal-backdrop");
const footerExit = document.querySelector(".f__modal-close");
const footerForm = document.querySelector(".footer__form");

footerForm.addEventListener("submit", (e) => {
  if (footerInput.value === "") {
    e.preventDefault();
    footerInput.classList.add("footer__input--wrong");
    footerInput.placeholder = "Ви нічого не написали!";
  }
  else if(footerInput.value.includes('@') === false) {
    e.preventDefault();

    footerInput.classList.add("footer__input--wrong");
    footerInput.placeholder = "В адресі має бути @!";
  }
  else{
      e.preventDefault();
      footerButton.classList.remove("footer__input--wrong");
      footerButton.addEventListener("click", () => {
        e.preventDefault();
        footerBackdrop.classList.remove("is__hidden");
        document.body.classList.add("no-scroll");
      });
      footerExit.addEventListener("click", () => {
        e.preventDefault();
        footerBackdrop.classList.add("is__hidden");
        document.body.classList.remove("no-scroll");
      });
  }
});