var uRock = document.getElementById("userRock");
var uSnake = document.getElementById("userSnake");
var uAlien = document.getElementById("userAlien");
var uScissors = document.getElementById("userScissors");
var uPaper = document.getElementById("userPaper");
var win = 0;
var lose = 0;
var gameOver = false;

//GOOD confirmed multiple times over.
//Logic engine for the game
function determineVictor(userChoice, comChoice){
    console.log("wins and losses are: ", win, lose)
    console.log("the choices were user: ", userChoice, "and com:", comChoice)
    var result = [] //index 0 is win/loss, index 1 is art frame/text result
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

//99%
function gameOn(choice){
    gameOverCheck()
    if (gameOver == false){
        var result = determineVictor(choice, rdmDigit());//index 0 is win/loss, index 1 is art frame/text result
        let index = updateScore(result[0]);

        viewScreenChango(result[1]);
        updateText(result[1], index);
        gameOverCheck();
    }else if (gameOver == true){
        powerOff();
        if (win > lose){
            viewScreenChango("WinScreen");
        }else {
            viewScreenChango("LoseScreen");
        }
        updateText(12, 4);
    }
}

//99%(functional but uncomfirmed)
//Checks for game over condition of 2 victories
function gameOverCheck(){
    if (win == 3 || lose == 3){
        gameOver = true;
    }
}

//100%
//neat
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

//99%(untested code)
function updateScore(sResult){
    var pScore = document.getElementById("pCount");
    var cScore = document.getElementById("cCount");
    if (sResult == "win"){
        win++
    }else if (sResult == "lose"){
        lose++
    }

    pCount.innerHTML = win;
    cCount.innerHTML = lose;
    
    if (win === 3 || lose === 3){
        return 8;
    }else if (win === 2 && lose !== 2){
        return 5;
    }else if (win !== 2 && lose === 2){
        return 6;
    }else if (win === 2 && lose === 2){
        return 7;
    }else if (win > lose){
        return 1;
    }else if (win < lose){
        return 2;
    }else {
        return 3;
    }
}

//99%(functional but unconfirmed) priority low
//This updates the game text
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
        1: "You have the advantage!",
        2: "You're at disadvantage!",
        3: "What a nail biter!",
        4: "Click Home to reload or MyProfile to go back",
        5: "You've almost won!",
        6: "You're hanging on by a thread!",
        7: "SUDDEN DEATH!!",
        8: "Thanks for playing!"
    }       

    ln1.innerHTML = gameDict1[lotNum];
    ln2.innerHTML = gameDict2[dict2Index];
    console.log("lotNum is ", lotNum)
    console.log("dict2Index is ", dict2Index)
    console.log("gameDict1 is ", gameDict1[lotNum])
    console.log("gameDict2 is ", gameDict2[lotNum])
}

//GOOD
//this changes the view screen, adapted from photoChango
//I love you, photoChango
function viewScreenChango(frame){
    var vPane = document.getElementById("viewPic");
    vPane.src = "./img/" + frame + ".png";
    console.log("are we getting here? videoPane")
    console.log(frame)
    console.log("./img/" + frame + ".png")
}

