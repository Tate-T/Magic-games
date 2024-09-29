const startButton = document.getElementById("startButton");
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let isJumping = false;

startButton.onclick = () => {
  startButton.style.display = "none";
  cactus.style.animationPlayState = "running";
  startGame();
};

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && !isJumping) {
    event.preventDefault();
    jump();
  }
});

function jump() {
  isJumping = true;
  dino.style.bottom = "80px";
  setTimeout(() => {
    dino.style.bottom = "0px";
    isJumping = false;
  }, 300);
}

function startGame() {
  const gameLoop = setInterval(() => {
    const dinoLeft = dino.offsetLeft;
    const dinoBottom = parseInt(window.getComputedStyle(dino).bottom);
    const cactusLeft = cactus.offsetLeft;
    const cactusHeight = cactus.offsetHeight;

    if (
      dinoLeft + dino.offsetWidth > cactusLeft &&
      dinoLeft < cactusLeft + cactus.offsetWidth &&
      dinoBottom < cactusHeight
    ) {
      alert("Game Over!");
      clearInterval(gameLoop);
      location.reload();
    }
  }, 10);
}
