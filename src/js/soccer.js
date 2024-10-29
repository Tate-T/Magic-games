const stadium = document.querySelector(".football__stadium");
const ball = document.querySelector(".football__stadium-ball");
const arch = document.querySelector(".football__stadium-gates");

const footballModalEl = document.querySelector(".football__modal-backdrop");
const footballModalExit = document.querySelector(".football__modal-close");
const footballScore = document.querySelector(".score");

let isPaused = true;

function addPause() {
  isPaused = false;
}

function removePause() {
  isPaused = !isPaused;
}

function togglePause() {
  if (isPaused) {
    removePause();
  }
}

function throwBall() {
  stadium.addEventListener("click", (e) => {
    addPause();
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
        removePause();
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
      addPause();
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

function showInfo() {
  const footballInfoButton = document.querySelector(".football__info-button");
  const footballInfoText = document.querySelector(".football__info-text");

  footballInfoButton.addEventListener("click", () => {
    footballInfoText.classList.toggle("football__info-text--show");
  });
}

showInfo()

function gameTime() {
  const footballMinutes = document.querySelector(".time-minutes");
  const footballSeconds = document.querySelector(".time-seconds");

  let minutes = 0;
  let seconds = 0;

  const secondsInterval = setInterval(() => {
    if (!isPaused) {
      footballSeconds.textContent = `0${seconds++}`;

      if (seconds >= 10) {
        footballSeconds.textContent = `${seconds}`;
      }

      if (seconds === 60) {
        footballSeconds.textContent = `00`;
        seconds = 1;
        minutes++;

        footballMinutes.textContent = `0${minutes++}`;

        if (minutes >= 10) {
          footballMinutes.textContent = `${minutes}`;
        }
      } 
    }
  }, 1000); 

  if (footballModalEl.classList.contains(".is-hidden")) {
    togglePause();
  }
}

gameTime();