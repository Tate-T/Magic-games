const stadium = document.querySelector(".football__stadium");
const ball = document.querySelector(".football__stadium-ball");
const arch = document.querySelector(".football__stadium-gates");

const footballModalEl = document.querySelector(".football__modal-backdrop");
const footballModalExit = document.querySelector(".football__modal-close");
const footballScore = document.querySelector(".score");

const goalPlayer = document.getElementById("goal-player");
const goalQuantity = document.getElementById("goal-quantity");
const goalMinutes = document.getElementById("goal-minutes");
const goalSeconds = document.getElementById("goal-seconds");

const headerNameUserEl = document.querySelector("#header-user-name");
const footballMinutes = document.querySelector(".time-minutes");
const footballSeconds = document.querySelector(".time-seconds");

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

        getGoalInfo();
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
  const footballInfoButtonIcon = document.querySelector(".football__info-button-icon");
  const footballInfoText = document.querySelector(".football__info-text");

  footballInfoButton.addEventListener("click", () => {
    footballInfoText.classList.toggle("football__info-text--show");
    footballInfoButtonIcon.classList.toggle("football__info-button-icon--show");
    footballInfoButton.classList.toggle("football__info-button--show");
  });
}

showInfo()

function gameTime() {
  const footballMinutes = document.querySelector(".time-minutes");
  const footballSeconds = document.querySelector(".time-seconds");

  setInterval(() => {
    if (!isPaused) {
      let minutes = parseInt(footballMinutes.textContent);
      let seconds = parseInt(footballSeconds.textContent);
  
      seconds++;
  
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
  
      footballSeconds.textContent = seconds.toString().padStart(2, '0');
      footballMinutes.textContent = minutes.toString().padStart(2, '0');
    }
  }, 1000);

  if (footballModalEl.classList.contains(".is-hidden")) {
    togglePause();
  }
}

gameTime();

function getGoalInfo() {
  goalPlayer.textContent = headerNameUserEl.textContent.slice(2);
  goalQuantity.textContent = `${footballScore.textContent}-ий`;
  goalMinutes.textContent = `${footballMinutes.textContent}' `;
  
  if (footballMinutes.textContent === "00") {
    goalMinutes.textContent = "";
  }

  goalSeconds.textContent = `${footballSeconds.textContent}"`;
}