const scrollToTopEl = document.querySelector(".scroll");

window.onscroll = () => {
  const pageOffset = window.pageYOffset;

  if (pageOffset >= 1000) {
    scrollToTopEl.style.bottom = "50px";
  } else {
    scrollToTopEl.style.bottom = "-100vh";
  }
};