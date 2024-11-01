const footerButton = document.querySelector(".footer__button");
const footerInput = document.querySelector(".footer__input");
const footerBackdrop = document.querySelector(".f__modal-backdrop");
const footerExit = document.querySelector(".f__modal-close");
const footerForm = document.querySelector(".footer__form");

footerButton.addEventListener("click", (e) => {
  if (footerInput.value === "") {
    e.preventDefault()
    footerInput.classList.add("footer__input--wrong");
    footerInput.placeholder = "Ви нічого не написали!";
  } else if (footerInput.value.includes("@") === false) {
    e.preventDefault()
    footerInput.classList.add("footer__input--wrong");
    footerInput.placeholder = "В адресі має бути @!";
  } else {
    e.preventDefault();
    footerInput.classList.remove("footer__input--wrong");
    footerBackdrop.classList.remove("modal-hidden");
    footerBackdrop.classList.add("modal-visible");
    footerInput.placeholder = "Ви підписались!";
    
    document.body.classList.add("no-scroll");
    footerExit.addEventListener("click", () => {
      footerBackdrop.classList.add("modal-hidden");
    footerBackdrop.classList.remove("modal-visible");
      document.body.classList.remove("no-scroll");
    });
  }
  footerInput.value = '';
});
