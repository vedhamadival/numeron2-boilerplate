// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var num1=document.getElementById("number1");
var num2=document.getElementById("number2");
var num3=document.getElementById("number3");
var buttons=document.getElementById("buttons");

var ran1;
var ran2;
var ran3;

function getRandomNumber(){
    return Math.floor(Math.random()*100)+1
}

buttons.addEventListener('click',(e)=>{
    arithmetic(e.target.id);
})

function displayRandomnumber(){
    ran1=getRandomNumber();
    ran2=getRandomNumber();
    ran3=updateanswer(ran1,ran2);
    num1.innerText=ran1;
    num2.innerText=ran2;
    num3.innerText=ran3;
}

displayRandomnumber();

var operation;

function updateanswer(ran1,ran2){
let operators=["+","-","*","/","%"]
let ans=0;
operation=operators[Math.floor(Math.random()*5)]
if(operation=="+"){
    ans=ran1+ran2;
}
else if(operation=="-"){
    ans=ran1-ran2;
}
else if(operation=="*"){
    ans=ran1*ran2;
}
else if(operation=="/"){
    ans=Math.floor(ran1/ran2);
}
else if(operation=="%"){
    ans=ran1%ran2;
}
return ans

}

let score = 0;

function arithmetic(i){
    if(i=="plus" && operation=="+" || i=="minus" && operation=="-" ||i=="mul" && operation=="*"||i=="divide" && operation=="/"|| i=="modulus" && operation=="%"){
        time=20
        score++
        localStorage.setItem("score",score);
        displayRandomnumber();
    }
    else{
        gameover();
    }
}

let time=20;
var timer=document.getElementById("timer");


function setTimer(){
    timer.textContent=time;
    time--
    if(time==0){
        gameover();
    }
}
setInterval(setTimer,1000)

function gameover(){
    window.location.href="gameover.html";
}


// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional
