const photosArr = document.querySelectorAll(".slider__img");
const namesArr = document.querySelectorAll(".slider__student-name");
const workTextsArr = document.querySelectorAll(".slider__work-text");
const pagesArr = document.querySelectorAll(".slider__page");

const leftArrowBtnEl = document.querySelector(".slider__btn--left");
const rightArrowBtnEl = document.querySelector(".slider__btn--right");

let idx = 0;

rightArrowBtnEl.addEventListener("click", () => {
  if (idx < photosArr.length - 1) {
    photosArr[idx].classList.add("slider__hidden");
    namesArr[idx].classList.add("slider__hidden");
    workTextsArr[idx].classList.add("slider__hidden");
    
    pagesArr[idx].classList.remove("slider__page--curr");

    idx++;

    photosArr[idx].classList.remove("slider__hidden");
    namesArr[idx].classList.remove("slider__hidden");
    workTextsArr[idx].classList.remove("slider__hidden");

    pagesArr[idx].classList.add("slider__page--curr");
  }
});

leftArrowBtnEl.addEventListener("click", () => {
  if (idx > 0) {
    photosArr[idx].classList.add("slider__hidden");
    namesArr[idx].classList.add("slider__hidden");
    workTextsArr[idx].classList.add("slider__hidden");
    
    pagesArr[idx].classList.remove("slider__page--curr");

    idx--;

    photosArr[idx].classList.remove("slider__hidden");
    namesArr[idx].classList.remove("slider__hidden");
    workTextsArr[idx].classList.remove("slider__hidden");

    pagesArr[idx].classList.add("slider__page--curr");
  }
});
