var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var winnerText = document.getElementById("winner");
const rockBut = document.getElementById("rock");
const paperBut = document.getElementById("paper");
const scissorsBut = document.getElementById("scissors");

function getUserChoice(choice) {
    console.log("you choosed " + choice);
    var ran = randomChoice();

    // returns the result based on user and Random choice
    switch (choice) {
        case "paper":
            if (ran === "scissors") {
                computerScore += 1;
                computerScore_span.innerHTML = computerScore;
                winnerText.innerHTML = "Scissors beats" + " " + choice;
            }
            else if (ran === "rock") {
                userScore += 1;
                userScore_span.innerHTML = userScore;
                winnerText.innerHTML = "Rock loses to " + choice + " :P";
            }
            else {
                winnerText.innerHTML = "Draw!";
            }
            break;
        case "rock":
            if (ran === "scissors") {
                userScore += 1;
                userScore_span.innerHTML = userScore;
                winnerText.innerHTML = "Scissors loses to " + choice + " :P";
            }
            else if (ran === "rock") {
                winnerText.innerHTML = "Draw!";
            }
            else {
                computerScore += 1;
                computerScore_span.innerHTML = computerScore;
                winnerText.innerHTML = "Paper beats" + " " + choice;
            }
            break;
        case "scissors":
            if (ran === "scissors") {
                winnerText.innerHTML = "Draw!";
            }
            else if (ran === "rock") {
                computerScore += 1;
                computerScore_span.innerHTML = computerScore;
                winnerText.innerHTML = "Rock beats" + " " + choice;
            }
            else {
                userScore += 1;
                userScore_span.innerHTML = userScore;
                winnerText.innerHTML = "Paper loses to " + choice + " :P";
            }
            break;
    }
}

// Returns a random Choice
function randomChoice() {
    let arr = ["rock", "paper", "scissors"]
    return arr[Math.floor(Math.random() * 3)];
}

rockBut.addEventListener('click', function () {
    getUserChoice("rock")
}
);
paperBut.addEventListener('click', function () {
    getUserChoice("paper")
}
);
scissorsBut.addEventListener('click', function () {
    getUserChoice("scissors")
}
); 
