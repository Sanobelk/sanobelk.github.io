"use strict";

const menu_button = document.getElementById("menu_icon");

menu_button.addEventListener("click",function(){ //click on the button
    let nav_bar = document.querySelector('nav');
    let menu_selection = document.querySelector('.top_menu_selection');
    let menu_text = document.getElementById('menu_text');
    if(menu_selection.style.display == "block"){ //if the menu_selection display style is block
        nav_bar.style.height="50px"; //lessen the height on the nav_bar
        menu_selection.style.display="none"; //hide the URLS
        menu_text.style.display="block";
        document.querySelector('html').style.overflow="visible";
        document.querySelector('html').style.position="static";

    }else{ //if the menu_selection display style is none (by default)
        nav_bar.style.height="100vh"; //extend
        menu_selection.style.display="block"; //display the URLS
        menu_text.style.display="none";
        document.querySelector('html').style.overflow="hidden";
        document.querySelector('html').style.position="fixed";
    }
})