let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#your-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game id Draw!, Paly Again.";
    msg.style.backgroundColor = "#435663";
}

const showWinner = (userWin, userChoise, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoise} beats ${compChoice}`;
        msg.style.backgroundColor = "#8CA9FF";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats Your ${userChoise}`;
        msg.style.backgroundColor = "#DC0E0E";
    }
};

const playGame = (userChoise) => {
    // console.log("User Choice = ", userChoise);
    //generate computer choice...
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoise === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true ;
        if(userChoise === "Rock") {
            //scissor, paper
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoise === "Paper") {
            //rock, sciessor
            userWin = compChoice === "Scissor" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoise, compChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoise = choice.getAttribute("id");
        playGame(userChoise);
    });
});