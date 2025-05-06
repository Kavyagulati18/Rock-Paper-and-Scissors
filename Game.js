let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector(".user-score .num");
const compScorePara = document.querySelector(".comp-score .num");

const msg = document.querySelector("#msg");

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win!!!";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose :( ";
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () => {
    msg.innerText = "Game Drawn";
    msg.style.backgroundColor = "yellow";
}

const choices = document.querySelectorAll(".choices div");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.className;
        playGame(userChoice);
    });
});
