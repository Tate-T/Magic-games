const starterInput = document.querySelector(".s__modal-input");
const startBackdrop = document.querySelector(".s__modal-backdrop");
const starterExit = document.querySelector(".s__modal-close");
const starterForm = document.querySelector(".s__modal-form");
const starterButton = document.querySelector(".s__modal-button");


document.body.classList.add("no-scroll");
let userName = ''
starterExit.addEventListener("click", () => {
  startBackdrop.classList.add("is__hidden");
  document.body.classList.remove("no-scroll");
});
starterForm.addEventListener("submit", (e) => {
  if (starterInput.value === "") {
    e.preventDefault();
    starterInput.classList.add("footer__input--wrong");
    starterInput.placeholder = "Ви нічого не написали!";
  } else {
    e.preventDefault();
    userName = starterInput.value;
    console.log(userName)
    starterInput.classList.remove("footer__input--wrong");
    starterButton.addEventListener("click", () => {
      e.preventDefault();
      startBackdrop.classList.add("is__hidden");
      document.body.classList.remove("no-scroll");
    });
  }
});


