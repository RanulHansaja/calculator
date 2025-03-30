function fn0(){
    let display = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML = display + 0;
}
function fn1(){
    let display = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML = display + 1;
}
function fn2(){
    let display = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML = display + 2;
}
function fn3(){
    let display = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML = display + 3;
}
function fn4(){
    let display = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML = display + 4;
}
function fn5(){
    let display = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML = display + 5;
}
function fn6(){
    let display = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML = display + 6;
}
function fn7(){
    let display = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML = display + 7;
}
function fn8(){
    let display = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML = display + 8;
}
function fn9(){
    let display = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML = display + 9;
}
function fdot(){
    let display = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML = display + '.' ;
}

function feraser(){
    let display = document.getElementById("Display").innerHTML;
    let eraser  = display.slice(0, -1);
    document.getElementById("Display").innerHTML = eraser;
}

let result;
let first_save;
let second_save;

function faddition(){
    first_save = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML = '';
    op = 1;
}
function fsubtraction(){
    first_save = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML = '';
    op = 2;
}
function fmultification(){
    first_save = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML = '';
    op = 3;
}
function fdivition(){
    first_save = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML = '';
    op = 4;
}
function fmodual(){
    first_save = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML = '';
    op = 5;
}

function fequal(){
    second_save =  document.getElementById("Display").innerHTML ;
    if(op == 1){
        document.getElementById("Display").innerHTML = (parseFloat(first_save) + parseFloat(second_save)).toFixed(2);
    }
    if(op == 2){
        document.getElementById("Display").innerHTML = (parseFloat(first_save) - parseFloat(second_save)).toFixed(2);
    }
    if(op == 3){
        document.getElementById("Display").innerHTML = (parseFloat(first_save) * parseFloat(second_save)).toFixed(2);
    }
    if(op == 4){
        document.getElementById("Display").innerHTML = (parseFloat(first_save) / parseFloat(second_save)).toFixed(2);
    }
    if(op == 5){
        document.getElementById("Display").innerHTML = parseFloat(first_save) % parseFloat(second_save);
    }
}

function fAC(){
    document.getElementById("Display").innerHTML = '';
}