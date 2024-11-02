const stadium = document.querySelector(".football__stadium");
const ball = document.querySelector(".football__stadium-ball");
const arch = document.querySelector(".football__stadium-gates");

const footballModalEl = document.querySelector(".football__modal-backdrop");
const footballModalExit = document.querySelector(".football__modal-close");
const footballScore = document.querySelector(".score");

const gameModes = document.querySelector(".fm__modal-backdrop");
const gameModesExit = document.querySelector(".fm__modal-close");
const gameModesIcon = document.querySelector(".fm__modal-item-icon");

const freeGameModeButton = document.querySelector("#free-game-mode");
const classicGameModeButton = document.querySelector("#classic-game-mode");
const hardGameModeButton = document.querySelector("#hard-game-mode");

const freeGameModeIcon = document.querySelector("#free-game-mode-icon");
const classicGameModeIcon = document.querySelector("#classic-game-mode-icon");
const hardGameModeIcon = document.querySelector("#hard-game-mode-icon");

const confirmationFreeGameMode = document.querySelector(
  "#confirm-free-game-mode"
);
const confirmationClassicGameMode = document.querySelector(
  "#confirm-classic-game-mode"
);
const confirmationhardGameMode = document.querySelector(
  "#confirm-hard-game-mode"
);

const confirmButtonFreeModeNo = document.querySelector(
  ".confirm__modal-free-game-no"
);
const confirmButtonFreeModeYes = document.querySelector(
  ".confirm__modal-free-game-yes"
);

const confirmButtonClassicModeNo = document.querySelector(
  ".confirm__modal-classic-game-no"
);
const confirmButtonClassicModeYes = document.querySelector(
  ".confirm__modal-classic-game-yes"
);

const confirmButtonhardModeNo = document.querySelector(
  ".confirm__modal-hard-game-no"
);
const confirmButtonhardModeYes = document.querySelector(
  ".confirm__modal-hard-game-yes"
);

const footballInstruction = document.querySelector(".fi__modal-backdrop");
const footballInstructionExit = document.querySelector(".fi__modal-close");

const gameModeButton = document.querySelector("#game-mode-button");
const instructionButton = document.querySelector("#instruction-button");

const goalPlayer = document.getElementById("goal-player");
const goalQuantity = document.querySelectorAll(".goal-quantity");
const goalMinutes = document.getElementById("goal-minutes");
const goalSeconds = document.getElementById("goal-seconds");

const goalInfoText = document.querySelector(".goal-info");
const headerNameUserEl = document.querySelector("#header-user-name");
const footballTime = document.querySelector(".football__stadium-time");
const footballMinutes = document.querySelector(".time-minutes");
const footballSeconds = document.querySelector(".time-seconds");

const footballWin = document.querySelector(".fw__modal-backdrop");
const footballWinExit = document.querySelector(".fw__modal-close");

const footballLose = document.querySelector(".fl__modal-backdrop");
const footballLoseExit = document.querySelector(".fl__modal-close");

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
      if (
        ballCords.left >= 630 &&
        ballCords.top >= 65 &&
        ballCords.top <= 110
      ) {
        removePause();

        document.body.classList.add("no-scroll");
        footballModalEl.classList.remove("modal-hidden");
        footballModalEl.classList.add("modal-visible");

        score++;
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
      footballModalEl.classList.add("modal-hidden");
      footballModalEl.classList.remove("modal-visible");

      const allBallCoords = [
        { left: "100px", top: "75px" },
        { left: "250px", top: "35px" },
        { left: "250px", top: "140px" },
      ];

      const maxIndex = allBallCoords.length - 1;
      const minIndex = 0;

      const randomIndex = Math.round(
        Math.random() * (maxIndex - minIndex) + minIndex
      );

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
  const footballInfoButtonIcon = document.querySelector(
    ".football__info-button-icon"
  );
  const footballInfoText = document.querySelector(".football__info-text");

  footballInfoButton.addEventListener("click", () => {
    footballInfoText.classList.toggle("football__info-text--show");
    footballInfoButtonIcon.classList.toggle("football__info-button-icon--show");
    footballInfoButton.classList.toggle("football__info-button--show");
  });
}

showInfo();

let gameTimeInterval;

function gameTime() {
  gameTimeInterval = setInterval(() => {
    if (!isPaused) {
      let minutes = parseInt(footballMinutes.textContent);
      let seconds = parseInt(footballSeconds.textContent);

      seconds++;

      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }

      footballSeconds.textContent = seconds.toString().padStart(2, "0");
      footballMinutes.textContent = minutes.toString().padStart(2, "0");
    }
  }, 1000);

  if (footballModalEl.classList.contains(".is-hidden")) {
    togglePause();
  }
}

gameTime();

function getGoalInfo() {
  goalPlayer.textContent = headerNameUserEl.textContent.slice(2);
  goalQuantity.forEach((spanEl) => {
    spanEl.textContent = `${footballScore.textContent}-ий`;
  });
  goalMinutes.textContent = `${footballMinutes.textContent}' `;

  if (footballMinutes.textContent === "00") {
    goalMinutes.textContent = "";
  }

  goalSeconds.textContent = `${footballSeconds.textContent}"`;
}

function exitGameModes() {
  gameModeButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("no-scroll");
    gameModes.classList.remove("modal-hidden");
    gameModes.classList.add("modal-visible");

    removePause();

    if (
      footballSeconds.textContent === "00" &&
      footballMinutes.textContent === "00"
    ) {
      removePause();
    }
  });
}

function closeGameModes() {
  gameModesExit.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.remove("no-scroll");
    gameModes.classList.add("modal-hidden");
    gameModes.classList.remove("modal-visible");

    addPause();

    if (
      footballSeconds.textContent === "00" &&
      footballMinutes.textContent === "00"
    ) {
      removePause();
    }
  });
}

exitGameModes();

closeGameModes();

function confirmGameMode() {
  freeGameModeIcon.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("no-scroll");
    confirmationFreeGameMode.classList.remove("modal-hidden");
    confirmationFreeGameMode.classList.add("modal-visible");

    confirmButtonFreeModeNo.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("no-scroll");
      confirmationFreeGameMode.classList.add("modal-hidden");
      confirmationFreeGameMode.classList.remove("modal-visible");
    });

    confirmButtonFreeModeYes.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("no-scroll");
      confirmationFreeGameMode.classList.add("modal-hidden");
      confirmationFreeGameMode.classList.remove("modal-visible");
      gameModes.classList.add("modal-hidden");
      gameModes.classList.remove("modal-visible");

      footballTime.classList.add("football__stadium-time--hidden");
      goalInfoText.classList.add("goal-info--hidden");

      score = 0;
      footballScore.textContent = "0";
      stadium.classList.add("football__stadium--free");
      stadium.classList.remove("football__stadium--classic");
      stadium.classList.remove("football__stadium--hard");

      clearInterval(gameTimeInterval);
      gameTime();
      clearInterval(hardGameInterval);

      ball.style.left = "100px";
      ball.style.top = "75px";
    });
  });

  freeGameModeButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("no-scroll");
    confirmationFreeGameMode.classList.remove("modal-hidden");
    confirmationFreeGameMode.classList.add("modal-visible");

    confirmButtonFreeModeNo.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("no-scroll");
      confirmationFreeGameMode.classList.add("modal-hidden");
      confirmationFreeGameMode.classList.remove("modal-visible");
    });

    confirmButtonFreeModeYes.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("no-scroll");
      confirmationFreeGameMode.classList.add("modal-hidden");
      confirmationFreeGameMode.classList.remove("modal-visible");
      gameModes.classList.add("modal-hidden");
      gameModes.classList.remove("modal-visible");

      footballTime.classList.add("football__stadium-time--hidden");
      goalInfoText.classList.add("goal-info--hidden");

      score = 0;
      footballScore.textContent = "0";
      stadium.classList.add("football__stadium--free");
      stadium.classList.remove("football__stadium--classic");
      stadium.classList.remove("football__stadium--hard");

      clearInterval(gameTimeInterval);
      gameTime();
      clearInterval(hardGameInterval);

      ball.style.left = "100px";
      ball.style.top = "75px";
    });
  });

  ////////////////////////////

  classicGameModeIcon.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("no-scroll");
    confirmationClassicGameMode.classList.remove("modal-hidden");
    confirmationClassicGameMode.classList.add("modal-visible");

    confirmButtonClassicModeNo.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("no-scroll");
      confirmationClassicGameMode.classList.add("modal-hidden");
      confirmationClassicGameMode.classList.remove("modal-visible");
    });

    confirmButtonClassicModeYes.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("no-scroll");
      confirmationClassicGameMode.classList.add("modal-hidden");
      confirmationClassicGameMode.classList.remove("modal-visible");
      gameModes.classList.add("modal-hidden");
      gameModes.classList.remove("modal-visible");

      footballTime.classList.remove("football__stadium-time--hidden");
      goalInfoText.classList.remove("goal-info--hidden");

      footballMinutes.textContent = "00";
      footballSeconds.textContent = "00";

      score = 0;
      footballScore.textContent = "0";
      stadium.classList.add("football__stadium--classic");
      stadium.classList.remove("football__stadium--free");
      stadium.classList.remove("football__stadium--hard");

      clearInterval(gameTimeInterval);
      gameTime();
      clearInterval(hardGameInterval);

      ball.style.left = "100px";
      ball.style.top = "75px";
    });
  });

  classicGameModeButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("no-scroll");
    confirmationClassicGameMode.classList.remove("modal-hidden");
    confirmationClassicGameMode.classList.add("modal-visible");

    confirmButtonClassicModeNo.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("no-scroll");
      confirmationClassicGameMode.classList.add("modal-hidden");
      confirmationClassicGameMode.classList.remove("modal-visible");
    });

    confirmButtonClassicModeYes.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("no-scroll");
      confirmationClassicGameMode.classList.add("modal-hidden");
      confirmationClassicGameMode.classList.remove("modal-visible");
      gameModes.classList.add("modal-hidden");
      gameModes.classList.remove("modal-visible");

      footballTime.classList.remove("football__stadium-time--hidden");
      goalInfoText.classList.remove("goal-info--hidden");

      footballMinutes.textContent = "00";
      footballSeconds.textContent = "00";

      score = 0;
      footballScore.textContent = "0";
      stadium.classList.add("football__stadium--classic");
      stadium.classList.remove("football__stadium--free");
      stadium.classList.remove("football__stadium--hard");

      clearInterval(gameTimeInterval);
      gameTime();
      clearInterval(hardGameInterval);

      ball.style.left = "100px";
      ball.style.top = "75px";
    });
  });

  //////////////////////////////

  hardGameModeButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("no-scroll");
    confirmationhardGameMode.classList.remove("modal-hidden");
    confirmationhardGameMode.classList.add("modal-visible");

    confirmButtonhardModeNo.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("no-scroll");
      confirmationhardGameMode.classList.add("modal-hidden");
      confirmationhardGameMode.classList.remove("modal-visible");
    });

    confirmButtonhardModeYes.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("no-scroll");
      confirmationhardGameMode.classList.add("modal-hidden");
      confirmationhardGameMode.classList.remove("modal-visible");
      gameModes.classList.add("modal-hidden");
      gameModes.classList.remove("modal-visible");

      footballTime.classList.remove("football__stadium-time--hidden");
      goalInfoText.classList.remove("goal-info--hidden");

      footballMinutes.textContent = "00";
      footballSeconds.textContent = "00";

      score = 0;
      footballScore.textContent = "0";
      stadium.classList.remove("football__stadium--free");
      stadium.classList.remove("football__stadium--classic");

      clearInterval(hardGameInterval);
      hardGameTime();
      clearInterval(gameTimeInterval);

      ball.style.left = "100px";
      ball.style.top = "75px";
    });
  }); 

  hardGameModeIcon.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("no-scroll");
    confirmationhardGameMode.classList.remove("modal-hidden");
    confirmationhardGameMode.classList.add("modal-visible");

    confirmButtonhardModeNo.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("no-scroll");
      confirmationhardGameMode.classList.add("modal-hidden");
      confirmationhardGameMode.classList.remove("modal-visible");
    });

    confirmButtonhardModeYes.addEventListener("click", (e) => {
      document.body.classList.remove("no-scroll");
      confirmationhardGameMode.classList.add("modal-hidden");
      confirmationhardGameMode.classList.remove("modal-visible");
      gameModes.classList.add("modal-hidden");
      gameModes.classList.remove("modal-visible");

      footballTime.classList.remove("football__stadium-time--hidden");
      goalInfoText.classList.remove("goal-info--hidden");

      footballMinutes.textContent = "00";
      footballSeconds.textContent = "00";

      score = 0;
      footballScore.textContent = "0";
      stadium.classList.remove("football__stadium--free");
      stadium.classList.remove("football__stadium--classic");

      clearInterval(hardGameInterval);
      hardGameTime();
      clearInterval(gameTimeInterval);

      ball.style.left = "100px";
      ball.style.top = "75px";
    });
  });
}

confirmGameMode();

let hardGameInterval;

function hardGameTime() {
  hardGameInterval = setInterval(() => {
    if (!isPaused) {
      let minutes = parseInt(footballMinutes.textContent);
      let seconds = parseInt(footballSeconds.textContent);

      seconds++;

      if (Number(footballSeconds.textContent) >= 44) {
        stadium.classList.add("football__stadium--hard");
      }

      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes >= 1) {
        removePause();

        seconds = 0;
        footballSeconds.textContent = "00";

        goalQuantity.forEach((spanEl) => {
          spanEl.textContent = footballScore.textContent;
        });

        if (score >= 30) {
          document.body.classList.add("no-scroll");
          footballWin.classList.remove("modal-hidden"); 
          footballWin.classList.add("modal-visible"); 
        } else {
          document.body.classList.add("no-scroll");
          footballLose.classList.remove("modal-hidden"); 
          footballLose.classList.add("modal-visible"); 
        }
      }

      footballSeconds.textContent = seconds.toString().padStart(2, "0");
      footballMinutes.textContent = minutes.toString().padStart(2, "0");
    }
  }, 1000);

  if (footballModalEl.classList.contains(".is-hidden")) {
    togglePause();
  }
}

function closeFootballWin() {
  footballWinExit.addEventListener("click", () => {
    document.body.classList.remove("no-scroll");
    footballWin.classList.add("modal-hidden"); 
    footballWin.classList.remove("modal-visible"); 

    footballMinutes.textContent = "00";
    footballSeconds.textContent = "00";

    score = 0;
    footballScore.textContent = "0";
    stadium.classList.add("football__stadium");
    stadium.classList.remove("football__stadium--free");
    stadium.classList.remove("football__stadium--hard");
    stadium.classList.remove("football__stadium--classic");

    ball.style.left = "100px";
    ball.style.top = "75px";
  });
}

closeFootballWin();

function closeFootballLose() {
  footballLoseExit.addEventListener("click", () => {
    document.body.classList.remove("no-scroll");
    footballLose.classList.add("modal-hidden"); 
    footballLose.classList.remove("modal-visible"); 

    footballMinutes.textContent = "00";
    footballSeconds.textContent = "00";

    score = 0;
    footballScore.textContent = "0";
    stadium.classList.add("football__stadium");
    stadium.classList.remove("football__stadium--free");
    stadium.classList.remove("football__stadium--hard");
    stadium.classList.remove("football__stadium--classic");

    ball.style.left = "100px";
    ball.style.top = "75px";
  });
}

closeFootballLose();

function exitFootballInstruction() {
  instructionButton.addEventListener("click", () => {
    document.body.classList.add("no-scroll");
    footballInstruction.classList.remove("modal-hidden"); 
    footballInstruction.classList.add("modal-visible"); 
  });
}

function closeFootballInstruction() {
  footballInstructionExit.addEventListener("click", () => {
    document.body.classList.remove("no-scroll");
    footballInstruction.classList.add("modal-hidden"); 
    footballInstruction.classList.remove("modal-visible"); 
  });
}

exitFootballInstruction();

closeFootballInstruction();

