const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const winnerText = document.getElementById("winner");
const rockBut = document.getElementById("rock");
const paperBut = document.getElementById("paper");
const scissorsBut = document.getElementById("scissors");

function getUserChoice(choice) {
    console.log("you choosed " + choice);
    var ran = randomChoice();
    // console.log(randomNumber());
    // if (choice === "paper") {
    //     if (ran === "scissors") {
    //         console.log("You lose, scissors");
    //     } else if (ran === "rock") {
    //         console.log("You win, rock");
    //     } else {
    //         console.log("Draw, paper");
    //     }
    // } else if (choice === "rock") {
    //     if (ran === "scissors") {
    //         console.log("You win, scissors");
    //     } else if (ran === "rock") {
    //         console.log("Draw, rock");
    //     } else {
    //         console.log("You lose, paper");
    //     }
    // } else {
    //     if (ran === "scissors") {
    //         console.log("Draw, scissors");
    //     } else if (ran === "rock") {
    //         console.log("You lose, rock");
    //     } else {
    //         console.log("You win, paper");
    //     }
    // }

    switch (randomChoice()) {
        case "paper":
            if (ran === "scissors") { console.log("You lose, scissors"); }
            else if (ran === "rock") { console.log("You win, rock"); }
            else { console.log("Draw, paper"); }
            break;
        case "rock":
            if (ran === "scissors") { console.log("You win, scissors"); }
            else if (ran === "rock") { console.log("Draw, rock");; }
            else { console.log("You lose, paper"); }
            break;
        case "scissors":
            if (ran === "scissors") { console.log("Draw, scissors"); }
            else if (ran === "rock") { console.log("You lose, rock"); }
            else { console.log("You win, paper"); }
            break;
    }
}

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
