const userScoreText = document.getElementById("user-score");
const computerScoreText = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const showComputerChoiceButton = document.getElementById("show-computer-choice");

let userScore = 0;
let computerScore = 0;
let computerChoice = ""; 
const choices = ["Камінь", "Ножиці", "Папір"];

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    resultText.classList.remove(
        "rps-number__text--correctly",
        "rps-number__text--uncorrectly",
        "rps-year__text--black"
    );

    if (userChoice === computerChoice) {
        resultText.classList.add("rps-year__text--black");
        return "Нічия!";
    } else if (
        (userChoice === "Камінь" && computerChoice === "Ножиці") ||
        (userChoice === "Ножиці" && computerChoice === "Папір") ||
        (userChoice === "Папір" && computerChoice === "Камінь")
    ) {
        userScore++;
        resultText.classList.add("rps-number__text--correctly");
        return "Ви виграли раунд!";
    } else {
        computerScore++;
        resultText.classList.add("rps-number__text--uncorrectly");
        return "Комп'ютер виграв раунд!";
    }
}

const choiceButtons = document.querySelectorAll(".rps__btn-choice");
choiceButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const userChoice = this.getAttribute("data-choice");
        computerChoice = computerPlay(); 

        const result = determineWinner(userChoice, computerChoice);
        
        // Відобразити результат
        resultText.textContent = `${result}`; 
        userScoreText.textContent = `Ви - ${userScore}`;
        computerScoreText.textContent = `Комп'ютер - ${computerScore}`;
    });
});

showComputerChoiceButton.addEventListener("click", function () {
    resultText.textContent = `Комп'ютер обрав: ${computerChoice}`; 
});
