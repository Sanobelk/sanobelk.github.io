let data = [0]; //storing the numbers entered here.
let temp; //current number
let display_number = ""; //number that is displayed on the output screen. 
let flag = 0; //operation flag.
let power_status = 0;
let memory_flag = 0;
let memory = 0;

let number_buttons = document.getElementsByClassName('number_button');
let equals_button = document.getElementById('button_equals');

    for(let i of number_buttons){ //when number buttons are clicked.
        i.addEventListener("click", function(){
            display_number += i.innerHTML; //add innerHTML of button to current number string.
            //display_number += temp;
            document.getElementById('calculator_output').innerHTML = display_number; //display's inner HMTL = string.
            temp = +display_number;
        })
    };

    //clears the screen 
    function update(){
        display_number = "";
        document.getElementById('calculator_output').innerHTML = display_number;
    };

    function add(){

        //if the previous operation was subtraction.
        if(flag == 2){
            data[0] = data[0]-=temp; //subtract  the data and the input.
            //after the final value, it will automatically add everything.

        }else if (flag == 3){ //if the last value was multiply
            data[0] *=temp;

        }else if (flag == 4){ //if the last value was divide
            data[0] /=temp;

        }else {
            data[0] = data[0]+=temp;
        }
        update();
        flag = 1;
    };

    function subtract(){
        if(data[0] == 0 && flag == 0){ //if no operation was performed, this implies we are using the first number as a base to subtract from.
            data[0] = temp;
  

        } else if (flag == 1){ //if addition was the previous input.
            data[0] = data[0]+=temp; //add the current data and temp together.

            flag = 2;//set the flag to 2 so we can subtract the final value.
        } else if (flag == 3){ //if multiplication was previous input
            data[0] *= temp;

        } else if (flag == 4){ //if divide was previous input
            data[0] /= temp;

        }else{  // subtracting the current data in array with the new temp. if data isn't present initially, it will automatically fill in the array with the first input.
            data[0] = data[0]-=temp;
   
        }
        update();
        flag = 2;
    };

    function multiply(){
        if(data[0] == 0 && flag == 0){ //if its the first input
            data[0] = 1;
            data[0] *= temp;
        } else if (flag == 1){ //if adding was previously done
            data[0] += temp;

        } else if (flag == 2){ //if subtracting was previously done
            data[0] -= temp;

        } else if (flag == 4){ //if dividing was previously done
            data[0] /= temp;

        } else if (memory != 0){
            data[0] = temp;
        }
        update();
        flag = 3;
    };

    function divide(){
        if(data[0] == 0 && flag == 0){ //if it's the first input
            data[0] = 1;
            data[0] *= temp;
 
        } else if (flag == 1){//if adding was previously done.
            data[0] += temp;

        } else if (flag == 2){ //if subtracting was previously done
            data[0] -= temp;
  

        } else if (flag == 3){ //if multiplication was previously done.
            data[0] *= temp;

        } else {
            data[0] /= temp;
        }
        update();
        flag = 4;
    };

    function equals(){  //takes the current data, temp, and flag, and calculates based on which flag is used. If there are multiple inputs, example : 3 - 5 x 2 / 6 , the functions will detect if a flag is left by another function, and update the data so it's ready for the final equal function.

        switch(flag){
            case 1:
            data[0] = data[0]+=temp;
            temp = null; //temp must be cleared, or it automatically adds data after. (press equal the first time, if not cleared, and user presses add again, temp is added before they even get to input another number.)
            break;

            case 2:
            data[0] = data[0]-=temp;
            temp = null;
            break;

            case 3:
            data[0] = data[0] *=temp;
            temp = null;
            break;

            case 4:
            data[0] /= temp;
            temp = null;
            break;

        };
        display_number = data[0];
        document.getElementById('calculator_output').innerHTML = display_number;
        flag = 0;
    };

function on_clear(){
    data = [0];
    temp; 
    display_number = ""; 
    flag = 0;
    memory = 0;
    memory_flag = 0;
    update();
};

function under_construction(){
    alert(`That feature is under construction! Try again later!`);
};

function memory_plus(){
    memory += +display_number;
    update();
};

function memory_minus(){
    memory -= +display_number;
    update();
}

function memory_clear(){
    if(memory_flag == 1){
        memory = 0;
        update();
        memory_flag = 0;
    };
    document.getElementById('calculator_output').innerHTML = memory;
    memory_flag = 1;
}