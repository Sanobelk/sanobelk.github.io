"use strict";

let win_count = 0;
let count_message = document.getElementById('count_message');

let result = '';
let result_message = document.getElementById('result_message');

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

let enemy = () => {
    return rps[(Math.floor(Math.random() *3))].name;
}

let compare = (player_choice, enemy_choice) =>{
    let player_image = document.getElementById('player-side-image');
    let opponent_image = document.getElementById('opponent-image')

    if(player_choice == 'Rock' && enemy_choice == 'Paper'){
        result_message.innerHTML = 'You Lose!';
        result_message.style.color = "red";
        player_image.style.border = "";
        opponent_image.style.border = "5px solid red";

    }else if(player_choice == 'Rock' && enemy_choice == 'Scissors'){
        result_message.innerHTML = 'You Win!';
        result_message.style.color = "green";
        count_message.innerHTML = ++win_count;
        player_image.style.border = "5px solid green";
        opponent_image.style.border = "";


    }else if(player_choice == 'Paper' && enemy_choice == 'Scissors'){
        result_message.innerHTML = 'You Lose!';
        result_message.style.color = "red";
        player_image.style.border = "";
        opponent_image.style.border = "5px solid red";

    }else if(player_choice == 'Paper' && enemy_choice == 'Rock'){
        result_message.innerHTML = 'You Win!';
        result_message.style.color = "green";
        count_message.innerHTML = ++win_count;
        player_image.style.border = "5px solid green";
        opponent_image.style.border = "";


    }else if(player_choice == 'Scissors' && enemy_choice == 'Rock'){
        result_message.innerHTML = 'You Lose!';
        result_message.style.color = "red";
        player_image.style.border = "";
        opponent_image.style.border = "5px solid red";

    }else if(player_choice == 'Scissors' && enemy_choice == 'Paper'){
        result_message.innerHTML = 'You Win!';
        result_message.style.color = "green";
        count_message.innerHTML = ++win_count;
        player_image.style.border = "5px solid green";
        opponent_image.style.border = "";

    }else{
        result_message.innerHTML = 'Tie!';
        result_message.style.color = "yellow";
        player_image.style.border = "5px solid yellow";
        opponent_image.style.border = "5px solid yellow";
    }
};

//let enemy_choice = rps[( Math.floor(Math.random() *3))];


let play = (text) => { //send clicked button text to function
    let player_choice = text;
    let enemy_choice = enemy();

    for(let i of rps){ //iterate through RPS array
        if(player_choice == i.name){ 
            document.getElementById('player-side-image').src=i.img;
        }
    }
    for(let i of rps){ //iterate through RPS array
        if(enemy_choice == i.name){ 
            document.getElementById('opponent-image').src=i.img;
        }
    }
    compare(player_choice, enemy_choice);
}

let buttons = document.getElementsByClassName('btn');

for(let i of buttons){
    i.addEventListener("click",function(){
    let text = i.innerHTML;
        play(text); //this is a call back!
    });
}