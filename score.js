// Iteration 8: Making scoreboard functional
const scoreboard=document.getElementById("score-board")

let play_again_button=document.getElementById("play-again-button")
scoreboard.innerText=localStorage.getItem("score")

play_again_button.addEventListener('click',()=>{
    localStorage.removeItem("score");
    localStorage.setItem("score",0);
    location.href="game.html";

})