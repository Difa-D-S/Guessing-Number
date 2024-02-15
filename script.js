// document.querySelector('.message').textContent = "Correct Number";

var secretNumber = Math.trunc(Math.random() * 20 + 1);

var displayScore = function(score){
    document.querySelector('.score').textContent = score;
}

let score = 20;
displayScore(score);

// var displayScore = function(score){
//     document.querySelector('.score').textContent = score;
// }


let highScore = 0;
document.querySelector('.highscore').textContent = highScore;

var displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener("click", function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    
    if(!guess){
        displayMessage("⛔ No answer");
    }
    else if(guess === secretNumber){
        
        displayMessage("✅ Correct Answer");
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.question').style.width = "150px";
        document.querySelector('.question').textContent = secretNumber;
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
            }
    }

    else if(guess !== secretNumber){
        displayMessage(guess > secretNumber ? "Too High" : "Too Low");
        
        if(score > 1){
            score--;
            displayScore(score);
        }
        else{
            displayMessage("Game OVer");
            displayScore(0);
        }
    }
            // else if(guess > secretNumber){
            //     if(score > 1){
            //         document.querySelector('.message').textContent = "Too High";
            //         score--;
            //         document.querySelector('.score').textContent = score;
            //     }
            //     else{
            //         document.querySelector('.message').textContent = "Game Over";
            //         document.querySelector('.score').textContent = 0;
            //     }
            // }
            // else if(guess < secretNumber){
            //     if(score > 1){
            //         document.querySelector('.message').textContent = "Too Low";
            //         score--;
            //         document.querySelector('.score').textContent = score;
            //     }
            //     else{
            //         document.querySelector('.message').textContent = "Game Over";
            //         document.querySelector('.score').textContent = 0;
            //     }
            // }
});

document.querySelector('.again').addEventListener("click", function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    displayMessage("Start guessing...");
    displayScore(score);
    document.querySelector('body').style.backgroundColor = "black";
    document.querySelector('.question').textContent = "?";
    document.querySelector('.question').style.width = "100px";
    document.querySelector('.guess').value = " ";
});