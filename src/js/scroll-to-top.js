const scrollToTopEl = document.querySelector(".scroll");

window.onscroll = () => {
  const pageOffset = window.pageYOffset;

  if (pageOffset >= 1000) {
    scrollToTopEl.style.bottom = "50px";
  } else {
    scrollToTopEl.style.bottom = "-100vh";
  }
};

const themeChangerEl = document.querySelector(".header__theme-changer");
const arrowEl = document.querySelector(".scroll__icon");

themeChangerEl.addEventListener("change", () => {
  arrowEl.src = "./images/dark-mode-arrow.webp";
});
