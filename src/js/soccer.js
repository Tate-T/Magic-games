const stadium = document.querySelector(".football__stadium");
const ball = document.querySelector(".football__stadium-ball");
const arch = document.querySelector(".football__stadium-gates");

const footballModalEl = document.querySelector(".football__modal-backdrop");
const footballModalExit = document.querySelector(".football__modal-close");
const footballScore = document.querySelector(".score");

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

    if (ballCords.left >= 660) {
      ballCords.left = 648;
    }

    if (ballCords.top < 0) {
      ballCords.top = 0;
    }

    if (ballCords.left < 0) {
      ballCords.left = 0;
    }

    if (ballCords.left + ball.clientWidth > stadium.clientWidth) {
      ballCords.left = stadium.clientWidth - ball.clientWidth;
    }

    if (ballCords.top + ball.clientHeight > stadium.clientHeight) {
      ballCords.top = stadium.clientHeight - ball.clientHeight;
    }

    function checkGoal() {
      if ((ballCords.left >= 630 && ballCords.top >= 65 && ballCords.top <= 110)) {
        document.body.classList.add("no-scroll");
        footballModalEl.classList.remove("is__hidden");

        score ++;
        footballScore.textContent = `${score}`;
      }
    }

    checkGoal();

    ball.style.left = `${ballCords.left}px`;
    ball.style.top = `${ballCords.top}px`;

    footballModalExit.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("no-scroll");
      footballModalEl.classList.add("is__hidden");

      const allBallCoords = [
        { left: '100px', top: '75px' },
        { left: '250px', top: '35px' },
        { left: '250px', top: '140px' }
      ];

      const maxIndex = allBallCoords.length - 1;
      const minIndex = 0;

      const randomIndex = Math.round(Math.random() * (maxIndex - minIndex) + minIndex);

      const randomCoords = allBallCoords[randomIndex];

      ball.style.left = randomCoords.left;
      ball.style.top = randomCoords.top;
    });
  });
}

let score = 0;

throwBall();

if (document.body.classList.contains("dark-mode")) {
  document.querySelector(`href="./images/sprite.svg#icon-close"`).href = "./images/sprite.svg#icon-close-white";
}
