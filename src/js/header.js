const headerLinkEl = document.querySelector("#header-link");
const headerListInteractivesEl = document.querySelector(
  ".header__interactives-list"
);
const headerItemInteractivesEl = document.querySelector(
  ".header__interactives-item"
);
const headerInteractivesLinkEl = document.querySelector(
  ".header__interactives-link"
);
let currentIdx = 0;

function operationsHeaderList() {
  headerLinkEl.addEventListener("click", () => {
    headerListInteractivesEl.classList.toggle("header__interactives-list-show");
  });

  headerInteractivesLinkEl.addEventListener("click", () => {
    headerListInteractivesEl.classList.remove("header__interactives-list-show");
  });
}

operationsHeaderList();

const themeChanger = document.querySelector(".header__theme-changer");

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

themeChanger.addEventListener('click', toggleTheme);