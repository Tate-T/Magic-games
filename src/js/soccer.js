const stadium = document.querySelector(".football__stadium");
const ball = document.querySelector(".football__stadium-ball");

function throwBall() {
  stadium.addEventListener("click", (e) => {
    let stadiumCords = stadium.getBoundingClientRect();

    let ballCords = {
      top:
        e.clientY -
        stadiumCords.top -
        stadium.clientTop -
        ball.clientHeight / 2,
      left:
        e.clientX -
        stadiumCords.left -
        stadium.clientLeft -
        ball.clientWidth / 2,
    };

    if (ballCords.top < 0) {
      ballCords.top = 0;
    }

    if (ballCords.left < 0) {
      ballCords.left = 0;
    }

    if (ballCords.left + ball.clientWidth > stadium.clientWidth) {
      ballCords = stadium.clientWidth - ball.clientWidth;
    }

    if (ballCords.top + ball.clientHeight > stadium.clientHeight) {
      ballCords.top = stadium.clientHeight - ball.clientHeight;
    }

    ball.style.left = `${ballCords.left}px`;
    ball.style.top = `${ballCords.top}px`;
  });
}

throwBall();

