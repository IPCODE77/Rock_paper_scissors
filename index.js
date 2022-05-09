const game = () => {

    let playerwinscore = 0;
    let computerwinscore = 0;
    let moves = 0;

    // audio
    var winaudio = new Audio("wow.mp3");
    var lossaudio = new Audio("loss.mp3");
    var tieaudio = new Audio("tie.mp3")

    const playgame = () => {
        let rock = document.querySelector("#rock");
        let paper = document.querySelector("#paper");
        let scissors = document.querySelector("#scissors");
        const alloption = [rock, paper, scissors];
        const computeroption = ["rock", "paper", "scissors"];
        alloption.forEach(element => {
            element.addEventListener("click", function () {
                const moveleft = document.querySelector("#moves");
                moves++;
                moveleft.innerHTML = `Moves left: ${10 - moves}`;

                const choicenumber = Math.floor(Math.random() * 3);
                const computerchoice = computeroption[choicenumber];

                winner(this.innerText, computerchoice);

                if (moves == 10) {
                    gameover(alloption, moveleft);
                }
            })
        })
    }

    // function for player win
    const winner = (player, computer) => {
        let result = document.querySelector("#winmsg");
        let playerscorebord = document.querySelector("#playerwin");
        let computerscorebord = document.querySelector("#computerwin");

        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if (player == computer) {
            result.textContent = "Tie"
        }
        else if (player == "rock") {
            if (computer == "paper") {
                result.textContent = "Computer Win"
                computerwinscore++;
                computerscorebord.textContent = computerwinscore;
            }
            else {
                result.textContent = "You Win!";
                playerwinscore++;
                playerscorebord.textContent = playerwinscore;
            }
        }
        else if (player == "paper") {
            if (computer == "scissors") {
                result.textContent = "Computer Win";
                computerwinscore++;
                computerscorebord.textContent = computerwinscore
            }
            else {
                result.textContent = "You Win!";
                playerwinscore++;
                playerscorebord.textContent = playerwinscore;
            }
        }

        else if (player == "scissors") {
            if (computer == "rock") {
                result.textContent = "Computer Win";
                computerwinscore++;
                computerscorebord.textContent = computerwinscore;
            }
            else {
                result.textContent = "You Win!";
                playerwinscore++;
                playerscorebord.textContent = playerwinscore;
            }
        }

    }

    // when game over
    const gameover = (alloption, movesleft) => {
        let restart = document.getElementById("restart");
        let result2 = document.querySelector("#winmsg");


        alloption.forEach(element => {
            element.style.display = "none";
        })
        restart.hidden = false
        restart.addEventListener("click", () => {
            window.location.reload();
        })

        if (playerwinscore > computerwinscore) {
            result2.textContent="You Win!"
            winaudio.play();
        }
        else if (playerwinscore < computerwinscore) {
            result2.textContent="Computer Win"
            lossaudio.play();
        }
        else  if(playerwinscore == computerwinscore)
        {       result2.textContent="Game Tie"
            tieaudio.play();
        }
    }

    playgame();

}

game();
