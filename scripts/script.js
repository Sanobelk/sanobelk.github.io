"use strict";

let screen_height = screen.height;
let screen_width = screen.width;

/* Bottom Right Task-bar Real Time*/

let taskBarClock = document.getElementById('taskbar-time');

setInterval(() =>{
    let d = new Date();
    taskBarClock.innerHTML = d.toLocaleTimeString();
},1000);


const startButton = document.querySelector('nav');

/*Show the Menu after clicking start*/

startButton.addEventListener('click',function()
{
    menuToggle();
});


function menuToggle(){
    let menu =  document.getElementById('start-menu-container');
    menu.classList.toggle('hidden');
    startButton.classList.toggle('menu-active');
    startButton.classList.toggle('menu-inactive');
    menu.style.zIndex = '100';
}

function playPop(){
    let audio = new Audio('/sounds/xp_pop.wav');
    audio.volume = 1;
    audio.play();
    startButton.classList.toggle('menu-inactive');
};


///////////////////////*Menu Buttons*///////////////////////


/*About Button*/

let menu_about_button = document.getElementById('about-button');

/*Default Values*/

menu_about_button.addEventListener('click',function(){

    let container = document.getElementById('about-container');
    container.classList.toggle('hidden');
    document.getElementById('start-menu-container').classList.toggle('hidden');
    playPop();


});


/*My Work Button*/

let menu_mywork_button = document.getElementById('mywork-button');

menu_mywork_button.addEventListener('click',function(){
    let container = document.getElementById('mywork-container');
    container.classList.toggle('hidden');
    document.getElementById('start-menu-container').classList.toggle('hidden');
    playPop();
});

/*Resume Button*/

let menu_resume_button = document.getElementById('myresume-button');

menu_resume_button.addEventListener('click',function(){
    playPop();
    menuToggle();
    if(confirm('Redirecting to Google Document. Continue?')){
        window.open('http://google.com','_blank');
    };
});

/*Resources Button*/ 

let resources_button = document.getElementById('resources-button');

resources_button.addEventListener('click',function(){
    let container = document.getElementById('resources-container');
    container.classList.toggle('hidden');
    document.getElementById('start-menu-container').classList.toggle('hidden');
    playPop();
});


/*Github Button */

/*Contact Button */ 



///////////////////////*About Window*///////////////////////


/*Close Button*/

const about_close_button = document.getElementById('about_close_button');

about_close_button.addEventListener('click',function(){
    let container = document.getElementById('about-container');
    container.classList.toggle('hidden');
});

/*Maximize Button*/

const about_maximize_button = document.getElementById('about_maximize_button');


about_maximize_button.addEventListener('click',function(){


    let container = document.getElementById('about-container');
    let content = document.getElementById('about-content');

    if(screen_width >= 320 && screen_width < 720){ //if screen is iphone sized
        if(container.classList.contains('window-max')){ //if about is maxed
            container.style.width = '98%';
            container.style.height = '50%';
            container.style.top = 0 + 'px';
            container.style.left = 0 + 'px';
            container.classList.remove('window-max');
            content.style.overflowY = 'scroll';
            content.style.height = '80%';
        }else{ //if it's not , max it out.
            content.style.overflowY = 'scroll';
            content.style.height = '90%';
            container.style.left = 0;
            container.style.bottom = 0;
            container.style.width = '98%';
            container.style.height = '90%';
            container.style.zIndex = -100;
            container.classList.add('window-max');
            container.querySelector('.desktop-window-topbar ul').style.height=30 + 'px';
        }
    };

    if(screen_width >= 720){
        if(container.classList.contains('window-max')){ //if window is maximized already

            container.style.left = 500 + 'px'; //500
            container.style.bottom = 300 + 'px'; //300
            container.style.width = 600 + 'px'; //600
            container.style.height =  600 + 'px'; //600
            container.style.top= '';
            container.querySelector('.desktop-window-topbar ul').style.height='';
            container.classList.remove('window-max');
            content.style.overflowY = 'scroll';

        }else{ //if it's not.
            container.style.left = 0;
            container.style.top= 0;
            container.style.width = '100%';
            container.style.height = '94%';
            container.style.zIndex = -100;
            content.style.height = '90%';
            container.classList.add('window-max');
            container.querySelector('.desktop-window-topbar ul').style.height=30 + 'px';
        }
    }
});


///////////////////////*My Work*///////////////////////


/*Close Button*/
const mywork_close_button = document.getElementById('mywork_close_button');
mywork_close_button.addEventListener('click',function(){
    let container = document.getElementById('mywork-container');
    container.classList.toggle('hidden');
});

/*Maximize Button*/ 

const mywork_maximize_button = document.getElementById('mywork_maximize_button');

mywork_maximize_button.addEventListener('click',function(){


    let container = document.getElementById('mywork-container');
    let content = document.getElementById('mywork-content');

    if(screen_width >= 320 && screen_width < 720){ //if screen is iphone sized
        if(container.classList.contains('window-max')){ //if about is maxed
            container.style.position='absolute';
            container.style.width = '98%';
            container.style.height = '50%';
            container.style.top = 180 + 'px';
            container.style.left = 0 + 'px';
            container.classList.remove('window-max');
            content.style.overflowY = 'scroll';
            content.style.height = '80%';
        }else{ //if it's not , max it out.
            content.style.overflowY = 'scroll';
            content.style.height = '90%';
            container.style.left = 0;
            container.style.top = 0;
            container.style.width = '98%';
            container.style.height = '90%';
            container.style.zIndex = -100;
            container.classList.add('window-max');
            container.querySelector('.desktop-window-topbar ul').style.height=30 + 'px';
        }
    };

    if(screen.width >= 720){
        if(container.classList.contains('window-max')){ //if screen is maximied already
            container.style.left = 100 + 'px';
            container.style.bottom = 200 + 'px';
            container.style.width = 900 + 'px';
            container.style.height =  600 + 'px';
            container.style.top= '';
            container.querySelector('.desktop-window-topbar ul').style.height='';
            container.classList.remove('window-max');
            content.style.height = '';
        }else{
            container.style.left = 0;
            container.style.top = 0;
            container.style.width = '100%';
            container.style.height = '94%';
            container.style.zIndex = -100;
            content.style.height = '90%';
            container.classList.add('window-max');
            container.querySelector('.desktop-window-topbar ul').style.height=30 + 'px';
        }
    }
});







///////////////////////*RESOURCES*///////////////////////


/*Close Button*/
const resources_close_button = document.getElementById('resources_close_button');

resources_close_button.addEventListener('click',function(){
    let container = document.getElementById('resources-container');
    container.classList.toggle('hidden');
});


/*Maximize Button*/ 

const resources_maximize_button = document.getElementById('resources_maximize_button');

resources_maximize_button.addEventListener('click',function(){


    let container = document.getElementById('resources-container');
    let content = document.getElementById('resources-content');

    if(screen_width >= 320 && screen_width < 720){ //if screen is iphone sized
        if(container.classList.contains('window-max')){ //if about is maxed
            container.style.position='absolute';
            container.style.width = '98%';
            container.style.height = '50%';
            container.style.top = 50 + 'px';
            container.style.left = 0 + 'px';
            container.style.top= '';
            container.classList.remove('window-max');
            content.style.overflowY = 'scroll';
            content.style.height = '80%';
        }else{ //if it's not , max it out.
            content.style.overflowY = 'scroll';
            content.style.height = '80%';
            container.style.left = 0;
            container.style.top = 0;
            container.style.width = '98%';
            container.style.height = '90%';
            container.style.zIndex = -100;
            container.classList.add('window-max');
            container.querySelector('.desktop-window-topbar ul').style.height=30 + 'px';
        }
    };


    /*  


        position:absolute;
    width: 900px;
    height:600px;
    bottom:100px;
    left:700px;
    background-color:white;

    */


    if(screen.width >= 720){
        if(container.classList.contains('window-max')){ //if screen is maximied already
            container.style.left = 700 + 'px';
            container.style.bottom = 100 + 'px';
            container.style.width = 900 + 'px';
            container.style.height =  600 + 'px';
            container.querySelector('.desktop-window-topbar ul').style.height='';
            container.classList.remove('window-max');
            content.style.height = '';
            container.style.top= '';
        }else{
            container.style.left = 0;
            container.style.top = 0;
            container.style.width = '100%';
            container.style.height = '94%';
            container.style.zIndex = -100;
            content.style.height = '90%';
            container.classList.add('window-max');
            container.querySelector('.desktop-window-topbar ul').style.height=30 + 'px';
        }
    }
});

/*Login Home Screen*/


/*  

 </div>
                <div id="login-middle-right">
                    <p>Please Login</p>
                    <input type="text" id="username" placeholder=""><br>
                    <input type="text" id="password" placeholder="">
                    <button value="enter" id="login_button">Enter</button>
                </div>
            </div>





/*Login Function*/ 

let login_username = document.getElementById('username')
let login_password = document.getElementById('password')
let login_submit = document.getElementById('login_button');

//set these to change user and password to login
let username = 'admin';
let password = 'password';

let taskbar = document.querySelector('header');

let msg_pop_up = document.getElementById('message-pop-up');

login_submit.addEventListener('click',function(){
    if(login_username.value == username && login_password.value == password){
        let login_audio = new Audio("/sounds/login_sound.mp3");
        login_audio.volume = 1;
        login_audio.play();

        login_username.disabled=true;
        login_password.disabled=true;
        login_submit.disabled=true;
        document.getElementById('login-message').innerHTML = 'Logging In...';
        setTimeout(() =>{
            document.getElementById('logon_screen').style.display='none';
        },2000); //2000
        setTimeout(()=>{
            taskbar.style.display='flex';
        },4000); //4000

        setTimeout(()=>{
            msg_pop_up.classList.toggle('hidden'); //pops up
            let audio = new Audio('/sounds/xp_pop.wav');
            audio.volume = 1;
            audio.play();
            setTimeout(()=>{ //goes away
                msg_pop_up.classList.toggle('hidden');
            },7000);
        },7000);

    }else{
        login_username.style.border='2px solid red';
        login_password.style.border='2px solid red';
        alert('Incorrect Credentials.');
        
    }
});

/*Log Out from Menu */ 

const logout_button = document.getElementById('logoff-button');

logout_button.addEventListener('click',function(){
    document.getElementById('logon_screen').style.display='grid';
    let logoff_audio = new Audio('/sounds/logoff_sound.mp3');
    let menu =  document.getElementById('start-menu-container');
    menu.classList.toggle('hidden');
    logoff_audio.volume = 1;
    logoff_audio.play();
    setTimeout(()=>{
    login_username.disabled=false;
    login_password.disabled=false;
    login_submit.disabled=false;
    z_index_count = 0;
    document.getElementById('login-message').innerHTML = 'Please Login';
    },3000)

    document.getElementById('login-message').innerHTML = 'Logging out...';
});


/*Getting Windows to Pop Up to front when clicked */

let desktop_windows = document.getElementsByClassName('desktop-window');
let z_index_count = 0;

for(let i of desktop_windows){
    i.addEventListener('click',function(){
        z_index_count++;
        i.style.zIndex = z_index_count;
    });
};


/*Cute cat Image*/

let cat_image = document.getElementById('desktop-cat-picture-container');


/* Doubleclick Cat Image*/
let cat_image_click_amt = 0; //default cat image click = 0;
cat_image.addEventListener('click',function(){
    cat_image_click_amt++; //when clicked, increment
    if(cat_image_click_amt == 1){ //if cat click == 1
        cat_image.querySelector('p').style.background='darkblue'; //change background to replicate highlighted content
        setTimeout(() =>{ //immediately set timeout that lasts 300 ms
            if(cat_image_click_amt == 2){
                 //if user clicks again within that time display image.
                document.getElementById('cat-image-container').classList.toggle('hidden');
                cat_image_click_amt = 0; //reset click amt
                cat_image.querySelector('p').style.background=''; //hide background color
            }else{
                cat_image_click_amt = 0; //if not clicked in  time, click back to 0, and the background color remains dark blue as if it's still selected.
            }
        },300);

    }
});


/*Cat Maximize*/


const cat_maximize_button = document.getElementById('cat_maximize_button');

cat_maximize_button.addEventListener('click',function(){


    let container = document.getElementById('cat-image-container');
    let content = document.getElementById('cat-content-image');

    if(container.classList.contains('window-max')){//minimizing back to normal size
        container.style.left = 50 + 'px';
        container.style.top= 50 + 'px';
        container.style.width = 600 + 'px';
        container.style.height =  433 + 'px';
        container.querySelector('.desktop-window-topbar ul').style.height='';
        content.style.height='auto';
        content.style.width='100%';
        container.classList.remove('window-max');

    }else{
        container.style.left = 0;
        container.style.top = 0;
        container.style.width = '100%';
        container.style.height = '90%';
        container.style.zIndex = -99;
        content.style.width = '100%';
        content.style.height = '100%';
        
    container.classList.add('window-max');
    container.querySelector('.desktop-window-topbar ul').style.height=30 + 'px';
    }
});

/*Cat Close Button*/

const cat_close_button = document.getElementById('cat_close_button');

cat_close_button.addEventListener('click',function(){
    let container = document.getElementById('cat-image-container');
    container.classList.toggle('hidden');
});







//background-color:darkblue;