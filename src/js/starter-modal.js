const starterInput = document.querySelector(".s__modal-input");
const startBackdrop = document.querySelector(".s__modal-backdrop");
const starterExit = document.querySelector(".s__modal-close");
const starterForm = document.querySelector(".s__modal-form");
const starterButton = document.querySelector(".s__modal-button");

const headerNameUserEl = document.querySelector("#header-user-name");
const headerGreetingEl = document.querySelector(".header__greeting");

document.body.classList.add("no-scroll");

let userName = ''

starterExit.addEventListener("click", () => {
  startBackdrop.classList.add("is__hidden");
  document.body.classList.remove("no-scroll");
  headerNameUserEl.textContent = ", User";
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

      headerNameUserEl.textContent = `, ${userName}`;

      if (userName.length >= 50) {
        headerGreetingEl.style = "font-size: 8px;";

        if (userName.length >= 60) {
          headerGreetingEl.style = "font-size: 7px;";

          if (userName.length >= 70) {
            headerGreetingEl.style = "font-size: 6px;";

            if (userName.length >= 90) {
              headerGreetingEl.style = "font-size: 5px;";

              if (userName.length >= 100) {
                headerGreetingEl.style = "font-size: 4px;";
              }
            }
          }
        }
      }
    });
  }
});


