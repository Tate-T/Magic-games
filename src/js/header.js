const games =  [
  {
    id: 1,
    name: 'Високосний калькулятор',
    category: 'numerical',

  },
  {
    id: 2,
    name: 'Вгадай число',
    category: 'numerical',

  },
  {
    id: 3,
    name: 'Камінь-Ножиці-Папір',
    category: 'game',

  },
  {
    id: 4,
    name: 'Калькулятор',
    category: 'numerical',

  },
  {
    id: 5,
    name: 'Калькулятор часу',
    category: 'numerical',

  },
  {
    id: 6,
    name: 'Google динозаврик',
    category: 'game',

  },
  {
    id: 7,
    name: 'Футбол',
    category: 'game',

  },
  {
    id: 8,
    name: 'Найбільше число',
    category: 'numerical',

  },
  {
    id: 9,
    name: 'Наша команда',
    category: 'acquaintance',

  },
  {
    id: 10,
    name: 'Вчений',
    category: 'acquaintance',

  },
]

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

const numericalButtonEl = document.querySelector("#numerical-button");
const numericalSectionsArr = document.querySelectorAll("#numerical");
const biggestNumberLineEl = document.querySelector(".biggest-number__line");
const timeSectionEl = document.querySelector(".time");

const gameButtonEl = document.querySelector("#game-button");
const gameSectionsArr = document.querySelectorAll("#game");
const footballLineEl = document.querySelector(".football__line");

const acquaintanceButtonEl = document.querySelector("#acquaintance-button");
const acquaintanceSectionsArr = document.querySelectorAll("#acquaintance");

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

function filterSections() {
  numericalButtonEl.addEventListener("click", () => {
    numericalSectionsArr.forEach((numericalSection) => {
      numericalSection.style.display = "block";
    });

    biggestNumberLineEl.classList.add("biggest-number__line--hidden");

    timeSectionEl.style = "margin-bottom: 70px;";

    gameSectionsArr.forEach((gameSection) => {
      gameSection.style.display = "none";
    });

    acquaintanceSectionsArr.forEach((acquaintanceSection) => {
      acquaintanceSection.style.display = "none";
    });
  });

  gameButtonEl.addEventListener("click", () => {
    gameSectionsArr.forEach((gameSection) => {
      gameSection.style.display = "block";
    });

    footballLineEl.classList.add("football__line--hidden");

    numericalSectionsArr.forEach((numericalSection) => {
      numericalSection.style.display = "none";
    });

    acquaintanceSectionsArr.forEach((acquaintanceSection) => {
      acquaintanceSection.style.display = "none";
    });
  });

  acquaintanceButtonEl.addEventListener("click", () => {
    acquaintanceSectionsArr.forEach((acquaintanceSection) => {
      acquaintanceSection.style.display = "block";
    });

    gameSectionsArr.forEach((gameSection) => {
      gameSection.style.display = "none";
    });

    numericalSectionsArr.forEach((numericalSection) => {
      numericalSection.style.display = "none";
    });
  });
}

filterSections();

const themeChanger = document.querySelector(".header__theme-changer");

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

themeChanger.addEventListener('click', toggleTheme);