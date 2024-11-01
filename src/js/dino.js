const startButton = document.getElementById("startButton");
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let isJumping = false;
let isGameOver = false;

const dinoModalEl = document.querySelector(".dino__modal-backdrop");
const dinoModalExit = document.querySelector(".dino__modal-close");

dinoModalExit.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.remove("no-scroll");
    dinoModalEl.classList.add("modal-hidden");
    dinoModalEl.classList.remove("modal-visible");
    
    resetGame(); 
});

startButton.onclick = () => {
    if (isGameOver) {
        resetGame(); 
    }
    startButton.style.display = "none"; 
    cactus.style.animationPlayState = "running";
    startGame();
};

document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !isJumping && !isGameOver) {
        e.preventDefault();
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
    isGameOver = false; 
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
            isGameOver = true;
            document.body.classList.add("no-scroll");
            dinoModalEl.classList.remove("modal-hidden");
            dinoModalEl.classList.add("modal-visible");
            cactus.style.animationPlayState = "paused"; 
            clearInterval(gameLoop); 
        }
    }, 10);
}

function resetGame() {
    isGameOver = false;
    startButton.style.display = "block"; 
    dino.style.bottom = "0px"; 

    cactus.style.left = "720px"; 
    cactus.style.animationPlayState = "running"; 

    cactus.style.animation = 'none'; 
    cactus.offsetHeight; 
    cactus.style.animation = ''; 
}


