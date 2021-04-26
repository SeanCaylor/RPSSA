var win = 0, lose = 0, gameOver = false;



function determineVictor(userChoice, comChoice){
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
            result = ["lose", 7];
            return result;
        }
        else if (comChoice === 3){
            result ["win", 3];
            return result;
        }
        else if (comChoice === 4){
            result ["lose", 11];
            return result;
        }
    }
}

function gameOn(choice){
    gameOverCheck(win, lose);
    let comPlay = rdmDigit(1,5);
    let gameRound = determineVictor(choice, comPlay);

    if (gameRound[0] == "win"){
        win++;
        viewScreenChango(gameRound[1]);
    }
    else if (gameRound[0] == "lose"){
        lose++;
        viewScreenChango(gameRound[1]);
    }
    else {
        viewScreenChango(1);
    }
        updateText(gameRound[1]);
}

function gameOverCheck(w, l){
    if (w == 2 || l == 2){
        gameOver = true;
        if (w > l){
            viewScreenChango('WinScreen');
        }
        else {
            viewScreenChango('LoseScreen');
        }
        updateText();
        document.getElementsByClassName('actions').removeAttribute('onclick');
    }
}

function rdmDigit(min, max){
		return Math.floor(Math.random() * (max - min) + min);
}

function updateText(lotNum) {
    //var ln1 = document.getElementById("actDesc"), ln2 = document.getElementById("advCount");
    var dict2Index = 0
    if (win = 1 && lose = 0){
        dict2Index = 1;
    }
    else if (lose = 1 && win = 0){
        dict2Index = 2;
    }
    else if (win = 1 && lose = 1){
        dict2Index = 3;
    }
    var gameDict1 = {
        1: "A tie!"
        2: "Rock crushes lizard!"
        3: "The paper disproves aliens!"
        4: "The rock, as it has always done, crushes the scissors!"
        5: "Paper covers rock!"
        6: "The snake poisons the alien!"
        7: "The scissors decapitate the snake!"
        8: "The snake eats the paper!"
        9: "The alien vaporizes the rock!"
        10: "The alien smashes the scissors!"
        11: "Scissors cut paper!"
        12: "Game Over!"
    }
    var gameDict2 = {
        0: "Choose your weapon!"
        1: "You have the advantage!"
        2: "You're at disadvantage!"
        3: "Sudden death! What a nail biter!"
        4: "Click Home to reload or MyProfile to go back"
    }

    if (gameOver = true){
        document.getElementById('actDesc').innerHTML = gameDict1.12;
        document.getElementById('advCount').innerHTML = gameDict2.4;
        return
    }
    document.getElementById('actDesc').innerHTML = gameDict1.lotNum;
    document.getElementById('advCount').innerHTML = gameDict2.dict2Index;
}

function viewScreenChango(frame){
    var image = document.getElementById("");
    if (image.getAttribute('src') == "img/ProfilePic.png"){
        image.src = "img/JBFH.png"
    }
    else {
        image.src = "img/ProfilePic.png"
    }
}