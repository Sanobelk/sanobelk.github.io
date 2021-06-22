"use strict";

let win_count = 0;
let count_message = document.getElementById('count_message');

let result = '';
let result_message = document.getElementById('result_message');

let games_played = 0;
let games_message = document.getElementById('games_message');

let win_percent = 0;
let win_percent_message = document.getElementById('win-percent-result');

let player_image = document.getElementById('player-side-image');
let opponent_image = document.getElementById('opponent-image');

let buttons = document.getElementsByClassName('btn');
let reset = document.getElementById('reset-btn');
let winRate = document.getElementById('win-percent-btn');

/* ROCK PAPER SCISSOR OBJECTS */

let rock = {
    name : 'Rock',
    img : 'rock.jpg',
};

let paper = {
    name : 'Paper',
    img : 'paper.jpg',
};

let scissor = {
    name : 'Scissors',
    img : 'scissors.jpg',
};


/* ROCK PAPER SCISSOR ARRAY */
let rps = [rock, paper, scissor];

/*ROCK PAPER SCISSOR BUTTONS*/

for(let i of buttons){
    i.addEventListener("click",function(){
    let text = i.innerHTML;
        play(text);
    });
}

/*Calculate Enemy Choice*/

let enemy = () => {
    return rps[(Math.floor(Math.random() *3))].name;
}

/* Game Conditions */

let playerWin = (player_image, opponent_image) => {
    ++games_played;
    games_message.innerHTML = games_played;
    result_message.innerHTML = 'You Win!';
    result_message.style.color = "green";
    count_message.innerHTML = ++win_count;
    player_image.style.border = "5px solid green";
    opponent_image.style.border = "";
};

let playerLose = (player_image, opponent_image) => {
    ++games_played;
    games_message.innerHTML = games_played;
    result_message.innerHTML = 'You Lose!';
    result_message.style.color = "red";
    player_image.style.border = "";
    opponent_image.style.border = "5px solid red";
};

let playerTie = (player_image, opponent_image) => {
    ++games_played;
    games_message.innerHTML = games_played;
    result_message.innerHTML = 'Tie!';
    result_message.style.color = "yellow";
    player_image.style.border = "5px solid yellow";
    opponent_image.style.border = "5px solid yellow";
};

/*Compare Player Choice and Enemy Choice */

let compare = (player_choice, enemy_choice) =>{
    let player_image = document.getElementById('player-side-image');
    let opponent_image = document.getElementById('opponent-image');

    if(player_choice == 'Rock' && enemy_choice == 'Paper'){
        playerLose(player_image, opponent_image);

    }else if(player_choice == 'Rock' && enemy_choice == 'Scissors'){
        playerWin(player_image, opponent_image);


    }else if(player_choice == 'Paper' && enemy_choice == 'Scissors'){
        playerLose(player_image, opponent_image);

    }else if(player_choice == 'Paper' && enemy_choice == 'Rock'){
        playerWin(player_image, opponent_image);


    }else if(player_choice == 'Scissors' && enemy_choice == 'Rock'){
        playerLose(player_image, opponent_image);

    }else if(player_choice == 'Scissors' && enemy_choice == 'Paper'){
        playerWin(player_image, opponent_image);

    }else{
        playerTie(player_image, opponent_image);
    }
};

/*Automatically Activates when Rock/Paper/Scissors is Clicked*/

let play = (text) => { //send clicked button text to function
    let player_choice = text;
    let enemy_choice = enemy();

    for(let i of rps){ //iterate through RPS array to select the image associated
        if(player_choice == i.name){ 
            document.getElementById('player-side-image').src=i.img;
        }
    }
    for(let i of rps){ // iterate through RPS array to select the image associated
        if(enemy_choice == i.name){ 
            document.getElementById('opponent-image').src=i.img;
        }
    }
    compare(player_choice, enemy_choice); //compare player vs enemy
}

/*Reset Button*/


reset.addEventListener("click",function(){
    win_count = 0;
    win_percent = 0;
    games_played = 0;
    count_message.innerHTML = win_count;
    result_message.innerHTML = '';
    games_message.innerHTML = games_played;
    win_percent_message.innerHTML = '';
    player_image.src="";
    player_image.style.border="5px solid black";
    opponent_image.src="";
    opponent_image.style.border="5px solid black";
    alert('Stats have been reset.');

});

/*Win Rate Calculator Button*/

winRate.addEventListener("click",function(){
    win_percent = win_count/games_played;
    if(isNaN(win_percent)){
        alert('You haven`t played any games yet!');
    }else{
    alert(`You've won ${(win_percent * 100).toFixed(0)}% of the time.`)
    }
});

