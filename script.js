//GOOD confirmed multiple times over.
//Logic engine for the game
function determineVictor(userChoice, comChoice){
    console.log("wins and losses are: ", win, lose)
    console.log("the choices were user: ", userChoice, "and com:", comChoice)
    var result = []
    //From here on 1:Rock, 2:Lizard, 3:Alien, 4:Scissors, 5: Paper
    if (userChoice === comChoice){
        result = ["draw", 1];
        return result;
    }
    
    if (userChoice === 1) {
        if (comChoice === 2){
            result = ["win", 2];
            return result;
        }
        else if (comChoice === 3){
            result = ["lose", 9];
            return result;
        }
        else if (comChoice === 4){
            result = ["win", 4];
            return result;
        }
        else if (comChoice === 5){
            result = ["lose", 5];
            return result;
        }
    }
    else if (userChoice === 2){
        if (comChoice === 1){
            result = ["lose", 2];
            return result;
        }
        else if (comChoice === 3){
            result = ["win", 6];
            return result;
        }
        else if (comChoice === 4){
            result = ["lose", 7];
            return result;
        }
        else if (comChoice === 5){
            result = ["win", 8];
            return result;
        }
    }
    else if (userChoice === 3){
        if (comChoice === 1){
            result = ["win", 9];
            return result;
        }
        else if (comChoice === 2){
            result = ["lose", 6];
            return result;
        }
        else if (comChoice === 4){
            result = ["win", 10];
            return result;
        }
        else if (comChoice === 5){
            result = ["lose", 3]
            return result;
        }
    }
    else if (userChoice === 4){
        if (comChoice === 1){
            result = ["lose", 4];
            return result;
        }
        else if (comChoice === 2){
            result = ["win", 7];
            return result;
        }
        else if (comChoice === 3){
            result = ["lose", 10];
            return result;
        }
        else if (comChoice === 5){
            result = ["win", 11];
            return result;
        }
    }
    else if (userChoice === 5){
        if (comChoice === 1){
            result = ["win", 5];
            return result;
        }
        else if (comChoice === 2){
            result = ["lose", 8];
            return result;
        }
        else if (comChoice === 3){
            result = ["win", 3];
            return result;
        }
        else if (comChoice === 4){
            result = ["lose", 11];
            return result;
        }
    }
}

function gameOn(choice){
    console.log("but are we getting here?")
    var comPlay = rdmDigit();
    var gameRound = determineVictor(choice, comPlay);

    if (gameRound[0] == "win"){
        win++;
        viewScreenChango(gameRound[1]);
        console.log("are we getting here? ln110");
    }
    else if (gameRound[0] == "lose"){
        lose++;
        viewScreenChango(gameRound[1]);
        console.log("are we getting here? ln115")
    }
    else if (gameRound[0] == "draw") {
        viewScreenChango(1);
        console.log("are we getting here? ln119")
    }
        updateText(gameRound[1]);
        console.log("are we getting here? ln122")
}

function powerOff(){
    uRock.onclick = "";
    uSnake.onclick = "";
    uAlien.onclick = "";
    uScissors.onclick = "";
    uPaper.onclick = "";
}

//good
function rdmDigit(){
	return Math.floor(Math.random() * (5 - 1 + 1) + 1);
}

function updateText(lotNum, indx) {
    var ln1 = document.getElementById("actDesc"), ln2 = document.getElementById("advCount");
    var dict2Index = indx

    var gameDict1 = {
        1: "A tie!",
        2: "Rock crushes snake!",
        3: "The paper disproves aliens!",
        4: "The rock, as it has always done, crushes the scissors!",
        5: "Paper covers rock!",
        6: "The snake poisons the alien!",
        7: "The scissors decapitate the snake!",
        8: "The snake eats the paper!",
        9: "The alien vaporizes the rock!",
        10: "The alien smashes the scissors!",
        11: "Scissors cut paper!",
        12: "Game Over!",
    }
    var gameDict2 = {
        0: "Choose your weapon!",
        1: "You have the advantage!",
        2: "You're at disadvantage!",
        3: "Sudden death! What a nail biter!",
        4: "Click Home to reload or MyProfile to go back",
    }       

    ln1.innerHTML = gameDict1[lotNum];
    ln2.innerHTML = gameDict2[dict2Index];
    console.log(lotNum)
    console.log(dict2Index)
    console.log(gameDict1[lotNum])
    console.log(gameDict2[lotNum])
}

function viewScreenChango(frame){
    var vPane = document.getElementById("viewPic");
    vPane.src = "./img/" + frame + ".png";
    console.log("are we getting here? videoPane")
    console.log(frame)
    console.log("./img/" + frame + ".png")
}

var uRock = document.getElementById("userRock");
var uSnake = document.getElementById("userSnake");
var uAlien = document.getElementById("userAlien");
var uScissors = document.getElementById("userScissors");
var uPaper = document.getElementById("userPaper");
var win = 0;
var lose = 0;
var gameOver = false;


