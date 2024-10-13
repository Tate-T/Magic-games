const scrollToTopEl = document.querySelector(".scroll");

window.onscroll = () => {
    const pageOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    if (pageOffset >= 1000) {
        scrollToTopEl.style.visibility = 'visible';
    } else {
        scrollToTopEl.style.visibility = 'hidden';
    }
};