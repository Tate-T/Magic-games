const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

const blocksArr = document.querySelectorAll(".scientists__block");
const textsArr = document.querySelectorAll(".scientists__text");
const namesArr = document.querySelectorAll(".scientists__name");
const yearsArr = document.querySelectorAll(".scientists__year");
const firstButtonEl = document.querySelector("#scientists-button1");
const secondButtonEl = document.querySelector("#scientists-button2");
const fifthButtonEl = document.querySelector("#scientists-button5");

const clearClasses = () => {
  textsArr.forEach((textEl) => {
    textEl.classList.remove("scientists__text--show");
  });
};

firstButtonEl.addEventListener("click", () => {
  clearClasses();
  console.log("test1");

  let scientists19St = scientists.filter(
    (scientist) => scientist.born >= 1801 && scientist.born <= 1900
  );

  scientists19St.forEach((scientist) => {
    namesArr.forEach((nameEl, index) => {
      if (
        nameEl.textContent.includes(scientist.name) &&
        nameEl.textContent.includes(scientist.surname)
      ) {
        textsArr[index].classList.add("scientists__text--show");
      }
    });
  });
});

secondButtonEl.addEventListener("click", () => {
  clearClasses();

  const sortedScientists = [...scientists].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const scientistCards = sortedScientists
    .map(
      (scientist) => `
    <div class="scientists__block">
        <p class="scientists__text">
            <span class="scientists__name">${scientist.name} ${scientist.surname}</span>
            <span class="scientists__year">${scientist.born}-${scientist.dead}</span>
        </p>
    </div>
    `
    )
    .join("");

  document.querySelector(".scientists__blocks-list").innerHTML = scientistCards;
});

fifthButtonEl.addEventListener("click", () => {
    clearClasses();
    console.log("test2");
  
    const scientistBorn1879 = scientists.filter(
      (scientist) => scientist.born === 1879
    );
  
    scientistBorn1879.forEach((scientist) => {
      yearsArr.forEach((yearEl, index) => {
        if (yearEl.textContent.includes(scientist.born.toString())) {
          textsArr[index].classList.add("scientists__text--show");
        }
      });
    });
  });